import React,{useEffect} from 'react'

import { data1,data } from "../content/about";
const About = () => {
    useEffect(() => {
        document.title = "About | Weenggs Technology"
     }, []);
    return (
    <div>
         <div class="h-full w-full  bg-no-repeat bg-center bg-cover bg-portfolio ">
        <div class='md:bg-[#060606] opacity-90 z-0 flex'>
        
        <section class='lg:h-[320px]  lg:max-w-[990px] block m-auto'>
          <div class='lg:h-[320px] m-auto flex text-center flex-col justify-center'>
            <h1 class='text-1xl pt-10 lg:text-5xl md:text-5xl  text-center font-weight: 400 text-[#ffffff] z-30'>About Us</h1>
            <div class='text-center mb-10 font-sm lg:text-xs  uppercase text-[#a5a5a5]  m-5' style={{letterSpacing:'5px'}}>
            WE + ENNGGS
            </div>
           
          </div>
        </section>
        </div>
    </div>

    <div class='bg-[#f7f7f7]'>
        <section class='lg:max-w-[1140px] block m-auto'>
         <div class='w-full md:flex lg:flex  p-5'>
          <div class='lg:pt-20  lg:w-3/6 md:w-3/6 py-10  w-full'>
         
           <h1 class='text-[black] m-5 text-center lg:text-5xl text-2xl font-weight: 400 mb-5'>Who are Weenggs?</h1>
        
           <ul class='py-5 text-sm m-5 '>
             
             <h6 class='m-auto text-md text-gray-500'>The word Weenggs is a portmanteau- it is derived from combining We and Engineers and is pronounced as Wings!</h6>
             <h6 class='m-auto text-md my-5 text-gray-500'>We + Engineers = Weenggs</h6>
             <h6 class='m-auto text-md my-5 text-gray-500'>We Engineers, are flying high with the wings of modern technology!</h6>
             <h6 class='m-auto text-md my-5 text-gray-500'>Weenggs is a problem-solving company with almost a decade of experience in crunching clever codes, crafting intricate web and mobile applications and creating beautiful designs.</h6>
             <h6 class='m-auto text-md my-5 text-gray-500'>We love modern technology and pride ourselves in using the latest technology and clever strategies to provide ridiculously awesome digital solutions — and deliver exceptional results, every time!</h6>
             <h6 class='m-auto text-md my-5 text-gray-500'>Our team of techno geeks are up-to-date in providing top notch service to all our clients. Always a step ahead of the market trades, we keep upgrading our skills and services with the latest tools and technology. Anything new, we got it covered!</h6>
          </ul>
          </div>
          <div class='lg:pt-20  m-auto py-10  md:w-2/6 animate-pulse border-black border-[1px] md:rounded-full'>
         
            <img src={"https://www.weenggs.com/wp-content/uploads/2019/07/about-us_2-1024x683.png"} alt=''/>
         
          </div>  
          </div> 
        </section>
    </div>

    <div class='h-full w-full  bg-no-repeat bg-center '>
        <div class='bg-[#fff] opacity-90 z-0 flex'>
        <section class='lg:max-w-[990px] block m-auto'>
         
        {data1.map((item,ind)=>{return(
                <div key={ind} class='m-auto flex text-center flex-col justify-center'>
                  <h1 class='text-2xl pt-10 md:text-3xl  text-center font-weight:400 text-[#000] z-30'>{item.name}</h1>
                  <div class='text-center mb-10  text-sm   text-[#a5a5a5]-400  m-10' >{item.desc} </div>
                </div>
               )})}
        </section>
        </div>
      </div>

      <div class='bg-[#f8f9fa]'>
        <section class=' lg:max-w-[990px] block m-auto'>
          <div class='lg:pt-10 pt-10 h-full '>
          
            
            <div class="container  m-auto my-5">
              <div class="grid lg:grid-cols-3  lg:max-w-[990px] m-auto ">
        
              {data.map((item,ind)=>{
                return(
                  <div key={ind} class=" lg:max-w-[300px] bg-white h-auto p-[20px] mb-20 transition duration-500 ease-in-out transform 
                            hover:-translate-y-1 hover:scale-75  rounded-lg  ">
                  <div class='flex justify-center border-gray-300 w-20 text-center m-auto  border-[1px] rounded-[60%] bg-green-200'>
                        <i class={item.logo} style={{fontSize:'40px'}}  > </i>
                  </div>
                    <h1 class='text-center p-5 font-medium '>{item.head}</h1>
                    <p class='text-[#999999] p-5 text-sm lg:text-md text-center'>
                      {item.desc}
                    </p>
                    <button class="bg-red-700 mt-10  hrover:bg-green m-auto flex font-semibold text-white text-sm align-center uppercase py-3 px-6 rounded-full">
                    <a href={item.path && item.path}> {item.btn}  </a>
                  </button>
                  </div>
                )
                })}
              </div>
          </div>
          </div>
         
        </section>
        </div>
    </div>
  )
}

export default About