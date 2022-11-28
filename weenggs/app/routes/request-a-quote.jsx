import React,{useState,useEffect} from 'react'
import { isBlank,isLength,validateEmail } from '../content/Checks';
const RequestQuote = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [subject,setSubject]=useState('');
    const [massage,setMassage]=useState('');
    const [loader, setLoader] = useState(false);
    var error;

    const handleSubmit=async(e)=>{
        e.preventDefault()
        
        error=false;
        // console.log(name,email,subject,massage);
        setLoader(true);
        if(isBlank(name.trim())){
            error='true'
            document.getElementById('name-error').innerHTML = "Name should not be empty";
        }else if(isLength(name)){
            error=true;
            document.getElementById('name-error').innerHTML = "Name should be 1 to 15 char";
        }else {
            // name.style.background = 'White';
            document.getElementById('name-error').innerHTML = '';
          }
        if(isBlank(email.trim())){
            error=true;
            document.getElementById('email-error').innerHTML = "Email should not be blank";
            // msg+="<font color='#e74c3c'><b> Email shoulde not be blank </b></font><br>";
          }else if(validateEmail(email)){  
              error=true;
            document.getElementById('email-error').innerHTML = "Please enter valid email";
              console.log(email);
          }
          else {
            // name.style.background = 'White';
            document.getElementById('email-error').innerHTML = '';
          }
      
          if(error){
                setLoader(false)
                document.getElementById('m-error').innerHTML = "One or more fields have an error. Please check and try again."; 
          }else{
            document.getElementById('m-error').innerHTML = "";
              setLoader(true);
              const data={
                  name:name,
                  email:email,
                  subject:subject,
                  massage:massage
              }
              setTimeout(async() => {
                  setLoader(false)
              },2000);
              console.log(data);
          }
    }

    const Loader = () => {

        return (
            <div class="flex items-center justify-center  px-10  min-w-screen">
        
            <div class="flex space-x-2 animate-pulse">
                <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
            </div>
        </div>  
        )
        }
    useEffect(() => {
        document.title = "Request-a-quote | Weenggs Technology"
    }, []);
    return (
        <>
            <div class="h-full w-full  bg-no-repeat bg-center bg-cover bg-portfolio">
                <div class='flex md:bg-[#060606] opacity-80'>
                <section class='lg:h-[320px]  lg:max-w-[990px] block m-auto'>
                  <div class='lg:h-[320px] m-auto flex text-center flex-col justify-center'>
                    <h1 class='text-2xl pt-10 lg:text-5xl md:text-5xl  text-center font-bold text-[#ffffff] z-30'>Request a Quote</h1>
                    <div class='text-center mb-10 font-sm text-xs  uppercase text-[#191919]  m-5' style={{letterSpacing:'5px'}}>
                    FILL THE FORM BELOW
                    </div>
                   
                  </div>
                </section>
                </div>
            </div>
               
            
        <div className='bg-[#fff]'>
          <section className='lg:max-w-[1120px] contents'>
           <div className='w-full  my-20'>
           
           <div className='lg:pt-10 md:w-full flex flex-col lg:max-w-[1140px] lg:items-center'>
           
            <form class="w-full contents text-sm" method="post" onSubmit={handleSubmit}>
                <div class=" text-start flex flex-col lg:w-3/6 md:items-center mb-2 px-10">
                    <div class="text-start  md:w-2/3 pb-2">
                    <label class="flex text-start text-gray-500 text-sm  md:text-right mb-1 md:mb-0 pr-4" >
                        Your Name (required)
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input class=" appearance-none border border-gray-200 rounded w-full text-sm p-2.5 leading-8   focus:outline-none focus:bg-white focus:border-blue-500 focus:border-2"  id="name" type="text" name={name} onChange={(e)=>{setName(e.target.value)}} />
                    <div style={{color:'red'}} id="name-error" class="error"></div>
                    </div>
                </div>
                <div class="text-start flex flex-col lg:w-3/6 md:items-center mb-2 px-10">
                    <div class="text-start  md:w-2/3 pb-2">
                    <label class="flex text-start text-sm  text-gray-500  md:text-right mb-1 md:mb-0 pr-4" >
                        Your Email (required)
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input class=" appearance-none border border-gray-200 rounded w-full text-sm p-2.5 leading-8 focus:outline-none focus:bg-white focus:border-blue-500 focus:border-2" id="email" type="text" name={email}  onChange={(e)=>{setEmail(e.target.value)}} />
                    <div style={{color:'red'}} id="email-error" class="error"></div>
                    </div>
                </div>
                <div class="text-start flex flex-col lg:w-3/6 md:items-center mb-2 px-10">
                    <div class="text-start  md:w-2/3 pb-2">
                    <label class="text-start flex text-sm  text-gray-500  md:text-right mb-1 md:mb-0 pr-4" >
                        Subject
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input class=" appearance-none border border-gray-200 rounded block text-sm  w-full p-2.5  leading-8 focus:outline-none focus:bg-white focus:border-blue-500 focus:border-2" id="subject" type="text" name={subject}  onChange={(e)=>{setSubject(e.target.value)}}/>
                    </div>
                </div>
                <div class="text-start flex flex-col lg:w-3/6 md:items-center mb-2 px-10">
                    <div class="text-start  md:w-2/3 pb-2">
                    <label class="block text-gray-500 text-sm  md:text-start mb-1 md:mb-0 pr-4" >
                        Your Massage
                    </label>
                    </div>
                    <div class="md:w-2/3">
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm leading-8 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name={massage} onChange={(e)=>{setMassage(e.target.value)}} ></textarea>
                    </div>
                </div>
                <div class="text-start  flex flex-col lg:w-3/6 md:items-center mb-2 px-10">
                    <div class="md:w-2/3 flex">
                    <button class="shadow bg-red-500 hover:bg-white hover:text-black border-2 hover:border-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full" type="submit"  >
                        SEND
                    </button>
                    {loader?<Loader />:''}
                    </div>
                </div>
                <div class="text-start flex flex-col lg:w-3/6 md:items-center mb-2 px-10">
    
                <div class='error  fit-content text-sm ' style={{color:'red'}} id="m-error"></div>
                </div>
               
            </form>
    
          </div>
    
          </div> 
        
          </section>
          </div>
      
          </>
  )
}

export default RequestQuote;