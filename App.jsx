import React, { useState } from 'react';
import Header from './Components/Header';
import ProfileForm from './Components/Profileform';
import InterestsList from './Components/InterestsList';
import ColorPreferences from './Components/ColorPreferences';

const App = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    interests: [],
    favoriteColor: '',
  });

  const interestsOptions = ['Sports', 'Music', 'Reading', 'Traveling'];
  const colorOptions = ['Red', 'Blue', 'Green', 'Yellow'];

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      interests: checked
        ? [...prevUser.interests, value]
        : prevUser.interests.filter((interest) => interest !== value),
    }));
  };

  const handleColorChange = (e) => {
    setUser({ ...user, favoriteColor: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile Updated Successfully!');
    console.log('Updated User:', user);
  };

  return (
    <div className='bg-gray-300 p-20 m-20 text-xl mb-5 font-serif  '>
      <div className='pb-5'>

      <Header />
      </div>
      <div className='pb-3'>

      <ProfileForm user={user} setUser={setUser} onSubmit={handleSubmit} />
      </div>
      <div className='pb-3'>
      <InterestsList
        interests={interestsOptions}
        selectedInterests={user.interests}
        onChange={handleInterestChange}
        />
        </div>
        <div className=''>

      <ColorPreferences
        colors={colorOptions}
        selectedColor={user.favoriteColor}
        onChange={handleColorChange}
        />
      {user.interests.length === 0 && <p>No interests selected.</p>}
        </div>
        <div className='text-center pt-10'>
        <button className="bg-gray-500 text-white px-3 py-2 rounded-xl " type="button" onClick={handleSubmit}>
        Save Profile
      </button>
        </div>
    </div>
  );
};

export default App;