import { useRef } from 'react';
import Kakaomap from '../Kakaomap/Kakaomap';
import BottomSheet2 from './BottomSheet2';

export default function LandingPage() {
  const mapRef = useRef<HTMLElement | null>(null);
  return (
    <>
      <Kakaomap mapRef={mapRef} />
      <div style={{height: '280px'}}>
      <BottomSheet2 /></div>
    </>
  );
}
