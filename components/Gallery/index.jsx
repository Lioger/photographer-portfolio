import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { closeGallery } from '../../actions/gallerySize';
import { GalleryModal, CloseButton, Gallery, GalleryShadow, ControlButtonsContainer, ControlArrow } from './styles';

const GalleryComponent = ({ openedPhoto, modelName, applyControl }) => {
  const dispatch = useDispatch();
  const gallerySize = useSelector((state) => state.gallerySize);
  const close = () => dispatch(closeGallery());

  return (
    <AnimatePresence>
      <GalleryModal
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: gallerySize,
          scale: gallerySize,
          transition: { duration: 0.3, ease: 'easeOut' },
        }}
      >
        <GalleryShadow onClick={close}></GalleryShadow>
        <CloseButton onClick={close}>x</CloseButton>
        <Gallery>
          <img src={openedPhoto.src} alt={modelName} />
          <ControlButtonsContainer>
            <ControlArrow
              className="left"
              onClick={(e) => applyControl(e, 'prev')}
              whileTap={{ scale: 0.95, transformOrigin: 'center' }}
            >
              ←
            </ControlArrow>
            <ControlArrow
              className="right"
              onClick={(e) => applyControl(e, 'next')}
              whileTap={{ scale: 0.95, transformOrigin: 'center' }}
            >
              →
            </ControlArrow>
          </ControlButtonsContainer>
        </Gallery>
      </GalleryModal>
    </AnimatePresence>
  );
};

export default GalleryComponent;
