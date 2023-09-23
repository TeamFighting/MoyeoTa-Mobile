import '../SlideModal/SlideModal.css';
import styled from 'styled-components';
import Calendar from '../../public/svg/Calendar.svg';
import Switch from '../../public/svg/Switch.svg';

const SlideModal = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Modal open={isOpen}>
      <ModalContent>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '16px',
          }}
        >
          <Icon />
        </div>
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
    </Modal>
  );
};
const Modal = styled.div<{ open: boolean }>`
  position: absolute;
  width: 100%;
  height: 50vh;
  display: flex;
  z-index: 100000;
  border-radius: 26px;
  flex-direction: column;
  transform: translateY(${({ open }) => (open ? 0 : '100px')});
  transition: transform 0.3s ease-in-out;
`;
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

const Icon = styled.div`
  right: 0;
  top: 16px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 26px;
  background-color: #ededed;
  width: 50px;
  height: 7px;
  margin-bottom: 28px;
`;
export default SlideModal;
