import { useEffect, useState } from 'react';
import ThemeIcon from './ThemeIcon';
import { HeaderProps } from './Header.types';
import { Link } from 'react-router-dom';

export const Header: React.FC<HeaderProps> = ({
  handleThemeChange,
  darkMode
}: HeaderProps) => {
  // check src/styles/index.css file for custom className styles
  const [scrollDirection, setScrollDirection] = useState<string>('none');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      let direction: string;
      if (window.pageYOffset > lastScroll) {
        direction = 'down';
      } else {
        direction = 'up';
      }
      setScrollDirection(direction);
      lastScroll = window.pageYOffset;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollDirection === 'down') {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }, [scrollDirection]);

  return (
    <header className={`header ${menuOpen ? 'open' : null}`}>
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
