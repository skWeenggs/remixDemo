import React from "react";
const Navbar=()=> {
	return (
        <div className='bg-red-700 hidden md:block flex-1 p-1'>
        <div className='w-full flex text-sm '>
        <div className='py-1 text-white w-5/6 flex pl-16 items-center'>
        <svg className={'mk-svg-icon h-4 w-4 mr-3 fill-[#fff]'} data-name="mk-moon-phone-3" data-cacheid="icon-5c499b606d7ee"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M457.153 103.648c53.267 30.284 54.847 62.709 54.849 85.349v3.397c0 5.182-4.469 9.418-9.928 9.418h-120.146c-5.459 0-9.928-4.236-9.928-9.418v-11.453c0-28.605-27.355-33.175-42.449-35.605-15.096-2.426-52.617-4.777-73.48-4.777h-.14300000000000002c-20.862 0-58.387 2.35-73.48 4.777-15.093 2.427-42.449 6.998-42.449 35.605v11.453c0 5.182-4.469 9.418-9.926 9.418h-120.146c-5.457 0-9.926-4.236-9.926-9.418v-3.397c0-22.64 1.58-55.065 54.847-85.349 63.35-36.01 153.929-39.648 201.08-39.648l.077.078.066-.078c47.152 0 137.732 3.634 201.082 39.648zm-201.152 88.352c-28.374 0-87.443 2.126-117.456 38.519-30.022 36.383-105.09 217.481-38.147 217.481h311.201c66.945 0-8.125-181.098-38.137-217.481-30.018-36.393-89.1-38.519-117.461-38.519zm-.001 192c-35.346 0-64-28.653-64-64s28.654-64 64-64c35.347 0 64 28.653 64 64s-28.653 64-64 64z"></path></svg>
        <a href="tel:+919904076120" >+91 9904076120</a> 
        <svg className="mk-svg-icon h-4 w-4  ml-5 mr-2 fill-[#fff] " data-name="mk-moon-envelop" data-cacheid="icon-5c499b6092230"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 64h-448c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h448c17.6 0 32-14.4 32-32v-320c0-17.6-14.4-32-32-32zm-32 64v23l-192 113.143-192-113.143v-23h384zm-384 256v-177.286l192 113.143 192-113.143v177.286h-384z"></path></svg>
        <a href="mailto:hr@weenggs.com" >hr@weenggs.com</a>
    
        </div>
        <div className='py-1 text-[#fff] w-1/5 lg:px-5 flex justify-center lg:justify-center items-center' >
        <li className='mx-2 flex hover:opacity-70' >
            <a href="https://www.facebook.com/Weenggs">
                <i className="fa fa-facebook-f"></i>
            </a>
        </li>
        <li className='mx-2 flex hover:opacity-75'>
            <a href="skype:weenggs?chat">
            <i className="fa fa-skype" ></i>
            </a>
        </li>
        <li className='mx-2 flex hover:opacity-75'>
        <a href="https://www.linkedin.com/company/weenggs-technology">
            <i className="fa fa-linkedin-square"></i>
        </a>
        </li>
        </div>
        </div>
    
        </div>
	)
}
export default Navbar;
