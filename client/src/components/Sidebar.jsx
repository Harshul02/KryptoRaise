import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sidebar.css'
import { logo, sun } from '../assets';
import { navlinks } from '../constants1';



const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick, tooltipText }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} 
      onClick={handleClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {!isActive ? (
        <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
      ) : (
        <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
      )}
      {showTooltip && <div className="tooltip text-white animate-fade-in">{tooltipText}</div>}
    </div>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[83vh]">
      <Link to="/">
        <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#000000] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          <span className='text-white font-semibold'>CATEGORIES</span>
          {navlinks.map((link) => (
            <Icon 
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if(!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
              tooltipText={link.toolTipText} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Sidebar