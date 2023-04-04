import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logo, menu, search, thirdweb,logout } from '../assets';
import "./navbar.css";


import FundCard from './FundCard';
import { loader } from '../assets';

const DisplayCampaigns = ({ title, isLoading, campaigns,Search}) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign })
  }
  
  return (
    
    <div className="ml-0 sm:ml-20">
      {/* <div class="search-box">
  <div class="search-button">
    <img src={search} alt="search" />
  </div>
  <input type="text" class="search-input " onChange={(e)=>setSearch(e.target.value.toLowerCase())} placeholder="Search for campaigns" />
<span className='text-white py-1 mr-2 font-semibold '>Search</span>
</div> */}
      
        
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({campaigns.length})</h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )}

        {!isLoading && campaigns.length > 0 && campaigns.filter((campaign)=>{
          return Search.toLowerCase()=== '' ? campaign : campaign.title.toLowerCase().includes(Search)
        }).map((campaign) => <FundCard 
          key={campaign.id}
          {...campaign}
          handleClick={() => handleNavigate(campaign)}
        />)}
      </div>
    </div>
  )
}

export default DisplayCampaigns