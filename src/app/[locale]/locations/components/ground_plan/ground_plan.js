import React from "react";
import styled from 'styled-components'

import { useFilter } from "@/providers/filter";
import LocationsGroundPlanContent from "@/components/pages/locations/ground_plan/content";

export default function LocationsGroundPlan() {
  const filter = useFilter()

  if (!(filter.location)) {
    return <></>
  }

  return (
    <GroundPlanContainer>
      <ContentColumn>
        <LocationsGroundPlanContent />
      </ContentColumn>
      <EmptyColumn />
      <EmptyColumn />
    </GroundPlanContainer>
  )
}

const EmptyColumn = styled.div`
  pointer-events: none;
`

const GroundPlanContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 3;

  display: grid;
  grid-template-columns: ${({ theme })=> theme.groundPlan.gridTemplateColumns};

  width: 100%;
  min-width: 100%;
  max-width: 100%;
  
  // height: ${({ theme })=> theme.groundPlan.height};
  // min-height: ${({ theme })=> theme.groundPlan.height};
  // max-height: ${({ theme })=> theme.groundPlan.height};

  cursor: default;
  pointer-events: none;

  font-size: 16px;
`

const ContentColumn = styled.div`
  width: ${({ theme })=> theme.groundPlan.gridTemplateColumn1};
  min-width: ${({ theme })=> theme.groundPlan.gridTemplateColumn1};
  max-width: ${({ theme })=> theme.groundPlan.gridTemplateColumn1};
  
  //height: 100%;
  //min-height: 100%;
  //max-height: 100%;
  
  pointer-events: auto;
`
