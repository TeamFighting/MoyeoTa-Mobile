import styled from 'styled-components';
import Kakaomap from './Kakaomap/Kakaomap';
import Chevronleft from '../../public/svg/Chevronleft.svg';
import { useRef } from 'react';
import BottomSheet from './BottomSheet/Components/BottomSheet';
import LocationHeader from './BottomSheet/Components/LocationHeader';
// import NaverMap from './NaverMap/NaverMap';

function MainPage() {
  const mapRef = useRef<HTMLElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return (
    <Container>
      <Header>
        <Chevronleft />
        <LocationHeader />
      </Header>
      <Body>
        <Kakaomap mapRef={mapRef} />
        <Bottom>
          <BottomSheet />
        </Bottom>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  height: 64px;
  position: sticky;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 4%;
  z-index: 1000000;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 258px;
`;

const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
`;

export default MainPage;
