import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactInfoSection = styled(motion.section)`
  padding: 1rem 2rem;
  display: grid;
  justify-items: center;
  gap: 0.3rem;
`;

export const ContactLink = styled(motion.a)`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  cursor: pointer;
  padding: 6px 10px;
`;

export const ContactLinkIcon = styled(motion.img)`
  width: 2rem;
  height: 2rem;
`;
