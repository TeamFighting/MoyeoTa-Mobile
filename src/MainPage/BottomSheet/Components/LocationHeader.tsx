import React, { useEffect } from 'react';
import styled from 'styled-components';
import LatLngStore from '../../../zustand/store/store';

function LocationHeader() {
  const geocoder = new kakao.maps.services.Geocoder();
  const { currentLat, currentLng } = LatLngStore((state) => state);

  return <Location></Location>;
}

const Location = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 14px;
`;
export default LocationHeader;
