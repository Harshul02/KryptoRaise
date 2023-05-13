import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
 

import { logo, sun } from '../assets';
import { navlinks } from '../constants';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  
<div
  className={`h-[48px] rounded-[10px] flex justify-center items-center ${
    !disabled && "cursor-pointer"
  } ${styles}`}
  onClick={handleClick}
  style={{ position: "relative" }}
>
  {!isActive ? (
    <span className="text-white font-medium uppercase">{name}</span>
  ) : (
    <span
      className={`font-medium uppercase ${
        isActive === name ? "text-yellow-200" : "text-white grayscale"
      }`}
      style={{
        position: "relative",
        textDecoration: "none",
        transition: "all 0.2s ease-in-out",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
      }}
      onMouseEnter={(e) => {
        e.target.style.textDecoration = "none";
        e.target.style.transition = "all 0.2s ease-in-out";
        e.target.style.borderBottom = "2px solid #e9f08a";
      }}
      onMouseLeave={(e) => {
        e.target.style.textDecoration = "none";
        e.target.style.transition = "all 0.2s ease-in-out";
        e.target.style.borderBottom = "2px solid transparent";
      }}
    >
      {name}
    </span>
  )}
</div>



);

export default function Navs() {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('');
    useEffect(() => {
      const activeLink = localStorage.getItem('activeLink');
      if (activeLink) {
        setIsActive(activeLink);
      }
    }, []);
    const handleLinkClick = (link) => {
      if (!link.disabled) {
        setIsActive(link.name);
        localStorage.setItem('activeLink', link.name);
        navigate(link.link);
      }
    };

  return (
    <div>
        <div className="hidden sm:flex  justify-between items-center flex-row sticky ml-12">

      <div className="flex-1 flex flex-row justify-between items-center   w-[55 0px] py-1 px-4">
        <div className="flex flex-row justify-center items-center gap-20">
          {navlinks.map((link) => (
            <Icon 
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => handleLinkClick(link)}
            />
          ))}
        </div>

      </div>
    </div>
    </div>
  )
}
