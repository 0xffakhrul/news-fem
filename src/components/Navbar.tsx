import logo from "/logo.svg";
import menu from "/icon-menu.svg";
import close from "/icon-menu-close.svg";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex justify-between items-center">
      <img src={logo} alt="logo" />
      <button onClick={handleOpen}>
        <img src={menu} alt="menu" className="md:hidden block" />
      </button>
      <ul
        className={
          open
            ? "fixed md:hidden right-0 top-0 w-[60%] h-full bg-white ease-in-out duration-500 px-7 flex flex-col gap-5 justify-center font-semibold text-xl"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <button onClick={handleOpen}>
          <img src={close} alt="close" className="md:hidden block" />
        </button>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
      <ul className="hidden md:flex space-x-8">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </div>
  );
}
