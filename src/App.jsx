
import Layout from './components/Layout'
import { createBrowserRouter,createRoutesFromElements , Route, RouterProvider} from 'react-router-dom'
import NotFoundPage from './components/404Page'
import Home from './components/Home'
import { useEffect } from 'react'
import {motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'


const Routes = createBrowserRouter(
createRoutesFromElements(
  <Route  path='/' element={<Layout/>}>
        <Route  index element={<Home/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
  </Route>
)
)

function App() {
  useEffect(()=>
  {
    document.documentElement.classList.add("dark")
  },[])
  return (
    <div className=' dark:bg-[#13053c] min-h-screen '>
               <Toaster toastOptions={{ duration: 2500 }}/>
               <RouterProvider  router={Routes}/>

    </div>
  )
}



export function Loader({minHeight}){
  const loaderVariants = {
    hidden:{rotate:-180},
    visible:{
      rotate:0,
      transition:{duration:1}
    }
  }
  const pathVariants = {
    visible:{
      opacity:1,
      pathLength:[1,0,1],
      transition:{
        duration:4,
        ease:'easeInOut',
        repeat:Infinity
      }
    }
  }
  return <div className={` flex flex-col  justify-center ${minHeight?'h-full':'min-h-screen'}`}>
    <motion.svg
    variants={loaderVariants}
    initial='hidden'
    animate='visible'
    className='w-32   mx-auto  border border-[#331b6c] rounded-full p-4 stroke-[#5d33c0]'
    fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <motion.path
  variants={pathVariants}
  initial='hidden'
  animate='visible'

  stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></motion.path>
</motion.svg>

    </div>
}
export default App
