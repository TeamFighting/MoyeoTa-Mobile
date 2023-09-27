import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BOTTOM_SHEET_HEIGHT } from '../../../Constants/constant';
import useBottomSheet from '../Hook/useBottonSheet';
import BottonSheetContent from './BottonSheetContent';
import HeaderHandler from './HeaderHandler';

function BottomSheet() {
  const { sheet, content } = useBottomSheet();
  return (
    <Wrapper ref={sheet}>
      <HeaderHandler />
      <BottomSheetContent ref={content}>
        <BottonSheetContent />
      </BottomSheetContent>
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
const BottomSheetContent = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  height: 100%;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
export default BottomSheet;
