import React,{useEffect} from "react";
const index = (props) => {
  useEffect(() => {
    document.title = "android-app-development | Weenggs Technology"
 }, []);
  return (
    <div>
            <div class='h-full w-full  bg-no-repeat bg-center bg-cover bg-portfolio'>
                    <div class='bg-[#060606] opacity-90 z-0 flex'>
                    <section class='lg:h-[320px]  lg:max-w-[990px] block m-auto'>
                      <div class='lg:h-[320px] m-auto flex text-center flex-col justify-center'>
                        <h1 class='text-2xl pt-10 lg:text-5xl md:text-5xl  text-center  text-[#ffffff] z-30'>{props.heading}</h1>
                        <div class='text-center mb-10  font-md text-sm lg:text-sm  text-[#cbcaca]  m-5' style={{letterSpacing:'2px'}}>
                        {props.description?.map((item)=><div>{item}</div>)}
                        </div>
                      </div>
                    </section>
                    </div>
                 </div>
                 <div class='bg-[#fff] opacity-90 z-0 lg:py-10 p-10 flex'>
                    <section class='lg:h-[320px] my-10 lg:max-w-[990px] block m-auto'>
                      <div class='lg:h-[320px] m-auto flex text-center 	font-weight: 400; flex-col justify-center'>                      
                            {props.postdata.map((item)=> <div class='text-center my-5 font-weight: 500 font-md text-sm   m-5'>{item} </div>)}
                      </div>
                    </section>
                 </div>
                 
                 <div class='bg-[#f4f4f4] p-10'>
                    <section class='lg:max-w-[1140px] block m-auto'>
                     <div class='w-full md:flex lg:flex text-xl '>
                      <div class='lg:pt-20  lg:w-3/6 md:w-3/6  w-full'>
                       <h1 class='text-[#999999] text-sm 	font-weight: 400 uppercase '>{props.apptype}</h1>
                       <h1 class='text-[#bf1e2e] text-md md:text-4xl  mb-5'>{props.servicetype}</h1>
                       <ul class='py-5 text-[#595959]'>
                       <div class='mb-10 font-md text-sm font-weight: 400 text-[#595959] ' >
                        {props.sdesc}
                          </div>
                          {props.data.map((item,index)=>{
                           return(
                            <>
                              <li class='flex'>
                              <i class="fa m-1 text-[#23a455]">&#xf087;</i>
                                <div class='ml-2'>
                                  <h1 class='mb-2 text-base'>{item.head}</h1>
                                </div>
                              </li >
                            </>
                           )
                         })} 
                                                
                       </ul>
                      </div>
                      <div class='lg:py-20   lg:w-3/6 md:w-3/6 '>
                        
                        <img class='md:w-[500px] md:h-[500px] w-[222px] h-[323px] animate-pulse' src={props.image} alt='image' />
                      </div>
                      </div> 
                    </section>
                    </div>
                 
                 <div class='bg-[#fff] p-10'>
                    <section class='lg:max-w-[1140px] block m-auto'>
                     <div class='w-full md:flex lg:flex text-xl '>
                      <div class='lg:pt-20  lg:w-3/6 md:w-3/6  w-full'>
                       <h1 class='text-[#999999] text-sm 	font-weight: 400 '>WHY CHOOSE WEENGGS FOR YOUR</h1>
                       <h1 class='text-[#bf1e2e] text-md md:text-4xl  mb-5'>{props.application}</h1>
                       <ul class='py-5 text-[#595959]  text-sm	font-weight: 400 '>
                           
                        {props.data1.map((item,index)=>{
                            return(
                            <li key={index} class='flex' >
                            <i class={item.logo} />
                            <div class='ml-2'>
                            <h1 class='mb-2 text-base'>{item.head}</h1>
                            </div>
                            </li >
                            )
                          })}
                        
                       </ul>
                      </div>
                      <div class='lg:py-20   lg:w-3/6 md:w-3/6 '>
                        
                        <img class='md:w-[500px]  md:h-[500px] w-[222px] h-[323px] animate-pulse' src={props.appimg} alt='image' />
                      </div>
                      </div> 
                    </section>
                    </div>

    </div>
  )
}

export default index