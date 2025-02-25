import React, { useState } from 'react';

const ProfileForm = ({ user, setUser, onSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form onSubmit={onSubmit} className=''>
      <div className='pb-3'>
        <label className='text-xl font-bold'>Name:</label>
        <input className='bg-white m-2 border'
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='pb-3'>
        <label className='text-xl font-bold'>Email:</label>
        <input className='bg-white m-2 border'
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
      </div >
      {/* <div className=''>
      <button className=' bg-gray-500 text-white px-3 py-2 rounded-xl ' type="submit">Save</button>
      </div> */}
    </form>
  );
};

export default ProfileForm;