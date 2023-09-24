import styled from 'styled-components';

export const ModalContent = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: aliceblue;
`;

export const ContentHeader = styled.div`
  flex-direction: row;
  padding: 17px 26px;
  background-color: #f5f5f520;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 5px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const HeaderP = styled.span`
  color: #7e7e7e;
  font-family: pretendard;
  font-size: 14px;
  margin-left: 3px;
  display: flex;
  align-self: center;
  justify-content: center;
  margin-top: 1px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Content = styled.div`
  width: 335px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 26px;
  display: flex;
  border: 2px solid #ebebeb;
  flex-direction: column;
  justify-content: center;
`;

export const ContentTitle = styled.span`
  color: #343434;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  width: 100%;
  margin-left: 20px;
`;
export const Line = styled.div`
  width: 304px;
  height: 1px;
  background-color: #ebebeb;
  margin-top: 100px;
`;
