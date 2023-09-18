import React from 'react';
import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}
function App() {
  console.log('env', import.meta.env.VITE_KAKAOMAP_JAVASCRIPT_APP_KEY);

  const [loading, error] = useKakaoLoader({
    appkey: '9390a5f4210490b4f089219e30f5cf0b',
  });
  return (
    <Map
      className="myMap"
      style={{ width: '500px', height: '500px' }}
      center={{ lat: 33.5563, lng: 126.79581 }}
      level={3}
    ></Map>
  );
}

export default App;
