import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./Footer.css";

import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

const Footer = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l2 m3 s12 center-align">
              <br className="hide-on-small-only" />
              <h5 className="white-text">Contacto</h5>
              <br className="hide-on-med-and-up" />
            </div>
            <div className="col l3 m4 s12 center-align">
              <p className="grey-text text-lighten-4">
                <strong>Atención a clientes</strong>
                <br />
                55 7496 9788
                <br />
                55 2691 3901
              </p>
            </div>
            <div className="col l7 m5 hide-on-small-onlycenter-align"></div>
          </div>
        </div>
        <div className="footer-copyright center-align">
          <div className="container no-spacing">© 2021 Z1verso</div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
