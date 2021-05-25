import React from "react";
import "../pages/casos.css";
import izquierda from "../Imagenes/izquierdasomos.png";

import jorge from "../Imagenes/quienes_somos/jorge.jpeg";
import luis from "../Imagenes/quienes_somos/luis_fernando.jpeg";
import rodrigo from "../Imagenes/quienes_somos/rodrigo.jpg";

const Quienessomos = () => {
  return (
    <React.Fragment>
      <div className="row somos-main-padding custom-flex mt-r2 margin-row-1">
        {/*<div className="col s12 m5 l4">
          <div>
            <img
              src={izquierda}
              className="imagenLogosomos zoom-on-load image-start-1"
            />
          </div>
        </div>*/}
        <div className="col s1 m1 l2 hide-on-small-only"></div>
        <div class="col s12 m10 l8">
          <div className="contenedorsomos">
            <p className="textoSomos slide-in-animate-right text-shade-q">
              Nuestra Historia
            </p>
            <img src={izquierda} className="imagenes-staff zoom-on-load" />
            <p className="textoCenterSomos slide-in-animate-right text-shade-q center-align mt-r2">
              Z1verso se formó con el propósito de vender equipos de alta
              calidad a un precio accesible. El nombre nace por la primera
              computadora llamada Z1, pensando en la variedad de equipos que se
              pueden armar, dando paso a todo un universo. Jorge, Luisfer y
              Rodrigo, siempre siguiendo la tecnología, decidieron empezar este
              proyecto con el fin de darte las mejores herramientas para el día
              a día.
            </p>
          </div>
        </div>
        <div className="col s1 m1 l2 hide-on-small-only"></div>
      </div>

      <div className="row somos-main-padding custom-flex mt-r2">
        <div className="col s12 m12 l12">
          <h3 className="textoSomos centrar-text">¿Quienes Somos?</h3>
          <h4 className="subtexto-somos text-shade-q slide-in-animate-right centrar-text">
            Jorge: DIRECTOR DE FINANZAS
          </h4>
          <img src={jorge} className="imagenes-staff zoom-on-load" />
        </div>
      </div>

      <div className="row somos-main-padding custom-flex mt-r2">
        <div className="col s1 m1 l2 hide-on-small-only"></div>
        <div className="col s12 m10 l8 p-c-1">
          <p className="textoCenterSomos slide-in-animate-right text-shade-q centrar-text">
            Maestro en Ingeniería Económica Financiera egresado de la
            Universidad La Salle. Apasionado por los mercados tecnológicos
            mundiales, con interés al mundo de los videojuegos con enfoque
            económico.
            <br />
          </p>
        </div>
        <div className="col s1 m1 l2 hide-on-small-only"></div>
      </div>

      <div className="row somos-main-padding custom-flex mt-r2">
        <div className="col s12 m12 l12">
          <h4 className="subtexto-somos slide-in-animate centrar-text">
            Rodrigo: DIRECTOR OPERATIVO
          </h4>
          <img src={rodrigo} className="imagenes-staff zoom-on-load" />
        </div>
      </div>

      <div className="row somos-main-padding custom-flex mt-r2">
        <div className="col s1 m1 l2 hide-on-small-only"></div>
        <div className="col s12 m10 l8 p-c-1">
          <p className="textoCenterSomos slide-in-animate centrar-text">
            Licenciado en Matemáticas egresado de la Facultad de Ciencias
            (UNAM). Se dedicó a los esports semiprofesionalmente como jugador y
            como organizador de eventos. Su visión y apetito por el conocimiento
            lo llevaron al fascinante mundo del ensamble de computadoras.
          </p>
        </div>
        <div className="col s1 m1 l2 hide-on-small-only"></div>
      </div>

      <div className="row somos-main-padding custom-flex mt-r2">
        <div className="col s12 m12 l12">
          <h4 className="subtexto-somos slide-in-animate-right centrar-text">
            Luis Fernando: DIRECTOR ADMINISTRATIVO
          </h4>
          <img src={luis} className="imagenes-staff zoom-on-load" />
        </div>
      </div>

      <div className="row somos-main-padding custom-flex mt-r2">
        <div className="col s1 m1 l2 hide-on-small-only"></div>
        <div className="col s12 m10 l8 p-c-1">
          <p className="textoCenterSomos slide-in-animate-right centrar-text">
            Maestro en Orientación Psicológica egresado de la Universidad
            Iberoamericana. Apasionado por los videojuegos y por la
            investigación, su visión humana de equidad busca el beneficio para
            todes.
          </p>
        </div>
        <div className="col s1 m1 l2 hide-on-small-only"></div>
      </div>
    </React.Fragment>
  );
};

export default Quienessomos;
