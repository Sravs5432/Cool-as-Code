import React from 'react'
import Header from '../widgets/Layout/Header'
import Footer from '../widgets/Layout/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className=' w-full overflow-x-hidden dark:bg-[#13053c]  dark:text-white '>
       <Header/>
      <div className='min-h-screen'>
      <Outlet/>
      </div>
        <div className=''>
       <Footer/>
       </div>
        
       </div>
  )
}

export default Layout