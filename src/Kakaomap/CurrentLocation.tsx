import { useMemo, useState } from 'react';

function CurrentLocation() {
  const [location, setLocation] = useState<
    { latitude: number; longitude: number } | string
  >({
    latitude: 0, // 초기값 설정, 여기에서는 임의의 값으로 설정했으니 실제로는 초기값을 어떻게 설정할지 고려해야 합니다.
    longitude: 0,
  });

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
  }, []);

  return location;
}

export default CurrentLocation;
