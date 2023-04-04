import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { opoy7 } from './assets';



import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {

  const [Search,setSearch] = useState("");

  const backgroundImageStyle = {
    backgroundImage: `url(${opoy7})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return (
    <div className="relative sm:-8 p-4 min-h-screen flex flex-row" style={backgroundImageStyle}>
      <div className="sm:flex hidden relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full  mx-auto sm:pr-5">
        <Navbar setSearch={setSearch} />

        <Routes>
          <Route path="/" element={<Home Search={Search}/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App