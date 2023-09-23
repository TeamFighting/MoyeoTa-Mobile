import styled from 'styled-components';

function Header() {
  return (
    <HeaderWrapper
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '16px',
      }}
    >
      <Handler />
    </HeaderWrapper>
  );
}
const HeaderWrapper = styled.div`
  width: 100vw;
  height: 40px;
  background-color: white;
  border-radius: 26px 26px 0 0;
`;

const Handler = styled.div`
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
export default Header;
