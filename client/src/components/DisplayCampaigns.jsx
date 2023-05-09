import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./navbar.css";


import FundCard from './FundCard';
import { loader } from '../assets';


const DisplayCampaigns = ({ title, isLoading, campaigns,Search,categoryname}) => {
  const navigate = useNavigate();
  const filteredCampaigns = campaigns.filter((campaign) =>{
    if(!categoryname && Search.toLowerCase()==''){
      return campaign
    }

  });
  const count = filteredCampaigns.length;
  const campaign1 = campaigns.filter((campaign)=>{
    return campaign.category==="Environmental Causes" && campaign.title.toLowerCase().includes(Search.toLowerCase())
  })
  const count1 = campaign1.length;
  const campaign2 = campaigns.filter((campaign)=>{
    return  campaign.category === "Education and Learning" && campaign.title.toLowerCase().includes(Search.toLowerCase())
  })
  const count2 = campaign2.length;
  const campaign3 = campaigns.filter((campaign)=>{
    return  campaign.category === "Health and Medical Expenses" && campaign.title.toLowerCase().includes(Search.toLowerCase())
  })
  const count3 = campaign3.length;
  const campaign4 = campaigns.filter((campaign)=>{
    return  campaign.category === "Humanitarian Aid and Disaster Relief" && campaign.title.toLowerCase().includes(Search.toLowerCase())
  })
  const count4 = campaign4.length;
  const campaign5 = campaigns.filter((campaign)=>{
    return  campaign.category === "Personal and Family Emergencies" && campaign.title.toLowerCase().includes(Search.toLowerCase())
  })
  const count5 = campaign5.length;
  const campaign6 = campaigns.filter((campaign)=>{
    return  campaign.category === "Social Causes and Activism" && campaign.title.toLowerCase().includes(Search.toLowerCase())
  })
  const count6 = campaign6.length;
  const campaign7 = campaigns.filter((campaign)=>{
    return  campaign.category === "Technology and Innovation" && campaign.title.toLowerCase().includes(Search.toLowerCase())
  })
  const count7 = campaign7.length;
  const campaign8 = campaigns.filter((campaign)=>{
    return  campaign.category === "Wildlife and Animal Conservation" && campaign.title.toLowerCase().includes(Search.toLowerCase())
  })
  const count8 = campaign8.length;
  const campaign9 = campaigns.filter((campaign)=>{
    return  campaign.category === "Others" && campaign.title.toLowerCase().includes(Search.toLowerCase())
  })
  const count9 = campaign9.length;





  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign})
  }
  
  return (

    
    
    <div className="ml-0 sm:ml-20">
      {isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            No Campaigns to Display
          </p>
        )}
      :
      
      
{!isLoading && filteredCampaigns.length>0 && (
  
         <div id='all' >
      
      <h1 className="font-epilogue font-semibold text-18 text-white text-left">
  {title} ({count})
</h1>


      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        
      

        

        {!isLoading && campaigns.length > 0 && filteredCampaigns.map((campaign) => <FundCard 
          key={campaign.id}
          {...campaign}
          handleClick={() => handleNavigate(campaign)}
        />)}
 <hr className="my-8 mx-0 w-full" style={{ height: '2px', backgroundImage: 'linear-gradient(to right, transparent, #ccc, transparent)', border: 'none' }} />
      </div>  
      </div>
)}
 
      
{!isLoading && campaign1.length>0 &&(
    
      <div>
        {isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            No Campaigns To Display
          </p>
        )} 
        <h1 className="font-epilogue font-semibold text-[18px]  text-white text-left">Environmental Causes ({count1})</h1>

    <div className="flex flex-wrap mt-[20px] gap-[26px]">
 
  {campaign1.map((campaign) => <FundCard 
    key={campaign.id}
    {...campaign}
    handleClick={() => handleNavigate(campaign)}
  />)}
           <hr className="my-8 mx-0 w-full" style={{ height: '2px', backgroundImage: 'linear-gradient(to right, transparent, #ccc, transparent)', border: 'none' }} />
</div>
</div>

)}

     
{!isLoading && campaign2.length>0 &&(
<div>
{isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
             No Campaigns To Display
          </p>
        )}
  
<h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Education and Learning ({count2})</h1>

<div className="flex flex-wrap mt-[20px] gap-[26px]">
 
   {campaign2.map((campaign) => <FundCard 
    key={campaign.id}
    {...campaign}
    handleClick={() => handleNavigate(campaign)}
  />)}
 <hr className="my-8 mx-0 w-full" style={{ height: '2px', backgroundImage: 'linear-gradient(to right, transparent, #ccc, transparent)', border: 'none' }} />
</div>

</div>
)}

