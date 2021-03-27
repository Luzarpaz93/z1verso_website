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
      
              <img src={logo}   className="imagenLogoGaming"/>
              <br/>
              <p className="textoCenterGaming">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <br/>

              
              <a href="/"  class="botonGaming">Cotizar</a>
              <br/>
              <p className="flecha"></p> *
        </div>
      </div>
      <div class="col s12 m4 l2">
        {/*right */}
      </div>
    </div>
      )
}


  export default Gaming;