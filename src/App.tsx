import {useEffect} from 'react';
import {useAppDispatch} from './hooks';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {getWatchPositionUser} from './store/action';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWatchPositionUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
