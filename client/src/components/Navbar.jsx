import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { useStateContext } from '../context';
import { useLocation } from 'react-router-dom';
import { CustomButton } from './';
import {  menu, search,category, krypti } from '../assets';
import { navlinks } from '../constants'; 
import Navs from './Navs';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#4b5c6e]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>

)


const Navbar = ({setSearch,isProfilePage}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const ispage = location.pathname ==="/" || location.pathname === "/profile" || location.pathname === "/create-campaign"|| 
  location.pathname.startsWith("/campaign-details");

  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Category');
  const { connect, address } = useStateContext();
  function handleChange(event) {
    setSearch(event.target.value.toLowerCase());
  }


  function handleDropdownItemClick(link) {
    setIsActive(link.name);
    setToggleDrawer(false);
    navigate(link.link);
  }

  const handleOptionChange = (event) => {
    
    setSelectedOption(event.target.value);
    setToggleDrawer(false);
    navigate(`/${event.target.value}`);
  };

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[40px] gap-6" id='nav'>
    
    
      <Navs />
     
      <div class="search-box">
  <div class="search-button">
    <img src={search} alt="search" />
  </div>
  <input type="text" class="search-input " onChange={handleChange} placeholder="Search for campaigns" />
<span className='text-white py-1 mr-2 font-semibold '>Search</span>
</div>

  
     
      <div className="sm:flex hidden flex-row justify-end gap-4">
        <CustomButton 
          btnType="button"
          title={address ? 'Create a campaign' : 'Connect'}
          styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
          handleClick={() => {
            if(address) navigate('create-campaign')
            else connect()
          }}
        />
       

      </div>

      {/* Small screen navigation */}
        <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[40px] h-[40px] rounded-[10px] flex justify-center items-center cursor-pointer">
            <img src={krypti} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>

          <img 
            src={menu}
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />

          <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
            <ul className="">
              {navlinks.map((link) => (
                <li
                  key={link.name}
                  className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43]'}`}
                  onClick={() => {
                    setIsActive(link.name);
                    setToggleDrawer(false);
                    navigate(link.link);
                   

                  }}
                >
                  <img 
                    src={link.imgUrl}
                    alt={link.name}
                    className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
                  />
                
          
                  <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
                    {link.name}
                  </p>
                  
                </li>
              ))}
            <li className='flex p-4 mt-[-17px] ml-[-15px]'>
            <Icon styles="w-[52px] h-[52px] " imgUrl={category} />
            
            <select name="dropoption" id="dropoption" disabled = {isProfilePage} className={`bg-[#1c1c24] text-[#808191] border-none`} value={ispage?"Category":setSelectedOption}
      onChange={handleOptionChange}>
              <option value="Category" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px] border-none`} disabled selected>
                Category
              </option>

              <option value="Environmental Causes" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px] border-none`}>
                Environmental Causes
              </option>
               
              <option value="Education and Learning" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px]`}>
                Education and Learning
                </option>
              <option value="Health and Medical Expenses" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px]`}>
                Health and Medical Expenses
              </option>
              <option value="Humanitarian Aid and Disaster Relief" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px]`}>
                Humanitarian Aid and Disaster Relief
                </option>
              <option value="Personal and Family Emergencies" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px]`}>
                Personal and Family Emergencies
              </option>
              <option value="Social Causes and Activism" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px]`}>
                Social Causes and Activism
              </option>
              <option value="Technology and Innovation" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px]`}>
                Technology and Innovation
                </option>
              <option value="Wildlife and Animal Conservation" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px]`}>
                Wildlife and Animal Conservation
                </option>
              <option value="Others" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px]`}>
                Others
                </option>
            </select>
</li>
            </ul>
            
            <div className="flex mx-4">
            <CustomButton 
              btnType="button"
              title={address ? 'Create a campaign' : 'Connect'}
              styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
              handleClick={() => {
                if(address) navigate('create-campaign')
                else connect();
              }}
            />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar

