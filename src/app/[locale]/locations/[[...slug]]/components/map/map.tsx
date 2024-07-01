'use client';

import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useParams, useSearchParams } from 'next/navigation';
import { useMemo, useRef } from 'react';
import type { MapRef } from 'react-map-gl/maplibre';
import Map, {
  AttributionControl,
  Layer,
  NavigationControl,
  Source,
} from 'react-map-gl/maplibre';

import { useWindowSize } from '@/lib/useMedia';
import FloorMapMarker from './FloorMapMarker';
import useMapFunctions from './useMapFunctions';
import { Building, LocationItem } from '@/types/types';

export type MapComponentProps = {
  buildings: GeoJSON.FeatureCollection<GeoJSON.Point, Building>;
  location: LocationItem | null;
};

const MAP_CONFIGURATION = {
  style: 'https://osm.udk-berlin.de/styles/udk-rundgang-2024/style.json',
  center: {
    longitude: 13.45,
    latitude: 52.5,
  },
};

const MapComponent = ({ buildings, location }: MapComponentProps) => {
  const place = useMemo(() => (location ? location?.id : null), [location]);
  const size = useWindowSize();

  const { markers, onClick, onMouseMove, onMouseLeave, onZoom } =
    useMapFunctions(place, buildings, size);
  return (
    <div className="h-full w-full ">
      <div className="pointer-events-auto z-0 h-[60dvh] w-full rounded-md px-border sm:fixed sm:top-header sm:h-content dark:invert">
        <Map
          id="rundgangMap"
          reuseMaps
          interactiveLayerIds={
            buildings
              ? [
                  'clusters',
                  'buildings',
                  'unclustered-point',
                  'clustered-point',
                ]
              : []
          }
          mapLib={maplibregl}
          style={{
            zIndex: 100,
            width: '100%',
          }}
          mapStyle={MAP_CONFIGURATION.style}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          onZoom={onZoom}
          onClick={onClick}
          attributionControl={false}
          renderWorldCopies={false}
          pitchWithRotate={false}
          dragRotate={false}
        >
          {buildings && (
            <>
              <AttributionControl
                position="bottom-right"
                compact={false}
                style={{ height: 16, fontSize: 12 }}
              />
              <Source
                type="geojson"
                id="buildings"
                data={buildings}
                generateId={true}
                cluster={true}
                clusterMaxZoom={17.0}
                clusterRadius={30}
                clusterProperties={{
                  itemids: ['concat', ['concat', ['get', 'id'], ',']],
                }}
              />
              <Layer
                source="buildings"
                id="clustered-point"
                filter={['has', 'point_count']}
                type="circle"
                paint={{
                  'circle-radius': 24,
                  'circle-color': '#000',
                  'circle-stroke-color': '#888',
                  'circle-stroke-width': 5,
                  'circle-stroke-opacity': [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    1,
                    0,
                  ],
                }}
              />
              <Layer
                source="buildings"
                id="clusters"
                type="symbol"
                filter={['has', 'point_count']}
                layout={{
                  'text-field': '{point_count_abbreviated}',
                  'text-font': ['resistRegular'],
                  'text-size': 20,
                  'text-offset': [0, -0.05],
                  'text-allow-overlap': true,
                }}
                paint={{
                  'text-color': '#fff',
                }}
              />
              {buildings.features.map(
                (building) =>
                  building?.id in markers && (
                    <FloorMapMarker
                      key={building.id}
                      selected={place == building.id}
                      building={building}
                      marker={markers[building.id]}
                      handleClick={onClick}
                    />
                  ),
              )}
            </>
          )}
          <NavigationControl showCompass={false} visualizePitch={false} />
        </Map>
      </div>
    </div>
  );
};
export default MapComponent;
