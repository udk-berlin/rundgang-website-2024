import { useCallback, useMemo, useEffect, useState } from 'react';
import type { MapRef } from 'react-map-gl/maplibre';
import { Context } from '@/types/graphql';
import useQuery from '@/lib/useQuery';
import { MapLayerMouseEvent } from 'maplibre-gl';
import { useDebounce } from '@/lib/useDebounce';

type MarkerType = { [index: string]: { scale: number; size: number } };

const useMapFunctions = (
  mapRef: MapRef,
  locations: GeoJSON.FeatureCollection,
  size: { width: any; height?: number },
) => {
  const { changeParameter, value } = useQuery('location');
  const [hovered, setHovered] = useState<Context | null>(null);
  const [zoom, setZoom] = useState<number>(0);
  const [markers, setMarkers] = useState<MarkerType>({});
  const debouncedZoom = useDebounce(zoom, 500);

  const boundingBoxFeature = useMemo(() => {
    return (
      locations?.features?.find(
        (f: GeoJSON.Feature) => value == f?.properties?.id,
      ) || null
    );
  }, [locations, value]);

  useEffect(() => {
    const newMarkers = locations?.features?.reduce((newM, el) => {
      const scale = debouncedZoom - el.properties.maxZoom;
      let marker = {
        scale: el.id in markers ? markers[el.id].scale : scale,
        size: 40,
      };
      if (scale !== marker.scale && scale > 0) {
        marker.size = 40 * 2 ** scale;
      }
      return { ...newM, [el.id]: marker };
    }, {});
    setMarkers(newMarkers);
  }, [locations, debouncedZoom, mapRef]);

  useEffect(() => {
    if (mapRef?.current) {
      if (!boundingBoxFeature) {
        setHovered(null);
      }
    }
  }, [boundingBoxFeature, mapRef]);

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
    [mapRef],
  );

  const onZoom = () => {
    let zoom = mapRef?.current.getZoom();
    setZoom(zoom);
  };

  return {
    hovered,
    markers,
    onMouseMove,
    onMouseLeave,
    onZoom,
  };
};

export default useMapFunctions;
