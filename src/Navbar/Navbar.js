import React, { Component, Button, Link } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import "../Social/Social";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import logo from "../Imagenes/Z1verso1_50x50pxF01.svg";
//Z1verso_Main_Sin_Texto logo2
import SocialFlow from "../Social/Social";
import homelateral from "../Imagenes/menuLateral.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

class Navbar extends Component {
  state = { clicked: false };

  constructor(props) {
    super(props);
    this.state = {
      bgColor: ""
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "right",
      inDuration: 250
    });

    var elem2 = document.querySelector(".left-btn");
    var instance2 = M.Sidenav.init(elem2, {
      edge: "left",
      inDuration: 250
    });

    document.addEventListener("DOMContentLoaded", function () {
      var elems3 = document.querySelectorAll(".collapsible");
      var instances3 = M.Collapsible.init(elems3, {});
    });
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper Navbar">
           {/*<a href="#!" className="">
              {" "}
              <img src={logo} className="iconLogo" />
            </a>*/}
            <div className="container-logo-navbar-center-absolute hide-on-large-only">
                  <img src={logo} id="icon-logo-navbar" />
            </div>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger right">
              <i className="material-icons">menu</i>
            </a>
            <a href="#" data-target="menuleft" className="sidenav-trigger left">
              <img
                src={homelateral}
                className="iconolateral hide-on-small-only"
              />
            </a>
            <ul className="left hide-on-med-and-down navbarcenter">
            <li className="margenNavBAR">
                <div className="container-logo-navbar-small">
                  <img src={logo} id="icon-logo-navbar" />
                </div>
              </li>
              <li className="margenNavBAR">
                <a href="/">HOME</a>
              </li>
              <li className="margenNavBAR">
                <a href="/gaming">GAMING</a>
              </li>
              <li className="margenNavBAR">
                <a href="/business">BUSINESS</a>
              </li>
              <li className="margenNavBAR">
                <a href="/creative">CREATIVE</a>
              </li>
            </ul>
            <div className="iconos">
              <SocialFlow />
            </div>
          </div>
        </nav>

        <ul className="sidenav menu1" id="mobile-demo">
          <li className="margenNavBAR">
            <a href="/">HOME</a>
          </li>
          <li className="margenNavBAR">
            <a href="/gaming">GAMING</a>
          </li>
          <li className="margenNavBAR">
            <a href="/business">BUSINESS</a>
          </li>
          <li className="margenNavBAR">
            <a href="/creative">CREATIVE</a>
          </li>
          <li className="margenNavBAR">
            <ul className="collapsible">
              <li>
                <div className="collapsible-header nav-bar-text hide-on-med-and-up">
                  <i className="material-icons">bookmark</i>
                  Mi Empresa
                </div>
                <div className="collapsible-body ziverso-subnav absolute-subnav">
                  <ul>
                    <li className="margenNavBAR">
                      <a href="/quienessomos" className="titulonavside">
                        Quienes somos
                      </a>
                    </li>
                    <li className="margenNavBAR">
                      <a href="/casosdeexito">Casos de éxito</a>
                    </li>
                    <li className="margenNavBAR">
                      <a href="/mejoratuequipo">Mejora tu equipo</a>
                    </li>
                    <li className="margenNavBAR">
                      <a href="/contacto">Contacto</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li className="margenNavBAR">
            <p className="center-align nav-bar-text">
              <span>Contacto</span>
              <p>
                55 7496 9788
                <br />
                55 2691 3901
              </p>
              <p>
                <a
                  href="https://www.instagram.com/z1verso/?hl=es-la"
                  className="redes2"
                >
                  <FontAwesomeIcon icon={faInstagram} size="1x" />
                </a>

                <a href="https://twitter.com/z1verso " className="redes2">
                  <FontAwesomeIcon icon={faTwitter} size="1x" />
                </a>
                <a
                  href="https://www.facebook.com/z1verso"
                  className="redes2"
                >
                  <FontAwesomeIcon icon={faFacebook} size="1x" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UClR1kRWEgq2dFkF-X4qwWmQ"
                  className="redes2"
                >
                  <FontAwesomeIcon icon={faYoutube} size="1x" />
                </a>
              </p>
            </p>
          </li>
        </ul>

        <ul className="sidenav left-btn" id="menuleft">
          <li className="margenNavBAR">
            <a href="/quienessomos" className="titulonavside">
              Quienes somos
            </a>
          </li>
          <li className="margenNavBAR">
            <a href="/casosdeexito">Casos de éxito</a>
          </li>
          <li className="margenNavBAR">
            <a href="/mejoratuequipo">Mejora tu equipo</a>
          </li>
          <li className="margenNavBAR">
            <a href="/contacto">Contacto</a>
          </li>
          {/*<li className="margenNavBAR">
            <p className="center-align white-text">
              <span>Atención a clientes</span>
              <p className="inner">
                55 7496 9788
                <br />
                55 2691 3901
              </p>
            </p>
    </li>*/}
        </ul>
      </div>
    );
  }
}

export default Navbar;
