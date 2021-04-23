import React from 'react';
import '../pages/casos.css'
import izquierda from '../Imagenes/izquierdasomos.png';

const Quienessomos = ()=>{
    return (
        <div className="row somos-main-padding custom-flex">
     
  
          <div className="col s12 m5 l4">
          <div className="contenedorcentralsomos">
       
              <img src={izquierda} className="imagenLogosomos zoom-on-load"/>
               
               
          </div>
              
           
  
  
          </div>
          <div class="col s12 m7 l8" >
            <div className="contenedorsomos">
             
              <p className="textoSomos slide-in-animate-right">
                 Quienes somos
              </p>
              
              <p className="textoCenterSomos slide-in-animate-right">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </p>
              <br/> 
              <p className="textoCenterSomos slide-in-animate-right">
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