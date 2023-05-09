import React from 'react'
import {useNavigate} from 'react-router-dom'
import Land from './Land.png'

export default function Landing({onHide}) {
  
  return (
    <div
    style={{
        backgroundImage: `url(${Land})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        minHeight: '100vh',
      }}
      >
     
        
<nav class="bg-transparent border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">KryptoRaise</span>
    </a>
   
  </div>
</nav>

<section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-5xl text-9xl font-medium title-font mb-4 text-white">KryptoRaise</h1>
      <p class="lg:w-2/3 text-2xl mx-auto leading-relaxed  text-white">KryptoRaise is a blockchain-based crowdfunding application which enables secure,transparent and decentralized funding of projects eliminating intermediaries and offering trustworthy transactions through blockchain technology.</p>
    </div>
    <div className="flex justify-center">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onHide}>
    Get Started!
  </button>
</div>

    </div>
    </section>
    </div>
  )
}
