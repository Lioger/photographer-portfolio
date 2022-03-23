import Head from 'next/head';
import Link from 'next/link';
import { Container } from '../components/GlobalStyle';
import { PhotosGrid } from '../styles/pages/homepage';
import { pageAnimation } from './../animations/globalAnimations';
import { photos } from '../utils/photos';

const Home = () => (
  <>
    <Head>
      <title>XENIA DULISHKEVICH</title>
    </Head>
    <Container variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      <PhotosGrid>
        {photos.map(photo => (
          <Link href={`/works/${photo.id}`} key={photo.id}>
            <img src={photo.cover.src} alt={photo.modelName} />
          </Link>
        ))}
      </PhotosGrid>
    </Container>
  </>
);

export default Home;
