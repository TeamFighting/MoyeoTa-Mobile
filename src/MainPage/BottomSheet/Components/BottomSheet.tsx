import Header from './Header';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BOTTOM_SHEET_HEIGHT } from '../../../Constants/constant';
import useBottomSheet from '../Logics/useBottonSheet';
import BottonSheetContent from './Content';

function BottomSheet() {
  const { sheet, content } = useBottomSheet();
  return (
    <Wrpper ref={sheet}>
      <Header />
      <BottomSheetContent ref={content}>
        <BottonSheetContent />
      </BottomSheetContent>
    </Wrpper>
  );
}

const Wrpper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT}px;
  transition: transform 150ms ease-out;
`;
const BottomSheetContent = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;
export default BottomSheet;
