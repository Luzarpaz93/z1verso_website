import React from 'react';
import logo from '../Imagenes/logo2.png';
import '../pages/home.css'
import derecha1 from '../Imagenes/derecha1.png';
import derecha2 from '../Imagenes/derecha2.png';
import derecha3 from '../Imagenes/derecha3.png';
import { Carousel } from "react-responsive-carousel";



const Home = ()=>{
    return (
      <div className="row">
        <div className="col s8 m10 l10">

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
       
        <div className="col s12 m2 l2">

            <div className="contenedorImagenesHome">
            <Carousel className="tablita"
                      slidesPerPage={2}
                      slidesPerScroll={2}
                      selectedItem={3} 
                      autoPlay={true} 
                      interval={3000} 
                      transitionTime={500}
                      animationSpeed={1500}
                      showThumbs={false}
                      showStatus={false} 
                      showArrows={false} 
                      dynamicHeight={false} 
                      axis={'vertical'} 
                      infiniteLoop={true}
                      offset={20}
                      stopOnHover={false}>
              <div className="imagenDerecha1 responsive-img"><img src={derecha1} /></div>
              <div className="imagenDerecha2 responsive-img"><img src={derecha2} /></div>
              <div className="imagenDerecha3 responsive-img"><img src={derecha3} /></div>
<<<<<<< HEAD

              <div className="imagenDerecha1 responsive-img"><img src={derecha1} /></div>
              <div className="imagenDerecha2 responsive-img"><img src={derecha2} /></div>
              <div className="imagenDerecha3 responsive-img"><img src={derecha3} /></div>
              
=======
              <div className="imagenDerecha1 responsive-img"><img src={derecha1} /></div>
              <div className="imagenDerecha2 responsive-img"><img src={derecha2} /></div>
              <div className="imagenDerecha3 responsive-img"><img src={derecha3} /></div>
              <div className="imagenDerecha1 responsive-img"><img src={derecha1} /></div>
              <div className="imagenDerecha2 responsive-img"><img src={derecha2} /></div>
              <div className="imagenDerecha3 responsive-img"><img src={derecha3} /></div>
              <div className="imagenDerecha1 responsive-img"><img src={derecha1} /></div>
              <div className="imagenDerecha2 responsive-img"><img src={derecha2} /></div>
              <div className="imagenDerecha3 responsive-img"><img src={derecha3} /></div>
>>>>>>> d08fe196c7278e9410436d37b7ebaadfff94f8c9
            </Carousel>
                  
            </div>
        </div>
       
      </div>

      );
}

  export default Home;