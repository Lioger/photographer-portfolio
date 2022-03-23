import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Container, PageTitle, InlineIcon } from "../../components/GlobalStyle";
import { pageAnimation } from '../../animations/globalAnimations';
import { PhotoSection, PhotoWrapper, SeeMoreButton } from './../../styles/pages/works';
import { photos } from '../../utils/photos';

const Works = ({ texts }) => {
  const worksTexts = texts.pages.find(page => page.id === 'works');
  return (
    <>
      <Head>
        <title>{worksTexts.title}</title>
      </Head>
      <Container variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
        <PageTitle>{worksTexts.pageTitle}</PageTitle>
        <PhotoSection>
          {photos.map(photo => (
            <PhotoWrapper key={photo.id}>
              <Image src={photo.cover} alt={photo.modelName} placeholder='blur' />
              <Link href={`/works/${photo.id}`}>
                <SeeMoreButton>
                  See more <InlineIcon>&#8594;</InlineIcon>
                </SeeMoreButton>
              </Link>
            </PhotoWrapper>
          ))}
        </PhotoSection>
      </Container>
    </>
  );
};

export default Works;
