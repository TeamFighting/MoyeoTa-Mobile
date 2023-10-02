// import React, { FC } from 'react';
import styled from 'styled-components';
import { BOTTOM_SHEET_HEIGHT } from '../../Constants/constant';
import { motion } from 'framer-motion';
import BottomSheetHeader2 from './BottomSheetHeader2';
import useBottomSheet from '../BottomSheet/Hook/useBottonSheet';
import { SingleContent } from '../style';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
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

const BottomSheet2 = () => {
  const { sheet, content } = useBottomSheet();

  return (
    <Wrapper ref={sheet}>
      <BottomSheetHeader2 />
      <BottomSheetContent ref={content}>
        <SingleContent>BottomSheet2</SingleContent>
        <SingleContent>BottomSheet2</SingleContent>
        <SingleContent>BottomSheet2</SingleContent>
        <SingleContent>BottomSheet2</SingleContent>
      </BottomSheetContent>
    </Wrapper>
  );
};

export default BottomSheet2;
