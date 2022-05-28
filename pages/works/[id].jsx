import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { openGallery } from '../../actions/gallerySize';
import GalleryComponent from './../../components/Gallery';
import { getAllWorkIds } from '../../helpers/getAllWorkIds';
import { pageAnimation } from '../../animations/globalAnimations';
import { PhotosGrid } from './../../styles/pages/homepage';
import { Container, PageTitle } from '../../styles/GlobalStyle';
import { photosets } from '../../utils/photosets';

export const getStaticPaths = async () => ({
  paths: getAllWorkIds(),
  fallback: false,
});

export const getStaticProps = async ({ params }) => {
  const photoset = photosets.find((photo) => photo.id === params.id);
  return {
    props: {
      photoset,
    },
  };
};

const Work = ({ photoset }) => {
  const dispatch = useDispatch();
  const gallerySize = useSelector((state) => state.gallerySize);
  const allPhotosArr = [photoset.cover, ...photoset.photos];
  const [openedPhoto, setOpenedPhoto] = useState(allPhotosArr ? allPhotosArr[0] : { src: '' });

  const open = (e) => {
    dispatch(openGallery());
    setOpenedPhoto(allPhotosArr[e.target.dataset.id]);
  };

  const applyControl = (e, type) => {
    e.stopPropagation();
    let newIndex = (allPhotosArr.indexOf(openedPhoto) + (type === 'next' ? 1 : -1)) % allPhotosArr.length;
    if (newIndex === -1) newIndex = allPhotosArr.length - 1;
    setOpenedPhoto(allPhotosArr[newIndex]);
  };

  return (
    <>
      <Head>
        <title>{photoset.modelName}</title>
      </Head>
      <Container variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <PageTitle>{photoset.modelName}</PageTitle>
        <PhotosGrid id="photos-grid">
          {allPhotosArr.map((photoSrc, index) => (
            <img
              key={index}
              src={photoSrc.src}
              alt={photoset.modelName}
              onClick={open}
              data-id={index}
              className={photoSrc.height > photoSrc.width ? 'vertical-photo' : 'horizontal-photo'}
            />
          ))}
        </PhotosGrid>
        <AnimatePresence>
          <GalleryComponent openedPhoto={openedPhoto} modelName={photoset.modelName} applyControl={applyControl} />
        </AnimatePresence>
      </Container>
    </>
  );
};

export default Work;
