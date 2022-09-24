import React, { useState, useRef, useEffect } from "react";
import { links } from "./data";
import Image from "next/image";
import myLOader from "./images/profile.jpg";
const Navbar = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-red-400 w-[80%] md:w-[100%] h-[100vh] md:h-16 md:justify-between ">
        <div className="pl-5 flex flex-col md:flex-row h-[32%] md:h-12 bg-slate-300 md:bg-red-400">
          <div className="pt-5 md:pt-0  h-10 w-12">
            {" "}
            <Image
              className="rounded-[100%] h-8 w-12"
              src={myLOader}
              alt="Picture of the author"
            />
          </div>
          <div className="mt-16 md:mt-0 md:ml-2">
            <h3 className="font-bold md:text-2xl text-white">
              Mohammad Parvez Musharaf
            </h3>
            <p className="font-light md:text-semibold text-white">
              mdparvezmusharaf2@gmail.com
            </p>
          </div>
        </div>

        <ul className="md:mr-12 uppercase flex flex-col md:flex-row md:items-center ">
          {links.map((link) => {
            // const { id, url, text } = link;
            return (
              <li
                key={link.id}
                className="font-semibold pl-5 py-5 px-1 text-red-100 hover:text-white hover:cursor-pointer duration-700 ease-in-out"
              >
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
