import React from 'react'
import { Link } from 'react-router-dom'
import explore from './assests/explore5.png';
import { environment,tech,health,humanitarian,wildlife,personal,social,book1,others } from '../assets'
export default function ComponentPage() {
  return (
    <div className='bg-[#000000] mt-[-100px] md:mt-[-55px] md:ml-[-60px]'>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
        {/* <h2 className=' text-center mb-10 mt-[-50px] sm:text-5xl text-9xl font-bold title-font  text-white ' style={{fontSize: "50px"}}>Find Your Cause</h2> */}
        <div className="flex flex-wrap sm:-m-4 gap-[26px] justify-center">
        <div className="lg:w-1/6 md:w-1/2 p-4 w-full bg-[#081c2c] rounded-[35px] text-center flex items-center justify-center">
  <Link to='/dashboard'>
    <div class="block text-[#1dc071] title-font font-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">All Campaigns</div>
    <img src={explore} alt="arrow" className="md:w-[80px] md:h-[80px] mx-auto w-[50px] h-[50px]" />
  </Link>
</div>







     
      <div className="lg:w-1/6 md:w-1/2 p-4 w-full  bg-[#081c2c] rounded-[35px]">
      <Link to= '/Environmental Causes'>
        <a className="block relative h-40 rounded overflow-hidden">
          <img alt="ecommerce" className="object-fit object-center w-full h-full block" src={environment} />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-300 title-font text-lg font-medium text-center">Environmental Causes</h2>
        </div>
        </Link>
      </div>
      
      <div className="lg:w-1/6 md:w-1/2 p-4 w-full bg-[#081c2c] rounded-[35px]">
        <Link to= '/Education and Learning'>
        <a className="block relative h-40 rounded overflow-hidden">
          <img alt="ecommerce" className="object-fit object-center w-full h-full block" src={book1} />
        </a>
        <div className="mt-4">
          {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
          <h2 className="text-gray-300 title-font text-lg font-medium text-center">Education and Learning</h2>
          {/* <p className="mt-1">$12.00</p> */}
        </div>
        </Link>
      </div>
      <div className="lg:w-1/6 md:w-1/2 p-4 w-full bg-[#081c2c] rounded-[35px]">
        <Link to= '/Health and Medical Expenses'>
        <a className="block relative h-40 rounded overflow-hidden">
          <img alt="ecommerce" className="object-fit object-center w-full h-full block" src={health} />
        </a>
        <div className="mt-4">
          {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
          <h2 className="text-gray-300 title-font text-lg font-medium text-center">Health and Medical Expenses</h2>
          {/* <p className="mt-1">$18.40</p> */}
        </div>
        </Link>
      </div>
      <div className="lg:w-1/6 md:w-1/2 p-4 w-full bg-[#081c2c] rounded-[35px]">
        <Link to='/Humanitarian Aid and Disaster Relief'>
        <a className="block relative h-40 rounded overflow-hidden">
          <img alt="ecommerce" className="object-fit object-center w-full h-full block" src={humanitarian} />
        </a>
        <div className="mt-4">
        
          <h2 className="text-gray-300 title-font text-lg font-medium text-center">Humanitarian Aid and Disaster Relief</h2>
          
        </div>
        </Link>
      </div>
      <div className="lg:w-1/6 md:w-1/2 p-4 w-full bg-[#081c2c] rounded-[35px]">
        <Link to='/Personal and Family Emergencies'>
        <a className="block relative h-40 rounded overflow-hidden">
          <img alt="ecommerce" className="object-fit object-center w-full h-full block" src={[personal]} />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-300 title-font text-lg font-medium text-center">Personal and Family Emergencies</h2>
         </div>
        </Link>
      </div>
      <div className="lg:w-1/6 md:w-1/2 p-4 w-full bg-[#081c2c] rounded-[35px]">
        <Link to='/Social Causes and Activism'>
        <a className="block relative h-40 rounded overflow-hidden">
          <img alt="ecommerce" className="object-fit object-center w-full h-full block" src={social} />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-300 title-font text-lg font-medium text-center">Social Causes and Activism</h2>
          
        </div>
        </Link>
      </div>
      <div className="lg:w-1/6 md:w-1/2 p-4 w-full bg-[#081c2c] rounded-[35px]">
        <Link to='/Technology and Innovation'>
        <a className="block relative h-40 rounded overflow-hidden">
          <img alt="ecommerce" className="object-fit object-center w-full h-full block" src={tech} />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-300 title-font text-lg font-medium text-center">Technology and Innovation</h2>
        </div>
        </Link>
      </div>
      <div className="lg:w-1/6 md:w-1/2 p-4 w-full bg-[#081c2c] rounded-[35px]">
        <Link to='/Wildlife and Animal Conservation'>
        <a className="block relative h-40 rounded overflow-hidden">
          <img alt="ecommerce" className="object-fit object-center w-full h-full block" src={wildlife} />
        </a>
        <div className="mt-4">
        
          <h2 className="text-gray-300 title-font text-lg font-medium text-center">Wildlife and Animal Conservation</h2>
        </div>
        </Link>
      </div>
      <div class="lg:w-1/6 md:w-1/2 p-4 w-full bg-[#081c2c] rounded-[35px]">
  <Link to='/Others'>
    <a class=" relative h-40 rounded overflow-hidden flex justify-center items-center">
      <img alt="ecommerce" class="object-fit object-center w-[70%] h-full block" src={others} />
    </a>
    <div class="mt-4">
      <h2 class="text-gray-300 title-font text-lg font-medium text-center">Others</h2>
    </div>
  </Link>
</div>

    </div>
  </div>
</section>
    </div>
  )
}
