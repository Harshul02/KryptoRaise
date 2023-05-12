import React from 'react'
import { Link } from 'react-router-dom'
import { environment,tech,health,humanitarian,wildlife,personal,social,book1,others } from '../assets'
export default function ComponentPage() {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
        <h2 className='text-center mb-10 mt-[-100px]' style={{fontSize: "50px"}}>Categories</h2>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full sm:rounded-full">
        <Link to='/dashboard'>
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium text-center">All Campaigns</h2>
        </div>
        </Link>
      </div>
     
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link to= '/Environmental Causes'>
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-fit object-center w-full h-full block" src={environment} />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium text-center">Environmental Causes</h2>
        </div>
        </Link>
      </div>
      
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link to= '/Education and Learning'>
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-fit object-center w-full h-full block" src={book1} />
        </a>
        <div className="mt-4">
          {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
          <h2 className="text-gray-900 title-font text-lg font-medium text-center">Education and Learning</h2>
          {/* <p className="mt-1">$12.00</p> */}
        </div>
        </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link to= '/Health and Medical Expenses'>
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-fit object-center w-full h-full block" src={health} />
        </a>
        <div className="mt-4">
          {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
          <h2 className="text-gray-900 title-font text-lg font-medium text-center">Health and Medical Expenses</h2>
          {/* <p className="mt-1">$18.40</p> */}
        </div>
        </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link to='/Humanitarian Aid and Disaster Relief'>
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-fit object-center w-full h-full block" src={humanitarian} />
        </a>
        <div className="mt-4">
        
          <h2 className="text-gray-900 title-font text-lg font-medium text-center">Humanitarian Aid and Disaster Relief</h2>
          
        </div>
        </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link to='/Personal and Family Emergencies'>
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-fit object-center w-full h-full block" src={[personal]} />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium text-center">Personal and Family Emergencies</h2>
         </div>
        </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link to='/Social Causes and Activism'>
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-fit object-center w-full h-full block" src={social} />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium text-center">Social Causes and Activism</h2>
          
        </div>
        </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link to='/Technology and Innovation'>
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-fit object-center w-full h-full block" src={tech} />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium text-center">Technology and Innovation</h2>
        </div>
        </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link to='/Wildlife and Animal Conservation'>
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-fit object-center w-full h-full block" src={wildlife} />
        </a>
        <div className="mt-4">
        
          <h2 className="text-gray-900 title-font text-lg font-medium text-center">Wildlife and Animal Conservation</h2>
        </div>
        </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link to='/Others'>
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-fit object-center w-[70%] h-full block " src={others} />
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium text-center">Others</h2>
          
        </div>
        </Link>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
