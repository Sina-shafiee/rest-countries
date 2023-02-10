import { DropDownProps } from './DropDown.types';

export const DropDown: React.FC<DropDownProps> = ({
  value,
  handleSelectChange
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    handleSelectChange(event.target.value);
  };

  return (
    <select className='select' value={value} onChange={handleChange}>
      <option value=''>Filter by Region</option>
      <option value='Africa'>Africa</option>
      <option value='America'>America</option>
      <option value='Asia'>Asia</option>
      <option value='Europe'>Europe</option>
      <option value='Oceania'>Oceania</option>
    </select>
  );
};
