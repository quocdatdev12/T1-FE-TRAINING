import React from "react";
import ico_freeship from "../../assets/images/ico_freeship.svg"

export const BoxServices = ({img,title}) => {
  return (
    <li className="flex items-center lg:justify-center lg:flex-1 gap-[15px]">
      <img src={img} alt="" />
      <span className="text-sm lg:text-base font-semibold">
      {title}
      </span>
    </li>
  );
};
