import React, { Component } from "react";
import M from "materialize-css";
import emailjs from "emailjs-com";
import "materialize-css/dist/css/materialize.min.css";
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

class TabsBusiness extends Component {
  formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "MXN",
  });

  notify = () => toast.error("Los campos con asterisco son obligatorios");
  notify_mail = () => toast.error("Capture una dirección valida de correo");
  notify_send_success = () => toast.success("Correo Enviado");
  notify_send_error = () => toast.error("Ocurrió un error al enviar el correo");

  componentDidMount() {
    this.instance = M.Tabs.init(this.Tabs);
    this.instance = M.Tabs.getInstance(this.Tabs);
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
    this.regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }

  siguienteOnCLick() {
    this.instance.select("test-swipe-2");
  }

  enviarOnCLick() {
    if (
      this.NombreEmpresa &&
      this.NombreContacto &&
      this.Email &&
      this.NumeroEquipos &&
      this.ProgramasUsar &&
      this.DataAreaTrabajo
    ) {
      if (this.Email.match(this.regEmail)) {
        let mensajeCompleto =
          "Nombre de la Empresa: " +
          this.NombreEmpresa +
          "\nNombre del Contacto: " +
          this.NombreContacto +
          "\nCorreo eléctronico: " +
          this.Email +
          "\nArea de Trabajo: " +
          this.DataAreaTrabajo +
          "\n" +
          "Número de Equipos: " +
          this.NumeroEquipos +
          "\nProgramas a Usar:\n" +
          (this.ProgramasUsar ?? "");

        const templateParams = {
          from_name: this.NombreEmpresa,
          message: mensajeCompleto,
          to_name: "Ziverso",
        };

        emailjs
          .send(
            "service_uzqm4x4",
            "template_2r31rfd",
            templateParams,
            "user_Sh6GL9McCN2ZjRzffcdQY"
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
  onChangeNombreEmpresa(nombre) {
    this.NombreEmpresa = nombre;
  }

  onChangeNombreContacto(nombre) {
    this.NombreContacto = nombre;
  }

  onChangeEmail(mail) {
    this.Email = mail;
  }

  onChangeNumeroEquipos(numeroEquipos) {
    this.NumeroEquipos = numeroEquipos;
  }

  onChangeDetalle(programasUsar) {
    this.ProgramasUsar = programasUsar;
  }

  onChangeAreaTrabajo(areaTrabajo) {
    this.DataAreaTrabajo = areaTrabajo;
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
            <a href="#test-swipe-1">Info 1</a>
          </li>
          <li className="tab col s3">
            <a href="#test-swipe-2">Info 2</a>
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
              autocomplete="off"
              onChange={(e) => this.onChangeNombreEmpresa(e.target.value)}
            />
            <label htmlFor="nombre">Nombre de la Empresa*</label>
          </div>
          <div
            className="input-field col s12 m12 l12"
            style={{ margin: "none", padding: "8px" }}
          >
            <input
              id="nombre"
              type="text"
              className="white-text"
              autocomplete="off"
              onChange={(e) => this.onChangeNombreContacto(e.target.value)}
            />
            <label htmlFor="nombre">Nombre del Contacto*</label>
          </div>
          <div
            className="input-field col s12 m12 l12"
            style={{ margin: "none", padding: "8px" }}
          >
            <input
              id="email"
              type="email"
              className="white-text"
              autocomplete="off"
              onChange={(e) => this.onChangeEmail(e.target.value)}
            />
            <label htmlFor="email">Email*</label>
          </div>

          <div className="col s6 offset-s4 m6 offset-m3 l6 offset-l4">
            <button
              className="botonGaming pointer margin-siguiente"
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
            <input
              id="jegos"
              type="text"
              className="white-text"
              autocomplete="off"
              onChange={(e) => this.onChangeAreaTrabajo(e.target.value)}
            />
            <label htmlFor="juegos">Area de trabajo*</label>
          </div>
          <div
            class="input-field col s12 m12 l12"
            style={{ margin: "none", padding: "8px" }}
          >
            <input
              id="presupuesto"
              type="number"
              className="white-text"
              autocomplete="off"
              onChange={(e) => this.onChangeNumeroEquipos(e.target.value)}
            />
            <label htmlFor="presupuesto">Número de Equipos*</label>
          </div>
          <div
            className="input-field col s12 m12 l12"
            style={{ margin: "none", padding: "8px" }}
          >
            <textarea
              id="caracteristicas_adicionales"
              class="materialize-textarea"
              className="white-text"
              autocomplete="off"
              rows="6"
              cols="50"
              onChange={(e) => this.onChangeDetalle(e.target.value)}
            ></textarea>
            <label htmlFor="caracteristicas_adicionales">
              Programa(s) a Usar*
            </label>
          </div>
          <div className="col s6 offset-s4 m6 offset-m3 l6 offset-l4">
            <button
              className="botonGaming pointer"
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

export default TabsBusiness;
