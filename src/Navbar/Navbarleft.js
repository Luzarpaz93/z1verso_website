import React, { Component,Button,Link } from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import "../Social/Social";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import logo from '../Imagenes/logo2.png';
import SocialFlow from "../Social/Social";


class Navbarleft extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })

    }

    
    componentDidMount() {
      var elem = document.querySelector(".sidenav");
      var instance = M.Sidenav.init(elem, {
          edge: "right",
          inDuration: 250
      });
     }
  
    render() {
        return(
         <div>
           
  <nav >
    <div class="nav-wrapper Navbar">
            
      <a href="#" data-target="mobile-demo" class="sidenav-trigger left"><i class="material-icons">menu</i></a>

    </div>
  </nav>

        <ul className="sidenav" id="mobile-demo">
              <li className="margenNavBAR"><a href="/">Quienes somos</a></li>
              <li className="margenNavBAR"><a href="/gaming">Casos de éxito</a></li>
              <li className="margenNavBAR"><a href="/business">Mejora tu equipo</a></li>
              <li className="margenNavBAR"><a href="/creative">Contacto</a></li>
        </ul>
      
         </div>
            
        )
    }
}


export default Navbarleft