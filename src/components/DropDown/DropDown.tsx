import { useState } from 'react';

export const DropDown: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <select
      className='select'
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <option value=''>Filter by Region</option>
      <option value='Africa'>Africa</option>
      <option value='America'>America</option>
      <option value='Asia'>Asia</option>
      <option value='Europe'>Europe</option>
      <option value='Oceania'>Oceania</option>
    </select>
  );
};
