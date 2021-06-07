import React, { useState, useEffect, useLayoutEffect } from "react";
import logo from "../Imagenes/Z1verso_Business_Blanco_B.svg";
import control from "../Imagenes/ControlGaleria.png";
import linea from "../Imagenes/line.png";
import TabsBusiness from "../Tabs/TabsBusiness.js";
import galeria_10 from "../Imagenes/galeria/Z1Verso-10.jpg";
import galeria_11 from "../Imagenes/galeria/Z1Verso-11.jpg";

import "../pages/Business.css";

const Business = () => {
  useLayoutEffect(() => {
    document.body.className = "business-background";
    return () => {
      document.body.className = "";
    };
  }, []);

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("seleccion", "business");
  });

  return (
    <React.Fragment>
      <div className="row">
        {/*<div class="col s12 m4 l2"></div>*/}

        <div className="col s12 m8 l9">
          {/*center */}
          <div className="contenedorcentral">
            <img src={logo} className="imagenLogoBusiness zoom-on-load logo-svg-proportions" />
            <br />
            <p className="tituloParrafo slide-in-animate">
              Armada para trabajar
            </p>
            <p className="textoCenterBusiness slide-in-animate justificar">
              Empresas y Pymes que busquen una experiencia óptima y
              especializada para las áreas de sus colaboradores. Este sector
              está dedicado para ustedes.
            </p>
            <br />
            <p className="textoCenterBusiness slide-in-animate justificar">
              Equipos desde $6,000 pesos
            </p>
            <br />
            <a href="#cotizar-business" className="botonBusiness zoom-on-load">
              COTIZAR
            </a>
            <br />
            <p className="flecha zoom-on-load"></p>
          </div>
        </div>
        <div className="col s12 m4 l3 no-padding">
          {/*right */}
          <div className="row no-padding no-margin">
            
            <div className="col s12 m12 l12 no-padding no-margin">
              <span className="titulo-galeria slide-in-animate-right">
                Galería
              </span>
              <img className="linea-galeria zoom-on-load" src={linea} />

              <div className="container-img-galeria slide-in-animate-right">
                <img className="rounded-img img-galeria-business" src={galeria_10} />
              </div>
              <div className="container-img-galeria slide-in-animate-right">
                <img className="rounded-img img-galeria-aside" src={galeria_11} />
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div
        id="cotizar-business"
        className="row"
        style={{ paddingLeft: "5.5%", paddingRight: "2%", height: "600px" }}
      >
        <div className="form-container col s12 m8 offset-m2 l6 offset-l3">
          <div className="row my-row normalize-material-tabs">
            <TabsBusiness></TabsBusiness>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Business;
