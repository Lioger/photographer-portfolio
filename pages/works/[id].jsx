import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Container, PageTitle } from "../../components/GlobalStyle";
import { pageAnimation } from '../globalAnimations';
import { PhotoSection } from './styles';
import { photos } from '../../utils/photos';

const Work = () => {
  const router = useRouter();
  const pathArr = router.asPath.split('/');
  const photoId = Number(pathArr[pathArr.length - 1]);
  const photoset = photos.find(photo => photo.id === photoId);

  return (
    <>
      <Head>
        <title>{photoset?.modelName}</title>
      </Head>
      <Container variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
        <PageTitle>{photoset?.modelName}</PageTitle>
        {photoset && (
          <PhotoSection>
            <Image src={photoset.cover} alt={photoset.modelName} placeholder='blur' />
            {photoset.photos.map((photo, index) => (
              <Image src={photo} alt={photoset.modelName} key={index} placeholder='blur' />
            ))}
          </PhotoSection>
        )}
      </Container>
    </>
  );
};

export default Work;
