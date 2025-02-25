import React from 'react';

const ColorPreferences = ({ colors, selectedColor, onChange }) => {
  return (
    <div className='pb-3'>
      <h3 className='text-xl font-bold pb-3'>Favorite Color</h3>
      {colors.map((color, index) => (
        <label className='p-5' key={index}>
          <input 
            type="radio"
            name="color"
            value={color}
            checked={selectedColor === color}
            onChange={onChange}
          />
          {color}
        </label>
      ))}
    </div>
  );
};

export default ColorPreferences;