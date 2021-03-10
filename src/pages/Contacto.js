import React from 'react';
import '../pages/contacto.css'

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";



//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle, FiMail, FiMapPin } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


const Contacto = ()=>{
    return (
      <div class="row fondoform">
        <div class="col s12 m12 l12">

            <div class="row">


 
        
            <div class="col s12 m6 l6">

<div className="contenedorcentral">


<form>
<div class="row">
    <div class="col s6">
      <label for="last_name" className="titulocontactanos">   Contáctanos</label>

    </div>
  </div>
  <div class="row">
    <div class="col s12">
      <label for="last_name" className="titulocaja">Nombre</label>
      <input type="text" name="name" className="caja"/>
    </div>
  </div>

  <div class="row">
    <div class="col s12">
      <label for="last_name" className="titulocaja">Correo electrónico</label>
      <input type="text" name="name" className="caja"/>
    </div>
  </div>


  <div class="row">
    <div class="col s12">
      <label for="last_name" className="titulocaja">Teléfono de contacto</label>
      <input type="text" name="name" className="caja"/>
    </div>
  </div>


  <div class="row">
    <div class="col s12">
      <label for="last_name" className="titulocaja">Asunto</label>
      <input type="text" name="name" className="caja"/>
    </div>
  </div>

  <div class="row">
    <div class="col s12">
      <label for="last_name" className="titulocaja">Mensaje</label>
      <br></br>
      <textarea className="cajamensaje" rows="40" cols="50"></textarea>
    </div>
  </div>

</form>
</div>
    
</div>



<div class="col s12 m6 l6">

<form>
<div class="row">
    <div class="col s6">
      <label for="last_name" className="titulocontactanos"></label>

    </div>
  </div>
  <div class="row">
    <div class="col s6">
      
        <ul>
      <li >
      <div class="row">
          <div class="col s2">
          
          <div className="redesspan">
        <MenuItem icon={<FiMapPin />}>
            

          </MenuItem>
        </div>
          </div>
          <div class="col s10 textoform">
          
          Ubicacion2
        
          </div>
        </div>
      
   
        
        </li>


        <li >
      <div class="row">
          <div class="col s2">
          
          <div className="redesspan">
        <MenuItem icon={<FiMail />}>
            

          </MenuItem>
        </div>
          </div>
          <div class="col s10 textoform">
          
          correo@electroninicio.com
        
          </div>
        </div>
      
   
        
        </li>
    </ul>
    
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/> 
      <br/> 
      <br/> 
      <br/> 
      <br/> 
      <br/> 
       <a href="#"  class="btnEnviar">Enviar</a>
    
    </div>
  </div>


</form>


</div>

            </div>
        </div>
        
       
      </div>
      )
}


  export default Contacto;