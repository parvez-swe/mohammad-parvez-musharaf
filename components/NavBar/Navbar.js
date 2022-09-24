import React, { useState, useRef, useEffect } from "react";
import { links } from "./data";
import Image from "next/image";
import myLOader from './images/profile.jpg'
const Navbar = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-red-400 w-[80%] md:w-[100%] h-[100vh] md:h-12 md:justify-between ">
        <div className="pl-5 md:ml-12 flex flex-col md:flex-row h-[30%] bg-slate-300">
          <div className="pt-5">
            {" "}
            <Image
            className="rounded-full"
              
              src={myLOader}
              alt="Picture of the author"
              width={80}
              height={80}
            />
          </div>
          <div>Name</div>
          <div>email</div>
        </div>

        <ul className="ml-5 md:mr-12 uppercase flex flex-col md:flex-row ">
          {links.map((link) => {
            // const { id, url, text } = link;
            return (
              <li className="py-2 px-1 hover:bg-red-300">
                <a>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
