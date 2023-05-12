import React from 'react'
import Logo from "../krypti.png";

export default function Footer() {
  return (
    <div>
        <footer className="text-gray-400 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-gray-400   p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <div>
        <img src={Logo} alt="logo" style={{width:"50px",height:"50px"}}/>
      </div>
      <span className="ml-3 text-xl">KryptoRaise</span>
    </a>
    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 KryptoRaise —
      <a href="https://twitter.com/knyttneve" className="text-gray- ml-1" rel="noopener noreferrer" target="_blank">@Team</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

      <div>
        <h5>Contact Us</h5>
        <a href="mailto:aayushbisht501@gmail.com">aayushbisht501@gmail.com</a>
      </div>
    </span>
  </div>
</footer>
    </div>
  )
}
