import React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import { useFilter, useFilterDispatch } from '@/providers/filter'
import { sortByName } from "@/components/pages/locations/ground_plan/content";
import { useData } from "@/providers/data/data";
import { mapRoom } from "@/utils/room_mapper";

export default function LocationsGroundPlanRooms ({ locationsGroundPlanFloorsContainerHeight }) {
  const filter = useFilter()

  if (!filter.floor) {
    return <></>
  }

  const rooms = getRooms(filter.floor)
  return (
    <LocationsGroundPlanRoomsContainer locationsGroundPlanFloorsContainerHeight={locationsGroundPlanFloorsContainerHeight}>
      <LocationsGroundPlanRoomsAll />
      {
        Object.values(rooms)
          .sort(sortByName).map((room, index) => <LocationsGroundPlanRoom key={index} room={room} />)
      }
    </LocationsGroundPlanRoomsContainer>
  )
}

function LocationsGroundPlanRoom ({ key, room }) {
  const { projects, locations } = useData()
  const filter = useFilter()
  const dispatch = useFilterDispatch()

  const handleClick = (e) => {
    dispatch(
      {
        type: 'filter-room',
        room: room,
        projects: projects,
        locations: locations
      })
  }

  const mappedRoom = mapRoom(room)

  return (
    <LocationsGroundPlanRoomContainer key={key} selected={(filter.room && filter.room.id === room.id)} onClick={handleClick}>
      <div>
        {mappedRoom.formattedMessageId ? <span><FormattedMessage id={mappedRoom.formattedMessageId}/>: </span> : <></>}
        {mappedRoom.name}
      </div>
    </LocationsGroundPlanRoomContainer>
  )
}

function LocationsGroundPlanRoomsAll () {
  const { projects, locations } = useData()
  const dispatch = useFilterDispatch()
  const filter = useFilter()

  const handleClick = (e) => {
    dispatch(
      {
        type: 'all-rooms',
        projects: projects,
        locations: locations
      })
  }

  return (
    <LocationsGroundPlanRoomContainer key={-1} onClick={handleClick} selected={!filter.room}>
      <div>
        <FormattedMessage id={'rooms.all'}/>
      </div>
    </LocationsGroundPlanRoomContainer>
  )
}

const LocationsGroundPlanRoomsContainer = styled.div`
  max-height: ${({ theme, locationsGroundPlanFloorsContainerHeight }) => `calc(${theme.groundPlan.info.height})`};
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  
  overflow-x: hidden;
  background: var(--color-white);

  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);
}
`

const LocationsGroundPlanRoomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  padding: 0.2rem 0.4rem;

  border-top: calc(0.5 * var(--border-width)) solid var(--border-color);
  border-bottom: calc(0.5 * var(--border-width)) solid var(--border-color);

  cursor: pointer;

  :nth-child(1) {
    border-top: 0 !important;
  }

  :nth-last-child(1) {
    border-bottom: ${({ theme }) => theme.border};
  }

  :hover {
    background-color: var(--color-pink);
    color: var(--color-white);
  }

  background-color: ${({ selected }) => selected ? 'var(--color-pink)' : 'var(--color-white)'};
  color: ${({ selected }) => selected ? 'var(--color-white)' : 'var(--color-black)'};
`

function getRooms (floor) {
  const rooms = {}

  Object.values(floor.children).forEach(child => {
    if (child.template === 'location-room') {
      rooms[child.id] = child
    }
  })

  return rooms
}
