import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PhotosGrid = styled(motion.section)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;

  img {
    aspect-ratio: 1;
    object-fit: cover;
    background-position: center;
  }
`;
