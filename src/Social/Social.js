import React, { useState,useEffect  }  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from 'react-router-dom'
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFlow() {
  
  const location = useLocation();

  const [ruta, setruta] = useState(location.pathname)
  const [name, setname] = useState('redes')
  const [name2, setname2] = useState('redesy')

  useEffect(() => {
     if(ruta == "/"){
      setname("redes");
      setname2("redesy");
    }else if(ruta == "/gaming"){
       setname("redes2");
       setname2("redesy2");
    }
    else if(ruta == "/business"){
      setname("redes2");
      setname2("redesy2");
    }
    else if(ruta == "/creative"){
      setname("redes2");
      setname2("redesy2");
    }
  });


  return (
    <div>

      <div className="social-container margenRedes">
        {/*Whatsapp */}
      <a
          href="https://api.whatsapp.com/send?phone=+525574969788"
          className={name}
        >
          <FontAwesomeIcon icon={faWhatsapp} size="1x"   />
        </a>

    {/*Instagram */}

    <a
          href="https://www.instagram.com/z1verso/?hl=es-la"
          className={name}
        >
          <FontAwesomeIcon icon={faInstagram} size="1x"   />
        </a>

      
    {/*facebook */}
        <a
          href="https://www.facebook.com/learnbuildteach/"
          className={name}
        >
          <FontAwesomeIcon icon={faFacebook} size="1x"  />
        </a>
  
    {/*Twitter */}

    <a
          href="https://twitter.com/z1verso "
          className={name}
        >
          <FontAwesomeIcon icon={faTwitter} size="1x"   />
        </a>
      

         {/*Youtube */}
    

        <a
          href="https://www.youtube.com/channel/UClR1kRWEgq2dFkF-X4qwWmQ"
          className={name2}
        >
          <FontAwesomeIcon icon={faYoutube} size="1x"  />
        </a>


      </div>
    </div>
  );
}
