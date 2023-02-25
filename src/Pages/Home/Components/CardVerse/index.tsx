import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaBookMedical,
  FaBookOpen,
  FaMicrophoneAlt,
  FaPray,
} from "react-icons/fa";
import "./style.css";
import { SiteContext } from "../../../../context/ContextSite";

const CardVerse = () => {
  //const { verseBible, setVerseBible } = useContext(SiteContext);
  // async function getVerseBbile() {
  //   const response = await axios.get(
  //     "https://bible-api.com/Jo%C3%A3o+3:16?translation=almeida"
  //   );
  //   setVerseBible(response.data);

  //   console.log(response.data);
  // }
  useEffect(() => {
    //getVerseBbile();
  }, []);
  return (
    <div className="container-site">
      <div className="card-site">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5zYtBdhQv9mGMmMAS0Ymc_1HCbcPAYKGX_uuttRYJYVyatKuWNf3LbCD2KJiaweLvhh4&usqp=CAU" />
        <span>Igreja Presbiteriana do Paranoá</span>
      </div>

      <div className="container-card">
        <div className="info">
          <span>Cultos</span>
        </div>
        <div className="card-info-container">
          <div className="item">
            <div className="card-info">
              <h4>Quartas-feiras</h4>
              <div className="icon-content">
                <span>Culto de Doutrina</span>
                <FaBookMedical color="#0c3e19" />
              </div>
              <span>20H</span>
            </div>
          </div>
          <div className="item">
            <div className="card-info">
              <h4>Terças-feiras</h4>
              <div className="icon-content">
                <span>Culto de Oração</span>
                <FaPray color="#0c3e19" />
              </div>
              <span>20H</span>
            </div>
          </div>

          <div className="item">
            <div className="card-info">
              <h4>Domingos</h4>
              <div className="icon-content">
                <span>Escola Biblica</span>
                <FaBookOpen color="#0c3e19" />
              </div>
              <span>9h</span>
            </div>
          </div>

          <div className="item">
            <div className="card-info">
              <h4>Domingos</h4>
              <div className="icon-content">
                <span>Culto Público</span>
                <FaMicrophoneAlt color="#0c3e19 " />
              </div>
              <span>9H</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardVerse };
