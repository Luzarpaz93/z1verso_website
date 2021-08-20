  import React, { useState, useEffect } from "react";
import logo from "../Imagenes/logo2.png";
import "../pages/mejora.css";
import derecha1 from "../Imagenes/derecha1.png";
import derecha2 from "../Imagenes/derecha2.png";
import derecha3 from "../Imagenes/derecha3.png";
import logo_outline from "../Imagenes/Z1verso_Main_Logo_Blanco.svg";
import M from "materialize-css";
import TabsMejora from "../Tabs/TabsMejora.js";

const Mejoratuequipo = () => {

  const showSeLoQueQuiero = (e) => {
    console.log("Se lo que quiero");
  };

  const showBuscoOpciones = (e) => {;
    console.log("Busco Opciones");
  };

  return (
    <div className="row">
      <div className="col s12 m12 l12 mt3 contenedorVideo">
      <div class="embed-container">
          <iframe src="https://res.cloudinary.com/djlajcfkh/video/upload/v1629485748/Video_8_ck1czd_dioxxf.mp4" frameborder="0" allowfullscreen></iframe>
          </div>
      </div>
      <div className="col s12 m12 l12">
        <div className="row">
          <div className="col s12 m1 l2 hide-on-small-only"></div>
          <div className="col s12 m10 l8">
            <h1 className="textoSomosmejora slide-in-animate">
              Mejora tu equipo
            </h1>
          </div>
          <div className="col s12 m1 l2 hide-on-small-only"></div>
        </div>
        <br />
        <div className="row">
          <div className="col s12 m1 l2 hide-on-small-only"></div>
          <div className="col s12 m10 l8">
            <h1 className="texto-body-mejora slide-in-animate text-shade-m">
              Si ya cuentas con una computadora armada y quieres mejorarla en
              cualquier aspecto ponte en contacto con nosotros y te
              asesoraremos. Solo necesitamos saber algunas características de tu
              equipo para poder hacer recomendaciones. Si ya sabes que es lo que
              quieres, escríbelo en el siguiente recuadro, cuéntanos qué
              querrías mejorar.
            </h1>
          </div>
          <div className="col s12 m1 l2 hide-on-small-only"></div>
        </div>
      </div>
      <div className="col s12 m12 l12">
        <div id="form-mejora-tu-equipo" className="row form-mejora-1">
          <div className="form-container col s12 m8 offset-m2 l6 offset-l3">
            <div className="row my-row normalize-material-tabs">
              <TabsMejora />
            </div>
          </div>
        </div>
      </div>
      {/*<div class="row">
      <div class="col s12 m6 l6">
        <p className="textoSomosmejora slide-in-animate">Lo que hacemos</p>

        <p className="textoCenterSomos slide-in-animate">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <p className="mejoraArmado slide-in-animate">Armado a la medida</p>

        <a href="/quienessomos" class="boton botonQuien zoom-on-load">
          Quiénes somos
        </a>
        <br />
        <p className="flechaMejora zoom-on-load"></p>
      </div>
      <div class="col s12 m6 l6">
        <div className="logoderechaMejora">
          <img src={logo} className="imagenLogoMejora zoom-on-load" />
        </div>
      </div>
      <div class="col s12 m4 l2">

            <div class="contenedorImagenesMejora">
              
                <div class="row">
                  <img src={derecha1}   className="imagenDerecha1"/>
                </div>

                <div class="row">
                <img src={derecha2}   className="imagenDerecha2"/>
                </div>

                <div class="row">
                <img src={derecha3}   className="imagenDerecha3"/>
                </div>
            </div>

       

        </div>
    </div>*/}
    </div>
  );
};

export default Mejoratuequipo;
