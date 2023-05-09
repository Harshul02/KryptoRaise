import React from 'react'
// import '../input.css';
import Land from './Land.png'

export default function Landing() {
  return (
    <div
    style={{
        backgroundImage: `url(${Land})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // opacity: '0.5',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        minHeight: '100vh',
      }}
      >
      {/* <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity value (0.0 - 1.0) as desired
          minHeight: '100vh',
        }}
      ></div> */}
        
<nav class="bg-transparent border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">KryptoRaise</span>
    </a>
    {/* <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button> */}
  </div>
</nav>

<section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-5xl text-9xl font-medium title-font mb-4 text-white">KryptoRaise</h1>
      <p class="lg:w-2/3 text-2xl mx-auto leading-relaxed  text-white">KryptoRaise is a blockchain-based crowdfunding application which enables secure,transparent and decentralized funding of projects eliminating intermediaries and offering trustworthy transactions through blockchain technology.</p>
    </div>
    <div className="flex justify-center">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Get Started!
  </button>
</div>

    </div>
    </section>
    </div>
  )
}
