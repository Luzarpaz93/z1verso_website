import React, { useState } from "react";
import '../pages/contacto.css'
import emailjs from 'emailjs-com';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

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


 

  const enviar = () => {
    
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let valor = false;
    let valortelefono = false;
    let valornombre =  false;
    let valorasunto =false;
    let valormensaje = false;
    let mensaje = "";


    if(correo != ""){
      if (!regEmail.test(correo)) {
        valor = false;
        mensaje = mensaje + " El Correo ingresado es invalido."
       }else{
         valor = true;
       }
    }else{
      valor = false;
    }


    if(telefono != ""){
      if(telefono.length == 10){
        valortelefono = true;
      }else{
          console.log("telefono invalido");
          valortelefono = false;
          mensaje = mensaje + " El teléfono ingresado es invalido."
      }
    }else{
      valortelefono = false;
    }
  
    if(name != ""){
      valornombre = true;
    }else{
      valornombre = false;
      mensaje = mensaje + " Debe de ingresar su nombre."
    }

    if(asunto != ""){
        valorasunto = true;
    }else{
      valorasunto = false;
      mensaje = mensaje + " Debe de ingresar el asunto del mensaje."
    }

    if(mensaje != ""){
      valormensaje = true;
    }else{
      valormensaje = false;
      mensaje = mensaje + " Debe de ingresar el mensaje a enviar."
    }

    if(valornombre == true && valor == true && valortelefono == true && valorasunto == true && valormensaje == true){
        console.log("enviando el correo");

        let mensajeCompleto = "Correo eléctronico: " + correo + "\n" + "Teléfono de contacto: " + telefono + "\n" + mensaje;


        const templateParams = {
          from_name: name,
          message: mensajeCompleto,
          to_name:'Ziverso',
    
      };
    
      emailjs.send('service_uzqm4x4','template_2r31rfd', templateParams, 'user_Sh6GL9McCN2ZjRzffcdQY')
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
         console.log('FAILED...', err);
      });
    

    }else{
   
      notify()
    }




  };

  const notify = () =>   toast.error("Llene el formulario de contacto.");

  
  const [name, setname] = useState('')
  const [correo, setcorreo] = useState('')
  const [telefono, settelefono] = useState('')
  const [asunto, setasunto] = useState('')
  const [mensaje, setmensaje] = useState('')
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

    return (
      
      <div className="row fondoform">
        <div className="col s12 m12 l12">
        <ToastContainer 
          position="top-center"
          autoClose={5000} />

            <div className="row">


 
        
            <div className="col s12 m6 l6">

            <div className="contenedorcentral">


              <form >
                <div className="row">
                    <div className="col s6">
                      <label htmlFor="last_name" className="titulocontactanos">   Contáctanos</label>

                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <label htmlFor="last_name" className="titulocaja">Nombre</label>
                      <input type="text" name="name" className="caja"  onChange={e => setname(e.target.value)} />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12">
                      <label htmlFor="last_name" className="titulocaja">Correo electrónico</label>
                      <input type="text" name="correo" className="caja" onChange={e => setcorreo(e.target.value)}/>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col s12">
                      <label htmlFor="last_name" className="titulocaja">Teléfono de contacto</label>
                      <input type="text" name="telefono" className="caja" onChange={e => settelefono(e.target.value)}/>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col s12">
                      <label htmlFor="last_name" className="titulocaja">Asunto</label>
                      <input type="text" name="asunto" className="caja" onChange={e => setasunto(e.target.value)}/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12">
                      <label htmlFor="last_name" className="titulocaja">Mensaje</label>
                      <br></br>
                      <textarea className="cajamensaje" rows="40" cols="50" name="mensaje" onChange={e => setmensaje(e.target.value)} ></textarea>
                    </div>
                  </div>

              </form>
            </div>
    
</div>



            <div className="col s12 m6 l6">


<div className="row">
    <div className="col s6">
      <label htmlFor="last_name" className="titulocontactanos"></label>

    </div>
  </div>
  <div className="row">
    <div className="col s6">
      
        <ul>
      <li >
      <div className="row">
          <div className="col s3">
            <div className="redesspan">
              <MenuItem icon={<FiMapPin />}></MenuItem>
            </div>
          </div>
          <div className="col s19 textoform">
            Ubicación
          </div>
        </div>
      
   
        
        </li>


        <li >
      <div className="row">
          <div className="col s3">
            <div className="redesspan">
                <MenuItem icon={<FiMail />}>
                </MenuItem>
            </div>
          </div>
          <div className="col s9 textoform">
                correo@electroninicio.com
          </div>
        </div>
      
   
        
        </li>
    </ul>
  

       <div className="divisor"></div>
    
       <button  className="btnEnviarEmail" onClick={enviar}>Enviar</button>
    </div>
  </div>




</div>

            </div>
        </div>
        
       
      </div>
      )
}


  export default Contacto;