{!isLoading && campaign3.length>0 && ( 
<div >
{isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
             No Campaigns To Display
          </p>
        )}

<h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Health and Medical Expenses ({count3})</h1>

<div className="flex flex-wrap mt-[20px] gap-[26px]">
 
  {campaign3.map((campaign) => <FundCard 
    key={campaign.id}
    {...campaign}
    handleClick={() => handleNavigate(campaign)}
  />)}
   <hr className="my-8 mx-0 w-full" style={{ height: '2px', backgroundImage: 'linear-gradient(to right, transparent, #ccc, transparent)', border: 'none' }} />
</div>

</div>
)}

{!isLoading && campaign4.length>0 && (
<div >
{isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
             No Campaigns To Display
          </p>
        )}
<h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Humanitarian Aid and Disaster Relief ({count4})</h1>

<div className="flex flex-wrap mt-[20px] gap-[26px]">
  

  
  
   { campaign4.map((campaign) => <FundCard 
    key={campaign.id}
    {...campaign}
    handleClick={() => handleNavigate(campaign)}
  />)}
   <hr className="my-8 mx-0 w-full" style={{ height: '2px', backgroundImage: 'linear-gradient(to right, transparent, #ccc, transparent)', border: 'none' }} />
</div>

</div>

)}

{!isLoading && campaign5.length>0 &&(

<div >
{isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
             No Campaigns To Display
          </p>
        )}




<h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Personal and Family Emergencies ({count5})</h1>

<div className="flex flex-wrap mt-[20px] gap-[26px]">
  
  
   { campaign5.map((campaign) => <FundCard 
    key={campaign.id}
    {...campaign}
    handleClick={() => handleNavigate(campaign)}
    
  />)}
   <hr className="my-8 mx-0 w-full" style={{ height: '2px', backgroundImage: 'linear-gradient(to right, transparent, #ccc, transparent)', border: 'none' }} />
</div>

</div>
)}

{!isLoading && campaign6.length>0 && (
<div >
{isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
             No Campaigns To Display
          </p>
        )}
<h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Social Causes and Activism ({count6})</h1>

<div className="flex flex-wrap mt-[20px] gap-[26px]">
  {isLoading && (
    <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
  )}

  {!isLoading && campaigns.length === 0 && (
    <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
      You have not created any campigns yet
    </p>
  )}
  
   {!isLoading && campaigns.length > 0 && campaign6.map((campaign) => <FundCard 
    key={campaign.id}
    {...campaign}
    handleClick={() => handleNavigate(campaign)}
   
  />)}
   <hr className="my-8 mx-0 w-full" style={{ height: '2px', backgroundImage: 'linear-gradient(to right, transparent, #ccc, transparent)', border: 'none' }} />
</div>
</div>

)}

{!isLoading && campaign7.length>0 && (
<div >
{isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaign7.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            No Campaigns To Display
          </p>
        )}

<h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Technology and Innovation ({count7})</h1>

<div className="flex flex-wrap mt-[20px] gap-[26px]">
 
  
   {campaign7.map((campaign) => <FundCard 
    key={campaign.id}
    {...campaign}
    handleClick={() => handleNavigate(campaign)}
  />)}
  <hr className="my-8 mx-0 w-full" style={{ height: '2px', backgroundImage: 'linear-gradient(to right, transparent, #ccc, transparent)', border: 'none' }} />
  

</div>

</div>
)}

{!isLoading && campaign8.length>0 && (
<div >
{isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            No Campaigns To Display
          </p>
        )}

<h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Wildlife and Animal Conservation ({count8})</h1>

<div className="flex flex-wrap mt-[20px] gap-[26px]">
 
  
   {campaign8.map((campaign) => <FundCard 
    key={campaign.id}
    {...campaign}
    handleClick={() => handleNavigate(campaign)}
  />)}
  <hr className="my-8 mx-0 w-full" style={{ height: '2px', backgroundImage: 'linear-gradient(to right, transparent, #ccc, transparent)', border: 'none' }} />
</div>

</div>
)}

{!isLoading && campaign9.length>0 && (
<div id='others'>
{isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
             No Campaigns To Display
          </p>
        )}

<h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Others ({count9})</h1>

<div className="flex flex-wrap mt-[20px] gap-[26px]">
 
  
   {campaign9.map((campaign) => <FundCard 
    key={campaign.id}
    {...campaign}
    handleClick={() => handleNavigate(campaign)}
  />)}
  <hr className="my-8 mx-0 w-full" style={{ height: '2px', backgroundImage: 'linear-gradient(to right, transparent, #ccc, transparent)', border: 'none' }} />
</div>

</div>
)}



</div>


   



    

    
  )
}

export default DisplayCampaigns