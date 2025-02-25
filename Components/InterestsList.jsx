import React from 'react';

const InterestsList = ({ interests, selectedInterests, onChange }) => {
  return (
    <div className='pb-3'>
      <h3 className='text-xl font-bold pb-3'>Interests</h3>
      {interests.map((interest, index) => (
        <label className='p-3'  key={index}> 
          <input 
            type="checkbox"
            name="interests"
            value={interest}
            checked={selectedInterests.includes(interest)}
            onChange={onChange}
          />
          {interest}
        </label>
      ))}
    </div>
  );
};

export default InterestsList;