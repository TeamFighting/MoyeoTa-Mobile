import { useMemo, useState } from 'react';

function CurrentLocation() {
  const [location, setLocation] = useState<
    { latitude: number; longitude: number } | string
  >('');

  useMemo(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position: GeolocationPosition) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }
    function error() {
      setLocation({
        latitude: 37.483034,
        longitude: 126.902435,
      });
      console.log('위치받기 실패');
    }
  }, [navigator.geolocation.getCurrentPosition]);
  return location;
}
export default CurrentLocation;
