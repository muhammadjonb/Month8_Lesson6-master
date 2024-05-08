"use client";

import React from "react";
import ThemeSwitch from "./ModeSwitch";

const Header = () => {
  return (
    <div className="transition bg-slate-50 dark:bg-slate-700 pacity-95 pt-5 pb-5 -top-1 left-0 right-0  fixed z-10 shadow-lg shadow-black-500/50  xl:pl-20 xl:pr-20 md:pl-2 md:pr-2 pl-2 pr-2  ">
      <div className="container  mx-auto flex items-center   justify-between">
        <p className="leading-8 font-extrabold text-lg dark:text-white">
          Where in the world?
        </p>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Header;
