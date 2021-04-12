import React, { useState,useEffect  }  from 'react';
import logo from '../Imagenes/logoCreative.png';

import '../pages/Creative.css'



const Creative = ()=>{

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('seleccion', "creative")
    
  });

    return (
      <div class="row">
      <div class="col s12 m4 l2">
        {/*left */}
      </div>
      <div class="col s12 m4 l8">
        {/*center */}
        <div className="contenedorcentral">
      
              <img src={logo}   className="imagenLogoCreative"/>
              <br/>
              <p className="tituloParrafo">
               Armada para diseñar
              </p>
              <p className="textoCenterCreative">
               Personas que necesitan un rendimiento óptimo para edición  de audio, foto, video y cualquier tipo de renderizacion
               en alta calidad. Este sector está dedicado para ti.
              </p>
              <br/>

              
              <a href="/conocemas"  class="botonCreative">COTIZAR</a>
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


  export default Creative;