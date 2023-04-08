import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { useStateContext } from '../context';
import { CustomButton } from './';
import { logo, menu, search, thirdweb,logout } from '../assets';
import { navlinks } from '../constants'; 
import Navs from './Navs';
import { HashLink } from 'react-router-hash-link';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>

)


const Navbar = ({setSearch}) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();
  function handleChange(event) {
    setSearch(event.target.value.toLowerCase());
  }

  function handleDropdownItemClick(link) {
    setIsActive(link.name);
    setToggleDrawer(false);
    navigate(link.link);
  }

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
    
    
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
       

          {/* <div className="w-[52px] h-[52px] rounded-full bg-[#081c2c] flex justify-center items-center cursor-pointer">
            <img src={logout} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div> */}
      </div>

      {/* Small screen navigation */}
        <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img src={logo} alt="user" className="w-[60%] h-[60%] object-contain" />
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
                  {/* {link.dropdownItems && link.dropdownItems.length > 0 && (
                    <ul className="absolute top-full left-0 w-full bg-gray-100">
                    {link.dropdownItems.map((dropdownItem) => (
                    <li
                      key={dropdownItem.name}
                      // className="px-4 py-2 hover:bg-gray-200"
                      className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43]'}`}
                      onClick={() => handleDropdownItemClick(dropdownItem)}
                    >
                    {dropdownItem.name}
                </li>
              ))}
            </ul>
          )} */}
                  <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
                    {link.name}
                  </p>
                  
                </li>
              ))}
            </ul>
            <select name="dropoption" id="dropoption" className={`flex p-4 mb-4 bg-[#1c1c24] text-[#808191] border-none`}>
              <option value="" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px] border-none`} disabled selected>Category</option>
              <HashLink smooth to="#cam">
              <option value="Environmental Causes" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px] border-none`}>Environmental Causes</option></HashLink>
              <option value="Education and Learning" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px]`}><HashLink smooth to="#campaign1">Education and Learning</HashLink></option>
              <option value="" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px]`}>Health and Medical Expenses</option>
              <option value="" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px]`}>Humanitarian Aid and Disaster Relief</option>
              <option value="" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px]`}>Personal and Family Emergencies</option>
              <option value="" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px]`}>Social Causes and Activism</option>
              <option value="" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px]`}>Technology and Innovation</option>
              <option value="" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px]`}>Wildlife and Animal Conservation</option>
              <option value="" className={`flex p-4 ml-[20px] font-epilogue font-semibold text-[14px]`}>Others</option>
            </select>

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

