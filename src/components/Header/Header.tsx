import ThemeIcon from './ThemeIcon';
import { HeaderProps } from './Header.types';
import { Link } from 'react-router-dom';

export const Header: React.FC<HeaderProps> = ({
  handleThemeChange,
  darkMode
}: HeaderProps) => {
  // check src/styles/index.css file for custom className styles
  return (
    <header className='header open'>
      <div className='container navbar'>
        <Link to='/'>
          <h1>Where in the world?</h1>
        </Link>
        <section className='flex items-center gap-2'>
          <button onClick={handleThemeChange}>
            <ThemeIcon darkMode={darkMode} />
          </button>
        </section>
      </div>
    </header>
  );
};
