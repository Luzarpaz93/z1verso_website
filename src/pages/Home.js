import React from 'react';
import logo from '../Imagenes/logo2.png';
import '../pages/home.css'
import derecha1 from '../Imagenes/derecha1.png';
import derecha2 from '../Imagenes/derecha2.png';
import derecha3 from '../Imagenes/derecha3.png';



const Home = ()=>{



    return (
      <div class="row">
        <div class="col s12 m8 l8">

        <div className="contenedorcentral">
     
            <img src={logo}   className="imagenLogo"/>
              <br/>
        <p className="textoCenter">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <br/>

               
               <a href="/conocemas"  class="boton">Conoce más</a>
              <br/>
              <p className="flecha"></p> *
        </div>
            
         


        </div>
        <div class="col s12 m4 l4">

            <div class="contenedorImagenesHome">

              
                  <table className="tablita">
                    

                    <tbody>
                      <tr>
                        <td> <img src={derecha1} class="responsive-img"  className="imagenDerecha1"/></td>
                      
                      </tr>
                      <tr>
                        <td> <img src={derecha2} class="responsive-img"   className="imagenDerecha2"/></td>
                    
                      </tr>
                      <tr>
                        <td> <img src={derecha3} class="responsive-img"  className="imagenDerecha3"/></td>
                        
                      </tr>
                    </tbody>
                  </table>
              
                {/* <div class="row">
                
                </div>

              
                 <div class="row">
                 
                </div>

                <div class="row">
                 
                </div>  */}
            </div>
        </div>
       
    

      </div>

      )
}


  export default Home;