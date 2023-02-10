import { Fragment, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CountryDetails, Home } from './routes';
import { Header } from './components';
import ScrollToTop from './utils/ScrollToTop';

const DARK_MODE_STORAGE_KEY = 'theme';
const DARK_MODE_STORAGE_VALUE_DARK = 'dark';
const DARK_MODE_STORAGE_VALUE_LIGHT = 'light';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const localStorageValue = localStorage.getItem(DARK_MODE_STORAGE_KEY);
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    setDarkMode(
      localStorageValue === DARK_MODE_STORAGE_VALUE_DARK ||
        (!localStorageValue && prefersDarkMode)
    );
  }, []);

  useEffect(() => {
    document.documentElement.classList[darkMode ? 'add' : 'remove']('dark');

    localStorage.setItem(
      DARK_MODE_STORAGE_KEY,
      darkMode ? DARK_MODE_STORAGE_VALUE_DARK : DARK_MODE_STORAGE_VALUE_LIGHT
    );
  }, [darkMode]);

  const changeTheme = (): void => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Fragment>
      <Header darkMode={darkMode} handleThemeChange={changeTheme} />

      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:name' element={<CountryDetails />} />
      </Routes>
    </Fragment>
  );
}

export default App;
