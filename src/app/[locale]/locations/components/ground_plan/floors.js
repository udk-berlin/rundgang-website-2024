import React, { useRef, useEffect} from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import { useFilter, useFilterDispatch } from '@/providers/filter'
import { sortByName } from "@/components/pages/locations/ground_plan/content";
import { useData } from "@/providers/data/data";

export default function LocationsGroundPlanFloors ({ setLocationsGroundPlanFloorsContainerHeight }) {
  const ref = useRef();
  const filter = useFilter()
  const floors = getFloors(filter.location)

  useEffect(() => {
    setLocationsGroundPlanFloorsContainerHeight(ref.current.offsetHeight)
  }, [])

  return (
    <LocationsGroundPlanFloorsContainer ref={ref}>
      <LocationsGroundPlanFloorAll />
      {Object.values(floors).sort(sortByName).map((floor, index) => <LocationsGroundPlanFloor key={index} floor={floor} />)}
      <LocationsGroundPlanFloorEmpty />
    </LocationsGroundPlanFloorsContainer>
  )
}

function LocationsGroundPlanFloor ({ key, floor }) {
  const { projects, locations } = useData()
  const filter = useFilter()
  const dispatch = useFilterDispatch()

  const handleClick = (e) => {
    dispatch(
      {
        type: 'filter-floor',
        floor: floor,
        projects: projects,
        locations: locations
      })
  }

  return (
    <LocationsGroundPlanFloorContainer key={key} selected={(filter.floor && filter.floor.id === floor.id)} onClick={handleClick}>
      <div>
        <FormattedMessage id={'floor'}/>: {floor.name}
      </div>
    </LocationsGroundPlanFloorContainer>
  )
}

function LocationsGroundPlanFloorAll () {
  const { projects, locations } = useData()
  const filter = useFilter()
  const dispatch = useFilterDispatch()

  const handleClick = (e) => {
    dispatch(
      {
        type: 'all-floors',
        projects: projects,
        locations: locations
      })
  }

  return (
    <LocationsGroundPlanFloorContainer key={-1} selected={!(filter.floor)} all={true} onClick={handleClick}>
      <div>
        <FormattedMessage id={'floors.all'}/>
      </div>
    </LocationsGroundPlanFloorContainer>
  )
}

function LocationsGroundPlanFloorEmpty () {
  return (
    <LocationsGroundPlanFloorEmptyContainer key={-2}>
      <div></div>
    </LocationsGroundPlanFloorEmptyContainer>
  )
}

const LocationsGroundPlanFloorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  min-width: 100%;
  max-width: 100%;

  border-top: calc(0.5 * var(--border-width)) solid var(--border-color);
  border-bottom: calc(0.5 * var(--border-width)) solid var(--border-color);
  
  background: var(--color-white);

  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);
`

const LocationsGroundPlanFloorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  padding: 0.2rem 0.4rem;

  border: calc(0.5 * var(--border-width)) solid var(--border-color);
  border-left: ${({ all }) => all ? '0' : 'calc(0.5 * var(--border-width)) solid var(--border-color)'};

  cursor: pointer;
  
  :hover {
    background-color: var(--color-pink);
    color: var(--color-white);
  }

  background-color: ${({ selected }) => selected ? 'var(--color-pink)' : 'var(--color-white)'};
  color: ${({ selected }) => selected ? 'var(--color-white)' : 'var(--color-black)'};
`

const LocationsGroundPlanFloorEmptyContainer = styled.div`
  flex-grow: 10;
  border: calc(0.5 * var(--border-width)) solid var(--border-color);
  border-right: 0;
`

function getFloors (location) {
  const floors = {}

  Object.values(location.children).forEach(child => {
    if (child.template === 'location-level') {
      floors[child.id] = child
    }
  })

  return floors
}
