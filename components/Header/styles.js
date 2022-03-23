import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Container } from '../GlobalStyle';

export const HeaderStyled = styled(motion.header)`
  height: calc(100vh / 4);
  border-bottom: 1px solid white;
  color: white;
  display: flex;
  justify-content: center;
`;

export const Logo = styled(motion.div)`
  font-weight: 300;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  text-align: center;
  cursor: pointer;
`;

export const HeaderContainer = styled(Container)`
  min-height: auto;
  justify-content: center;
  gap: 5vh;
`;

export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
`;

export const LinkStyled = styled(motion.a)`
  padding-bottom: 0.2rem;
  cursor: pointer;
  transition: border-bottom 0.3s ease-out;
`;

export const Line = styled(motion.div)`
  margin-top: 0.25rem;
  height: 0.08rem;
  border-radius: 1rem;
  background-color: white;
`;
