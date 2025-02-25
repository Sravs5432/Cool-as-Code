import React,{useState,useEffect} from 'react'
import {Link, NavLink} from 'react-router-dom'
import { navLinks } from '../../constants/companies';
import { motion } from "framer-motion";
import logo from '../../assets/logo.png'
const Header = () => {

  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  const  [mode ,setMode] = useState(true)


  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);

  }, []);




  function handleDarkMode(){
    setMode(mode=>!mode)
    if(document.documentElement.classList.contains('dark')){
      document.documentElement.classList.remove("dark")
      return ;
    }
    document.documentElement.classList.add("dark")
  }


  return (
    <div
      className={`${
        active ? "shadow-lg  dark:shadow-transparent bg-white dark:bg-[#090c47]  " : ""
      } fixed   dark:bg-[#100e36] bg-[#f9f2f9]   w-full top-0 left-0 z-20`}
    >
      <div className='w-full p-3 lg:w-11/12 mx-auto'>

        <div
          className={`  flex items-center justify-between px-2`}
        >
           <Link to={'/'}>
            <img  className='w-32 ' src={logo}/>
           </Link>

          <div className="xl:flex  items-center hidden">
            {navLinks.map((navLink) => {
              return <div  key={navLink.id}onClick={handleScroll}>
               <PageLink  {...navLink} />
               </div>
            })}
          </div>
          <div className="flex -mt-2 items-center gap-4">

<Link  to={'login'} className="bg-[#6610f2] hidden md:flex  py-2  hover:bg-inherit  dark:hover:text-white hover:text-[#6610f2]  px-6  text-md hover:border  rounded-sm text-white hover:border-[#6610f2] ">
            Get Started
          </Link>
          <svg  className="h-10 text-bold w-10   xl:hidden cursor-pointer"
              onClick={() => setToggle(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
  <path strokeLinecap="round"  strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</div>
          {toggle && (
            <motion.div
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 10 }}
              transition={{ duration: 0.5 }}
              className="fixed bg-deep-purple-700 h-full w-96 top-0 right-0 z-20 dark:bg-[#1d1160] dark:shadow-sm dark:shadow-cyan-600 text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
            >
              {navLinks.map((navLink) => {
                return ( <MobileNavLinks

                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}

<button className='mr-8' onClick={(prev) => setToggle(!prev)}>
<Link   to={'login'} className="bg-[#6610f2]  md:hidden  py-2  hover:bg-inherit  dark:hover:text-white hover:text-[#6610f2]  px-6  text-md hover:border  rounded-sm text-white hover:border-[#6610f2] ">
            Get Started
          </Link>
   </button>
              <svg   className="absolute  right-12 top-12 w-8 h-8 text-black  dark:text-white cursor-pointer"
                onClick={(prev) => setToggle(!prev)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>

            </motion.div>
          )}

        </div>
      </div>
     {!mode ? <motion.div  onClick={handleDarkMode}
        whileHover={{
          right:0
      }}
        transition={{ duration: 0.2 }}
      className='flex  custom-shadow w-[100px] gap-2 cursor-pointer top-40 bg-[#605de4] rounded-l-lg p-2 absolute -right-[60px] '>

       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6   text-white h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>
<p className="text-white">Light</p>
      </motion.div>
      :<motion.div
      onClick={handleDarkMode}
        whileHover={{
          right:0
      }}
        transition={{ duration: 0.2 }}
      className='flex custom-shadow dark:bg-black w-[100px] gap-2 cursor-pointer top-40 bg-[#605de4] rounded-l-lg p-2 absolute -right-[60px]   '>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>
     Dark

      </motion.div>
}

    </div>
  );
};
const PageLink = ({ href, link }) => {
  return (
    <li

    className="list-none  cursor-pointer mr-8">
      <NavLink
        to={href}
        className={({isActive})=>`font-bold  dark:hover:text-[#553dca]  ${isActive?'dark:text-[#553dca] text-[#430fdf]':'dark:text-white  text-black' } transition-all duration-300`}
      >
        {link}
      </NavLink>
    </li>
  );
};
const MobileNavLinks = ({ setToggle, href, link }) => {
  return (
    <li className="list-none cursor-pointer mr-8">
      <Link
        to={href}


        className="font-bold transition-all duration-300"
        onClick={(prev) => setToggle(!prev)}
      >
        {link}
      </Link>
    </li>
  );
};
export function handleScroll(){
  ('handlescroll')
  window.scrollTo({
    top:10,
    behavior:'smooth'
  })}
export default Header

                var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?88161';
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = url;
                var options = {
                "enabled":true,
                "chatButtonSetting":{
                    "backgroundColor":"#00e785",
                    "ctaText":"Chat with us",
                    "borderRadius":"25",
                    "marginLeft": "0",
                    "marginRight": "20",
                    "marginBottom": "20",
                    "ctaIconWATI":false,
                    "position":"right"
                },
                "brandSetting":{
                    "brandName":"SmartClick",
                    "brandSubTitle":"undefined",
                    "brandImg":"https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
                    "welcomeText":"Hi there!\nHow can I help you?",
                    "messageText":"hello",
                    "backgroundColor":"#00e785",
                    "ctaText":"Chat with us",
                    "borderRadius":"25",
                    "autoShow":false,
                    "phoneNumber":"916304764188"
                }
                };
                s.onload = function() {
                    CreateWhatsappChatWidget(options);
                };
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);

