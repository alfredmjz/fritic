import React from "react";
import Logo from "./logo";
import SearchBar from "@/app/components/searchBar";

import NavigationGroup from "@/app/components/Navbar/navigationGroup/navigationGroup";
interface NavBarProps {}
const NavBar = (props: NavBarProps) => {
  return (
    <div className="flex w-full justify-between h-fit bg-transparent backdrop-blur-md items-center py-5">
      <Logo />
      <SearchBar />
      <NavigationGroup />
    </div>
  );
};

export default NavBar;
