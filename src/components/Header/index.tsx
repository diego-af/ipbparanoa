import React, { useState, useContext, useEffect } from "react";

import "./index.css";
import { FaAlignJustify } from "react-icons/fa";
import { SiteContext } from "../../context/ContextSite";
import Image from "../../assets/logo.jpeg";

type PropsItems = {
  openMenu: boolean;
  setOpenMenu: () => void;
};

export const Header = () => {
  const { openMenu, setOpenMenu } = useContext(SiteContext);

  console.log(openMenu);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(windowWidth);
  return (
    <>
      <nav className="content-nav">
        <div className="content-logo">
          <img src={Image} />
        </div>
        <div className="list-menu-content">
          <div className="list-menu">
            <ul className="around-list">
              <li className="list-item">Home</li>
              <li className="list-item">Contatos</li>
              <li className="list-item">Departamentos</li>
              <li className="list-item">Sobre</li>
            </ul>
          </div>
          <div
            className="list-menu around"
            style={{
              display: openMenu && windowWidth < 600 ? "flex" : " none",
            }}
          >
            <ul className="around-list">
              <li className="list-item">Home</li>
              <li className="list-item">Contatos</li>
              <li className="list-item">Departamentos</li>
              <li className="list-item">Sobre</li>
            </ul>
          </div>

          <div className="icon" onClick={() => setOpenMenu(!openMenu)}>
            <FaAlignJustify size={20} color="#fff" />
          </div>
        </div>
      </nav>
    </>
  );
};
