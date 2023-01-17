import React, { useState,useEffect } from "react";
import { Link } from "gatsby";

import bppLogo from "../images/bpp-logo.png";
import Arrow from "../images/arrow.svg";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
  if (typeof window !== 'undefined') { 
    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
      setShow(false); 
    } else { // if scroll up show the navbar
      setShow(true);  
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  }
};
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll',controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll',controlNavbar);
      };
    }
  }, [lastScrollY]);


  return (
    <nav   className={`top-0  z-40 w-full ${show ? 'sticky':'relative' } `}>
      <div className="2xl:px-60   xl:px-40 lg:px-20  sm:px-10 px-5  bg-[#dc0023] flex  flex-row ">
        <div className="md:hidden  items-center flex">
          <button onClick={() => setOpen(!open)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.76 1.43994H0.24C0.108 1.43994 0 1.54794 0 1.67994V3.59994C0 3.73194 0.108 3.83994 0.24 3.83994H23.76C23.892 3.83994 24 3.73194 24 3.59994V1.67994C24 1.54794 23.892 1.43994 23.76 1.43994ZM23.76 20.1599H0.24C0.108 20.1599 0 20.2679 0 20.3999V22.3199C0 22.4519 0.108 22.5599 0.24 22.5599H23.76C23.892 22.5599 24 22.4519 24 22.3199V20.3999C24 20.2679 23.892 20.1599 23.76 20.1599ZM23.76 10.7999H0.24C0.108 10.7999 0 10.9079 0 11.0399V12.9599C0 13.0919 0.108 13.1999 0.24 13.1999H23.76C23.892 13.1999 24 13.0919 24 12.9599V11.0399C24 10.9079 23.892 10.7999 23.76 10.7999Z"
                fill="#ffffff"
              ></path>
            </svg>
          </button>
        </div>

        <div className="w-full  md:flex md:justify-start hidden">
          <ul className=" flex flex-row justify-start lg:gap-10 md:gap-5 items-center text-white text-[16px] font-bold uppercase tracking-widest">
            <li className=" md:block hidden ">
              <Link to="/#home">Home</Link>
            </li>
            <li className=" md:block hidden ">
              
              <Link to="/#home">restaurant</Link>
            </li>
            <li className=" md:block hidden ">
            <Link to="/#home">contact</Link></li>
          </ul>
        </div>
       
        <div className=" flex md:justify-center  justify-end w-full overflow-hidden">
       
        <img src={bppLogo} className="md:w-[30%]   w-[40%]" alt="bpp-logo" />  
        {/* <Link to="/#home" className="overflow-hidden">  </Link> */}
        </div>
      


        <div className="w-full  flex justify-end">
          <ul className=" flex flex-row items-center  lg:gap-10 md:gap-5 text-white text-[16px]  uppercase font-bold tracking-wide">
            <li className=" md:block hidden ">
            <Link to="/#home">Story</Link> </li>
            <li className=" md:block hidden ">
            <Link to="/#home">menu</Link></li>
            <li>
            <Link to="/#home">
              <button className="bg-[#FEC700] rounded-3xl text-sm lg:py-4 py-2 px-2 flex uppercase text-[16px]  font-bold tracking-wide text-white  ">
                Order now
                <img
                  className="ml-2 "
                  src={Arrow}
                  width={18}
                  alt="Arrow"
                />{" "}
              </button></Link>
            </li>
          </ul>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.aside
            initial={{ width: 0, transition: { delay: 0.2, duration: 0.4 } }}
            animate={{
              width: "100%",
            }}
            exit={{
              width: 0,
              transition: { delay: 0.2, duration: 0.1 },
            }}
            className={`md:hidden fixed top-0  bg-[#fec700]   h-full  `}
          >
            <div className=" relative flex flex-col h-full w-full">
              <div className="flex  mt-10 h-14 items-center">
                <button
                  className="flex  ml-10  justify-start"
                  onClick={() => setOpen(!open)}
                >
                  <svg
                    version="1.1"
                    className="h-6 w-6 "
                    fill="white"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 122.878 122.88"
                    enable-background="new 0 0 122.878 122.88"
                  >
                    <g>
                      <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
                    </g>
                  </svg>
                </button>
              </div>
              <div className="p-5 w-full h-full  ">
                <ul
                  className="flex flex-col text-left text-4xl ml-5   font-bold uppercase"
                  onClick={() => setOpen(!open)}
                >
                  <li className="py-5">
                    <Link
                      to="/#home"
                      className="   px-2   py-5   underline-offset-1  text-[#7056B5]"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="py-5">
                    <Link
                      to="/#projects"
                      className="  px-2  py-5     md:bg-transparent  md:hover:text-blue-700 "
                    >
                       Story
                    </Link>
                  </li>

                  <li className="py-5">
                    <Link
                      to="/#about"
                      className=" px-2   py-5   rounded md:bg-transparent  md:hover:text-blue-700"
                    >
                       menu
                    </Link>
                  </li>
                  <li className="py-5">
                    <Link
                      to="/#blog"
                      className=" px-2   py-5   rounded md:bg-transparent  md:hover:text-blue-700"
                    >
                       restaurant
                    </Link>
                  </li>
                  <li className="py-5">
                    <Link
                      to="/#careers"
                      className=" px-2   py-5    rounded md:bg-transparent  md:hover:text-blue-700 "
                    >
                       contact
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <button className="bg-[#7056B5] text-white mt-10 rounded-3xl py-6 px-4 flex flex-row ">
                      Order now
                      <img
                        className="ml-2 mt-1"
                        src={Arrow}
                        width={40}
                        alt="Arrow"
                      />{" "}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
