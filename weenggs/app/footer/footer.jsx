import React from 'react'
import img from '../assets/weenggs.png'
const Footer = () => {
  return (
    <div class="bg-[#444] h:full lg:text-left">
    <div class="container m-auto p-10 ">
        <div class="grid lg:grid-cols-3  lg:max-w-[1140px] m-auto ">
        <div class=" lg:max-w-[350px]">
        <a href='/' id="scrollToTop">
         <img class='mb-6 custom-logo bg-transparent' width="200" height="50" src={img} alt="Weenggs Technology" />
        </a>

            <ul class="list-none mb-0 w-[270px]">
            <li>
              <p class='text-white mb-5 text-base  letter-spacing: 0.025em'>
            We craft some artistic yet powerful iOS & Android applications for you.
            </p>
            </li>
            
            </ul>
        </div>

        <div class=" lg:max-w-[350px]">
            <h1 class="uppercase text-base font-bold text-[16px] mb-2.5 text-white">CONTACT US</h1>

            <ul class="list-none text-base mb-0">
            <div class='flex text-white'>
            <li class='m-1 flex'>
                <i class="fa fa-skype" ></i>
            </li>
            <a href={"#"} class="ml-3 mb-4">weenggs</a>
            </div>
            <div class='flex text-white'>
            <li class='m-1 flex'>
            <i class="fa fa-envelope"></i>
            </li>
            <a href={"mailto:info@weenggs.com"} class="ml-3 mb-4">hr@weenggs.com</a>

            </div>
            <div class='flex text-white'>
            <li class='m-1 flex'>
            <i class="fa fa-phone"></i>
            </li>
            <a href="tel:+919428616132" class="ml-4 mb-4">91 9428616132</a>
            </div>
            <div class='flex text-white'>
            <li class='m-1 flex'>
            <i class="fa fa-location-arrow"></i>
            </li>
            <a href={"/contact"} class="ml-4 mb-4">221 Avalon, Katargam,<br />
                Surat – 395004,<br/>
                GJ, India
            </a>

            </div>
           
            </ul>
        </div>

        <div class=" lg:max-w-[350px]">
            <h1 class="uppercase font-bold mb-2.5 text-[16px] text-base text-white">NAVIGATE</h1>

            <ul class="list-none text-base text-white">
            <li class='mb-4 lg:w-[300px] '>
                <a class="w-full inline-block" href={'/'}  >Home</a>
            </li>

            <li class='mb-4'>
                <a class="w-full inline-block" href="/about" id="scrollToTop">About us</a>
            </li>
            <li class='mb-4'>
                <a class="w-full inline-block" href="/portfolio" id="scrollToTop">Portfolio</a>
            </li>
            <li class='mb-4'>
            <a class="w-full inline-block" href="/careers" id="scrollToTop" >Carrers</a>
            </li>
            <li class='mb-4'>
            <a class="w-full inline-block" href="/contact" id="scrollToTop" >Contact</a>
            </li>
            </ul>
        </div>

    
        </div>
    </div>

    <div class="text-white bg-[#666]  text-center p-2.5 text-[13px]">
        <p class="max-w-[1140px] m-auto">
            © Copyright <a href="/">weenggs.com</a>. All Right Reserved.
            <a class="" href="https://tailwind-elements.com/"></a>
        </p>
    </div>
  
   </div>
  )
}

export default Footer