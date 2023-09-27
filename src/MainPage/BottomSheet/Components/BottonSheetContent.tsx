import * as S from '../../style';
import Content from './SingleContent/SingleContent';
import ContentHeader from './SingleContent/ContentHeader';
const BottonSheetContent = () => {
  return (
    <S.ModalContent>
      <S.ContentWrapper>
        <ContentHeader />
        <Content />
        <Content />
        <Content />
        <Content />
      </S.ContentWrapper>
    </S.ModalContent>
  );
};

export default BottonSheetContent;
