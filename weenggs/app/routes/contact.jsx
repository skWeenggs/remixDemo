import React,{useEffect} from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { dataContact } from "../content/contact";

const Contact = () => {
    useEffect(() => {
        document.title = "Contact | Weenggs Technology"
     }, []);
  return (
   <>
     <div className="h-full w-full bg-no-repeat bg-center bg-cover bg-[url('https://www.weenggs.com/wp-content/uploads/2019/08/contact-us_1.png')]">
        <div className='z-0 flex'>
        <section className='lg:h-[320px]  lg:w-[990px] block m-auto'>
          <div className='lg:h-[320px] m-auto flex text-center flex-col justify-center'>
            <h1 className='text-2xl pt-10 lg:text-5xl md:text-5xl  text-center font-bold text-[#ffffff] z-30'>Contact Us</h1>
            <div className='text-center mb-10 font-medium lg:text-xl text-[#ffffff] text-lg m-5'>
             connect with us
            </div>
           
          </div>
        </section>
        </div>
        </div>
        
      
        <div className='bg-[#fff]'>
      <section className='lg:max-w-[1140px] block m-auto'>
       <div className='w-full md:flex lg:flex p-10'>
        <div className='lg:py-20 mx-10 lg:w-3/6 md:w-3/6 m-10 w-auto'>
            <h2 className='uppercase text-xs pb-10' style={{letterSpacing:'7px'}}>Contact</h2>
            <h1 className='font-medium text-5xl text-[#0e0d0d]'>For any inquiries please email us at</h1>
            <p className='text-green-400 py-10 font-bold'>hr [at] weenggs.com</p>
            <div
             className='flex lg:grid-cols-4 '
             >
                {dataContact.map((item,ind)=>{return(
                           <button key={ind} className={item.css}>
                           <i class={item.logo}></i>
                           </button>                             
                )})}
            </div>
        </div>
        <div className='lg:py-20   lg:w-3/6 md:w-3/6 '>

            <div class="mapouter"><div class="gmap_canvas">
              <iframe  style={{
                        border: 0,
                        width: '100% ',
                        height: 400,
                      }}
               class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=weenggs&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
               </div>
            </div>
        </div>
        </div> 
      </section>
      </div>
   </>
  )
}

export default Contact;