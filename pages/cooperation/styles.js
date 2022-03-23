import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactInfoSection = styled(motion.section)`
  padding: 1rem 2rem;
  display: grid;
  justify-items: center;
  gap: 1rem;
`;

export const ContactLink = styled(motion.a)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  padding: 6px 10px;
  border-bottom: 1px solid white;
`;

export const ContactLinkIcon = styled(motion.img)`
  width: 2rem;
  height: 2rem;
`;
