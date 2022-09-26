import React from "react";
import classes from "./Main.module.css";
const Mains = () => {
  return (
    <>
      <div className={` ${classes.bg}`}>
        <div className="grid grid-cols-1 md:grid-cols-6 backdrop-blur-md h-[100vh] z-0">
          <div className="pl-5 md:ml-11 md:col-span-4 pt-20 ">
            <p className="font-bold text-base md:text-lg text-gray-600   md:leading-10">
              Hello, my name is{" "}
            </p>
            <h1 className="font-bold text-xl md:text-2xl text-gray-800 ">
              Md Parvez Musharaf
            </h1>
            <p className="font-bold text-base md:text-lg text-gray-600">
              Im a Professional web developer. I love to working with
              <span className="text-gray-800">
                HTML, CSS, Tailwindcss, Jascript, Reactjs, Nextjs.
              </span>
            </p>

            <button className="mt-8">Hire me</button>
          </div>

          <div className="pl-5 md:col-span-2 pt-20 ">
            <h1 className="">
              </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mains;
