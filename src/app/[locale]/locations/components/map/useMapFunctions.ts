import {
  useCallback,
  useMemo,
  useEffect,
  useState,
  useTransition,
} from 'react';
import type { MapRef } from 'react-map-gl/maplibre';
import { Context } from '@/types/graphql';
import { MapLayerMouseEvent } from 'maplibre-gl';
import { useDebounce } from '@/lib/useDebounce';
import { useRouter } from '@/navigation';
import { useParams } from 'next/navigation';
import bbox from '@turf/bbox';

type MarkerType = { [index: string]: { scale: number; size: number } };

const useMapFunctions = (
  mapRef: MapRef,
  locations: GeoJSON.FeatureCollection,
  size: { width: any; height?: number },
) => {
  const router = useRouter();
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const place = decodeURIComponent(params.place);
  const [hovered, setHovered] = useState<Context | null>(null);
  const [zoom, setZoom] = useState<number>(0);
  const [markers, setMarkers] = useState<MarkerType>({});
  const debouncedZoom = useDebounce(zoom, 500);

  const boundingBoxFeature = useMemo(() => {
    return (
      locations?.features?.find(
        (f: GeoJSON.Feature) => place == f?.properties?.id,
      ) || null
    );
  }, [locations, place]);

  useEffect(() => {
    if (mapRef?.current) {
      let visibles = mapRef?.current.querySourceFeatures('buildings');
      const existingIds = visibles.filter((v) => !v.properties.cluster);
      const newMarkers = existingIds.reduce((newM, el) => {
        const scale = debouncedZoom - el.properties.maxZoom;
        let marker = {
          scale:
            el.properties.id in markers
              ? markers[el.properties.id].scale
              : scale,
          size: 40,
        };
        if (scale !== marker.scale && scale > 0) {
          marker.size = 40 * 2 ** scale;
        }
        return { ...newM, [el.properties.id]: marker };
      }, {});
      setMarkers(newMarkers);
    }
  }, [locations, debouncedZoom, mapRef?.current]);

  const focusMap = useCallback(
    (targetBoundingBox) => {
      if (mapRef?.current) {
        let padding = {
          right: size?.width <= 700 ? 0 : 1,
          top: 0,
          left: 0,
          bottom: 0,
        };
        let maxZoom = 11.4;
        let coords = [13.45, 52.5, 13.45, 52.5];

        if (targetBoundingBox) {
          padding.right =
            size?.width <= 700 ? 0 : padding.right * size.width * 0.4;
          padding.left = 0;
          padding.bottom = size?.width <= 700 ? 0 : 400;
          padding.top = 0;
          maxZoom = targetBoundingBox.properties.maxZoom;
          coords = bbox(targetBoundingBox);
        }
        mapRef.current.fitBounds(coords, {
          padding: padding,
          maxZoom: maxZoom,
          linear: true,
        });
      }
    },
    [size?.width, mapRef?.current],
  );

  useEffect(() => {
    if (mapRef?.current) {
      focusMap(boundingBoxFeature);
      if (!boundingBoxFeature) {
        setHovered(null);
      }
    }
  }, [boundingBoxFeature, mapRef?.current, place, focusMap]);

  const onMouseMove = useCallback(
    (e: MapLayerMouseEvent) => {
      if (e.features && e.features.length > 0) {
        const feature = e?.features?.[0];
        if (hovered && hovered.id !== feature.id) {
          mapRef?.current?.setFeatureState(
            { source: hovered.source, id: hovered.id },
            { hover: false },
          );
        }
        if (feature) {
          mapRef?.current?.setFeatureState(
            { source: feature.source, id: feature.id },
            { hover: true },
          );
          if (!feature?.properties?.cluster) {
            setHovered({
              source: feature.source,
              id: feature.id,
              props: feature.properties,
              coords: feature.geometry.coordinates,
            });
          }
        }
      }
    },
    [mapRef, hovered],
  );

  const onClick = useCallback(
    (e) => {
      const feature = e?.features?.[0];
      if (feature) {
        if (!feature.properties.cluster) {
          const { id } = feature?.properties;
          router.push({
            pathname: '/locations/[place]',
            params: { place: id },
          });
          mapRef?.current?.easeTo({
            center: feature.geometry.coordinates,
            zoom: feature.properties.maxZoom - 1,
          });
        } else {
          mapRef?.current
            ?.getSource('buildings')
            .getClusterExpansionZoom(feature.properties.cluster_id)
            .then((zoom) => {
              mapRef?.current?.easeTo({
                center: feature.geometry.coordinates,
                zoom,
              });
            });
        }
      }
    },
    [mapRef, router],
  );

  const onMouseLeave = useCallback(
    (e: MapLayerMouseEvent) => {
      if (e.features && e.features.length > 0) {
        const feature = e?.features?.[0];
        if (feature) {
          mapRef?.current?.setFeatureState(
            { source: feature.source, id: feature.id },
            { hover: false },
          );
        }
        setHovered(null);
      }
    },
    [mapRef?.current],
  );

  const onZoom = (e) => {
    let zoom = mapRef?.current.getZoom();
    setZoom(zoom);
  };

  return {
    hovered,
    markers,
    onMouseMove,
    onMouseLeave,
    onClick,
    onZoom,
  };
};

export default useMapFunctions;
