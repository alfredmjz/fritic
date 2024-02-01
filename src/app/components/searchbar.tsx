import React from "react";
import VerticalLine from "@/public/svg/verticalLine.svg";
import RightArrow from "@/public/svg/rightArrow.svg";
import Image from "next/image";

interface SearchBarProps {}
const NavBar = (props: SearchBarProps) => {
  return (
    <div className="flex w-fit h-fit justify-center items-center">
      <div className="flex bg-beige-color py-2.5 px-3 rounded-full text-sm justify-center items-center">
        <input placeholder="Location" className="bg-beige-color"></input>
        <Image src={VerticalLine} alt="Vertical Line" />
        <input placeholder="Craving" className="bg-beige-color"></input>
        <button className="bg-main-theme rounded-full w-fit h-fit px-2.5 py-3.5 flex justify-center items-center flex-shrink-0">
          <Image src={RightArrow} alt="right arrow" height={10} width={7} />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
