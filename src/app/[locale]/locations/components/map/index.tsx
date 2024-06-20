'use client';

import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useParams, useSearchParams } from 'next/navigation';
import { useMemo, useRef } from 'react';
import type { MapRef } from 'react-map-gl/maplibre';
import Map, {
  AttributionControl,
  Layer,
  MapProvider,
  NavigationControl,
  Source,
} from 'react-map-gl/maplibre';

import useMedia, { useWindowSize } from '@/lib/useMedia';
import FloorMapMarker from './FloorMapMarker';
import useMapFunctions from './useMapFunctions';
import { Building } from '@/types/types';

type MapComponentProps = {
  buildings: GeoJSON.FeatureCollection<GeoJSON.Point, Building>;
  mapCut: number;
};

const MAP_CONFIGURATION = {
  style: 'https://osm.udk-berlin.de/styles/udk-rundgang-2022/style.json',
  center: {
    longitude: 13.349633,
    latitude: 52.521,
  },
};

const COLOR = 'rgb(0,253,160)';
const ICONSIZE = 32;

const MapComponent = ({ buildings, mapCut }: MapComponentProps) => {
  const mapRef = useRef<MapRef>(null);
  const params = useParams();

  const isMobile = useMedia('(max-width: 600px)');

  const selectedItem = useMemo(() => params.loc, [params]);
  console.log(params);

  const size = useWindowSize();

  const { hovered, markers, onMouseMove, onMouseLeave, onZoom } =
    useMapFunctions(mapRef, buildings, size);
  return (
    <div className="pointer-events-auto relative h-fit w-full dark:invert">
      <MapProvider>
        <Map
          id="rundgangMap"
          reuseMaps
          interactiveLayerIds={buildings ? ['buildings'] : []}
          ref={mapRef}
          mapLib={maplibregl}
          style={{
            zIndex: 100,
            width: '100%',
            height: size.height - mapCut,
          }}
          initialViewState={{
            zoom: 11,
            longitude: MAP_CONFIGURATION.center.longitude,
            latitude: MAP_CONFIGURATION.center.latitude,
          }}
          mapStyle={MAP_CONFIGURATION.style}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          onZoom={onZoom}
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
              />
              {markers &&
                buildings.features.map((building) => (
                  <FloorMapMarker
                    key={building.id}
                    selected={selectedItem == building.id}
                    building={building}
                    marker={markers[building.id]}
                  />
                ))}
            </>
          )}
          <NavigationControl showCompass={false} visualizePitch={false} />
        </Map>
      </MapProvider>
    </div>
  );
};
export default MapComponent;
