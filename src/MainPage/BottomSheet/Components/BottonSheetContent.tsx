import * as S from '../../style';
import Content from './SingleContent/SingleContent';

const BottonSheetContent = () => {
  return (
    <S.ModalContent>
      <S.ContentWrapper>
        <Content />
        <Content />
        <Content />
        <Content />
      </S.ContentWrapper>
    </S.ModalContent>
  );
};

export default BottonSheetContent;
