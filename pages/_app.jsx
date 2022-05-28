import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle, { Hide } from '../styles/GlobalStyle';
import Header from '../components/Header';
import reducers from '../reducers';

export const store = createStore(reducers);

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Hide key={router.asPath}>
          <Component {...pageProps} />
        </Hide>
      </AnimatePresence>
    </Provider>
  );
};

export default MyApp;
