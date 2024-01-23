"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import Image from "next/image";
import ProfileIcon from "@/public/tsx/profileIcon";
import threeDots from "@/public/svg/threeDots.svg";
import { Button } from "@nextui-org/button";

const ProfileButton = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          radius="full"
          className="bg-white mx-0 px-0"
          startContent={<ProfileIcon />}
        >
          <Image src={threeDots} height={10} width={5} alt="Three Dots" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new" className="flex">
          Example
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileButton;
