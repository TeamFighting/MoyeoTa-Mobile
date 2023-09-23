import styled from 'styled-components';
import Kakaomap from '../Kakaomap/Kakaomap';
import Chevronleft from '../../public/svg/Chevronleft.svg';
import { useRef, useState } from 'react';
import SlideModal from '../SlideModal/SlideModal';

function MainPage() {
  const mapRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Header>
        <Chevronleft />
        <Location>서울시 노원구</Location>
      </Header>
      <Body>
        <Kakaomap mapRef={mapRef} />
        <Bottom>
          <TestButton open={open} onClick={() => setOpen(!open)}>
            {open ? 'close' : 'open'}
          </TestButton>
          <Drawer open={open}>hi</Drawer>
          <SlideModal isOpen={open} />
        </Bottom>
      </Body>
    </Container>
  );
}

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1000;
  width: 100%;
  bottom: 0;
  overflow: hidden;
`;

const TestButton = styled.button<{ open: boolean }>`
  margin: 0 10px 10px 0;
  width: fit-content;
  align-self: flex-end;
  transform: translateY(${({ open }) => (open ? 0 : '100px')});
  transition: transform 0.3s ease-in-out;
`;

const Drawer = styled.div<{ open: boolean }>`
  height: 100px;
  width: 100vw;
  background-color: white;
  transform: translateY(${({ open }) => (open ? 0 : '100px')});
  transition: transform 0.3s ease-in-out;
`;

const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 700px;
  background-color: aliceblue;
`;

const Location = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 14px;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  height: 64px;
  position: sticky;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 4%;
`;

export default MainPage;
