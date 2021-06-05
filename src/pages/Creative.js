import React, { useState, useEffect, useLayoutEffect } from "react";
import logo from "../Imagenes/Z1verso_Creative_Blanco_C.svg";
import control from "../Imagenes/ControlGaleria.png";
import linea from "../Imagenes/line.png";
import "../pages/Creative.css";
import TabsCreative from "../Tabs/TabsCreative.js";
import galeria_2 from "../Imagenes/galeria/Z1Verso-2.jpg";
import galeria_8 from "../Imagenes/galeria/Z1Verso-8.jpg";

const Creative = () => {
  useLayoutEffect(() => {
    document.body.className = "creative-background";
    return () => {
      document.body.className = "";
    };
  }, []);

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("seleccion", "creative");
  });

  return (
    <React.Fragment>
      <div className="row">
        {/*<div class="col s12 m1 l1">
        
      </div>*/}
        <div className="col s12 m8 l9">
          {/*center */}
          <div className="contenedorcentral">
            <img src={logo} className="imagenLogoCreative zoom-on-load logo-svg-proportions" />
            <br />
            <p className="tituloParrafo slide-in-animate">
              Armada para editar
            </p>
            <p className="textoCenterCreative slide-in-animate justificar">
              Personas que necesitan un rendimiento óptimo para edición de
              audio, foto, video y cualquier tipo de renderizacion en alta
              calidad. Este sector está dedicado para ti.
            </p>
            <br />
            <p className="textoCenterCreative slide-in-animate">
              Equipos desde $13,500
            </p>
            <br />
            <a href="#cotizar-creative" className="botonCreative zoom-on-load">
              COTIZAR
            </a>
            <br />
            <p className="flecha zoom-on-load"></p>
          </div>
        </div>
        <div className="col s12 m4 l3 no-padding">
          {/*right */}
          <div className="row">
            <div className="col s2 hide-on-med-and-up"></div>
            <div className="col s8 m12 l12 no-padding">
              <span className="titulo-galeria slide-in-animate-right">
                Galería
              </span>
              <img className="linea-galeria zoom-on-load" src={linea} />

              <div className="container-img-galeria slide-in-animate-right">
                <img className="rounded-img img-galeria-aside" src={galeria_2} />
              </div>
              <div className="container-img-galeria slide-in-animate-right">
                <img className="rounded-img img-galeria-aside" src={galeria_8} />
              </div>
            </div>
            <div className="col s2 hide-on-med-and-up"></div>
          </div>
        </div>
      </div>

      <div
        id="cotizar-creative"
        className="row"
        style={{ paddingLeft: "5.5%", paddingRight: "2%", height: "600px" }}
      >
        <div className="form-container col s12 m8 offset-m2 l6 offset-l3">
          <div className="row my-row normalize-material-tabs">
            <TabsCreative></TabsCreative>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Creative;
