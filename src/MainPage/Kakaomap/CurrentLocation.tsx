import { useEffect, useState } from 'react';
import useStore from '../../zustand/store/store';

function CurrentLocation() {
  const [location, setLocation] = useState<
    { latitude: number; longitude: number } | string
  >({
    latitude: 37.6330789279387,
    longitude: 127.076794742851,
  });

  const { setLatLng } = useStore((state) => state);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
        console.log('위치받기 성공');
      }
    }, 10000);

    function success(position: GeolocationPosition) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setLatLng(position.coords.latitude, position.coords.longitude);
    }

    function error() {
      setLocation({
        latitude: 37.483034,
        longitude: 126.902435,
      });
      alert('위치받기 실패');
      console.log('위치받기 실패');
    }
    return () => clearInterval(intervalId);
  }, []);

  return location;
}

export default CurrentLocation;
