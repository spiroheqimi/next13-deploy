'use client'

import { useState } from "react";

export default function Navbar() {

  let Links = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" }, /* keep one of the pages empty so u can test loading and error pages */
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  let [open,setOpen] = useState(false);

  let [light,setLight] = useState(false);

  let changeTheme = () =>  {

    if ( light === true ){
      document.documentElement.style.setProperty('--background-color', '#121720');
      document.documentElement.style.setProperty('--mytext-color', '#ffffff');
      document.documentElement.style.setProperty('--small-text', '#000000');
      document.documentElement.style.setProperty('--cards-color', '#21262D');
    } else {
      document.documentElement.style.setProperty('--background-color', '#fff');
      document.documentElement.style.setProperty('--mytext-color', '#000000');
      document.documentElement.style.setProperty('--small-text', '#ffffff');
      document.documentElement.style.setProperty('--cards-color', '#ffffff');
    }

    setLight(!light);
  }

  return (
    <div className="z-1 md:px-16 lg:pl-28 xl:pl-36 m-0 px-14 py-6 bg-background-color fixed w-full">
      <div className="md:flex  w-full items-center justify-between">
        <div className="flex justify-between w-full ">
          <a href="/" className="md:text-3xl text-2xl text-mytext-color cursor-pointer "> Portfolio </a>
          <button className="md:hidden cursor-pointer" onClick={ () => setOpen(!open)  } > 
          <ion-icon size="large" name={ open ? "close-outline" : "menu-outline" }></ion-icon>
          </button>
        </div>
        
        <ul className={`md:flex md:items-center md:opacity-100 h-auto duration-300 ease-in ${ open ? 'z-2' : 'hidden' } `}>
          {Links.map( (link) => (
            <li key={link.name} className="lg:ml-8 text-lg h-auto md:my-0 my-5 ">
              <a href={link.link} className=" text-mytext-color hover:text-gray-500 md:px-3">{link.name}</a>
            </li>
          ))}
        </ul>

        <button 
            className="px-10 pt-3 md:block xs:hidden"  
            onClick={ () => changeTheme() }> 
            <ion-icon name={ light ? "moon-outline" : "sunny-outline" }></ion-icon> 
        </button>
      </div>
    </div>
  )
}
