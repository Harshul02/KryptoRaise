import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logo, menu, search, thirdweb,logout } from '../assets';
import "./navbar.css";


import FundCard from './FundCard';
import { loader } from '../assets';


const DisplayCampaigns = ({ title, isLoading, campaigns,Search}) => {
  const navigate = useNavigate();
  const filteredCampaigns = campaigns.filter((campaign) =>{

    return Search.toLowerCase()=== '' ? campaign : campaign.title.toLowerCase().includes(Search.toLowerCase())
  });

  const count = filteredCampaigns.length;

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign })
  }
  
  return (
    
    <div className="ml-0 sm:ml-20">
      
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({count})</h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )}

        {!isLoading && campaigns.length > 0 && filteredCampaigns.map((campaign) => <FundCard 
          key={campaign.id}
          {...campaign}
          handleClick={() => handleNavigate(campaign)}
        />)}
      </div>
    </div>
  )
}

export default DisplayCampaigns