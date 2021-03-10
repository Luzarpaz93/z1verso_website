import React from 'react';
import '../pages/casos.css'
import izquierda from '../Imagenes/izquierdasomos.png';

const Quienessomos = ()=>{
    return (
        <div class="row">
     
  
          <div class="col s12 m4 l4">
          <div className="contenedorcentral">
       
              <img src={izquierda}  className="imagenLogosomos"/>
               
               
          </div>
              
           
  
  
          </div>
          <div class="col s12 m8 l8" >
            <div className="contenedorsomos">
             
              <p className="textoSomos">
                 Quienes somos
              </p>
              
              <p className="textoCenterSomos">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </p>
              <br/> 
              <p className="textoCenterSomos">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </p>

            </div>
           
          </div>
         
        </div>
  
        )
}


  export default Quienessomos;