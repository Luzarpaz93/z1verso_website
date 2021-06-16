import React, { Component } from "react";
import M from "materialize-css";
import emailjs from "emailjs-com";
import "materialize-css/dist/css/materialize.min.css";
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

class TabsCreative extends Component {
  formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "MXN",
  });

  notify = () => toast.error("Los campos con asterisco son obligatorios");
  notify_mail = () => toast.error("Capture una dirección valida de correo");
  notify_send_success = () => toast.success("¡Gracias, pronto estaremos en contacto contigo!");
  notify_send_error = () => toast.error("Ocurrió un error al enviar el correo");

  componentDidMount() {
    this.instance = M.Tabs.init(this.Tabs);
    this.instance = M.Tabs.getInstance(this.Tabs);
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
    this.regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }

  siguienteOnCLick() {
    this.instance.select("test-swipe-2");
  }

  enviarOnCLick() {
    if (this.Email && this.Nombre && this.DataProgramas && this.CaracAdicional && this.UsoPrincipalPc) {
      if (this.Email.match(this.regEmail)) {
        let mensajeCompleto =
          "Nombre: " +
          this.Nombre +
          "\nProgramas usados normalmente: " +
          this.DataProgramas +
          "\nCorreo eléctronico: " +
          this.Email +
          "\n" +
          "Presupuesto: " +
          ((this.Presupuesto) ? this.Presupuesto : "No Especificado") +
          "\nUso principal de la PC: " + this.UsoPrincipalPc +
          "\n\nCaracteristicas Adicionales:\n" +
          (this.CaracAdicional ?? "");

        const templateParams = {
          from_name: this.Nombre,
          message: mensajeCompleto,
          to_name: "Ziverso",
        };

        emailjs
          .send(
            "service_kdek1nr",
            "template_qm6b081",
            templateParams,
            "user_fJ9MtftfEt8hTHs1pMa2A"
          )
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              this.notify_send_success();
            },
            (err) => {
              console.log("FAILED...", err);
              this.notify_send_error();
            }
          );
      } else {
        this.notify_mail();
      }
    } else {
      this.notify();
    }
  }

  //setname(e.target.value)
  onChangeNombre(nombre) {
    this.Nombre = nombre;
  }

  onChangeEmail(mail) {
    this.Email = mail;
  }

  onChangePresupuesto(option) {
    //this.Presupuesto = budget;
    let data = parseInt(option ?? 0);
    switch(data){
      case 0:
        this.Presupuesto = "";
        break;
      case 1:
        this.Presupuesto = "10,000 - 15,000";
        break;
      case 2:
        this.Presupuesto = "15,000 - 20,000";
        break;
      case 3:
        this.Presupuesto = "25,000 - más";
        break;

    }
    console.log(option)
  }

  onChangeDetalle(adicional) {
    this.CaracAdicional = adicional;
  }

  onChangeProgramas(programas_usados) {
    this.DataProgramas = programas_usados;
  }

  onChangeUsoPc(usosPc){
    this.UsoPrincipalPc = usosPc;
  }

  render() {
    return (
      <>
        <ul
          ref={(Tabs) => {
            this.Tabs = Tabs;
          }}
          id="tabs-swipe-demo"
          className="tabs"
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        >
          <li className="tab col s3">
            <a href="#test-swipe-1">Paso 1</a>
          </li>
          <li className="tab col s3">
            <a href="#test-swipe-2">Paso 2</a>
          </li>
        </ul>

        <div id="test-swipe-1" className="col s12 m12 l12 black">
          <div
            className="input-field col s12 m12 l12"
            style={{ margin: "none", padding: "8px" }}
          >
            <input
              id="nombre"
              type="text"
              className="white-text"
              autoComplete="off"
              onChange={(e) => this.onChangeNombre(e.target.value)}
            />
            <label htmlFor="nombre">Nombre*</label>
          </div>
          <div
            className="input-field col s12 m12 l12"
            style={{ margin: "none", padding: "8px" }}
          >
            <input
              id="email"
              type="email"
              className="white-text"
              autoComplete="off"
              onChange={(e) => this.onChangeEmail(e.target.value)}
            />
            <label htmlFor="email">Email*</label>
          </div>

          <div
            className="input-field col s12 m12 l12"
            style={{ margin: "none", padding: "8px" }}
          >
            <input
              id="jegos"
              type="text"
              className="white-text"
              autoComplete="off"
              onChange={(e) => this.onChangeProgramas(e.target.value)}
            />
            <label htmlFor="juegos">¿Qué programas usas normalmente?*</label>
          </div>

          <div className="col s12 m12 l12">
            <button
              className="botonGaming pointer margin-siguiente center-block"
              onClick={() => this.siguienteOnCLick()}
            >
              Siguiente
            </button>
          </div>
        </div>
        <div id="test-swipe-2" className="col s12 m12 l12 black">
          <div
            className="input-field col s12 m12 l12"
            style={{ margin: "none", padding: "8px" }}
          >
            <i className="material-icons prefix icon-white">paid</i>
            <select id="select-presupuesto" style={{color: "#ffffff"}}
            onChange={e => this.onChangePresupuesto(e.target.value)}>
              <option defaultValue="0" value="0">
                Opcional
              </option>
              <option value="1">10,000 - 15,000</option>
              <option value="2">15,000 - 20,000</option>
              <option value="3">25,000 - más</option>
            </select>
            <label htmlFor="select-presupuesto">Presupuesto</label>
            {/*<input
              id="presupuesto"
              type="number"
              className="white-text"
              autocomplete="off"
              onChange={(e) => this.onChangePresupuesto(e.target.value)}
            />
            <label htmlFor="presupuesto">Presupuesto</label>*/}
          </div>
          <div
            className="input-field col s12 m12 l12"
            style={{ margin: "none", padding: "8px" }}
          >
            <input
              id="jegos"
              type="text"
              className="white-text"
              autoComplete="off"
              onChange={(e) => this.onChangeUsoPc(e.target.value)}
            />
            <label htmlFor="juegos">Uso principal de la PC*</label>
          </div>
          <div
            className="input-field col s12 m12 l12"
            style={{ margin: "none", padding: "8px" }}
          >
            <textarea
              id="caracteristicas_adicionales"
              className="materialize-textarea"
              className="white-text"
              autoComplete="off"
              rows="6"
              cols="50"
              placeholder="Tamaño equipo, luces RGB, que tenga wifi, colores del gabinete, cotizar mouse con colores del gabinete..."
              onChange={(e) => this.onChangeDetalle(e.target.value)}
            ></textarea>
            <label htmlFor="caracteristicas_adicionales">
            Características adicionales*
            </label>
          </div>
          <div className="col s12 m12 l12">
            <button
              className="botonGaming pointer center-block"
              onClick={() => this.enviarOnCLick()}
            >
              Enviar
            </button>
          </div>
        </div>
        <ToastContainer position="top-center" autoClose={5000} />
      </>
    );
  }
}

export default TabsCreative;
