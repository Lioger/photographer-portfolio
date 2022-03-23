import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle, { Hide } from '../components/GlobalStyle';
import Header from '../components/Header';
import { texts } from '../utils/texts';

const MyApp = ({ Component, pageProps }) => {
  const chosenLang = 'en';
  const router = useRouter();
  const textsForSelectedLang = texts.find(textsObj => textsObj.lang === chosenLang);
  return (
    <>
      <GlobalStyle />
      <Header links={textsForSelectedLang.nav} />
      <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
        <Hide key={router.asPath}>
          <Component {...pageProps} texts={textsForSelectedLang} />
        </Hide>
      </AnimatePresence>
    </>
  );
};

export default MyApp;
