import styled from 'styled-components';
import { LinkButton } from './../../components/GlobalStyle';

export const PhotoSection = styled.section`
  width: 100%;
`;

export const PhotoWrapper = styled.div`
  position: relative;
  height: min(calc(100vw * 0.75), calc(100vh * 0.75));
  width: 100%;
  background-size: cover;
  background-position: center 30%;
  &:last-child {
    margin-bottom: -3.5px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 8%;
  letter-spacing: 0.3rem;
  text-align: center;
  font-size: 1.5rem;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const SeeMoreButton = styled(LinkButton)`
  position: absolute;
  right: 16px;
  bottom: 16px;

  &.light {
    color: white;
    border: 1px solid white;

    &:hover {
      background-color: white;
      color: black;
    }
  }

  &.dark {
    color: #333;
    border: 1px solid #333;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
