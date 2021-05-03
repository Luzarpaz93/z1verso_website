import React, { useState, useEffect, useLayoutEffect } from "react";
import logo from "../Imagenes/logoGaming.png";
import control from "../Imagenes/ControlGaleria.png";
import linea from "../Imagenes/line.png";
import TabsGaming from "../Tabs/TabsGaming.js";
import M from "materialize-css/dist/js/materialize.min.js";

import "../pages/Gaming.css";

const Gaming = () => {
  useLayoutEffect(() => {
    document.body.className = "gaming-background";
    return () => {
      document.body.className = "";
    };
  }, []);

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("seleccion", "gaming");
  });

  return (
    <React.Fragment>
      <div class="row">
        {/*<div class="col s12 m4 l2">
      </div>*/}
        <div class="col s12 m8 l9">
          {/*center */}
          <div className="contenedorcentralGaming">
            <img src={logo} className="imagenLogoGaming zoom-on-load" />
            <br />
            <p className="tituloParrafo slide-in-animate">Armada para jugar</p>
            <p className="textoCenterGaming slide-in-animate">
              Sector dedicado para personas que quieren una experiencia de juego
              semiprofesional o profesional. Este sector está dedicado para ti
            </p>
            <br />
            <a href="#cotizar-gaming" className="botonGaming zoom-on-load">
              Cotizar
            </a>
            <br />
            <p className="flecha zoom-on-load"></p> *
          </div>
        </div>
        <div className="col s12 m4 l3 no-padding">
          {/*right */}
          <div class="row">
            <div className="col s8 offset-s2 m12 l12 no-padding">
              <span className="titulo-galeria slide-in-animate-right">
                Galería
              </span>
              <img className="linea-galeria zoom-on-load" src={linea} />
              <img className="control-galeria zoom-on-load" src={control} />
              <img className="control-galeria zoom-on-load" src={control} />
            </div>
          </div>
        </div>
      </div>

      <div
        id="cotizar-gaming"
        className="row"
        style={{ paddingLeft: "5.5%", paddingRight: "2%", height: "500px" }}
      >
        <div className="form-container col s12 m8 offset-m2 l6 offset-l3">
          <div className="row my-row">
            <TabsGaming></TabsGaming>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Gaming;
