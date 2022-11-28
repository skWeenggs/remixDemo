import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Index from "./index";

export const loader = async () => {
  return json({
      heading : "Android App Development",
      description: [ 
        "Top-Notch Android App Development Company in India",
        "We build intuitive Android Apps for ultimate user engagement"
      ],
      postdata: [ 
        "The rapid growth and easy availability of smartphones and tablets have drastically changed consumers behaviour thus leading to a paradigm shift in business practices. Google’s operating system – Android has been a key contributor to this revolution. With more than 2 billion monthly active Android users, it boasts a whopping 80% of all smartphone sales and 70% of tablet OS market share! In order to keep up the mobile now generation, companies need a mobile strategy that engages customers using Android.",
        " With years of experience in the industry and a deep understanding of the latest technology, Weenggs has perfected the art creating an innovative and elegant Android application for startups and enterprise organizations.",
        "We listen to you and only when we completely understand your needs we start our building process. Our full-stack Android developers are proficient with the majority of native and hybrid programming languages. As a result, we offer you user-friendly and cost-effective Android solutions with excellent UX that ensure maximum user engagement and the highest ROI. We don’t just build apps, we deliver perfection."
      ],
      apptype: "ANDROID APP",
      servicetype: "DEVELOPMENT SERVICES",
      sdesc: " A lot goes into the creation of an android application. Our proficient Android app development team can create an exceptional app from simple to complex functionalities.",
      image: "https://www.weenggs.com/wp-content/uploads/2019/02/a_one.png",
      data: [
        {
          "icon":'&#xf087;',
        "head":'Custom Android App Development',
        },
        {
        "icon":'&#xf087;',
        "head":'Native  Android  App Development',
        },
        {
        "icon":'&#xf087;',
        "head":' Android  App Upgrade',
        },
        {
        "icon":'&#xf087;',
        "head":'Hybrid  Android  App Development',
        },
        {
        "icon":'&#xf087;',
        "head":' Android App UI/UX Designing',
        },
        {
        "icon":'&#xf087;',
        "head":' Android  App Testing/Portability',
        },
        {
        "icon":'&#xf087;',
        "head":' Android  App Development Consulting',
        }
        ],

        application: "Android APPLICATION DEVELOPMENT?",
        appimg: "https://www.weenggs.com/wp-content/uploads/2019/02/a_two-1024x910.png",

        data1: [
        {
        "logo":"fa fa-trophy m-1 text-[#595959]",
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