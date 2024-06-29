import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/imgs/Hikma-v2.svg";
import BurgerMenuBtn from "./BurgerMenuBtn";
import LoginBtn from "./LoginBtn";
import MenuMdLg from "./MenuMdLg";
import MenuSm from "./MenuSm";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const showSmMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <header className="relative">
      <nav className="bg-gray-700 px-4 lg:px-6 pt-4">
        <div className="flex justify-between items-center mx-auto w-[95%]">
          <Link to="/">
            <img src={logo} alt="ida tech logo" className="w-40" />
          </Link>
          <MenuMdLg />
          <div className="flex items-center lg:order-2">
            <LoginBtn />
          </div>
          <div className="flex items-center">
            <BurgerMenuBtn onClick={showSmMenu} />
          </div>
        </div>
        <div
          className=" lg:hidden sticky top-28 z-40 bg-bodyLight "
          style={{
            display: toggleMenu ? "block" : "none",
            opacity: toggleMenu ? 1 : 0,
            transition: "ease",
            transitionDuration: 0.5,
          }}
        >
          <MenuSm setToggleMenu={setToggleMenu} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
