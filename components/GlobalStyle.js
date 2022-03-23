import styled, { createGlobalStyle } from "styled-components";
import { motion } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: rgb(100, 100, 100);
    color: white;
    font-family: 'Montserrat', sans-serif;
  }
  a {
    font-family: inherit;
    font-style: inherit;
    color: inherit;
    text-decoration: inherit;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Container = styled(motion.div)`
  min-height: calc(100vh / 3 * 2);
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0;
  }
`;


export const Hide = styled(motion.div)`
  overflow: hidden;
`;

export const PageTitle = styled(motion.h2)`
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  font-weight: 300;
  padding: 1.5rem 0.5rem;
  overflow: hidden;
`;

export const TextBlock = styled(motion.p)`
  font-weight: 300;
  padding: 0.4rem 2rem;
  text-align: center;
  line-height: 1.5;
`;

export const LinkButton = styled(motion.a)`
  border: 1px solid white;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  display: block;
  width: max-content;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: white;
    color: rgb(100, 100, 100);
  }
`;

export const InlineIcon = styled(motion.span)`
  margin-left: 0.5rem;
`;

export default GlobalStyle;
