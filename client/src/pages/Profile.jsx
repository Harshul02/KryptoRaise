import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'
import { useParams } from 'react-router-dom';

const Profile = ({Search}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const {categoryname} = useParams();

  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    var filteredCampaigns = data;
    console.log(data)
    if(categoryname){
     filteredCampaigns = data.filter((campaign) => (campaign).category === categoryname);
    }

  
    setCampaigns(filteredCampaigns);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract,categoryname]);

  return (
    <DisplayCampaigns 
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
      Search = {Search}
      categoryname={categoryname}
    />
  )
}

export default Profile