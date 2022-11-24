import React,{useEffect, useState} from 'react'
import { Transition } from '@headlessui/react';
import useCollapse from 'react-collapsed';
const Header =()=> {
  
  const [isOpen, setIsOpen] = useState(false);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [active,setActive] = useState('');
  useEffect(()=>{
    localStorage.setItem("path",location.pathname);
    setActive(localStorage.getItem('path'))
  },[])
 
  const scrollToTop=()=>{
    window.scrollTo({
          top:0,
          behavior:"smooth"
      })
  };

    return (
      <div className=' sticky top-0 bg-white drop-shadow shadow-blue-600  z-50' >
        <div >
          
        <nav className=" bg-white-800 ">
          <div className=" mx-auto md:py-5 py-0 px-0 lg:px-10 md:px-5 w-auto z-40">
            <div className="flex px-5  md:pl-5 pl:5 items-center justify-between md:h-13 py-4 md:p-0">
              <div className="flex items-center w-full  " >
                <div className="flex-shrink-0 w-1/5 ">
                  <a href='/' onClick={scrollToTop} >
                    <img width="200" height="50" src="https://www.weenggs.com/wp-content/uploads/2019/01/WeEnggWeb-1.png" className="custom-logo"  alt="Weenggs Technology" />
                  </a>
                  
                </div>
                <div className="hidden lg:block w-4/5 m-auto lg:px-5">
                  <div className="justify-end flex items-baseline space-x-2 ">
                    <a
                      href="/" onClick={scrollToTop}
                      className={active && active== '/' ? 'text-red-600 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium': 'text-black hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium'}
                      // className="  text-black hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium "
                    >
                      Home

                    </a>

                    <span className="group relative inline-block">
                    <button className="inline-flex items-center text-black-300  px-3 py-2 rounded-md text-sm font-medium cursor-default" >Services</button>
                    <ul className="absolute hidden pt-1 bg-white text-gray-700 group-hover:block w-max" style={{border:'1px gray double'}}>
                      <li className=""><a className="whitespace-no-wrap block rounded-t  py-2 px-4 text-xs hover:text-red-500 " href="/service/iphone-app-development/">IPHONE APP DEVELOPMENT</a></li>
                      <hr/>
                      <li className=""><a className="whitespace-no-wrap block  py-2 px-4 hover:text-red-500 text-xs" href="/service/android-app-development/">ANDROID APP DEVELOPMENT</a></li>
                      <hr/>
                      <li className=""><a className="whitespace-no-wrap block  py-2 px-4 hover:text-red-500 text-xs" href="/service/custom-web-development/">CUSTOM WEB DEVELOPMENT</a></li>
                      <hr/>
                      <li className=""><a className="whitespace-no-wrap block  py-2 px-4 hover:text-red-500 text-xs" href="/service/desktop-app-development/">DESKTOP APP DEVELOPMENT</a></li>
                   </ul>
                  </span>
                    <a href="/about"
                    onClick={scrollToTop}
                    className={active && active== '/about/' ? 'text-red-600 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium': 'text-black hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium'}
                      // className="text-black-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      AboutUs
                    </a>
  
                    <a
                      href="/portfolio"
                      onClick={scrollToTop}
                      className={active && active== '/portfolio/' ? 'text-red-600 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium': 'text-black hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium'}
                      // className="text-black-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Portfolio
                    </a>
  
                    <a
                      href="/contact"
                      onClick={scrollToTop}
                      className={active && active== '/contact/' ? 'text-red-600 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium': 'text-black hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium'}
                      // className="text-black-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contact
                    </a>

                    <button 
                    className={active && active =='/request-a-quote/'?'text-red-600 hover:bg-gray-700  bg-black  rounded-md text-sm font-medium':'text-white hover:bg-gray-700  bg-black  rounded-md text-sm font-medium'}
                    onClick={scrollToTop}><a className="w-full inline-block px-5 py-4" href='/request-a-quote'>Request a Quote</a></button>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          
          <Transition 
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="lg:hidden z-40 h-screen max-w-full" id="mobile-menu" >
                <div ref={ref} className="px-2 pt-2 pb-3 text-center space-y-1 sm:px-3 ">
                  <a
                    href="/" 
                    className={active&&active=='/'?"hover:bg-black-700 text-red-500  block px-3 py-2 rounded-md text-sm font-medium hover:text-red-500 ":"hover:bg-black-700 text-black  block px-3 py-2 rounded-md text-sm font-medium hover:text-red-500"} 
                    onClick={()=>{setIsOpen(!isOpen)}}
                  >
                    Home
                  </a>
                  <hr/>
                    <div className="  " {...getToggleProps()}>
                    {isExpanded ?
                    <> 
                    <div className='flex justify-between'>
                    <div className='w-full p-2 ml-2 text-sm font-medium cursor-default'>
                    Services
                    </div>
                    <i className='fa fa-minus text-red-500 p-3'></i> 
                  </div>
                  <hr/>
                      </> 
                      :
                      <>
                        <div className='flex justify-between'>
                          <div className='w-full p-2 ml-2 text-sm font-medium cursor-default' >
                          Services
                          </div>
                          <i className='fa fa-plus p-3'></i> 
                        </div>
                        
                        <hr/>
                        
                      </>
                  }
                </div>
                  <div {...getCollapseProps()} >
                    <div class=" rounded">
                      <li  className="list-none bg-gray-200 p-3 mb-2"><a className="whitespace-no-wrap block rounded-t hover:text-red-500 py-2 px-4 text-xs" href="/service/iphone-app-development/" onClick={()=>{setIsOpen(!isOpen)}}>IPHONE APP DEVELOPMENT</a></li>
                      <hr/>
                      <li className="list-none bg-gray-200 p-3 mb-2"><a className="whitespace-no-wrap block hover:text-red-500 py-2 px-4 text-xs " href="/service/android-app-development/" onClick={()=>{setIsOpen(!isOpen)}}>ANDROID APP DEVELOPMENT</a></li>
                      <hr />
                      <li className="list-none bg-gray-200 p-3 mb-2"><a className="whitespace-no-wrap block hover:text-red-500 py-2 px-4 text-xs" href="/service/custom-web-development/" onClick={()=>{setIsOpen(!isOpen)}}>CUSTOM WEB DEVELOPMENT</a></li>
                      <hr />
                      <li className="list-none  bg-gray-200 p-3 mb-2"><a className="whitespace-no-wrap block hover:text-red-500 py-2 px-4 text-xs" href="/service/desktop-app-development/" onClick={()=>{setIsOpen(!isOpen)}}>DESKTOP APP DEVELOPMENT</a></li>
                      <hr />
                    </div>
                  </div>
 
  
                  <a href='/about'
                  className={active && active=='/about/'?"hover:bg-black-700 text-red-500  block px-3 py-2 rounded-md text-sm font-medium hover:text-red-500 ":"hover:bg-black-700 text-black  block px-3 py-2 rounded-md text-sm font-medium hover:text-red-500"} 
                    // className="text-black hover:text-red-500  block px-3 py-2 rounded-md text-sm font-medium"
                    onClick={()=>{setIsOpen(!isOpen)}}
                  >
                    AboutUs
                  </a>
                  <hr/>
                  <a
                    href="/portfolio"
                    className={active&&active=='/portfolio/'?"hover:bg-black-700 text-red-500  block px-3 py-2 rounded-md text-sm font-medium hover:text-red-500 ":"hover:bg-black-700 text-black  block px-3 py-2 rounded-md text-sm font-medium hover:text-red-500"} 
                    
                    // className="text-black hover:text-red-500  block px-3 py-2 rounded-md text-sm font-medium"
                    onClick={()=>{setIsOpen(!isOpen)}}
                  >
                    Portfolio
                  </a>
                  <hr/>
                  <a
                    href="/contact"
                    className={active&&active=='/contact/'?"hover:bg-black-700 text-red-500  block px-3 py-2 rounded-md text-sm font-medium hover:text-red-500 ":"hover:bg-black-700 text-black  block px-3 py-2 rounded-md text-sm font-medium hover:text-red-500"} 
         
                    // className="text-black hover:text-red-500  block px-3 py-2 rounded-md text-sm font-medium"
                    onClick={()=>{setIsOpen(!isOpen)}}
                  >
                    Contact
                  </a>
                  <hr/>
                  <button 
                   className={active&&active=='/request-a-quote/'?"text-red-500 hover:bg-gray-700 bg-black  w-full rounded-md text-sm font-medium ":"text-white hover:bg-gray-700  bg-black w-full rounded-md text-sm font-medium"} 
                  ><a className="whitespace-no-wrap block hover:text-red-500 py-2 px-4 text-xs" href="/request-a-quote" >Request a Quote</a>
                  </button>
                  <hr/>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
        </div>
    );
  }
  export default Header;