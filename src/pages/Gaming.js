import React, { useState,useEffect  }  from 'react';
import logo from '../Imagenes/logoGaming.png';

import '../pages/Gaming.css'



const Gaming = ()=>{

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('seleccion', "gaming")

  });


    return (
      <div class="row">
      <div class="col s12 m4 l2">
        {/*left */}
      </div>
      <div class="col s12 m4 l8">
        {/*center */}
        <div className="contenedorcentralGaming">
      
              <img src={logo}   className="imagenLogoGaming zoom-on-load"/>
              <br/>
              <p className="tituloParrafo slide-in-animate">
                Armada para jugar 
              </p>
              <p className="textoCenterGaming slide-in-animate">
                Sector dedicado para personas que quieren una 
                experiencia de juego semiprofesional o profesional. 
                Este sector está dedicado para ti

              </p>
              <br/>

              
              <a href="/"  class="botonGaming zoom-on-load">Cotizar</a>
              <br/>
              <p className="flecha zoom-on-load"></p> *
        </div>
      </div>
      <div class="col s12 m4 l2">
        {/*right */}
      </div>
    </div>
      )
}


  export default Gaming;