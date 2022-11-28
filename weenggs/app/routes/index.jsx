import React,{useEffect} from 'react'
import { frame,brands,datasubject,details,client } from "../content/frame";
import onetwo from '../assets/onetwo.png'
import tech from '../assets/tech.png';
import ProgressBar from "@ramonak/react-progress-bar";
import ImageViewer from "react-simple-image-viewer";



import ProgressLine from '../ProgressLine/Progress'

const Index=()=> {
	useEffect(() => {
        document.title = "Weenggs Technology"
     }, []);

	
return (
  <>

    <div className="h-screen w-full bg-no-repeat bg-center m-auto bg-cover bg-[url('https://www.weenggs.com/wp-content/uploads/2019/08/bg.jpg')]">
        <div className='bg-[#7f818b] opacity-80  flex'>
        <section className='h-[100vh] justify-center items-center lg:h-[100vh] p-4 lg:w-[1140px] flex m-auto'>
          <div className=' text-center flex-col justify-center'>
            <h1 className='text-2xl font-sans lg:text-4xl md:text-4xl mb-10  text-center  text-[#ffffff]'>The epicenter where latest technology meets creativity!</h1>
            <div className='text-center mb-10 font-medium lg:text-xl text-sm text-[#e9e5e5] text-md '>
              <div>A team of professionals that help you nurture & grow your business!</div>
              <div>Design & Develop Stunning Websites</div>
              <div>Code some Kick-ass Mobile Applications</div>
              <div>Provide 24/7 Customer Service</div>
            </div>
            <button className="bg-red-700  hrover:bg-green m-auto flex font:semibold text-sm text-white align-center uppercase py-3 px-6 rounded-full">
              <a href='/request-a-quote'> 
                LET'S GET STARTED
              </a>
            </button>
          </div>
        </section>
        </div>
      </div>

	 <div className='bg-[#f8f9fa]'>
		<section className=' py-20  lg:max-w-[1140px] p-10 block m-auto'>
		  <div className=''>
			<p className='text-center text-[15px] font-weight: 700; text-[#999] '>YOUR NOT-SO-AVERAGE</p>
			<h1 className='text-sm  md:text-4xl mb-10 text-center  text-[#b52332]'>MOBILE APPS AND WEBSITE DEVELOPERS</h1>
			<div className='text-center mb-10  lg:text-sm text-[#595959] text-sm m-5'>
			  Inspired by art and technology, we integrate designs and smart development to create some of the most user-centric websites and mobile applications. We are all about bringing your unique ideas to life and delivering success.
			</div>
			
			<div className="container  m-auto my-5">
			  <div className="grid lg:grid-cols-3 w-auto  m-auto ">
			  {frame.map((list,index)=>{
				return (
				  <div key={index} className="lg:w-[300px] md:my-5 bg-white h-auto m-[10px] p-[10px] mb-0 transition duration-500 ease-in-out transform 
				  hover:-translate-y-1 hover:scale-110  rounded-lg  ">
				  <div className='flex justify-center  animate-bounce'>
				  <img className='mb-4 text-center m-auto flex' width="80" height="80" src={list.logo}  alt="Weenggs Technology" />
				  </div>
					  <h1 className='text-center p-5 text-md uppercase'>{list.name}</h1>
					  <p className='text-[#999999] text-sm text-center hover:animate-pulse'>{list.desc} </p>
				</div>
				)
			  })}
			  </div>
		  </div>
		  </div>
		</section>
		</div>
 
		<div className='bg-[#bf1e2e]'>
			<section className='lg:max-w-[1140px] p-10 block m-auto'>
			  <div className='py-20'>
				<p className='text-center text-[16px] text-[#e5e2e2] '>THE PERFECT BLEND OF</p>
				<h1 className='  text-[15px] md:text-3xl mb-10 text-center  text-[#fff]'>CREATIVE-PROWESS, TECHNOLOGY AND EXTRAORDINARY SERVICE!</h1>
				<div className='text-center mb-10  text-sm text-[#fff]  '>
				  <p className='leading-7  text-[#d3d3d3]'>We are a team of experienced strategists, designers, developers and project managers. With get shit done attitude, we can accomplish any challenge out there Our in-depth understanding of futuristic technology is what brought us together and it’s what keeps us moving forward.
				  Leaving the extra-mile way behind, we happen to offer exceptional services to all our clients, including web development, mobile app development, UX design and more.</p>
				</div>
				<div className="text-center ">
					<button className="bg-[#fff] md:mt-10 font-semibold text-center tracking-[1px] py-3 px-6 rounded-full text-xs text-red-600 capitalize">
						TELL US WHAT YOU NEED AND WE WILL MAKE THE MAGIC HAPPEN!
					</button>
				</div>
			  </div>
			 
			</section>
		</div>

		<div className='bg-[#fff]'>
			<section className='lg:max-w-[1140px] pt-[100px] block m-auto'>
			 <div className='w-full md:flex lg:flex '>
			  <div className='lg:pt-20  lg:w-3/6 md:w-3/6 px-4 w-full'>
			   <h1 className='text-[#999] text-sm font-bold '>REASONS WHY TOP BRANDS</h1>
			   <h1 className='text-[#bf1e2e] lg:text-4xl md:text-2xl font-bold mb-5'>CHOOSE US!</h1>
	  
			   <ul className='py-5'>
				{brands.map((listdata,index)=>{
				   return(
				  <li key={index} className='flex p-1' >
				  <i className="fa m-1">&#xf087;</i>
				  <div className='ml-1'>
				  <h1 className='mb-2 text-base'>{listdata.heading}</h1>
				  <p className='m-auto text-gray-500 text-sm'>{listdata.desc}</p>
				  </div>
				  </li >
				  )
				 })}
			   </ul>
			  </div>
			  <div className='lg:pt-20  pt-5 px-5 lg:w-3/6 md:w-3/6 '>
			   <img className='animate-pulse' src={onetwo} alt='logo' />
			  </div>
			  </div> 
			</section>
		</div >
		
		
		{/* <Image /> */}
   

		<div className='bg-[#fff]'>
      <section className='lg:pb-20 lg:max-w-[1140px] block m-auto'>
       <div className='w-full md:flex lg:flex '>
        <div className='lg:py-20 p-10 lg:w-3/6 md:w-3/6  w-full'>
         <h1 className='text-[#999] text-sm  '>TECHNOLOGIES WE ARE VERY SAVVY</h1>
         <h1 className='text-[#bf1e2e] lg:font-weight:600; lg:text-4xl md:text-2xl mb-5 '>WITH OUR SKILLS</h1>
        <div className='py-5'>
            {datasubject && datasubject.map((data,ind)=>{return(
                <ProgressLine 
                
                label={data.subject}
                visualParts={[
                  {
                    percentage:data.marks,
                    color: "#bf1e2e"
                  }
                ]} 
              />
          
              )})} 
         </div>
        </div>

        <div className='lg:pt-36 hidden md:block text-center py-20 lg:full md:w-3/6 '> 
          <img className='lg:hover:translate-y-10 transition duration-300 ' src={tech} alt='logo' />
        </div>
        </div> 
      </section>
      </div>

	  <div className='bg-[#f8f9fa]'>
      <section className=' lg:max-w-[1140px] block m-auto'>
        <div className='py-[100px] h-full '>
          <p className='text-center  text-[#999] '>OUR</p>
          <h1 className='text-2xl lg:text-4xl md:text-4xl mb-10 text-center  text-[#b52332]'>TESTIMONIALS</h1>
          <div className="container  m-auto my-5">
         
         <div className="flex flex-col w-full p-5  ">

         <div className="swiffy-slider slider-item-show2 slider-nav-dark slider-nav-visible slider-nav-outside slider-nav-round slider-item-snapstart my-3 slider-nav-sm my-xl-5 slider-indicators-round slider-indicators-outside slider-indicators-dark ">
            <div className="slider-container ">
                    
                     {details.map((items,ind)=>{return (

                       <div key={ind} className="p-5  w-full  bg-[#fff] h-auto  rounded-lg " >
                        <p className='text-[#595959] text-sm mb-5  h-[150px] overflow-x-auto '>
                           {items.title}
                         </p>
                       <div className='flex w-fit '>
           
                       <img className='mx-4 m-auto rounded-full mr-2' width="80" height="80" src={items.image}   alt="Weenggs Technology" />
                         <div className='text-sm text-[#4169e2] m-auto p-2'>
                         <h1 className=''>{items.name}</h1>
                         <a href="https://hoaviol.com" className="flex-wrap">{items.link}</a>
                         </div>
                       </div>             
                       
                     </div>
                     )})}
                    
                     </div>
                     <button type="button" className="slider-nav" aria-label="Go left"></button>
                      <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>

                      <div className="slider-indicators" >
                          <button className="" aria-label="Go to slide"></button>
                          <button aria-label="Go to slide" className="active"></button>
                          <button aria-label="Go to slide" className=""></button>
                      </div>
                      </div>
            	 </div>
      
				</div>
			
				</div>
			
			</section>
			</div>


			<div className='bg-[#fff]'>
				<section className='lg:max-w-[1140px] justify-center block m-auto md:my-[100px] '>
					<div className='lg:pt-30 pt-30 p-10 h-full '>
					<p className='text-center  text-[#999] '>OUR</p>
					<h1 className='text-2xl lg:text-4xl md:text-4xl text-center  text-[#b52332]'>CLIENTS</h1>
					<p className='text-center text-sm text-[#999] '>Some of the many clients we've helped achieve great results</p>
					<div className="container my-5 m-auto">
					<div className="flex flex-col w-full h-fit">		
            
						<div className="swiffy-slider slider-item-show4 slider-nav-outside slider-indicators-dark slider-indicators-round slider-nav-round slider-nav-dark  slider-nav-sm slider-nav-visible slider-item-snapstart slider-item-center  py-3 py-lg-4 md:slider-item-show3 slider-nav-autoplay " data-slider-nav-autoplay-interval="2000" >
							 <div className="slider-container max-w[1140px] ">
								{client && client.map((citem,ind)=>{return(
								<div key={ind} className="   h-auto   m-auto ">
										
								<img className=' m-auto'  src={citem}   alt="img-not-found" />
									
								</div>
									
								)})}
								
							 </div>
							<button type="button" className="slider-nav" aria-label="Go left"></button>
							<button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>

							<div className="slider-indicators m-[-10px] ">
								<button className="" aria-label="Go to slide"></button>
								<button aria-label="Go to slide" className=""></button>
								<button aria-label="Go to slide" className="active"></button>
							</div>
						</div>


					</div>
					</div>
					</div>
				
				</section>
    	</div>  

    </>
  );
}
export default Index;