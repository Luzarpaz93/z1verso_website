import React, { useState, useEffect, useLayoutEffect } from "react";
import logo from "../Imagenes/logoCreative.png";
import control from "../Imagenes/ControlGaleria.png";
import linea from "../Imagenes/line.png";
import "../pages/Creative.css";
import TabsCreative from "../Tabs/TabsCreative.js";

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
      <div class="row">
        {/*<div class="col s12 m1 l1">
        
      </div>*/}
        <div class="col s12 m8 l9">
          {/*center */}
          <div className="contenedorcentral">
            <img src={logo} className="imagenLogoCreative zoom-on-load" />
            <br />
            <p className="tituloParrafo slide-in-animate">
              Armada para diseñar
            </p>
            <p className="textoCenterCreative slide-in-animate">
              Personas que necesitan un rendimiento óptimo para edición de
              audio, foto, video y cualquier tipo de renderizacion en alta
              calidad. Este sector está dedicado para ti.
            </p>
            <br />
            <a href="#cotizar-creative" class="botonCreative zoom-on-load">
              COTIZAR
            </a>
            <br />
            <p className="flecha zoom-on-load"></p> *
          </div>
        </div>
        <div class="col s12 m4 l3 no-padding">
          {/*right */}
          <div class="row">
            <div class="col s8 offset-s2 m12 l12 no-padding">
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
        id="cotizar-creative"
        className="row"
        style={{ paddingLeft: "5.5%", paddingRight: "2%", height: "600px" }}
      >
        <div className="form-container col s12 m8 offset-m2 l6 offset-l3">
          <div className="row my-row">
            <TabsCreative></TabsCreative>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Creative;
