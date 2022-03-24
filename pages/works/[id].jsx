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
  ControlButtonsContainer
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

  const applyControl = (type) => {
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
          <Gallery style={{backgroundImage: `url(${openedPhoto?.src})`}}>
            <Image
              src={openedPhoto}
              alt={photoset?.modelName}
              placeholder='blur'
            />
          </Gallery>
          <ControlButtonsContainer>
              <div onClick={() => applyControl('prev')}>←</div>
              <div onClick={() => applyControl('next')}>→</div>
          </ControlButtonsContainer>
        </GalleryModal>
      </Container>
    </>
  );
};

export default Work;
