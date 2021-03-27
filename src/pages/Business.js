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
        
                <img src={logo}   className="imagenLogoBusiness"/>
                <br/>
                <p className="textoCenterBusiness">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <br/>

                
                <a href="/conocemas"  class="botonBusiness">Cotizar</a>
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


  export default Business;