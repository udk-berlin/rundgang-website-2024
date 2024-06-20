import { ReactSVG } from "react-svg";
import React, { useEffect } from "react";
import useSWR from "swr";
import styled from 'styled-components'

import { fetcher, getUrl } from "@/utils/api";
import { useFilter, useFilterDispatch } from "@/providers/filter";
import { useData } from "@/providers/data/data";

export default function LocationsFloorPlan() {
  const { projects, locations } = useData()
  const filter = useFilter()
  const dispatch = useFilterDispatch()

  const { data, error, isLoading } = useSWR(
    getUrl(filter.floor.id),
    fetcher
  );

  const handleSelectRoom = (e) => {
    const roomId = e.target.getAttribute('data-id')

    if (roomId) {
      const room = filter.floor.children.filter(room => {
        return getRoomDataId(room, filter.floor, filter.location) === roomId
      })

      if (room.length > 0) {
        Object.values(filter.floor.children).forEach(child => {
          if (child.template === 'location-room') {
            let rooms = document.querySelectorAll(`[data-id="${getRoomDataId(child, filter.floor, filter.location)}"]`);
            rooms.forEach(room => room.style.fill = '')
          }
        })

        e.target.style.fill = 'var(--color-pink)';
        dispatch(
          {
            type: 'filter-room',
            room: room[0],
            projects: projects,
            locations: locations,
          })
      }
    }
  }

  useEffect(() => {
    Object.values(filter.floor.children).forEach(child => {
      if (child.template === 'location-room') {
        const rooms = document.querySelectorAll(`[data-id="${getRoomDataId(child, filter.floor, filter.location)}"]`);
        if (rooms) {
          rooms.forEach(room => room.style.fill = '')
        }
      }
    })

    if (filter.room) {
      const rooms = document.querySelectorAll(`[data-id="${getRoomDataId(filter.room, filter.floor, filter.location)}"]`);
      if (rooms) {
        rooms.forEach(room => room.style.fill = 'var(--color-pink)')
      }
    }
  }, [filter])

  if (!data) {
    return <></>
  }

  return (
    <LocationsFloorPlanContainer onClick={handleSelectRoom}>
      <ReactSVG src={data.thumbnail_full_size}/>
    </LocationsFloorPlanContainer>
  )
}

const LocationsFloorPlanContainer = styled.div`
  height: var(--locations-ground-plan-height);
  min-height: var(--locations-ground-plan-height);
  max-height: var(--locations-ground-plan-height);

  width: calc(100% + var(--border-width));
  min-width: calc(100% + var(--border-width));
  max-width: calc(100% + var(--border-width));

  pointer-events: all;

  > div {
    width: 100%;
    height: 100%;

    > div {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      
      > svg {
        max-width: 100%;
        max-height: 100%;

        width: auto;
        height: auto;

        rect:hover {
          fill: var(--color-pink);
        }
      }
    }
  }
`

function getRoomDataId (room, floor, location) {
  return `udk-berlin|${locationIdToDataIdMapper[location.id]}|${floor.name}|${room.name}`
}


const locationIdToDataIdMapper = {
  "!RuJBwEwOQcFrQabJnn:content.udk-berlin.de": 4001,
  "!YIwQSiHDpoiNHDMWmC:content.udk-berlin.de": 4002,
  "!PsyURUpKAbSPistHpQ:content.udk-berlin.de": 4003,
  "!GFauydmVRlpqvDETXH:content.udk-berlin.de": 4004,
  "!XGSFQYZUnFtQNzOBnD:content.udk-berlin.de": 4005,
  "!eVjUBtkIgDQkQSKVxm:content.udk-berlin.de": 4007,
  "!OkEblSLtaWAObRcCHm:content.udk-berlin.de": 4008
}
