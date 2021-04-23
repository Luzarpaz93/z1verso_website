import React,{ useState,useEffect  }  from 'react';
import logo from '../Imagenes/logoBusiness.png';

import '../pages/Business.css'



const Business = ()=>{

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('seleccion', "business")

  });



    return (
      <div class="row">
        <div class="col s12 m4 l2">
          {/*left */}
        </div>
        <div class="col s12 m4 l8">
          {/*center */}
          <div className="contenedorcentral">
        
                <img src={logo}   className="imagenLogoBusiness zoom-on-load"/>
                <br/>
                <p className="tituloParrafo slide-in-animate">
                  Armada para trabajar
                </p>
                <p className="textoCenterBusiness slide-in-animate">
                  Empresas y Pymes que busquen una experiencia
                  óptima y especializada para las áreas  de sus 
                  colaboradores. Este sector está dedicado para ustedes.
                </p>
                <br/>

                
                <a href="/conocemas"  class="botonBusiness zoom-on-load">COTIZAR</a>
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


  export default Business;