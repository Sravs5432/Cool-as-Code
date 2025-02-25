import React, { useEffect } from "react";
import {Helmet} from "react-helmet";
import logo from '../assets/logo.png'

import { handleScroll } from "../widgets/Layout/Header";


function Home() {
  useEffect(()=>{
    handleScroll()
  },[])


  return (<div
     className=" dark:bg-[#100e36] mt-[51px] w-full   bg-[#f9f2f9]">
                 <Helmet>

                 <meta charSet="utf-8" />
                 <title>SmartClick</title>
                 <link href={logo} type='image/png' rel='icon'/>
                 <meta name="description" content="This is the Home page ." />
                 <meta name="keywords" content="About" />

             </Helmet>
         <div>
         </div>
       </div>
  )
}




export default Home



