import Head from "next/head";
import Link from "next/link";
import { Container, PageTitle } from "../../components/GlobalStyle";
import { pageAnimation } from "../../animations/globalAnimations";
import {
  PhotoSection,
  PhotoWrapper,
  Overlay,
} from "./../../styles/pages/works";
import { photos } from "../../utils/photos";

const Works = ({ texts }) => {
  const worksTexts = texts.pages.find((page) => page.id === "works");
  return (
    <>
      <Head>
        <title>{worksTexts.title}</title>
      </Head>
      <Container
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <PageTitle>{worksTexts.pageTitle}</PageTitle>
        <PhotoSection>
          {photos.map((photo) => (
            <Link href={`/works/${photo.id}`} key={photo.id}>
              <PhotoWrapper
                style={{
                  backgroundImage: `url(${photo.cover.src})`,
                  backgroundPositionY: photo.yPosition || "30%",
                }}
              >
                <Overlay>{photo.modelName}</Overlay>
              </PhotoWrapper>
            </Link>
          ))}
        </PhotoSection>
      </Container>
    </>
  );
};

export default Works;
