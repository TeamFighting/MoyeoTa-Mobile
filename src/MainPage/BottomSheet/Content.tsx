import '../SlideModal/SlideModal.css';
import styled from 'styled-components';
import Calendar from '../../public/svg/Calendar.svg';
import Switch from '../../public/svg/Switch.svg';

const BottonSheetContent = () => {
  return (
    <ModalContent>
      <ContentHeader>
        <div>
          <Calendar />
          <HeaderP>모든날짜</HeaderP>
          <HeaderP style={{ marginLeft: '195px' }}>추천순</HeaderP>
          <Switch />
        </div>
      </ContentHeader>
      <ContentWrapper>
        <Content>
          <ContentTitle>공덕팟</ContentTitle>
          <Line />
        </Content>
        <Content>
          <ContentTitle>공덕팟</ContentTitle>
          <Line />
        </Content>
        <Content>
          <ContentTitle>공덕팟</ContentTitle>
          <Line />
        </Content>
      </ContentWrapper>
    </ModalContent>
  );
};

const ContentTitle = styled.span`
  color: #343434;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-left: 20px;
`;
const Line = styled.div`
  width: 304px;
  height: 1px;
  background-color: #ebebeb;
  margin-top: 100px;
`;
const ContentWrapper = styled.div`
  width: 100%;
  border-radius: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const HeaderP = styled.span`
  color: #7e7e7e;
  font-family: pretendard;
  font-size: 14px;
  margin-left: 8px;
`;

const ContentHeader = styled.div`
  flex-direction: row;
  margin-left: 26px;
  margin-bottom: 17px;
`;
const Content = styled.div`
  width: 335px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 26px;
  display: flex;
  border: 2px solid #ebebeb;
  flex-direction: column;
  justify-content: center;
`;

const ModalContent = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 26px;
  height: 100%;
`;

export default BottonSheetContent;
