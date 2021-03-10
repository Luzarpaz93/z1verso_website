import React, { Component,Button,Link } from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import "../Social/Social";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import logo from '../Imagenes/logo2.png';
import SocialFlow from "../Social/Social";


class Navbar extends Component {
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
      
      <a href="#!" class="brand-logo">  <img src={logo}   className="iconLogo"/></a>
      

  
      
      <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
      <ul class="left hide-on-med-and-down navbarcenter">
    
        <li className="margenNavBAR"><a href="/">HOME</a></li>
        <li className="margenNavBAR"><a href="/gaming">GAMING</a></li>
        <li className="margenNavBAR"><a href="/business">BUSINESS</a></li>
        <li className="margenNavBAR"><a href="/creative">CREATIVE</a></li>
      </ul>
      <div className="iconos">
      <SocialFlow/>
      </div>
 
    </div>
    
   
  </nav>

  <ul className="sidenav" id="mobile-demo">
  <li className="margenNavBAR"><a href="/">HOME</a></li>
        <li className="margenNavBAR"><a href="/gaming">GAMING</a></li>
        <li className="margenNavBAR"><a href="/business">BUSINESS</a></li>
        <li className="margenNavBAR"><a href="/creative">CREATIVE</a></li>
  </ul>
         </div>
            
        )
    }
}


export default Navbar