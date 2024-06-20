import React from "react";
import styled from 'styled-components'

import { useFilter } from "@/providers/filter";
import LocationsFloorPlan from "@/components/pages/locations/floor_plan/floor_plan";

export default function LocationsFloorPlanPopup() {
  const filter = useFilter()

  if (!(filter.floor)) {
    return <></>
  }

  return (
    <LocationsFloorPlanPopupContainer>
      <LocationsFloorPlanColumn>
        <LocationsFloorPlan />
      </LocationsFloorPlanColumn>
      <LocationsFloorPlanEmptyColumn />
      <LocationsFloorPlanEmptyColumn />
    </LocationsFloorPlanPopupContainer>
  )
}

const LocationsFloorPlanEmptyColumn = styled.div`
  pointer-events: none;
`

const LocationsFloorPlanPopupContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 4;

  display: grid;
  grid-template-columns: ${({ theme }) => theme.footer.gridTemplateColumn1} ${({ theme }) => theme.footer.gridTemplateColumn2} ${({ theme }) => theme.footer.gridTemplateColumn3};

  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;

  cursor: default;
  pointer-events: none;

  font-size: 16px;
`

const LocationsFloorPlanColumn = styled.div`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
`
