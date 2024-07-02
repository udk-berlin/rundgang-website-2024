/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo, useEffect, useState, RefObject } from 'react';
import { useMap } from 'react-map-gl/maplibre';
import { Context } from '@/types/graphql';
import { MapLayerMouseEvent, MapLibreZoomEvent } from 'maplibre-gl';
import { useDebounce } from '@/lib/useDebounce';
import { useRouter } from '@/navigation';
import { bbox } from '@turf/bbox';
import { Building } from '@/types/types';

const MOBILE_WIDTH = 1000;

type MarkerType = { [index: string]: { scale: number; size: number } };

const useMapFunctions = (
  selectedBuilding: string | null,
  locations: GeoJSON.FeatureCollection<GeoJSON.Point, Building>,
  size: { width: any; height?: number },
) => {
  const { rundgangMap } = useMap();

  const router = useRouter();
  const [hovered, setHovered] = useState<Context | null>(null);
  const [zoom, setZoom] = useState<number>(0);
  const [markers, setMarkers] = useState<MarkerType>({});
  const boundingBoxFeature = useMemo(() => {
    return (
      locations?.features?.find(
        (f: GeoJSON.Feature) => selectedBuilding == f?.properties?.id,
      ) || null
    );
  }, [locations, selectedBuilding]);
  const debouncedZoom = useDebounce(zoom, 400);

  useEffect(() => {
    if (rundgangMap) {
      let visibles = rundgangMap.querySourceFeatures('buildings');
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
  }, [locations, debouncedZoom, rundgangMap]);

  const focusMap = useCallback(
    (targetBoundingBox: GeoJSON.Feature<GeoJSON.Point, Building>) => {
      if (rundgangMap) {
        let padding = {
          right: 0,
          top: 0,
          left: 0,
          bottom: 0,
        };
        let maxZoom = size?.width > MOBILE_WIDTH ? 11.4 : 9.1;
        let coords = bbox({
          type: 'Point',
          coordinates: [13.45, 52.5],
        });

        if (targetBoundingBox) {
          padding.right =
            size?.width <= MOBILE_WIDTH ? 0 : padding.right * size.width * 0.4;
          padding.left = 0;
          padding.bottom = size?.width <= MOBILE_WIDTH ? 0 : 400;
          padding.top = 0;
          maxZoom = targetBoundingBox.properties.maxZoom;
          coords = bbox(targetBoundingBox);
        }
        rundgangMap.fitBounds(coords, {
          padding: padding,
          maxZoom: maxZoom,
          linear: true,
        });
      }
    },
    [size?.width, rundgangMap],
  );

  useEffect(() => {
    focusMap(boundingBoxFeature);
    if (!boundingBoxFeature) {
      setHovered(null);
    }
  }, [boundingBoxFeature, size?.width, rundgangMap]);

  const onMouseMove = useCallback(
    (e: MapLayerMouseEvent) => {
      if (e.features && e.features.length > 0) {
        const feature = e?.features?.[0];
        if (hovered && hovered.id !== feature.id) {
          rundgangMap?.setFeatureState(
            { source: hovered.source, id: hovered.id },
            { hover: false },
          );
          setHovered(null);
        }
        if (feature) {
          rundgangMap?.setFeatureState(
            { source: feature.source, id: feature.id },
            { hover: true },
          );
          setHovered({
            source: feature.source,
            id: feature.id,
          });
        }
      }
    },
    [hovered, rundgangMap],
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
        } else {
          rundgangMap
            ?.getSource('buildings')
            .getClusterExpansionZoom(feature.properties.cluster_id)
            .then((zoom) => {
              rundgangMap?.easeTo({
                center: feature.geometry.coordinates,
                zoom,
              });
            });
        }
      }
    },
    [router, rundgangMap],
  );

  const onMouseLeave = useCallback(
    (e: MapLayerMouseEvent) => {
      if (e.features && e.features.length > 0) {
        const feature = e?.features?.[0];
        if (feature) {
          rundgangMap?.setFeatureState(
            { source: feature.source, id: feature.id },
            { hover: false },
          );
          setHovered(null);
        }
      }
    },
    [rundgangMap],
  );

  const onZoom = (e: MapLibreZoomEvent & { viewState: { zoom: number } }) => {
    setZoom(e.viewState.zoom);
  };

  return {
    markers,
    onMouseMove,
    onMouseLeave,
    onClick,
    onZoom,
    focusMap,
  };
};

export default useMapFunctions;
