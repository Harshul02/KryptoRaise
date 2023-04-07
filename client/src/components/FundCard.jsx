import React from 'react';
import { tagType, thirdweb } from '../assets';
import { daysLeft } from '../utils';

const FundCard = ({ owner, title,name, description, target, deadline, amountCollected, image, handleClick },form) => {
  const remainingDays = daysLeft(deadline);
  const progressPercentage = Math.floor((amountCollected / target) * 100);
  
  return (
    <div>
      {progressPercentage<100  && remainingDays>=0 &&  (
    <div className="sm:w-[288px] w-full rounded-[15px] bg-[#081c2c] cursor-pointer shadow-lg transform hover:scale-105 transition-all duration-300" onClick={handleClick}>
      <div className="relative">
        <img src={image} alt="fund" className="w-full h-[158px] object-cover rounded-t-[15px]"/>
        <div className="absolute top-0 right-0 bg-[#d63031] text-white py-1 px-2 rounded-bl-[15px]">{remainingDays} days left</div>
      </div>

      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center mb-[18px]">
          <img src={tagType} alt="tag" className="w-[17px] h-[17px] object-contain"/>
          <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">Education</p>
        </div>

        <div className="block">
          <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">{title}</h3>
          <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">{description}</p>
        </div>
        <div className="flex flex-col mt-[15px]">
          <div className="flex items-center justify-between text-[#b2b3bd] text-sm font-semibold">
            <span>Progress</span>
            <span>{progressPercentage}%</span>
          </div>
          <progress max={target} value={amountCollected} className="w-full h-2 bg-[#3b3b3b] mt-[5px]" style={{ borderRadius: '5px' }} />
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{amountCollected}</h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Raised of {target}</p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{remainingDays}</h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Days Left</p>
          </div>
        </div>

        <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <img src={thirdweb} alt="user" className="w-1/2 h-1/2 object-contain"/>
          </div>
          <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">{owner}</span></p>
        </div>
      </div>
    </div>

      )}

    </div>
  )
}

export default FundCard
