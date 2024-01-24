"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/dropdown";
import Image from "next/image";
import ProfileIcon from "@/public/tsx/profileIcon";
import threeDots from "@/public/svg/threeDots.svg";
import { Button } from "@nextui-org/button";

const ProfileButton = () => {
  let isRestaurant = false;
  let isBlogger = false;
  const disabledKeys = [];
  if (!isRestaurant) {
    disabledKeys.push("restaurant");
  }
  if (!isBlogger) {
    disabledKeys.push("blogger");
  }
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          radius="full"
          className="bg-white mx-0 px-4 min-w-fit"
          startContent={<ProfileIcon width={15} />}
        >
          <Image src={threeDots} width={4} alt="Three Dots" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" disabledKeys={disabledKeys}>
        <DropdownSection aria-label="Authentication" showDivider>
          <DropdownItem key="sign up">
            <div className="font-bold">Sign Up</div>
          </DropdownItem>
          <DropdownItem key="login">
            <div>Log in</div>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label="Power User">
          <DropdownItem key="restaurant">
            <div>Fritic for Restaurants</div>
          </DropdownItem>
          <DropdownItem key="blogger">
            <div>Fritic for Bloggers</div>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileButton;
