import styled from 'styled-components';
import { LinkButton } from './../../components/GlobalStyle';

export const PhotoSection = styled.section`

`;

export const PhotoWrapper = styled.div`
  position: relative;
  height: max-content;

  &:last-child {
    margin-bottom: -3.5px;
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
