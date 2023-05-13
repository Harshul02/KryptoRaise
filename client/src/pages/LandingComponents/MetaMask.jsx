import React from 'react'
import Metamask from './Metamask.png';

export default function MetaMask() {
  return (
    <div>
    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-12">
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4" style={{alignSelf : "center"}}>Use MetaMask To Donate</h2>
        <img src={Metamask} alt="MetaMask" className='rounded-full' style={{alignSelf : "center"}}/>
        <p class="leading-relaxed mb-1 mt-5 text-white" style={{textAlign : "center"}}>MetaMask is a web browser extension and mobile app that allows you to manage your Ethereum private keys.</p>
      </div>
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">How To Install MetaMask</h2>
        <p class="leading-relaxed mb-3 font-medium text-lg">1. Visit <a href='https://metamask.io/' className='text-white'>MetaMask.</a></p>
        <p class="leading-relaxed mb-3 font-medium text-lg">2. Hit "Download" in the menu bar.</p>
        <p class="leading-relaxed mb-3 font-medium text-lg">3. Click “Install MetaMask for Chrome”. You will be directed to the Chrome Web Store.</p>
        <p class="leading-relaxed mb-3 font-medium text-lg">4. Click “Add to Chrome”.</p>
        <p class="leading-relaxed mb-3 font-medium text-lg">5. On the pop up, click “Add extension”.</p>
        <p class="leading-relaxed mb-3 mt-4">After adding MetaMask Extension, MetaMask will automatically open. You can also make sure it's easily accessible in your toolbar by clicking the jigsaw icon in the top-right of the screen, and hitting the pin icon. </p>
        
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
