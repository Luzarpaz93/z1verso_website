//import useState hook to create menu collapse state
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiMail,
  FiMapPin
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import homelateral from "../Imagenes/menuLateral.png";

const Header = () => {
  const location = useLocation();
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(true);
  const [name, setname] = useState("header");
  const [ruta, setruta] = useState(location.pathname);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  useEffect(() => {
    var guardado = localStorage.getItem("seleccion");

    if (ruta == "/") {
      setname("header");
    } else if (ruta == "/gaming") {
      setname("header2");
    } else if (ruta == "/business") {
      setname("header4");
    } else if (ruta == "/creative") {
      setname("header3");
    }
  });
  return (
    <>
      <div id={name}>
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state 
              <p>{menuCollapse ? "Logo" : "Logo"}</p>*/}
              <img
                src={homelateral}
                onClick={menuIconClick}
                className="iconolateral"
              />
            </div>
          </SidebarHeader>
          <SidebarContent className="contenedorDatos">
            {menuCollapse ? (
              <Menu className="encabezadoMenu2">
                <MenuItem>
                  <a href="/gaming">Quienes somos</a>
                </MenuItem>
                <MenuItem>Casos de éxito</MenuItem>
                <MenuItem>Mejora tu equipo</MenuItem>
                <MenuItem>Contacto</MenuItem>
              </Menu>
            ) : (
              <Menu className="encabezadoMenu">
                <MenuItem>
                  <a href="/quienessomos" className="textohrf">
                    Quienes somos
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="/casosdeexito" className="textohrf">
                    Casos de éxito
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="/mejoratuequipo" className="textohrf">
                    Mejora tu equipo
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="/contacto" className="textohrf">
                    Contacto &nbsp;&nbsp;
                  </a>
                </MenuItem>
                <MenuItem>
                  <p className="center-align textohrf outer">
                    <span>Atención a clientes</span>
                    <p className="inner">
                      55 7496 9788
                      <br />
                      55 2691 3901
                    </p>
                  </p>
                </MenuItem>
              </Menu>
            )}
          </SidebarContent>
          <SidebarFooter className="encabezadoMenuResize">
            <Menu className="encabezadoMenu">
              <MenuItem icon={<FiMail />}>&nbsp;&nbsp;</MenuItem>
              <MenuItem icon={<FiMapPin />}>&nbsp;&nbsp;</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
