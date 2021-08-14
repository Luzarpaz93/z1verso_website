import React, { useState, useEffect } from "react";
import logo from "../Imagenes/Z1verso_Logo_Home.svg";
import vinoculares from "../Imagenes/Vinoculares.png";
import sombra from "../Imagenes/sombra.png";
import cuete from "../Imagenes/cuete.png";
import linea from "../Imagenes/line.png";
import diamante from "../Imagenes/diamante.png";
import control from '../Imagenes/ControlGaleria.png';

import galeria_9 from "../Imagenes/galeria/Z1Verso-9.jpg";
import galeria_4 from "../Imagenes/galeria/Z1Verso-4.jpg";
//Imagenes\galeria

import "../pages/home.css";
import derecha1 from "../Imagenes/derecha1.png";
import derecha2 from "../Imagenes/derecha2.png";
import derecha3 from "../Imagenes/derecha3.png";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("seleccion", "home");
  });

  const [animate, setAnimate] = useState({
    section1: 1,
    section2: 1,
  });

  return (
    <div className="row">
      <div className="row custom-flex">
        <div className="col s12 m8 l9">
          <div className="contenedorcentral">
          <div class="embed-container">
          <iframe src="https://res.cloudinary.com/djlajcfkh/video/upload/v1628913132/Video_Introducci%C3%B3n_Z1_IG_adhqk6.mp4" frameborder="0" allowfullscreen></iframe>
          </div>
            {/* <img src={logo} className="zoom-on-load center-block logo-outline-size" /> */}
            <br />
            <p className="textoCenter slide-in-animate justificar">
              Somos un equipo especializado en ensamblado personalizado de
              computadoras para distintos sectores empresariales y particulares 
              dedicados al diseño o a la industria de videojuegos.
            </p>
            <br />
            <a
              href="#procesocompra"
              className="boton zoom-on-load"
              onClick={() => setAnimate({ section1: 1, section2: 0 })}
            >
              Conoce el proceso
            </a>
            <br />
            <a
              id="primera-flecha zoom-on-load"
              href="#conocemas"
              style={{ display: "table", width: "5%", margin: "0 auto" }}
              onClick={() => setAnimate({ section1: 1, section2: 0 })}
            >
              <p className="flecha zoom-on-load"></p>
            </a>
          </div>
          <p
              className="tituloParrafo stateful-slide-left"
              slide={animate.section1}
            >
              Proceso de compra
            </p>
            <div class="embed-container">
            <iframe src="https://res.cloudinary.com/djlajcfkh/video/upload/v1628913140/Proceso_de_ventas_Z1_ujfuo6.mp4" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        {/* <div className="col s12 m4 l3"> */}
          {/*<div className="contenedorImagenesHome">
              <Carousel
                slidesPerPage={2}
                slidesPerScroll={2}
                selectedItem={3}
                autoPlay={true}
                interval={3000}
                transitionTime={500}
                animationSpeed={1500}
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                dynamicHeight={false}
                axis={"vertical"}
                infiniteLoop={true}
                offset={20}
                stopOnHover={false}
              >
                <div className="custom-slider-image">
                  <img src={derecha1} />
                </div>
                <div className="custom-slider-image">
                  <img src={derecha2} />
                </div>
                <div className="custom-slider-image">
                  <img src={derecha3} />
                </div>
                <div className="custom-slider-image">
                  <img src={derecha1} />
                </div>
                <div className="custom-slider-image">
                  <img src={derecha2} />
                </div>
                <div className="custom-slider-image">
                  <img src={derecha3} />
                </div>
              </Carousel>
            </div>*/}
          {/* <div className="row no-padding no-margin">
            
            <div className="col s12 m12 l12 no-padding no-margin">
              <span className="titulo-galeria slide-in-animate-right">
                Galería
              </span>
              <img className="linea-galeria zoom-on-load" src={linea} />

              <div className="container-img-galeria slide-in-animate-right">
                <img className="rounded-img img-galeria-aside" src={galeria_9} />
              </div>
              <div className="container-img-galeria slide-in-animate-right">
                <img className="rounded-img img-galeria-aside" src={galeria_4} />
              </div>
            </div>
            
          </div> */}
        {/* </div> */}
      </div>

      {/*segundo row */}
      <div className="row" id="conocemas">
        <div className="col s12 m6 l6">
          <div className="contenedorvision">
            <p
              className="tituloParrafo stateful-slide-left"
              slide={animate.section1}
            >
              Misión
            </p>
            <img
              className="linea-img stateful-zoom"
              src={linea}
              animate={animate.section1}
            />
            <p
              className="textoCenter stateful-slide-left justificar"
              slide={animate.section1}
              onAnimationEnd={() => setAnimate({ section1: 0, section2: 0 })}
            >
              Establecer un vínculo cercano con nuestros clientes y proveedores,
              que permita el máximo desempeño de sus herramientas tecnológicas
              de trabajo, implementando el mejor costo-beneficio.
            </p>
            <img
              src={vinoculares}
              className="vinoculares hide-on-med-and-up stateful-zoom"
              animate={animate.section1}
              onAnimationEnd={() => setAnimate({ section1: 0, section2: 0 })}
            />
            <img
              src={vinoculares}
              className="vinoculares hide-on-small-only stateful-zoom"
              animate={animate.section1}
              onAnimationEnd={() => setAnimate({ section1: 0, section2: 0 })}
            />
            <br></br>
            <br></br>
            <br></br>
            <img src={sombra} />
          </div>
        </div>

        <div className="col s12 m6 l6">
          <div className="contenedorvision">
            <img
              src={cuete}
              className="cuete hide-on-small-only stateful-zoom"
              animate={animate.section1}
              onAnimationEnd={() => setAnimate({ section1: 0, section2: 0 })}
            />
            <p
              className="tituloParrafo stateful-slide-right"
              slide={animate.section1}
            >
              Visión
            </p>
            <img
              className="linea-img stateful-zoom"
              src={linea}
              animate={animate.section1}
              onAnimationEnd={() => setAnimate({ section1: 0, section2: 0 })}
            />
            <p
              className="textoCenter stateful-slide-right justificar"
              slide={animate.section1}
              onAnimationEnd={() => setAnimate({ section1: 0, section2: 0 })}
            >
              Ser la empresa de ensamble personalizado de computadoras número 1
              en México, con la mayor calidad en piezas y a un precio accesible
              para poner al alcance de todos la tecnología.
            </p>
            <img
              src={cuete}
              className="hide-on-med-and-up stateful-zoom"
              animate={animate.section1}
              onAnimationEnd={() => setAnimate({ section1: 0, section2: 0 })}
            />
            <br />
          </div>
        </div>
      </div>

      {/*para el icono de la flecha */}
      <div className="row">
        <div className="col s12 m12 l12"></div>
        <div className="flecha-container stateful-zoom">
          <a
            href="#valores"
            style={{ display: "table", width: "5%", margin: "0 auto" }}
            onClick={() => setAnimate({ section1: 0, section2: 1 })}
          >
            <p className="flecha stateful-zoom"></p>
          </a>
        </div>
      </div>

      {/*valores*/}
      <div className="row custom-flex" id="valores">
        <div className="col s12 m7 l7">
          <div className="contenedorvision">
            <p
              className="tituloParrafo stateful-slide-left"
              slide={animate.section2}
            >
              Valores
            </p>
            <img
              className="linea-img stateful-zoom"
              src={linea}
              animate={animate.section2}
              onAnimationEnd={() => setAnimate({ section1: 0, section2: 0 })}
            />
            <p
              className="textoCenterValores stateful-slide-left"
              slide={animate.section2}
            >
              Trabajo en equipo: La mejor manera de alcanzar el éxito es
              trabajando todo juntos.
            </p>
            <p
              className="textoCenterValores stateful-slide-left"
              slide={animate.section2}
            >
              Esfuerzo: Respetar el empeño puesto por los demás y sumar el
              nuestro para alcanzar objetivos.
            </p>
            <p
              className="textoCenterValores stateful-slide-left"
              slide={animate.section2}
            >
              Honestidad: Expresamos nuestras ideas a los demás 
              de forma respetuosa. No ocultamos
              información de nuestros servicios a clientes y
              proveedores. Fomentamos una cultura
              organizacional honesta.
            </p>
            <p
              className="textoCenterValores stateful-slide-left"
              slide={animate.section2}
            >
              Equidad: Tratar con respeto a los demás, sin importar sus
              creencias o género.
            </p>
            <p
              className="textoCenterValores stateful-slide-left"
              slide={animate.section2}
            >
              Lealtad: Con los clientes y proveedores, para buscar lo mejor para
              todas las partes interesadas.
            </p>
          </div>
        </div>

        <div className="col s12 m5 l5 height-diamante">
          {<span className="align-helper"></span>}
          <img
            className="align-diamante stateful-zoom"
            src={diamante}
            animate={animate.section2}
            onAnimationEnd={() => setAnimate({ section1: 0, section2: 0 })}
          />
          {/*<br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                         <br></br>*/}
        </div>
      </div>
    </div>
    
    
  );
};

export default Home;
