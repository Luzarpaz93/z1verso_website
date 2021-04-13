import React, { useState,useEffect  } from 'react';
import logo from '../Imagenes/logo2.png';
import vinoculares from '../Imagenes/Vinoculares.png';
import sombra from '../Imagenes/sombra.png';
import cuete from '../Imagenes/cuete.png';
import linea from '../Imagenes/line.png';
import diamante from '../Imagenes/diamante.png';

import '../pages/home.css'
import derecha1 from '../Imagenes/derecha1.png';
import derecha2 from '../Imagenes/derecha2.png';
import derecha3 from '../Imagenes/derecha3.png';
import { Carousel } from "react-responsive-carousel";



const Home = ()=>{

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('seleccion', "home")

  });



    return (
      <div className="row">
          <div className="row">
            <div className="col s8 m10 l10">
                <div className="contenedorcentral">

                  <img src={logo}   className="imagenLogo"/>
                  <br/>
                  <p className="textoCenter">
                    Somos un equipo especializado en ensamblado
                    personalizado de hardware para distintos sectores
                    empresariales, asi como para particulares dedicados al 
                    diseño o a la industría de videojuegos.

                  </p>
                  <br/>

        
                  <a href="#conocemas"  class="boton">Conoce más</a>
                  <br/>
                  <p className="flecha"></p> *
                </div>
            </div>

            <div className="col s12 m2 l2">
                <div className="contenedorImagenesHome">
                      <Carousel className="tablita"
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
                                axis={'vertical'} 
                                infiniteLoop={true}
                                offset={20}
                                stopOnHover={false}>
                                  <div className="imagenDerecha1 responsive-img"><img src={derecha1} /></div>
                                  <div className="imagenDerecha2 responsive-img"><img src={derecha2} /></div>
                                  <div className="imagenDerecha3 responsive-img"><img src={derecha3} /></div>


                                  <div className="imagenDerecha1 responsive-img"><img src={derecha1} /></div>
                                  <div className="imagenDerecha2 responsive-img"><img src={derecha2} /></div>
                                  <div className="imagenDerecha3 responsive-img"><img src={derecha3} /></div>
    


                      </Carousel>
                    
        
                  </div>
            </div>
          </div>
      
      
        {/*segundo row */}
        <div className="row" id="conocemas">

              <div className="col s6 m6 l6">
                    <div className="contenedorcentral">
                    <p className="tituloParrafo">
                      Misión
                    </p>
                    <img src={linea}  />
                    <p className="textoCenter">
                    Establecer un vínculo cercano con nuestros clientes y proveedores, que permita el máximo desempeño de sus herramientas tecnológicas de trabajo, implementando el mejor costo-beneficio.
                    </p>

                    <img src={vinoculares}   className="vinoculares"/>
                    <br></br>
                    <br></br>
                         <br></br>
                    <img src={sombra}  />
                      
                    </div>
                </div>

                <div className="col s6 m6 l6">

                  <div className="contenedorcentral">
                    <img src={cuete}   className="cuete"/>
                      <p className="tituloParrafo">
                        Visión
                      </p>
                      <img src={linea}  />
                      <p className="textoCenter">

                          Ser la empresa de ensamble personalizado de computadoras número 1 en México, 
                          con la mayor calidad en piezas y a un precio accesible para poner al alcance de todos la tecnología.
                      </p>

                      <br/>
                    </div>
                </div>
          </div>

          {/*para el icono de la flecha */}
          <div className="row" >
              <p className="flecha">
              <a href="#conocemas"  class="flecha"></a>
              </p> *

             
          </div>

        {/*valores*/}
          <div className="row" id="valores" >
                <div className="col s6 m6 l6">
                    <div className="contenedorcentral">
                    <p className="tituloParrafo">
                      Valores
                    </p>
                    <img src={linea}  />
                    <p className="textoCenterValores">
                      Trabajo en equipo: La mejor manera de alcanzar el éxito es trabajando todo juntos.
                    </p>
                    <p className="textoCenterValores">
                      Esfuerzo: Respetar el empeño puesto por los demás y sumar el nuestro para alcanzar objetivos.
                    </p>
                    <p className="textoCenterValores"> 
                      Honestidad: Expresamos nuestras ideas a los demás de forma respetuosa, no ocultamos información de nuestros compañeros. 
                    </p>
                    <p className="textoCenterValores">
                      Equidad: Tratar con respeto a los demás, sin importar sus creencias o género. 
                    </p>
                    <p className="textoCenterValores">
                      Lealtad: Con los clientes y proveedores, para buscar lo mejor para todas las partes interesadas. 
                    </p>
                      
                    </div>
                </div>

                <div className="col s6 m6 l6">
                  <div className="contenedorcentral">
                      <img src={diamante}  />
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
                      <br></br>
                         <br></br>
                  </div>
                  
                </div>
          </div>
      
      </div>

      );
}

  export default Home;