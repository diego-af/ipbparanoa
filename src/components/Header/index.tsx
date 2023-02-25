import React, { useState, useContext } from "react";

import "./index.css";
import { FaAlignJustify } from "react-icons/fa";
import { SiteContext } from "../../context/ContextSite";

type PropsItems = {
  openMenu: boolean;
  setOpenMenu: () => void;
};

export const Header = () => {
  const { openMenu, setOpenMenu } = useContext(SiteContext);

  console.log(openMenu);
  return (
    <>
      <nav className="content-nav">
        <div className="content-logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPTte_yUFJ7ycdiMUalj2V0Q0G8-PsaYfpYHuKGOcGg&s" />
          <span>Igreja Presbiteriana do Paranoá</span>
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

          <div className="icon" onClick={() => setOpenMenu(!openMenu)}>
            <FaAlignJustify size={20} color="#fff" />
          </div>
        </div>
      </nav>
    </>
  );
};
