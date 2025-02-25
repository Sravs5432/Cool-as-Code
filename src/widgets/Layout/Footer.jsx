import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { socials } from "../../constants/companies";
import {IoLocationSharp} from 'react-icons/io5'
import {MdEmail} from 'react-icons/md'
import { AiFillPhone } from "react-icons/ai";
import { handleScroll } from "./Header";
import { useState } from "react";

const SITEMAP = [
  {
    title: "Usefull Links",
    links: [
      {
        id: 2,
        href: "about",
        link: "About Us",
      },
      {
        id: 3,
        href: "courses",
        link: "Courses",
      },
      {
        id: 6,
        href: "blog",
        link: "Blog",
      },    {
        id: 7,
        href: "event",
        link: "Event",
      }
      ,{
        id: 8,
        href: "contact-us",
        link: "Contact Us",
      },
    ],
  },
  {
    title: "Popular Courses",
    links: [      {
      id: 2,
      href: "coursedetail/course1",
      link: "Budding Techies",
    },
    {
      id: 3,
      href: "coursedetail/course2",
      link: "Junior Innovators",
    },
    {
      id: 6,
      href: "coursedetail/course3",
      link: "Tech Champions",
    },    {
      id: 7,
      href: "coursedetail/course4",
      link: "FutureTech Leaders",
    }],
  },

];




const currentYear = new Date().getFullYear();

export default function Example() {
  const [email,setEmail] = useState()
  const handleSubmit =(e)=>{
    e.preventDefault()


  }
  return (
    <footer className="relative w-full  bg-[#0f052d]">

      <div className="mx-auto   w-full px-6  sm:px-20  pb-6 pt-20">
      <div className="grid items-center lg:grid-cols-2    py-4">
        <div className="">
        <h1 className="text-[35px] text-white font-bold">Still You Need Our</h1>
        <h1 className="text-[38px]  text-[#4a03bb] font-bold">Support?</h1>
          <p className="mt-4  max-w-[300px] mb-4 text-[18px] text-gray-600">Don’t wait make a smart & logical quote here. Its pretty easy.</p>
        </div>
        <form onSubmit={handleSubmit} className="w-10/12  rounded-md relative h-fit p-4 bg-[#211168]">
          <input   onChange={(e)=>{
            setEmail(e.target.value)
          }} name="email" type="email" className="outline-none  w-[200px] sm:w-8/12 text-white bg-inherit appearance-none "    placeholder="Enter your email here" required />
          <button type="submit" className="bg-[#6610f2] p-1  font-medium capitalize text-lg text-white rounded-r-md    absolute top-0 bottom-0 right-0 text-center sm:w-4/12 w-[100px]" > Subscribe</button>
        </form>
      </div>
      <hr className="mt-6 border-[#1e1b5b]"/>
      <div className="grid md:grid-cols-2">
      <div  className="py-12 w-full">
              <Link
                className="mb-4  text-[20px] text-white  font-bold capitalize "
              >
                SmartClick
              </Link>
              <ul className="mt-6 grid gap-3">
              <li className="flex items-strat gap-2">
                <IoLocationSharp size={30} color="#6610f2"/>
                <div>
                <p className="font-medium text-md text-white ">
                Dno61, Kata street



                <br/>
                Near Ram Temple,
                Vizianagaram,
                <br/>
                Andhra Pradesh
                <br/>
                3535002
                </p>
                </div>


                </li>
                <li className="flex items-center gap-2">
                <AiFillPhone size={30} color="#6610f2"/>
                <a href="tel:+916304764188" className="font-medium text-white text-md ">+91 6304764188</a>


                </li>
                <li className="flex items-center gap-2">
                <MdEmail size={30} color="#6610f2"/>
                <a href="mailto:manikantatez@gmail.com?subject=Hello" className="font-medium text-white text-md ">manikantatez@gmail.com</a>

                </li>

              </ul>
            </div>
      <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 ">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Link
                className="mb-4  text-[17px] text-white  font-bold capitalize "
              >
                {title}
              </Link>
              <ul className="space-y-1">
                {links.map(({href, link,id}) => (
                  <li onClick={handleScroll} key={link} className=" text-gray-400 font-normal">
                    <Link
                      to={href}
                      className="inline-block py-1 pr-2 transition-transform hover:scale-110"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

        <div className="flex w-full flex-col gap-4  items-center md:items-end justify-center  md:flex-row md:justify-between">
        <div>
            <img className='w-32' src={logo}/>
           </div>
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-white md:mb-0"
          >
           Copyright &copy; <span className="text-[#7e40e3]">{currentYear}</span>  <a href="https://material-tailwind.com/">by SmartClick</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
          <div className="flex gap-3 text-blue-gray-900 sm:justify-center">
            {
              socials.map((ele,i)=>{
               return  <a  key={i}  href="#" className=" h-fit  p-2 border  border-[#2f0b58] border-opacity-80  rounded-sm hover:text-deep-purple-800">
                      {ele.icon}
                </a>
              })
            }



          </div>


          </div>
        </div>
      </div>
    </footer>
  );
}