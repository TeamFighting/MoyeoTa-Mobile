// import Map from '../Map/Map';
import styled from 'styled-components';
import Kakaomap from '../Kakaomap/Kakaomap';
import Chevronleft from '../../public/svg/Chevronleft.svg';
function MainPage() {
  return (
    <Container>
      <Header>
        <Chevronleft />
        <Location>서울 송파구</Location>
      </Header>
      <Kakaomap />
    </Container>
  );

  // <Container>{/* <Map /> */}</Container>;
}

const Location = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 14px;
`;

const Container = styled.div``;

const Header = styled.div`
  width: 100%;
  height: 64px;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 4%;
`;
export default MainPage;
