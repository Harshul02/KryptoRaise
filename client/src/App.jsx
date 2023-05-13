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
  const isAllCategoryPage = location.pathname === "/categories";
  
  const Searchbar = location.pathname === "/categories";
  const [Search, setSearch] = useState("");
  const [showLandingPage, setShowLandingPage] = useState(false);
  const [showCategoryPage,setshowCategoryPage] = useState(false);
  const [previousLocation, setPreviousLocation] = useState(null);

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
    setshowCategoryPage(location.pathname==='/categories');
  }, [location]);
  

  return (
    <>
      
      {showLandingPage && 
      
     <Landing onHide={handleLandingPageDismiss} />
     
      }
      

      {!showLandingPage && 
     
        <div className="relative sm:-8 p-4 min-h-screen flex flex-row" style={backgroundImageStyle}>
          <div className="sm:flex hidden relative">
            {isProfilePage ? null : <Sidebar hand = {handleLandingPage} iscategorypage={isAllCategoryPage}/>}
          </div>
          <div className="flex-1 max-sm:w-full  mx-auto sm:pr-5">
            <Navbar setSearch={setSearch} isProfilePage={isProfilePage} Searchbar = {Searchbar} />
            <Routes>
            <Route path="/categories" element = {<ComponentPage/>}/>
            <Route path="/dashboard" element={<Home Search={Search} />} />
            <Route path="/profile" element={<Profile Search={Search} />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/campaign-details/:id" element={<CampaignDetails />} />
            <Route path="/:categoryname" element={<CampaignList Search={Search} />} />
         
            </Routes>
             
          </div>
        </div>
        }
      
    </>
  );
};

export default App;
