import React from "react";
import VerticalLine from "@/public/svg/verticalLine.svg";
import RightArrow from "@/public/svg/rightArrow.svg";
import LocateMe from "@/public/svg/locateMe.svg";
import Image from "next/image";

interface SearchBarProps {}
const NavBar = (props: SearchBarProps) => {
  return (
    <div className="flex bg-beige-color rounded-full text-sm min-w-fit h-fit justify-around items-center py-2.5 px-3 shrink-0">
      <input
        placeholder="Location"
        className="bg-beige-color focus:outline-none w-1/6 shrink-0"
      />
      <button>
        <Image src={LocateMe} alt="Locate Me" />
      </button>

      <Image src={VerticalLine} alt="Vertical Line" />
      <input
        placeholder="Craving"
        className="bg-beige-color focus:outline-none shrink-0"
      />
      <button className="bg-main-theme rounded-full w-fit h-fit px-2.5 py-3.5 flex justify-center items-center flex-shrink-0">
        <Image src={RightArrow} alt="right arrow" height={10} width={7} />
      </button>
    </div>
  );
};

export default NavBar;
