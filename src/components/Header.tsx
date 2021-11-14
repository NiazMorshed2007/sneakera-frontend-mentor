import React, { FC } from "react";
import logo from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";
import cartIcon from "../assets/icon-cart.svg";

const Header: FC = () => {
  return (
    <header>
      <div className="left">
        <div className="logo-wrapper">
          <img src={logo} alt="" />
        </div>
        <p>Collections</p>
        <p>Men</p>
        <p>Women</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className="right">
        <i>
          <img src={cartIcon} alt="" />
        </i>
        <div className="avatar-wrapper">
          <img src={avatar} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
