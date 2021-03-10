import React from 'react';
import logo from '../Imagenes/logo2.png';
import '../pages/mejora.css'
import derecha1 from '../Imagenes/derecha1.png';
import derecha2 from '../Imagenes/derecha2.png';
import derecha3 from '../Imagenes/derecha3.png';



const Mejoratuequipo = ()=>{



    return (
      <div class="row">
        <div class="col s12 m6 l6">

             <p className="textoSomos">
                Lo que hacemos
              </p>

              <p className="textoCenterSomos">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </p>

              <p className="mejoraArmado">
                Armado a la medida
              </p>

              <a href="/quienessomos"  class="boton botonQuien">Quiénes somos</a>
              <br/>
              <p className="flechaMejora"></p>
        </div>
        <div class="col s12 m2 l4">
          
          <div className ="logoderecha">
            <img src={logo}   className="imagenLogo"/>
               
           
          </div>
         
        </div>
        <div class="col s12 m4 l2">

            <div class="contenedorImagenes">
              
                <div class="row">
                  <img src={derecha1}   className="imagenDerecha1"/>
                </div>

                <div class="row">
                <img src={derecha2}   className="imagenDerecha2"/>
                </div>

                <div class="row">
                <img src={derecha3}   className="imagenDerecha3"/>
                </div>
            </div>

       

        </div>
       
      </div>

      )
}


  export default Mejoratuequipo;