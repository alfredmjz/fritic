import React from "react";
import Logo from "./logo";
import SearchBar from "@/app/components/searchbar";
import NavigationGroup from "@/app/components/Navbar/navigationGroup/navigationGroup";
interface NavBarProps {}
const NavBar = (props: NavBarProps) => {
  return (
    <div className="flex w-full h-fit bg-transparent backdrop-blur-md">
      <Logo />
      <SearchBar />
      <NavigationGroup />
    </div>
  );
};

export default NavBar;
