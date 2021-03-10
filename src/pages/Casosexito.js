import React from 'react';
import '../pages/quienessomos.css'
import izquierda from '../Imagenes/google1.png';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';



const Casosexito = ()=>{

    
    return (
        <div class="row">
                <div class="row">
                     <div class="col s12">
                         <div className="tama">
                            <Carousel
                                slidesPerPage={2}
                                slidesPerScroll={2}
                                animationSpeed={1500}
                                autoPlay={2000}
                                stopAutoPlayOnHover
                                offset={50}
                                itemWidth={250}
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
                             </Carousel>

                         </div>
              
                     </div>
                </div>
                <div class="row">
                     <div class="col s12">
                            <p className="textocasos">
                                Nuestros casos de éxito
                            </p>
                            <p className="textoCentercasos">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </p>
                            <br/> 
                            <p className="textoCentercasos">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </p>

                     </div>
                </div>
  
        </div>
  
        )
}


  export default Casosexito;