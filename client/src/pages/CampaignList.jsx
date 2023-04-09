import React from 'react'
import { useState,useEffect } from 'react'
import { DisplayCampaigns } from '../components'
import { useStateContext } from '../context'
import { useParams } from 'react-router-dom'

const CampaignList = ({Search}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);
    const {categoryname} = useParams();
    const { address, contract, getCampaigns} = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    console.log(data)
    const filteredCampaigns = data.filter((campaign) => campaign.category === categoryname);
    console.log(filteredCampaigns);
  
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
      categoryname = {categoryname}
    />
  )
}

export default CampaignList