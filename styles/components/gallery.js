import styled from 'styled-components';

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
  justify-content: space-between;
  padding: 5% 5%;

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
  position: relative;
  width: 100%;
  height: 80%;
  margin: 0 auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  img {
    max-height: 100%;
  }
`;

export const ControlButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30%;
  font-size: 2rem;
`;
