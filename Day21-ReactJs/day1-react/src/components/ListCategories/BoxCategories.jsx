import React from "react";

export const BoxCategories = ({img,title}) => {
  return (
    <li>
      <div className="rounded-[20px] overflow-hidden relative group">
        <img className="image" src={img} alt="" />
        <a
          href="#none"
          className="absolute group-hover:bottom-10 left-1/2 -translate-x-1/2 -bottom-10 mt-8 h-9 bg-white px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
        >
          {title}
        </a>
      </div>
    </li>
  );
};
