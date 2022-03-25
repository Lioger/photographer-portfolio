import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import { Container, PageTitle } from "../../components/GlobalStyle";
import { pageAnimation } from '../../animations/globalAnimations';
import { PhotosGrid } from './../../styles/pages/homepage';
import {
  GalleryModal,
  CloseButton,
  Gallery,
  ControlButtonsContainer,
  ControlArrow,
} from './../../styles/components/gallery';
import { photos } from '../../utils/photos';

const Work = () => {
  const router = useRouter();
  const pathArr = router.asPath.split('/');
  const photoId = Number(pathArr[pathArr.length - 1]);
  const photoset = photos.find(photo => photo.id === photoId);
  const allPhotosArr = photoset ? [photoset.cover, ...photoset.photos] : [];
  const [isGalleryOpened, setIsGaleryOpened] = useState(false);
  const [openedPhoto, setOpenedPhoto] = useState(allPhotosArr ? allPhotosArr[0] : { src: '' });

  const openGallery = (e) => {
    setIsGaleryOpened(true);
    setOpenedPhoto(allPhotosArr[e.target.dataset.id]);
  }
  const closeGallery = () => {
    setIsGaleryOpened(false);
  }

  const applyControl = (e, type) => {
    e.stopPropagation();
    const indexofCurrent = allPhotosArr.indexOf(openedPhoto);
    let newIndex = type === 'next' ?
      (indexofCurrent + 1) % allPhotosArr.length :
      (indexofCurrent - 1) % allPhotosArr.length;
    if (newIndex === -1) newIndex = allPhotosArr.length - 1;
    setOpenedPhoto(allPhotosArr[newIndex]);
  }

  return (
    <>
      <Head>
        <title>{photoset?.modelName}</title>
      </Head>
      <Container variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
        <PageTitle>{photoset?.modelName}</PageTitle>
        {photoset && allPhotosArr && (
          <PhotosGrid>
            {allPhotosArr.map((photoSrc, index) => (
              <Image
                key={index}
                src={photoSrc}
                alt={photoset.modelName}
                placeholder='blur'
                onClick={openGallery}
                data-id={index}
              />
            ))}
          </PhotosGrid>
        )}
        <GalleryModal className={!isGalleryOpened && 'hidden'}>
          <CloseButton onClick={closeGallery}>x</CloseButton>
          <Gallery>
            <Image
              src={openedPhoto}
              alt={photoset?.modelName}
              placeholder='blur'
            />
            <ControlButtonsContainer>
              <ControlArrow
                className='left'
                onClick={(e) => applyControl(e, 'prev')}
                whileTap={{ scale: 0.9 }}
              >←</ControlArrow>
              <ControlArrow
                className='right'
                onClick={(e) => applyControl(e, 'next')}
                whileTap={{ scale: 0.9 }}
              >→</ControlArrow>
            </ControlButtonsContainer>
          </Gallery>
        </GalleryModal>
      </Container>
    </>
  );
};

export default Work;
