import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BOTTOM_SHEET_HEIGHT } from '../../Constants/constant';

function BottomSheet() {
  return (
    <Wrpper>
      <Header />
    </Wrpper>
  );
}

const Wrpper = styled(motion.div)`
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
`;

export default BottomSheet;
