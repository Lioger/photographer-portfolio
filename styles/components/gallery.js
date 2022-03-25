import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GalleryModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;

  &.hidden {
    display: none !important;
  }
`;

export const CloseButton = styled.div`
  justify-self: flex-start;
  align-self: flex-end;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: white;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  line-height: 0.9rem;
`;

export const Gallery = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: max-content;
  max-height: 80%;
  margin: 0 auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;

  img {
    max-height: 80vh;
  }
`;

export const ControlButtonsContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.5);
`;

export const ControlArrow = styled(motion.div)`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;

  &.left {
    padding-right: 20%;
  }
  &.right {
    padding-left: 20%;
  }
`;
