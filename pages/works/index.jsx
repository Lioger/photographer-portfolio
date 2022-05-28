import { useSelector } from 'react-redux';
import Head from 'next/head';
import Link from 'next/link';
import { Container, PageTitle } from '../../styles/GlobalStyle';
import { pageAnimation } from '../../animations/globalAnimations';
import { PhotoSection, PhotoWrapper, Overlay } from './../../styles/pages/works';
import { photosets } from '../../utils/photosets';

export const getStaticProps = async () => {
  return {
    props: {
      allPhotosets: photosets,
    },
  };
};

const Works = ({ allPhotosets }) => {
  const worksTexts = useSelector((state) => state.texts).pages.find((page) => page.id === 'works');
  return (
    <>
      <Head>
        <title>{worksTexts.title}</title>
      </Head>
      <Container variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <PageTitle>{worksTexts.pageTitle}</PageTitle>
        <PhotoSection>
          {allPhotosets.map((photo) => (
            <Link href={`/works/${photo.id}`} key={photo.id}>
              <PhotoWrapper
                style={{
                  backgroundImage: `url(${photo.cover.src})`,
                  backgroundPositionY: photo.yPosition || '30%',
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
