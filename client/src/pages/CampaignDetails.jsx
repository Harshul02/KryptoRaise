import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import './campignDetails.css';
import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { thirdweb,tagType } from '../assets';
import {
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";


const CampaignDetails = () => {
  const { state } = useLocation();
  useEffect(() => {
    const highlightTimeout = setTimeout(() => {
      const highlightElement = document.querySelector(".highlight");
      if (highlightElement) {
        highlightElement.classList.add("highlight-end");
      }
    }, 2000); 

    return () => clearTimeout(highlightTimeout);
  }, []);
  const navigate = useNavigate();
  const { donate, getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [name, setName] = useState(''); //change
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);


  const fetchDonators = async () => {
    const data = await getDonations(state.pId);

    setDonators(data);
  }

  useEffect(() => {
    if(contract) fetchDonators();
  }, [contract, address])

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount,name); //change

    navigate('/')
    setIsLoading(false);
  }

  const currentPageURl = window.location.href;
  return (
    <div>
   <button onClick={() => navigate(-1)} className="#25689e text-white px-4 py-2 rounded-md">Back</button>

      {isLoading && <Loader />}

      <div className="w-full flex md:flex-row flex-col mt-4 gap-[30px] ">
        <div className="flex-1 flex-col">
          <img src={state.image} alt="campaign" className="w-full h-[410px] object-cover rounded-xl"/>
          <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
            <div className="absolute h-full bg-[#4acd8d]" style={{ width: `${calculateBarPercentage(state.target, state.amountCollected)}%`, maxWidth: '100%'}}>
            </div>
          </div>
        </div>

        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox title={`Raised of ${state.target}`} value={state.amountCollected} />
          <CountBox title="Total Backers" value={donators.length} />
        </div>
      </div>

      <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Creator</h4>

            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain"/>
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[14px] text-white break-all">{state.owner}</h4>
              </div>
            </div>
            <div className="flex flex-row items-center mt-4">
          <img src={tagType} alt="tag" className="w-[17px] h-[17px] object-contain"/>
          <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">{state.category}</p>
        </div>
          </div>
          
          <div>
            <h4 className="font-epilogue font-semibold text-2xl text-white uppercase">Story</h4>

              <div className="mt-[20px] ">
                <p className="font-epilogue font-normal text-[18px] text-[#808191] leading-[26px] text-justify">{state.description}</p>
              </div>
          </div>

    <div>
  <h4 className="font-epilogue font-semibold text-2xl text-white uppercase mb-4">Top Donators</h4>
  <div className="flex flex-col gap-4 overflow-x-auto text-center  p-4 rounded-xl">
    {donators.length>0 ? (
  <div className="flex justify-between items-center bg-[#0c2c46] text-white rounded-2xl px-6 py-2">
    <p className="font-epilogue font-bold text-lg">Name</p>
    <p className="font-epilogue font-bold text-lg">Address</p>
    <p className="font-epilogue font-bold text-lg">Donation Amount</p>
  </div>): ("")}
  {donators.length > 0 ? donators.map((item, index) => (
    <div key={`${item.donator}-${index}`} className="flex justify-between items-center bg-[#15446a] hover:bg-[#113a5b] rounded-full px-6 py-2">
      <div className="flex items-center">
        <span className="text-white text-lg font-bold mr-2">{index + 1}</span>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
          <span className="text-white text-xl font-bold">{item.donatorName.charAt(0)}</span>
        </div>
        <span className="font-epilogue font-normal text-lg text-white ml-4  ">{item.donatorName}</span>
      </div>
      <p className="font-epilogue font-normal text-lg text-white  ">{item.donator}</p>
      <p className="font-epilogue font-normal text-lg text-white  ">{item.donation} ETH</p>
    </div>
  )) : (
    <p className="font-epilogue font-normal text-lg text-gray-600 text-justify py-4">No donations yet. Be the first one!</p>
  )}
</div>


</div>
        </div>

        <div className="flex-1">
          <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Fund</h4>   

          <div className="mt-[20px] flex flex-col p-4 bg-[#081c2c] rounded-[10px]">
            <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center font-bold text-[#f2f2f5]">
              Fund the campaign
            </p>
            <div className="mt-[30px]">
            <input 
                type="text"
                placeholder="Name"
                step="0.01"
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px] mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input 
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              

              <div className="my-[20px] p-4 bg-[#071420] rounded-[10px]">
                <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">Back it because you believe in it.</h4>
                <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">Support the project for no reward, just because it speaks to you.</p>
              </div>

              <CustomButton
                btnType="button"
                title="Fund Campaign"
                styles="w-full bg-[#8c6dfd]"
                handleClick={handleDonate}
              />
            </div>
            <div  id='sharingiscaring' className='highlight my-3 py-2 px-3'>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase ">Share</h4>

              <div className="mt-[20px]">
                <FacebookShareButton 
                url={currentPageURl}
                quote={"Please donate to help poor people"}
                hashtag="#donateforpoor"
                className="hover hover:scale-125 duration-300">
                 <FacebookIcon size={40} round={true} />
              </FacebookShareButton>

              <EmailShareButton
              url={currentPageURl}
              subject = {"Crowd Funding"}
              body={`${state.description}\nPlease donate to help other people\nDonate here: `}
              separator={''}
              className="hover hover:scale-125 mx-4 duration-300">
                <EmailIcon size={40} round={true} />
              </EmailShareButton>

              {/* <LinkedinShareButton
              url={currentPageURl}
              title={"Please Donate for " + state.owner}
              summary={state.description}
              source={"www.google.com"}
              className="hover hover:scale-125 duration-300">
                <LinkedinIcon size={40} round={true} />
              </LinkedinShareButton> */}

              <TelegramShareButton
              url = {currentPageURl}
              title = {"Please donate for " + state.owner+ "\n" + state.description}
              summary={state.description} 
              className="hover hover:scale-125 duration-300">
                <TelegramIcon size={40} round={true} />
              </TelegramShareButton>

              <TwitterShareButton
              url={currentPageURl+ " \n"}
              title={"Please donate for " + state.owner+"\n"}
              via={"MyFunding\n"}
              hashtags={["donateforpoor"]}
              className="hover hover:scale-125 mx-4 duration-300">
                <TwitterIcon size={40} round={true} />
              </TwitterShareButton>

              <WhatsappShareButton
              url={currentPageURl}
              title = {`${state.description}\nPlease donate for ${state.owner}\nDonate here: `}
              separator={" "}
              className="hover hover:scale-125 duration-300">
                <WhatsappIcon size={40} round={true} />
              </WhatsappShareButton>
              </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignDetails