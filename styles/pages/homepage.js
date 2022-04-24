import { motion } from "framer-motion";
import styled from "styled-components";

export const PhotosGrid = styled(motion.section)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;

  .horizontal-photo {
    grid-column: 1 / 3;
  }

  img {
    object-fit: cover;
    background-position: center;
  }
`;
