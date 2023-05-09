import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { opoy7 } from './assets';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile, CampaignList } from './pages';
import Landing from './pages/Landing';

const App = () => {
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile" || location.pathname === "/create-campaign" || location.pathname.startsWith("/campaign-details");

  const [Search, setSearch] = useState("");
  const [showLandingPage, setShowLandingPage] = useState(true); // Add state to control the visibility of the landing page

  const backgroundImageStyle = {
    backgroundImage: `url(${opoy7})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  };

  const handleLandingPageDismiss = () => {
    setShowLandingPage(false); // Hide the landing page when dismissed
  };

  return (
    <>
      {showLandingPage && <Landing onDismiss={handleLandingPageDismiss} />} {/* Render the landing page if showLandingPage is true */}
      {!showLandingPage && (
        <div className="relative sm:-8 p-4 min-h-screen flex flex-row" style={backgroundImageStyle}>
          <div className="sm:flex hidden relative">
            {isProfilePage ? null : <Sidebar />}
          </div>
          <div className="flex-1 max-sm:w-full  mx-auto sm:pr-5">
            <Navbar setSearch={setSearch} isProfilePage={isProfilePage} />

            <Routes>
              <Route path="/" element={<Home Search={Search} />} />
              <Route path="/profile" element={<Profile Search={Search} />} />
              <Route path="/create-campaign" element={<CreateCampaign />} />
              <Route path="/campaign-details/:id" element={<CampaignDetails />} />
              <Route path="/:categoryname" element={<CampaignList Search={Search} />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
