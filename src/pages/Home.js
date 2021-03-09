import React from 'react';
import logo from '../Imagenes/logo2.png';
import '../pages/home.css'

const Home = ()=>{
    return (
      <div class="row">
        <div class="col s12 m8 l8">

        <div className="contenedorcentral">
            <img className="imagenLogo" />
              <br/>
              <p className="textoCenter">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <br/>

              <button className="boton" >Conoce más</button>
              <br/>
              <p className="flecha"></p>
        </div>
            
         


        </div>
        <div class="col s12 m4 l4"><p>s12 m6 l3</p></div>
       
      </div>

      )
}


  export default Home;