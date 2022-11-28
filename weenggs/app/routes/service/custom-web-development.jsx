import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Index from "./index";

export const loader = async () => {
  return json({
    heading: "Custom Web Development",
    description: [
        "Best Web Application Development Company in India",
        "Using innovation, technology and a little bit of creativity, we build custom Web Applications just for you!"
                ],
    postdata: [ "The fast growth of technology and rising user expectations have imposed an indisputable need for brands to deliver digital experiences that are intuitive and engaging. This means brands have to be accessible everywhere, in real-time and on both desktop and mobile devices.",
        "At Weenggs, we build web applications for your that are clean, clear and customized to create a lasting impression. Our experienced team of web developers are known to design and develop powerful business channels which connect with your target audience.",
        "Using rich aesthetics and out-of-the-box design concepts, we will craft a unique application for you that is more than just a pretty face. Designed to perfection, your responsive web app will perform flawlessly across all devices, will enhance user experience and help convert visitors into assured clients!"
        ],
    apptype: "WEB APPLICATION",
    servicetype: "DEVELOPMENT PROCESS",
    sdesc: "We do not just code web apps, we create powerful communication channels for you to drive online growth and deliver the results you care about.",
    image: "https://www.weenggs.com/wp-content/uploads/2019/02/web_pap_one.png",
    data: [
        {
          "icon":'&#xf087;',
          "head":'Custom Desktop App Development',
        },
        {
          "icon":'&#xf087;',
          "head":'Web App Upgrade',
        },
        {
          "icon":'&#xf087;',
          "head":'Web App UI/UX Designing',
        },
        {
          "icon":'&#xf087;',
          "head":'Web App Testing/Portability',
        },
        
        {
          "icon":'&#xf087;',
          "head":'Web App Development Consulting',
        }
     ],
    
    application: "Why Choose Weenggs for your Custom Application Development?",
    appimg: "https://www.weenggs.com/wp-content/uploads/2015/03/imac-606765_1280-1024x680.jpg",
    
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