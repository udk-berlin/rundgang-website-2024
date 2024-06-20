import React, {useState} from "react";
import styled from 'styled-components'

import LocationsGroundPlan from "@/components/pages/locations/ground_plan/image";
import LocationsGroundPlanFloors from '@/components/pages/locations/ground_plan/floors'
import LocationsGroundPlanRooms from '@/components/pages/locations/ground_plan/rooms'
import { useFilter } from "@/providers/filter";

export default function LocationsGroundPlanContent () {
  const [locationsGroundPlanFloorsContainerHeight, setLocationsGroundPlanFloorsContainerHeight] = useState()
  const filter = useFilter()

  return (
    <LocationsGroundPlanContentContainer>
      <LocationsGroundPlan />
      <LocationsGroundPlanInfoContainer>
        <LocationsGroundPlanLocationContainer>
          <LocationsGroundPlanLocationNameContainer>
            {filter.location.name}
          </LocationsGroundPlanLocationNameContainer>
        </LocationsGroundPlanLocationContainer>
        <LocationsGroundPlanFloors setLocationsGroundPlanFloorsContainerHeight={setLocationsGroundPlanFloorsContainerHeight}/>
        <LocationsGroundPlanRooms locationsGroundPlanFloorsContainerHeight={locationsGroundPlanFloorsContainerHeight}/>
      </LocationsGroundPlanInfoContainer>
    </LocationsGroundPlanContentContainer>
  )
}

const LocationsGroundPlanLocationNameContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-grow: 1;

  padding: calc(0.2rem + 1px) 0.4rem;
  
  background-color: var(--color-pink);
  color: var(--color-white);
`

const LocationsGroundPlanLocationContainer = styled.div`
  width: ${({ theme })=> theme.groundPlan.gridTemplateColumn1};
  min-width: ${({ theme })=> theme.groundPlan.gridTemplateColumn1};
  max-width: ${({ theme })=> theme.groundPlan.gridTemplateColumn1};

  cursor: default;

  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);
  
  background: white;
  border-top: ${({ theme })=> theme.border};
`

const LocationsGroundPlanContentContainer = styled.div`
  position: relative;
  
  // height: ${({ theme })=> theme.groundPlan.content.height};
  // min-height: ${({ theme })=> theme.groundPlan.content.height};
  // max-height: ${({ theme })=> theme.groundPlan.content.height};

  cursor: default;
  
  font-size: ${({ theme })=> theme.fontSizes.small};
`

const LocationsGroundPlanInfoContainer = styled.div`
  // height: ${({ theme })=> theme.groundPlan.info.height};
  // min-height: ${({ theme })=> theme.groundPlan.info.height};
  max-height: ${({ theme })=> theme.groundPlan.info.height};

  width: ${({ theme })=> theme.groundPlan.gridTemplateColumn1};
  min-width: ${({ theme })=> theme.groundPlan.gridTemplateColumn1};
  max-width: ${({ theme })=> theme.groundPlan.gridTemplateColumn1};

  border-right: ${({ theme }) => theme.border};

  overflow: ${({ theme })=> theme.groundPlan.content.overflow};
`

export function sortByName(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
