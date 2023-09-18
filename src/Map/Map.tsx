/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { MutableRefObject, useEffect, useRef } from 'react';

const { kakao } = window;

const Map = () => {
  const mapRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const map = new kakao.maps.Map(container as HTMLElement, options);
    (mapRef as MutableRefObject<any>).current = map;
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: '500px',
        height: '500px',
      }}
    ></div>
  );
};

export default Map;
