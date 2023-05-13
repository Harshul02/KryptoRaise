import React from 'react'
import Shravan from './Shravan.jpg'
import Aayush from './Aayush1.jpg'
import Harshul from './Harshul.jpg'

export default function Creator() {
  return (
    <div>
        <section className="text-gray-400 body-font">
        <h2 className='text-center mb-0 mt-3'style={{
              borderRadius: "100px",
              fontSize: "3.125rem",
              fontWeight: 600,
              color: "#ffffff",
              textShadow: "5px 5px #000",
            }}>Creators</h2>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg> */}
          <img src={Aayush} alt="Creator" className='rounded-full h-full w-full'/>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">Aayush Bisht</h2>
          <p className="leading-relaxed text-base"><q><i>The true power of blockchain lies not in its ability to disrupt existing industries, but in its potential to create entirely new ones.</i></q></p>
          
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg> */}
          <img src={Shravan} alt="Creator" className='rounded-full h-full w-full'/>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">Shravan Das</h2>
          <p className="leading-relaxed text-base"><q><i>In a world of zeros and ones, I bring ideas to life through lines of code.</i></q></p>
          
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center ">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg> */}
          <img src={Harshul} alt="Creator" className='rounded-full h-full w-full'/>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">Harshul Jain</h2>
          <p className="leading-relaxed text-base"><q><i>MERN developer by day, code magician by night.</i></q></p>
          
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
