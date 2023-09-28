import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BOTTOM_SHEET_HEIGHT } from '../../../Constants/constant';
import useBottomSheet from '../Hook/useBottonSheet';
import BottomSheetContent from './BottomSheetContent';
import HeaderHandler from './HeaderHandler';

function BottomSheet() {
  const { sheet, content } = useBottomSheet();
  return (
    <Wrapper ref={sheet}>
      <HeaderHandler />
      <BottomSheetContentWrapper ref={content}>
        <BottomSheetContent />
      </BottomSheetContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)<{ isMaxHeight: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  width: 100%;
  border-radius: 26px 26px 0 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  height: ${BOTTOM_SHEET_HEIGHT}px;
  transition: transform 150ms ease-out;
`;
const BottomSheetContentWrapper = styled.div`
  width: 100%;
  background-color: yellow;
  overflow-y: scroll;
  height: 100%;
`;

export default BottomSheet;
