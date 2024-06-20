import React, { useRef, useEffect } from "react";
import styled from 'styled-components'

import GroundPlan from '@/components/pages/locations/map/ground_plan'
import { useFilter } from "@/providers/filter";

const LOCATION_ID_TO_PADDING_MAPPER = {
  '!uAswzmPHWtAVmjhIYx:content.udk-berlin.de': "2rem",
  '!hjTkjNaIDkzxNWQZTR:content.udk-berlin.de': "2rem",
  '!XaBVrlwEHUifKOmMPa:content.udk-berlin.de': "2rem",
  '!aLyedVYnhynRwlhXUm:content.udk-berlin.de': "0",
  '!amwvMUTwucDiRylpJQ:content.udk-berlin.de': "0",
  '!LiVonEpyzckeIAyOIb:content.udk-berlin.de': "0",
  '!cUpdRzxCGmLkwfrUeq:content.udk-berlin.de': "0",
  '!FYglBKPJHZGUNIYcBt:content.udk-berlin.de': "0",
  '!fwsuOeorRCZtTqwukc:content.udk-berlin.de': "2rem",
  '!ozXLGbrpCVNrRScjQJ:content.udk-berlin.de': "0",
  '!nOMmizEAkvzoapuqCK:content.udk-berlin.de': "0",
  '!PkpdUouHNyPWmVReTC:content.udk-berlin.de': "2rem",
  '!dYAxemkkcQCGTMQgTS:content.udk-berlin.de': "2rem",
  '!FqPOhaHHAjYeliMfOU:content.udk-berlin.de': "2rem",
  '!bwyfqxrdHCbwOYLLgp:content.udk-berlin.de': "2rem",
  '!jocCvZKGntdCmvmmUG:content.udk-berlin.de': "2rem",
}

export default function LocationsGroundPlan() {
  const filter = useFilter()
  const isMobile = false
  let groundPlan

  if (isMobile) {
    groundPlan = <GroundPlan id={filter.location.id} type='popup' alt={filter.location.name} useSimpleGroundPlan={true} />
  } else {
    groundPlan = <GroundPlan id={filter.location.id} type='popup' alt={filter.location.name} />
  }

  return (
    <LocationsGroundPlanContainer location={filter.location}>
      <div>{groundPlan}</div>
    </LocationsGroundPlanContainer>
  )
}

const LocationsGroundPlanContainer = styled.div`
  height: ${({ theme })=> theme.groundPlan.image.height};
  min-height: ${({ theme })=> theme.groundPlan.image.height};
  max-height: ${({ theme })=> theme.groundPlan.image.height};

  background:  var(--color-dark-gray);
  border: ${({ theme }) => theme.groundPlan.image.border};
  border-right: ${({ theme }) => theme.border};
  border-bottom: 0;
  
  padding: 1.2rem 0;

  > div {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      padding: ${(props) => LOCATION_ID_TO_PADDING_MAPPER[props.location.id]};
      max-width: 100%;
      max-height: 100%;

      width: auto;
      height: auto;
    }
  }
`
