import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Index from "./index";

export const loader = async () => {
  return json({
      heading : "iPhone App Development",
      description: [
          "Best iPhone App Development Company in India",
          "We Build Robust, scalable, interactive iPhone Apps For You"
        ],
      postdata: [ 
          "There’s no denying that Apple’s iOS is one of the most advanced platforms for mobile apps and with more than 2 million iOS applications in Apple’s App Store, it’s quite in demand as well.",
          " We at Weenggs know all about building high-performance and feature-rich iPhone apps that offer a delightful user experience. Our team of technically savvy iOS developers take your raw ideas, brew it with expert codes and create a user-friendly UI & UX design, with flexible layouts and easy navigation. We serve you an iPhone app that is the perfect concoction of innovation, aesthetics and is on par with the requirements of the stringent quality focussed Apple App Store."
        ],
      apptype: "IPHONE APP",
      servicetype: "DEVELOPMENT SERVICES",
      sdesc: "Our iOS application development team develops your apps with high-quality UI in a wide spectrum of iOS application development.",
      image: "https://www.weenggs.com/wp-content/uploads/2019/01/Massive-Dynamic-1-1.png",
      data: [
            {
            "icon":'&#xf087;',
            "head":'Custom iPhone App Development',
            },
            {
            "icon":'&#xf087;',
            "head":'Native iPhone App Development',
            },
            {
            "icon":'&#xf087;',
            "head":'iPhone App Upgrade',
            },
            {
            "icon":'&#xf087;',
            "head":'Hybrid iPhone App Development',
            },
            {
            "icon":'&#xf087;',
            "head":'iPhone App UI/UX Designing',
            },
            {
            "icon":'&#xf087;',
            "head":'iPhone App Testing/Portability',
            },
            {
            "icon":'&#xf087;',
            "head":'iPhone App Development Consulting',
            }
        ],
      application: "iPHONE APPLICATION DEVELOPMENT?",
      appimg: "https://www.weenggs.com/wp-content/uploads/2019/02/kisspng-mobile-app-development-application-software-ios-an-creative-mobile-phone-model-5a71a3e4e61282.5503164515173969649424-806x1024.png",

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