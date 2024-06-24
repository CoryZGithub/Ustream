import React from "react";
import { useRouter } from "next/router";

interface NavbarItemProps {
  label: string;
  active?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active }) => {
  const router = useRouter();

  const handleClick = () => {
    const pathname =
      label.toLowerCase() === "home" ? "/" : `/${label.toLowerCase()}`;
    router.push({
      pathname,
      query: {},
    });
  };

  return (
    <div
      onClick={!active ? handleClick : undefined}
      className={
        active
          ? "text-white cursor-default"
          : "text-gray-200 hover:text-gray-300 cursor-pointer transition"
      }
    >
      {label}
    </div>
  );
};

export default NavbarItem;
