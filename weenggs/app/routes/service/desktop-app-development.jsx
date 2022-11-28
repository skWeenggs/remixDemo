import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Index from "./index";

export const loader = async () => {
  return json({
    heading: "Desktop App Development",
    description: [
        "Leading Desktop Application Development Company in India", 
        "We build modern desktop applications to help enrich business and improve productivity"
    ],
    postdata: [ 
        "Desktop apps are the next big thing that you need to maintain and upgrade your business and yield benefits from day to day processes. We at Weenggs provide you with the perfect custom desktop applications that will not only enhance your customer appeal but also help streamline various processes within a business, improving efficiency and effectiveness.",
        " We have the technical and project management expertise needed to successfully execute and complete projects. We are known for delivering high-end custom solutions that are easily accessible on various platforms including  Windows 8, 8.1 or 10.",
        "Using modern technology and only after a wide study and research our certified coders start developing an easy-to-use and highly secure Rich Desktop Applications (RDA) and Rich Internet Desktop Applications (RIDAs) just for you."
        ],
    apptype: "Desktop Application",
    servicetype: "DEVELOPMENT PROCESS",
    sdesc: "Tailored to your company’s needs and requirements, the only aim of our applications is to help your business succeed.",
    image: "https://www.weenggs.com/wp-content/uploads/2019/02/kisspng-computer-programming-software-developer-software-e-internet-computer-technology-5a6acebec12a92.3136952715169491827912.png",
    data: [
        {
          "icon":'&#xf087;',
          "head":'Custom Desktop App Development',
        },
        {
          "icon":'&#xf087;',
          "head":'Native Desktop App Development',
        },
        {
          "icon":'&#xf087;',
          "head":'Hybrid Desktop App Development',
        },
        {
          "icon":'&#xf087;',
          "head":'Desktop App Upgrade',
        },
        
        {
          "icon":'&#xf087;',
          "head":'Desktop App UI/UX Designing',
        },
        {
          "icon":'&#xf087;',
          "head":'Desktop App Testing/Portability',
        },
        {
          "icon":'&#xf087;',
          "head":'Desktop App Development Consulting',
        }
     ],
    
    application: "IPHONE APPLICATION DEVELOPMENT?",
    appimg: "https://www.weenggs.com/wp-content/uploads/2019/02/main.png",
    
    data1: [
      {
       "logo":'fa fa-trophy m-1 text-[#595959]',
       "head":'Industry and Domain Expertise'
      },
      {
       "logo":'fa fa-window-maximize m-1  text-[#595959]',
       "head":'End-To-End User Experience'
      },
      {
       "logo":'fa fa-desktop m-1 text-[#595959]',
       "head":'Powerful, Robust & Responsive Design'
      },
      {
       "logo":'fa fa-paint-brush m-1 text-[#595959]',
       "head":'Enhanced Visual Appeal'
      },
      {
       "logo":'fa fa-file-code-o m-1 text-[#595959]',
       "head":'Third-Party API Integrations'
      },
      {
       "logo":'fa fa-lock m-1 text-[#595959]',
       "head":'Safe and Secure'
      },
      {
       "logo":'fa fa-cloud-upload m-1 text-[#595959]',
       "head":'Application Upgrade and Maintenance'
      },
      {
       "logo":'fa fa-check-square m-1 text-[#595959]',
       "head":'Proven Methodologies'
      },
      {
       "logo":'fa fa-gear m-1 text-[#595959]',
       "head":'Technology Savvy'
      },
      {
       "logo":'fa fa-calendar-check-o m-1 text-[#595959]',
       "head":'On-time Delivery'
      },
      {
       "logo":'fa fa-money  m-1 text-[#595959]',
       "head":'Value For Money'
      },
      {
       "logo":'fa fa-comments  m-1 text-[#595959]',
       "head":'24/7 Online Support'
      }
     ]
    
    });
};

export default function Posts() {
  const { heading,description,postdata,apptype,servicetype,sdesc,image,data,application,appimg,data1 } = useLoaderData();
  
  return (
    <main>
         <Index heading={heading} description={description} postdata={postdata} apptype={apptype} servicetype={servicetype} sdesc={sdesc} image={image} data={data} application={application} appimg={appimg} data1={data1}/>

    </main>
  );
}