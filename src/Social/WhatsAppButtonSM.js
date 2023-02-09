import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function WhatsappButtonSM () {
  const [name, setname] = useState("_1bpcM");

  return (
    <div className="hide-on-med-and-up">
      <a
        href="https://api.whatsapp.com/send?phone=5215574969788"
        className={name}
      >
        <FontAwesomeIcon icon={faWhatsapp} size="1x" />
      </a>
    </div>
  );
}
