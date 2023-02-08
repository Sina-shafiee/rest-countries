import ThemeIcon from './ThemeIcon';
import { HeaderProps } from './Header.types';

export const Header: React.FC<HeaderProps> = ({
  handleThemeChange,
  darkMode
}: HeaderProps) => {
  // check src/styles/index.css file for custom className styles
  return (
    <header className='header open'>
      <div className='container navbar'>
        <h1>Where in the world?</h1>
        <section className='flex items-center gap-2'>
          <button onClick={handleThemeChange}>
            <ThemeIcon darkMode={darkMode} />
          </button>
        </section>
      </div>
    </header>
  );
};
