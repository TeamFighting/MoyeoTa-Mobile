/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject, useEffect, useState } from 'react';
import CurrentLocation from './CurrentLocation';
// import SlideModal from '../SlideModal/SlideModal';
declare global {
  interface Window {
    kakao: any;
  }
}

function Kakaomap({ mapRef }: { mapRef: MutableRefObject<any> }) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const location = CurrentLocation();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initMap = () => {
    if (typeof location != 'string') {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(location.latitude, location.longitude),
        level: 3,
      };

      const map = new kakao.maps.Map(container as HTMLElement, options);
      const markerPosition = new kakao.maps.LatLng(
        37.6298580333571,
        127.079322579266
      );
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true,
      });
      marker.setMap(map);
      console.log(isModalOpen);
      (mapRef as MutableRefObject<any>).current = map;
      kakao.maps.event.addListener(marker, 'click', function () {
        console.log('click');
        setIsModalOpen(!isModalOpen);

        console.log(isModalOpen);
      });
    }
  };

  const geocoder = new kakao.maps.services.Geocoder();
  const callback = (result: any, status: any) => {
    if (status === kakao.maps.services.Status.OK) {
      console.log(result);
    }
  };
  geocoder.addressSearch('서울특별시 노원구 공릉2동 189', callback);

  useEffect(() => {
    kakao.maps.load(() => initMap());
  }, [mapRef, location, initMap]);

  return (
    <>
      <div
        id="map"
        style={{ position: 'relative', width: '500px', height: '100%' }}
      ></div>
    </>
  );
}

export default Kakaomap;
