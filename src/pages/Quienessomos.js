import React from "react";
import "../pages/casos.css";
import izquierda from "../Imagenes/izquierdasomos.png";

const Quienessomos = () => {
  return (
    <React.Fragment>
      <div className="row somos-main-padding custom-flex">
        <div className="col s12 m5 l4">
          <div className="contenedorcentralsomos">
            <img src={izquierda} className="imagenLogosomos zoom-on-load" />
          </div>
        </div>
        <div class="col s12 m7 l8">
          <div className="contenedorsomos">
            <p className="textoSomos slide-in-animate-right text-shade-q">
              Nuestra Historia
            </p>

            <p className="textoCenterSomos slide-in-animate-right text-shade-q">
              Z1verso se formó con el propósito de vender equipos de alta
              calidad a un precio accesible. El nombre nace por la primera
              computadora llamada Z1, pensando en la variedad de equipos que se
              pueden armar, dando paso a todo un universo. Jorge, Luisfer y
              Rodrigo, siempre siguiendo la tecnología, decidieron empezar este
              proyecto con el fin de darte las mejores herramientas para el día
              a día.
            </p>

            <h3 className="textoSomos">¿Quienes Somos?</h3>
            <h4 className="subtexto-somos text-shade-q slide-in-animate-right">Jorge: DIRECTOR DE FINANZAS</h4>
            <p className="textoCenterSomos slide-in-animate-right text-shade-q">
              Maestro en Ingeniería Económica
              Financiera egresado de la Universidad La Salle. Apasionado por los
              mercados tecnológicos mundiales, con interés al mundo de los
              videojuegos con enfoque económico.
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="row somos-main-padding custom-flex mt-r2">
        <div className="col s12 m6 l6 p-c-1">
          <h4 className="subtexto-somos slide-in-animate">Rodrigo: DIRECTOR OPERATIVO</h4>
          <p className="textoCenterSomos slide-in-animate">
          Licenciado en Matemáticas egresado de la Facultad de Ciencias (UNAM).
          Se dedicó a los esports semiprofesionalmente como jugador y como organizador de eventos.
          Su visión y apetito por el conocimiento lo llevaron al fascinante mundo del ensamble de
          computadoras.
          </p>
        </div>
        <div className="col s12 m6 l6 p-c-1">
          <h4 className="subtexto-somos slide-in-animate-right">Luis Fernando: DIRECTOR ADMINISTRATIVO</h4>
          <p className="textoCenterSomos slide-in-animate-right">
          Maestro en Orientación Psicológica egresado de la Universidad Iberoamericana.
          Apasionado por los videojuegos y por la investigación, su visión humana de equidad busca el
          beneficio para todes.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Quienessomos;
