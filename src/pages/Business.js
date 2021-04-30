import React, { useState, useEffect, useLayoutEffect } from "react";
import logo from "../Imagenes/logoBusiness.png";
import control from '../Imagenes/ControlGaleria.png';
import linea from '../Imagenes/line.png';

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
    <div class="row">
      {/*<div class="col s12 m4 l2"></div>*/}

      <div class="col s12 m8 l9">
        {/*center */}
        <div className="contenedorcentral">
          <img src={logo} className="imagenLogoBusiness zoom-on-load" />
          <br />
          <p className="tituloParrafo slide-in-animate">Armada para trabajar</p>
          <p className="textoCenterBusiness slide-in-animate">
            Empresas y Pymes que busquen una experiencia óptima y especializada
            para las áreas de sus colaboradores. Este sector está dedicado para
            ustedes.
          </p>
          <br />
          <a href="/conocemas" class="botonBusiness zoom-on-load">
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
  );
};

export default Business;
