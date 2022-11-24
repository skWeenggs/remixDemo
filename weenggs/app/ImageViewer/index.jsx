
import React,{useState,useCallback} from 'react'
import ImageViewer from "react-simple-image-viewer";
import {data} from '../content/frame'
const ImageViewerDemo = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  
  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
  }, [])
  const unlockScroll = React.useCallback(async() => {
    document.body.style.overflow = '';
  }, [])
    const openImageViewer =useCallback(async(index) => {
      setCurrentImage(index);
      setIsViewerOpen(true);
      lockScroll();
    },[]);
  
    const closeImageViewer = async() => {
      unlockScroll();
      setCurrentImage(0);
      setIsViewerOpen(false);
    };
  return (
    <div className='bg-[#f8f9fa]'>
      <section className=' lg:w-full block m-auto '>
        <div className='py-20 h-full '>
          <p className='text-center  text-[#999] '>OUR</p>
          <h1 className='text-2xl lg:text-5xl md:text-5xl mb-10 text-center  text-[#b52332]'>Work</h1>
          <div className="container  m-auto my-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:w-[990px] m-auto ">
            {data.map((item,index) =>{
              return(
                        <div className="rounded-lg " key={index} >
                         <button className=' h-[20px] mb-5 lg:hover:animate-bounce'>
                        <img className=' ' width="auto" height="auto" src={item}   onClick={() => openImageViewer(index)}   alt="Weenggs Technology" />
                        </button> 
                        </div>    
              )})} 

            {/* {isViewerOpen && (
          <ImageViewer
          
          src={data}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={true}
          backgroundStyle={{
            zIndex:"1000",
            width:"100%",
            padding:"10%",
            backgroundColor: "rgb(87 84 84 / 90%)"
          }}
          
          closeOnClickOutside={true}
        />
      )} */}
             </div>
        </div>
       
        </div>
       
      </section>
      </div>
  )
}

export default ImageViewerDemo;