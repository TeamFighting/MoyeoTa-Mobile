/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject, useEffect, useRef } from 'react';
import CurrentLocation from './CurrentLocation';

const location = CurrentLocation();
declare global {
  interface Window {
    kakao: any;
  }
}

function Kakaomap() {
  const mapRef = useRef<HTMLElement | null>(null);

  const initMap = () => {
    if (typeof location != 'string') {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(location.latitude, location.longitude),
        level: 2,
      };

      const map = new kakao.maps.Map(container as HTMLElement, options);
      (mapRef as MutableRefObject<any>).current = map;
    }
  };

  useEffect(() => {
    kakao.maps.load(() => initMap());
  }, [mapRef, location]);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
}

export default Kakaomap;
