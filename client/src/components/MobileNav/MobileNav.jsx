import React from "react";
import { MdClose } from "react-icons/md";
import "./MobileNav.scss";
import { useNavigate } from "react-router-dom";

const MobileNav = ({ setMobileNavbar }) => {
  const navigate = useNavigate();
  return (
    <div className="mobileNav">
      <div className="opac-layer" onClick={() => setMobileNavbar(false)}></div>
      <div className="navContent">
        <div className="nav-header">
          <span className="heading">IVARA</span>
          <span className="close-btn" onClick={() => setMobileNavbar(false)}>
            <MdClose className="close-btn" />
            <span className="text">close</span>
          </span>
        </div>
        <nav>
          <a class="menuItem" href="/">
            Home
          </a>
          <a
            class="menuItem"
            onClick={() => {
              setMobileNavbar(false);
              navigate("/category/1");
            }}
          >
            Shop for Him
          </a>
          <a
            class="menuItem"
            onClick={() => {
              setMobileNavbar(false);
              navigate("/category/2");
            }}
          >
            Shop for Her
          </a>
          <a
            class="menuItem"
            onClick={() => {
              setMobileNavbar(false);
              navigate("/category/3");
            }}
          >
            Samples
          </a>
          <a
            onClick={() => setMobileNavbar(false)}
            class="menuItem"
            href="/#contact"
          >
            Contact
          </a>
          <a class="menuItem" href="/about">
            About us
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
