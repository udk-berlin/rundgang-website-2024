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
import { Building, LocationSummary } from '@/types/types';

export type MapComponentProps = {
  buildings: GeoJSON.FeatureCollection<GeoJSON.Point, Building>;
  location: LocationSummary | null;
};

const MAP_STYLE =
  'https://osm.udk-berlin.de/styles/udk-rundgang-2024/style.json';

const MapComponent = ({ buildings, location }: MapComponentProps) => {
  const selectedBuilding = useMemo(
    () => (location ? decodeURIComponent(location?.building?.id) : null),
    [location],
  );

  const size = useWindowSize();

  const { markers, onClick, onMouseMove, onMouseLeave, onZoom, onLoad } =
    useMapFunctions(selectedBuilding, buildings, size);
  return (
    <div className="pointer-events-auto fixed top-header z-0 h-content w-full rounded-md bg-secondary px-border dark:invert">
      <Map
        id="rundgangMap"
        reuseMaps
        interactiveLayerIds={
          buildings ? ['clusters', 'unclustered-point', 'clustered-point'] : []
        }
        mapLib={maplibregl}
        style={{
          zIndex: 100,
          width: size.width - 4,
          height: size.height,
        }}
        mapStyle={MAP_STYLE}
        maxBounds={[
          [13.0226653, 52.0544213],
          [13.859637, 52.9176152],
        ]}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onZoom={onZoom}
        onClick={onClick}
        onLoad={onLoad}
        attributionControl={false}
        renderWorldCopies={false}
        styleDiffing={false}
        pitchWithRotate={false}
        dragRotate={false}
        touchPitch={false}
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
                    selected={selectedBuilding == building.id}
                    building={building}
                    marker={markers[building.id]}
                    handleClick={onClick}
                  />
                ),
            )}
          </>
        )}
        <NavigationControl
          showCompass={false}
          visualizePitch={false}
          style={{
            border: '2px solid rgb(var(--secondary))',
          }}
        />
      </Map>
    </div>
  );
};
export default MapComponent;
