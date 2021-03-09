import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFlow() {
  
  return (
    <div>

      <div className="social-container">
        {/*Whatsapp */}
      <a
          href="https://wwww.twitter.com"
          className="redes"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="1x"   />
        </a>

    {/*Instagram */}

    <a
          href="https://wwww.twitter.com"
          className="redes"
        >
          <FontAwesomeIcon icon={faInstagram} size="1x"   />
        </a>

      
    {/*facebook */}
        <a
          href="https://www.facebook.com/learnbuildteach/"
          className="redes"
        >
          <FontAwesomeIcon icon={faFacebook} size="1x"  />
        </a>
  
    {/*Twitter */}

    <a
          href="https://wwww.twitter.com"
          className="redes"
        >
          <FontAwesomeIcon icon={faTwitter} size="1x"   />
        </a>
      

         {/*Youtube */}
    

        <a
          href="https://www.youtube.com/c/jamesqquick"
          className="redesy"
        >
          <FontAwesomeIcon icon={faYoutube} size="1x"  />
        </a>


      </div>
    </div>
  );
}
