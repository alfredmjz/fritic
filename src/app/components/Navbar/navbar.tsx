import React from "react";
import Logo from "./logo";
import SearchBar from "@/app/components/searchbar";
interface NavBarProps {}
const NavBar = (props: NavBarProps) => {
  return (
    <div className="flex w-full h-fit">
      <Logo />
      <SearchBar />
    </div>
  );
};

export default NavBar;
