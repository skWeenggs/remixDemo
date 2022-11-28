import React,{useEffect} from 'react'
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader =  () => {
   
    return json({
        arr: [
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/07/contractor1-1-1024x756-1024x756.png",
              heading: "Contractor Foreman",
              mark: "Rated #1 in 2019 by DailyReporter.com…",
              desc: [
                  "Contractor Foreman is the most affordable all-in-one project management software for your COMPUTER, PHONE, and TABLET. Stop wasting time and money using overpriced apps. Backed by a 100 day guarantee.",  
              ],
              appstore: "https://itunes.apple.com/us/app/contractor-foreman-all-in-one-for-contractors/id1239787613?ls=1&mt=8",
              playstore: "https://play.google.com/store/apps/details?id=com.contractorforeman"
          
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/07/YuVie_1-1024x756-1024x756.png",
              heading: "YuVie Promote",
              desc: ["Branded Videos Made Easy, Create & Share to Any Platform, Track your stats in Real Time.",
              
              ],
              skills: ['iOS', 'Android', 'Java', 'PHP', 'ffmpeg', 'MySql',' Video Editing'],
              appstore: "https://apps.apple.com/ie/app/yuvie-promote/id1388366438",
              playstore: "https://play.google.com/store/apps/details?id=com.lee.yuviepromote"
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/12/Illustrated-Notes-1024x756.jpg",
              heading: "図解ノート – Illustrated note",
              mark: "Rated #1 in 2019 by DailyReporter.com…",
              desc: [
                  "Illustrated card app that makes you and your opponent’s head clearer. The illustrations can be complicated at first glance. Even if you don’t understand the language, you can understand it with a diagram. That is the power of “illustration”. This is an understanding, thinking, and communication support tool that can be easily illustrated even by those who are not used to it and can be communicated to the other party. You can easily complete an illustrated sheet by simply selecting a suitable card from the 8 basic illustrated cards and applying it to the diagram. The illustrated card can be used more effectively if you use it together with the “Desire” and clarify the needs (needs) of yourself (your company) and others (other companies).",  
              ],
              playstore: "https://play.google.com/store/apps/details?id=jp.co.mikle.ideanotes"
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2020/02/genielens-1024x756.png",
              heading: "Genielens",
              mark: "",
              desc: [
                  "Genielens is a social photo sharing and photo manipulating app.",  
                  "*Photo manipulation & sharing involves transforming or altering a photo using various methods and techniques to achieve desired results.",
                  "*With GenieLens members can upload a photo, add effects and edit the background and foreground.",
                  "Available Features: Post photos – crop, add filters, text and editing effects, Manipulate background and foreground photos, Social photo sharing – search members, Hashtags & Photos, Select and upload hundreds of stock images, Add a location tag to your Image, Post photo public or private, Like and comment photos, Post images with Hashtags, Follow members"
              ],
              appstore: "https://apps.apple.com/in/app/mefgi-login/id895752150",
              playstore: "https://play.google.com/store/apps/details?id=com.mefgi.login"
          
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/07/MEFGI-Login-1024x756-1024x756.png",
              heading: "Marwadi University App",
          
              desc: [
                  "In this application, MEFGI wants to simplify the load a student can have in their college life like library, time table, examination etc. Any student can login with their user id and password and access their personal work regarding college stuff.",
                  "Parents who are so much worried about their ward’s track record and study material. They can easily log in to the application and find all the details about what is college providing to the student for the study and facility.",  
                  "Timetable, Notices, Attendance, E-Content, Leave Gate Passes, Placement, Transportation, Library and Academic."
              ],
              appstore: "https://apps.apple.com/in/app/mefgi-login/id895752150",
              playstore: "https://play.google.com/store/apps/details?id=com.mefgi.login"
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/08/Worx™SR-1024x756.png",
              heading: "Worx™SR",
          
              desc: [
                  "Worx™SR is kind of Service on Demand Application, Like Uber and many Service on demands Application. but It is developed to serve Service Providers and Customers with One Application. So User still can use Application as Employer, or as Service Providers as well.",
                  "It is easy to use Worx™SR for those users who are acquainted with FACEBOOK, TWITTER, LINKEDIN Apps." 
          
              ],
              appstore: "https://apps.apple.com/in/app/mefgi-login/id895752150",
              playstore: "https://play.google.com/store/apps/details?id=com.mefgi.login"
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/08/Mid-Trade-My-College-Town-1024x756.png",
              heading: "My CollegeTown",
          
              desc: [
                  "MyCollegeTown helps college students find local deals, subleases, and items for sale within trusted campus communities.",
                  "For students, we have more CollegeTown specials and happy hours available than ever before, with new ones available every week. Our Campus Trading Posts offer a convenient way for students to buy, sell, and trade with classmates. And our Student Subleases tool lets students find a place to live or offer a room to rent. Our app can save students thousands of dollars each year if used properly." 
          
              ],
              skills: ['Swift', 'Android', 'Java'],
              appstore: "https://apps.apple.com/us/app/midtrade-everything-college/id1196137099",
              playstore: "https://play.google.com/store/apps/details?id=com.midtrade"
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/07/Blueberry-POS-1024x756-1024x756.png",
              heading: "Blueberry POS",
          
              desc: [
                  "Blueberry POS is the free POS (point-of-sale) app for your retail store that works with your existing Square or Sumup account and is a great tool for merchants of cafes, bars, restaurants, coffee shops, beauty salons, kiosks, food trucks, car wash or individual businesses."
          
              ],
              sHead: "Selling with Blueberry POS is Easy!",
              type: '1',
              sell: [
                   "Add a business by logging in to your existing Square or Sumup account.",
                   "Import store items or add new products to the Cart",
                   "Review order, apply discounts, and checkout.",
                   "Checkout – use cash, credit, debit, or split a payment."
              ],
              appstore: "https://apps.apple.com/us/app/blueberry-pos/id1448333603",
              playstore: "https://play.google.com/store/apps/details?id=com.vidioo.blueberrypos"
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/08/ProLongPro-1024x756.png",
              heading: "ProlongPro",
          
              desc: [
                  "ProlongPro Thunderbolt Battery Repair System App. Requires Thunderbolt Battery Repair System hardware and valid software license key to use."
              ],
              sell: [
                  
              ],
              appstore: "",
              playstore: "https://play.google.com/store/apps/details?id=com.prolong.pro"
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/08/Stopmotion-Lunnis-1024x756.png",
              heading: "StopMotion Lunnis",
          
              desc: [
                  "It’s here the new app “Lunnis and … action!”! Where children will be the directors of their own animated films. Using any device camera children will be immersed in the stopmotion technique, capturing frame by frame their own animations. In addition to photographs, they can make videos and so record their own stories. They can also edit all the material you’ve recorded with the editor that offers the app.",
                  "Have fun while “you ride your movie”! imagination to power and … action!"
              ],
              skills: [],
              sell: [
                  
              ],
              appstore: "https://apps.apple.com/by/app/stopmotion-lunnis/id1382414570",
              playstore: "https://play.google.com/store/apps/details?id=com.paramotion.stopmotion"
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/07/Tailgate-Trucks-1024x756-1024x756.png",
              heading: "Tailgate Trucks",
          
              desc: [
                  "Ever wish you had a pickup truck?  Tailgate is a premier mobile application and platform that connects people who need a pickup to pickup truck owners.  Tailate is fast, easy and way better than renting a truck or hitting up your neighbor to borrow their pickup!",
                  
              ],
              skills: ['Swift', 'Android', 'Java', 'PHP', 'MySql', 'Google-Map', 'PayPal Payments', 'Stripe Payments'],
              sell: [
                  
              ],
              appstore: "https://apps.apple.com/by/app/stopmotion-lunnis/id1382414570",
              playstore: "https://play.google.com/store/apps/details?id=com.paramotion.stopmotion"
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/07/Gigl-1024x756-1024x756.png",
              heading: "Gigl",
          
              desc: [
                  "Gigl is a free mobile app that allows you to get help both easily and conveniently for your gigs and allows you to make the extra money you seek by completing others’ gigs.",        
              ],
              skills: ['Swift', 'Android', 'Java', 'PHP', 'MySql', 'Google-Map', 'PayPal Payments', 'Stripe Payments'],
              sell: [
                  
              ],
              appstore: "https://apps.apple.com/us/app/gigl/id1372641500",
              playstore: "https://play.google.com/store/apps/details?id=com.gigl"
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/08/Red-Centre-Art-Trails-1024x756.png",
              heading: "Red Centre Art Trails",
          
              desc: [
                  "Red Centre Art Trails app consolidates the region’s art attractions and events into an easy-to-use app so that you can discover and experience the full richness of art in the Red Centre.",    
                  "Once you immerse yourself in the magic of Central Australia and connect with the land, people, culture and history – the experience will never leave you.",
                  "Go exploring, your art adventure awaits you."    
              ],
              skills: [],
              sell: [
                  
              ],
              appstore: "https://apps.apple.com/us/app/id1036679052?ls=1",
              playstore: "https://play.google.com/store/apps/details?id=au.com.redcentreart"
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/08/Smart-Council-1024x756.png",
              heading: "Smart Council",
          
              desc: [
                  "Smart Council is a suite of digital engagement tools for the management of Councils, Shires and Community Service Providers.",
                  "Create mobile forms in minutes that are visually friendly and support numerous languages. Replace paper-based forms and see results immediately.",
                  "Choose from over 12 basic form-styles – or use our online form builder to create visually friendly forms to suit your unique needs!"    
              ],
              skills: [],
              sHead:"",
              sell: [
                  
              ],
              appstore: "https://apps.apple.com/us/app/smart-council/id1219867659?ls=1",
              playstore: ""
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/08/Community-Safety-1024x756.png",
              heading: "Community Safety",
          
              desc: [
                  "Smart Council is a suite of digital engagement tools for the management of Councils, Shires and Community Service Providers.",
              
              ],
              skills: [],
              sHead: "Community Safety App features the following six key forms:",
              type: 1,
              sell: [
                  "Pickups & Dropoffs form",
                  "People in Conflict form",
                  "Car Incident form",
                  "Person at Risk form",
                  "Fire Incident form",
                  "Property Damage form"
              ],
              appstore: "https://apps.apple.com/us/app/id1219866963",
              playstore: ""
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/08/Waste-Management-1024x756.png",
              heading: "Waste Management",
          
              desc: [
                  "Smart Council’s Waste Management App helps users send through critical reporting to support a range of Waste Management functions.",
              
              ],
              skills: [],
              sHead: "Version 1 features the following six key forms:",
              type: 1,
              sell: [
                  "Public Drop Bays (Audit)",
                  "Council Landfill Compound (Audit)",
                  "CHousehold Bins (Audit)",
                  "Rubbish Collection Equipment (Audit)",
                  "Public Space & Litter (Audit)"
              ],
              appstore: "https://apps.apple.com/us/app/id1219866963",
              playstore: ""
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/08/Emu-Run-Experience-1024x756.png",
              heading: "Emu Run Experience",
          
              desc: [
                  "The Emu Run companion app includes short commentaries about 30 key locations on the route between Alice Springs, Uluru and Kings Canyon and has been translated into multiple languages.",
                  "“We’ve included lots of good yarns in there – and lots of interesting facts and figures. When the user passes a GPS trigger, the app kicks into action.”",
                  "The app also includes an ‘Armchair Mode’, which allows the user to browse the stories or look back over the recently visited site-points at their own pace."
              ],
              skills: [],
              sHead: "",
              sell: [
          
              ],
              appstore: "",
              playstore: "https://play.google.com/store/apps/details?id=com.emu.run.app"
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/08/Anthwerrke-Emily-Gap-Experience-1024x756.png",
              heading: "Anthwerrke (Emily Gap) Experience",
          
              desc: [
                  "Anthwerrke, the Arrernte name for Emily Gap, is a traditional site of major importance. It is part of the storyline for the Yeperenye, Utnerrengatye and the Ntyarlke caterpillars which are ancestral beings for the Mparntwe (Alice Springs) area.",
                  "Arrernte people conceived in Alice Springs consider themselves direct descendants of these Caterpillar ancestors.",
                  "Join Traditional Owners on an extended interactive journey of this special place."
              ],
              skills: [],
              sHead: "",
              sell: [
          
              ],
              appstore: "",
              playstore: "https://play.google.com/store/apps/details?id=au.com.anthwerrke.emilygap.experience"
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/08/Balnhdhurr-–-A-Lasting-Impression-1024x756.png",
              heading: "Balnhdhurr – A Lasting Impression",
          
              desc: [
                  "In the far Eastern corner of Arnhem Land sits Yirrkala Print Space, where, for over twenty years, the craft of printmaking has prospered.",
                  "Balnhdhurr – A Lasting Impression celebrates this space with works from 50 artists, providing a privileged insight into the nuanced art of the Yolngu people of Northeast Arnhem Land.",
                  "The exhibition title, Balnhdhurr, translates to mean a mark made as a sign for people to follow. It describes a situation where one group goes ahead but wants to leave a message for those following behind. An impression is scratched into the ground with a sign directing the future viewer to follow the right path."
              ],
              skills: [],
              sHead: "",
              sell: [
          
              ],
              appstore: "",
              playstore: "https://play.google.com/store/apps/details?id=com.sat.balnhdhurr"
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/08/Quote-Print-Cloud-1024x756.png",
              heading: "Quote & Print Cloud",
          
              desc: [
                  "We are Quote & Print",
                  "Quote & Print is your ideal ERP software supplier, we are the oldest and the largest ERP software company in Australasia. Our software enhancements your business by collecting and organising information, using it for production with less errors and delivering higher quality.",
                  "Since 1981 Quote & Print have been providing the leading edge & affordable Print ERP solutions for all types of Printers:- Sheet Fed, Digital, Labels, Continuous, Large Format, Universities, Promotional, Print Brokers, Govt. Printing Presses etc."
              ],
              skills: [],
              sHead: "",
              sell: [
          
              ],
              appstore: "https://apps.apple.com/us/app/quote-print-cloud/id1332944352?ls=1",
              playstore: "https://play.google.com/store/apps/details?id=com.quoteandprint&hl=ca"
            },
            {
              img: "https://www.weenggs.com/wp-content/uploads/2019/08/talk-1024x756.png",
              heading: "Friendship Talk",
          
              desc: [
                  "Swipe & Connect!",
                  "Talk allows you to meet someone new at the turn of each swipe.",
                  "You can easily explore new cultures and people from all over the world.",
                 
              ],
              skills: [],
              sHead: "",
              type: "-",
              sell: [
                  "Meet new people from all over the world through live video calls (using 3G, 4G, Wi-Fi)",
                  "Select the region and gender of your choice and start building new conversations",
                  "Enhance your chat experience with facial recognition stickers and costume effects.",
                  "Add new people to your friend list and spark conversations",
                  "Send and receive messages/video calls with existing friends"
              ],
              appstore: "",
              playstore: "https://play.google.com/store/apps/details?id=com.friendship.talk"
            },
          ]
          
    });
};
export default function Posts() {
    const {arr} = useLoaderData();
    useEffect(() => {
        document.title = "portfolio | Weenggs Technology"
    }, []);
    return (
        <main>
          
            <div className="h-full w-full  bg-no-repeat bg-center bg-cover bg-portfolio">
                <div className='bg-[#060606] opacity-90 z-0 flex'>
                <section className='lg:h-[320px]  lg:max-w-[990px] block m-auto'>
                  <div className='lg:h-[320px] m-auto flex text-center flex-col justify-center'>
                    <h1 className='text-2xl pt-10 lg:text-5xl md:text-5xl  text-center font-bold text-[#ffffff] z-30'>Portfolio</h1>
                    <div className='text-center mb-10 font-sm lg:text-xs  uppercase text-[#a5a5a5]  m-5' style={{letterSpacing:'5px'}}>
                        OUR BEST WORK
                    </div>
                   
                  </div>
                </section>
                </div>
            </div>
               
           
            {arr.map((item,index)=>{
                
                return(
                
                <>
                    {index %2 == 0? 
                    <>
                    <div className='bg-[#fff]'>
                        <section className='lg:max-w-[1140px] block m-auto'>
                        <div className='w-full md:flex lg:flex '>
                        <div className='lg:pt-20 py-10  lg:w-3/6 md:w-3/6 lg:hover:scale-75 transition duration-300 '>
                    
                            <img src={item.img} alt='' />
                        </div>
                        <div className='lg:pt-20  lg:w-3/6 md:w-3/6 py-10  w-full'>
                            <h1 className='text-[#5a64f1] m-5 text-5xl font-bold mb-5'>{item.heading}</h1>
                        
                        <ul className='m-5'>
                            
                            {item.desc?.map((task, index) => {
                                return (
                                    <div key={index}>
                                        <h1 className='text-sm my-5  m-5 text-gray-500'><span className='text-md text-gray-700'>{item?.mark}</span> {task}</h1>                                
                                    </div>
                                );
                                })}
                                <div className="text-sm my-5 p-5 text-gray-500">
                                    {item.skills?.length > 0 ? "Skills:":''}
                                    {item.skills?.map((skill, index) => {
                                        return (
                                        <span key={index} className='text-sm  text-gray-500'>{skill+","}</span>           
                                                                                        
                                        );
                                    })}
                                </div> 
                           

                            {item.sell?.length > 0 ? <h3  className='text-md my-5  m-5 text-gray-500'>{item.sHead}</h3>:''}
                                <ol>
                                    {item.sell?.map((sel,index) => {
                                        return (
                                            <div key={index} className="text-md ml-10  text-gray-500">
                                                <li  type={item.type} className='text-sm  text-gray-500'>{sel}</li> 
                                                </div>
                                                    
                                            );
                                            })}
                                </ol>
                            {item.appstore && item.playstore?
                            <h3 className='text-md my-5  m-5 text-gray-500'>Available on 
                                <a className='text-[#5050f1]' href={item.appstore}>App Store</a> and <a className='text-[#5050f1]' href={item.playstore}>Play store.</a>
                            </h3>
                            :
                            <h1 className='text-md my-5  m-5 text-gray-500'>Available on 
                                <a className='text-[#5050f1]' href="https://play.google.com/store/apps/details?id=jp.co.mikle.ideanotes">Play store.</a>
                            </h1>
                            }
                        </ul>
                        </div>
                        
                        </div> 
                        </section>
                    </div>
                    </>
                    :
                    <>
                    <div className='bg-[#fff]'>
                        <section className='lg:max-w-[1140px] block m-auto'>
                        <div className='w-full md:flex lg:flex '>
                        <div className='lg:pt-20  lg:w-3/6 md:w-3/6 py-10  w-full'>
                        
                        <h1 className='text-[#5a64f1] m-5 text-5xl font-bold mb-5'>{item.heading}</h1>
                
                        <ul className='m-5'>
                            {item.desc?.map((task, index) => {
                                return (
                                    <div key={index}>
                                        <h1 className='text-sm   m-5 text-gray-500'><span className='text-md text-gray-700'>{item?.mark}</span> {task}</h1>                                
                                    </div>
                                );
                                })}
                               
                                {item.sell?.length > 0 ? <h3  className='text-md my-5  m-5 text-gray-500'>{item.sHead}</h3>:''}
                                <ol>
                                    {item.sell?.map((sel, index) => {
                                        return (
                                            <div key={index} className="text-md ml-10  text-gray-500">
                                                <li className='text-sm  text-gray-500'>{sel}</li> 
                                                </div>
                                                    
                                            );
                                            })}
                                </ol>
                               
                                
                            <div className="text-sm my-5 p-5 text-gray-500">
                                 {item.skills?.length > 0 ? "Skills:":''}
                            {item.skills?.map((skill, index) => {
                                return (
                                 <span key={index} className='text-sm  text-gray-500'>{skill+","}</span>           
                                                                                       
                                );
                                })}
                            </div>  
                       
                        {item.appstore && item.playstore?
                            <h3 className='text-md my-5  m-5 text-gray-500'>Available on 
                                <a className='text-[#5050f1]' href={item.appstore}>App Store</a> and <a className='text-[#5050f1]' href={item.playstore}>Play store.</a>
                            </h3>
                            :
                            <h1 className='text-md my-5  m-5 text-gray-500'>Available on 
                                <a className='text-[#5050f1]' href="https://play.google.com/store/apps/details?id=jp.co.mikle.ideanotes">Play store.</a>
                            </h1>
                            }
                        </ul>
                        </div>
                        <div className='lg:pt-20 py-10 lg:w-3/6 md:w-3/6  '>
                            <img className="animate-pulse" src={item.img} alt='' />
                        </div>
                        
                        
                        </div> 
                        </section>
                     </div>
                    </>
                    }
                </>
                )
            })}
    
        </main>
      );
    }