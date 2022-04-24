import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { Container, PageTitle } from "../../components/GlobalStyle";
import { pageAnimation } from "../../animations/globalAnimations";
import { PhotosGrid } from "./../../styles/pages/homepage";
import {
  GalleryModal,
  CloseButton,
  Gallery,
  GalleryShadow,
  ControlButtonsContainer,
  ControlArrow,
} from "./../../styles/components/gallery";
import { photos } from "../../utils/photos";
import { AnimatePresence } from "framer-motion";

const Work = () => {
  const router = useRouter();
  const pathArr = router.asPath.split("/");
  const photoId = Number(pathArr[pathArr.length - 1]);
  const photoset = photos.find((photo) => photo.id === photoId);
  const allPhotosArr = photoset ? [photoset.cover, ...photoset.photos] : [];
  const [gallerySize, setGallerySize] = useState(0);
  const [openedPhoto, setOpenedPhoto] = useState(
    allPhotosArr ? allPhotosArr[0] : { src: "" }
  );

  const openGallery = (e) => {
    setGallerySize(1);
    setOpenedPhoto(allPhotosArr[e.target.dataset.id]);
  };
  const closeGallery = () => {
    setGallerySize(0);
  };

  const applyControl = (e, type) => {
    e.stopPropagation();
    const indexofCurrent = allPhotosArr.indexOf(openedPhoto);
    let newIndex =
      type === "next"
        ? (indexofCurrent + 1) % allPhotosArr.length
        : (indexofCurrent - 1) % allPhotosArr.length;
    if (newIndex === -1) newIndex = allPhotosArr.length - 1;
    setOpenedPhoto(allPhotosArr[newIndex]);
  };

  return (
    <>
      <Head>
        <title>{photoset?.modelName}</title>
      </Head>
      <Container
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <PageTitle>{photoset?.modelName}</PageTitle>
        {photoset && allPhotosArr && (
          <PhotosGrid id="photos-grid">
            {allPhotosArr.map((photoSrc, index) => (
              <img
                key={index}
                src={photoSrc.src}
                alt={photoset.modelName}
                onClick={openGallery}
                data-id={index}
                className={
                  photoSrc.height > photoSrc.width
                    ? "vertical-photo"
                    : "horizontal-photo"
                }
              />
            ))}
          </PhotosGrid>
        )}
        <AnimatePresence>
          <GalleryModal
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: gallerySize,
              scale: gallerySize,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <GalleryShadow onClick={closeGallery}></GalleryShadow>
            <CloseButton onClick={closeGallery}>x</CloseButton>
            <Gallery>
              <Image
                src={openedPhoto}
                alt={photoset?.modelName}
                placeholder="blur"
              />
              <ControlButtonsContainer>
                <ControlArrow
                  className="left"
                  onClick={(e) => applyControl(e, "prev")}
                  whileTap={{ scale: 0.9, transformOrigin: "center" }}
                >
                  ←
                </ControlArrow>
                <ControlArrow
                  className="right"
                  onClick={(e) => applyControl(e, "next")}
                  whileTap={{ scale: 0.9, transformOrigin: "center" }}
                >
                  →
                </ControlArrow>
              </ControlButtonsContainer>
            </Gallery>
          </GalleryModal>
        </AnimatePresence>
      </Container>
    </>
  );
};

export default Work;
