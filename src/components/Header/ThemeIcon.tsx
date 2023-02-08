import { ThemeIconProps } from './Header.types';
import { DarkIcon, LightIcon } from './icons';

const ThemeIcon: React.FC<ThemeIconProps> = ({ darkMode }) => {
  const classNames = 'h-8 w-8';

  return darkMode ? (
    <LightIcon classNames={classNames} />
  ) : (
    <DarkIcon classNames={classNames} />
  );
};

export default ThemeIcon;
