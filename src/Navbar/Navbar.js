import React, { Component,Button,Link } from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import "../Social/Social";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import logo from '../Imagenes/logo2.png';
import SocialFlow from "../Social/Social";
import homelateral from '../Imagenes/menuLateral.png';

class Navbar extends Component {
    state = { clicked: false }


    constructor(props) {
      super(props);
      this.state = {
        bgColor: ""
      }


    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })

    }


    
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

    document.addEventListener('DOMContentLoaded', function() {
      var elems3 = document.querySelectorAll('.collapsible');
      var instances3 = M.Collapsible.init(elems3, {});
    });
     }
  
    render() {
        return (
          <div>
            <nav>
              <div class="nav-wrapper Navbar">
                <a href="#!" class="brand-logo">
                  {" "}
                  <img src={logo} className="iconLogo" />
                </a>

                <a
                  href="#"
                  data-target="mobile-demo"
                  class="sidenav-trigger right"
                >
                  <i class="material-icons">menu</i>
                </a>
                <a href="#" data-target="menuleft" class="sidenav-trigger left">
                  <img
                    src={homelateral}
                    className="iconolateral hide-on-small-only"
                  />
                </a>
                <ul class="left hide-on-med-and-down navbarcenter">
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
                    <div className="collapsible-header nav-bar-text">
                      <i className="material-icons">bookmark</i>
                      Mi Empresa
                    </div>
                    <div className="collapsible-body ziverso-subnav">
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
            </ul>
          </div>
        );
    }
}


export default Navbar