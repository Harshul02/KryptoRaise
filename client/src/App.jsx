import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { opoy7 } from './assets';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile, CampaignList } from './pages';
import Landing from './pages/Landing';
import ComponentPage from './pages/ComponentPage';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isProfilePage = location.pathname === "/profile" || location.pathname === "/create-campaign" || location.pathname.startsWith("/campaign-details");

  const [Search, setSearch] = useState("");
  const [showLandingPage, setShowLandingPage] = useState(false);
  const [showCategoryPage,setshowCategoryPage] = useState(false);

  const backgroundImageStyle = {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundColor:'black'
  };
 

  const handleLandingPageDismiss = () => {
    navigate('/categories');
    setShowLandingPage(false);
    setshowCategoryPage(true);
  };

  const handleLandingPage = () => {
    navigate('/');
    setShowLandingPage(true);
    setshowCategoryPage(false);
  };
  useEffect(() => {
    setShowLandingPage(location.pathname==='/');
  }, [location]);
  useEffect(() => {
    setshowCategoryPage(location.pathname==='/categories');
  }, [location]);

  return (
    <>
      {showLandingPage && 
      <Landing onHide={handleLandingPageDismiss} />}
      
      {showCategoryPage &&
      <ComponentPage/>}

      
      {!showLandingPage && !showCategoryPage && (
        <div className="relative sm:-8 p-4 min-h-screen flex flex-row" style={backgroundImageStyle}>
          <div className="sm:flex hidden relative">
            {isProfilePage ? null : <Sidebar hand = {handleLandingPage} />}
          </div>
          <div className="flex-1 max-sm:w-full  mx-auto sm:pr-5">
            <Navbar setSearch={setSearch} isProfilePage={isProfilePage} />

            <Routes>
              <Route path="/dashboard" element={<Home Search={Search} />} />
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
