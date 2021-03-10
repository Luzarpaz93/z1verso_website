import React from "react";
import { Carousel } from "react-responsive-carousel";
import izquierda from '../Imagenes/google1.png';

export default () => (
  <Carousel autoPlay showThumbs={false} showArrows={false} dynamicHeight={false}>
    <div className="tama">
    <img src={izquierda} className = "tama"/>

    </div>
    <div>
    <img src={izquierda}/>

    </div>
    <div>
    <img src={izquierda}/>

    </div>
    <div>
    <img src={izquierda}/>

    </div>

  </Carousel>
);