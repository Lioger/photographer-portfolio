import Head from 'next/head';
import Link from 'next/link';
import { Container, PageTitle, LinkButton, InlineIcon, Hide } from '../styles/GlobalStyle';
import { AboutTextBlock } from './../styles/pages/about';
import { pageAnimation, textAnimation } from '../animations/globalAnimations';

const Home = ({ texts }) => {
  const aboutTexts = texts.pages.find((page) => page.id === 'about');
  return (
    <Container variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Head>
        <title>{aboutTexts.title}</title>
      </Head>
      <PageTitle>{aboutTexts.pageTitle}</PageTitle>
      {aboutTexts.textBlocks?.length &&
        aboutTexts.textBlocks.map((textBlock, index) => (
          <Hide key={index}>
            <AboutTextBlock variants={textAnimation}>{textBlock}</AboutTextBlock>
          </Hide>
        ))}
      {aboutTexts.cta?.length &&
        aboutTexts.cta.map((ctaObj) => (
          <div key={ctaObj.id}>
            <Hide>
              <AboutTextBlock variants={textAnimation}>{ctaObj?.text}</AboutTextBlock>
            </Hide>
            <Hide key={ctaObj.id}>
              <AboutTextBlock variants={textAnimation}>
                {ctaObj?.link && (
                  <Link href={ctaObj.link}>
                    <LinkButton>
                      {ctaObj?.buttonText} <InlineIcon>&#8594;</InlineIcon>
                    </LinkButton>
                  </Link>
                )}
              </AboutTextBlock>
            </Hide>
          </div>
        ))}
    </Container>
  );
};

export default Home;

// import Head from 'next/head';
// import Link from 'next/link';
// import { Container } from '../components/GlobalStyle';
// import { PhotosGrid } from '../styles/pages/homepage';
// import { pageAnimation } from './../animations/globalAnimations';
// import { photos } from '../utils/photos';

// const Home = () => (
//   <>
//     <Head>
//       <title>XENIA DULISHKEVICH</title>
//     </Head>
//     <Container variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
//       <PhotosGrid>
//         {photos.map(photo => (
//           <Link href={`/works/${photo.id}`} key={photo.id}>
//             <img src={photo.cover.src} alt={photo.modelName} />
//           </Link>
//         ))}
//       </PhotosGrid>
//     </Container>
//   </>
// );

// export default Home;
