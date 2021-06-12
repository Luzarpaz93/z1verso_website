import React from 'react';
import '../pages/quienessomos.css'
import izquierda from '../Imagenes/Quetzal (1).png';

// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';



const Casosexito = ()=>{
  
    
    return (
        <div class="row">
                <div class="row">
                     <div class="col s12">
                         <div className="tama">
                         <img src={izquierda} className="logos"/>
                            {/* <Carousel
                                slidesPerPage={2}
                                slidesPerScroll={2}
                                animationSpeed={1500}
                                autoPlay={2000}
                                stopAutoPlayOnHover
                                offset={50}
                                itemWidth={100}
                                clickToChange
                                centered
                                infinite
                                >
                                    <img src={izquierda} />
                                    <img src={izquierda} />
                                    <img src={izquierda} />
                                    <img src={izquierda} />
                                    <img src={izquierda} />
                                    <img src={izquierda} />
                                    <img src={izquierda} />
                                    <img src={izquierda} />
                                    {/* <img src={izquierda} />
                                    <img src={izquierda} />
                                    <img src={izquierda} />
                                    <img src={izquierda} />
                                    <img src={izquierda} />
                                    <img src={izquierda} />
                                    <img src={izquierda} />  
                             </Carousel>*/}

                         </div>
              
                     </div>
                </div>
                <div class="row">
                     <div class="col s12">
                            <p className="textocasos slide-in-animate">
                                Nuestros casos de éxito
                            </p>
                            <p className="textoCentercasos slide-in-animate justificar">
                                Estas son las empresa que hemos apoyado en ensamblado de computadoras que se adecuan a las necesidades
                                de su negocio. Son nuestros mejores referentes para la calidad de nuestro trabajo. 
                            </p>
                            <br/> 

                     </div>
                </div>
  
        </div>
  
        )
}


  export default Casosexito;