import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { CountryDetails, Home } from './routes';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = (): void => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} handleThemeChange={changeTheme} />

      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:id' element={<CountryDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
