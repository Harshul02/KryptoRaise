import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sidebar.css'
import {  krypti } from '../assets';
import { navlinks } from '../constants1';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick, tooltipText }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className={`w-[48px] h-[48px] rounded-[10px] ${isActive !== name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} 
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

const Sidebar = ({ hand, iscategorypage }) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(localStorage.getItem('activeLink') || 'dashboard');

  useEffect(() => {
    localStorage.setItem('activeLink', isActive);
  }, [isActive]);
  
  useEffect(() => {
    return () => {
      localStorage.removeItem('activeLink');
    };
  }, []);
  const handleLinkClick = (link) => {
    if (!link.disabled) {
      setIsActive(link.name);
      navigate(link.link);
    }
  };

  const handleDashboardClick = () => {
    setIsActive('dashboard');
    hand();
  };

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[83vh]">
      {!iscategorypage && (
        <button onClick={handleDashboardClick}>
          <img src={krypti} alt="logo" className="w-[54px] h-[54px]" />
        </button>
      )}
      {iscategorypage && (
        <button onClick={handleDashboardClick}>
          <img src={krypti} alt="logo" className="w-[54px] h-[54px]" />
        </button>
      )}

      {!iscategorypage && (
        <div className="flex-1 flex flex-col justify-between items-center bg-[#000000] rounded-[20px] w-[76px] py-4 mt-10">
          <div className="flex flex-col justify-center items-center gap-2.5">
            <span className="text-white font-semibold text-sm px-2 py-1 rounded-full border-b-2 border-gray-700">
              <Link to="/categories">
                <button>CATEGORIES</button>
              </Link>
            </span>
            {navlinks.map((link) => (
              <Icon
                key={link.name}
                {...link}
                isActive={isActive}
                handleClick={() => handleLinkClick(link)}
                tooltipText={link.toolTipText}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
