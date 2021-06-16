import React, { Component } from "react";
import M from "materialize-css";
import emailjs from "emailjs-com";
import "materialize-css/dist/css/materialize.min.css";
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

class TabsMejora extends Component {
  constructor(props) {
    super(props);
    this.state = { showExtra: "hide", showDefault: "" };
  }

  notify = () => toast.error("Los campos con asterisco son obligatorios");
  notify_mail = () => toast.error("Capture una dirección valida de correo");
  notify_send_success = () =>
    toast.success("¡Gracias, pronto estaremos en contacto contigo!");
  notify_send_error = () => toast.error("Ocurrió un error al enviar el correo");

  componentDidMount() {
    this.checkEspecificaciones = false;
    this.isImageSet = false;
    this.vns = "No Especificado";
    this.instance = M.Tabs.init(this.Tabs);
    this.instance = M.Tabs.getInstance(this.Tabs);
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
    this.regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var elemsDate = document.querySelectorAll(".datepicker");
    var instancesDate = M.Datepicker.init(elemsDate);

    var elemsTime = document.querySelectorAll(".timepicker");
    var instancesTime = M.Timepicker.init(elemsTime);

    this.form_Correo = document.getElementById("form-sin-caracteristicas");
  }

  checkNoSpecifications(e) {
    this.checkEspecificaciones = !this.checkEspecificaciones;
    if (this.checkEspecificaciones) {
      this.setState({ showExtra: "", showDefault: "hide" });
    } else {
      this.setState({ showExtra: "hide", showDefault: "" });
    }

    console.log(this.checkEspecificaciones);
  }

  enviarSeQueQuieroClick() {
    if (this.piezasNecesariasCliente) {
      let mensajeCompleto =
        "Piezas solicitadas: " + this.piezasNecesariasCliente;
      const templateParams = {
        from_name: "Cliente",
        message: mensajeCompleto,
        to_name: "Ziverso"
      };
      this.notify_send_success();
      emailjs
        .send(
          "service_kdek1nr",
          "template_qm6b081",
          templateParams,
          "user_fJ9MtftfEt8hTHs1pMa2A"
        )
        .then(
          response => {
            console.log("SUCCESS!", response.status, response.text);
            this.notify_send_success();
          },
          err => {
            console.log("FAILED...", err);
            this.notify_send_error();
          }
        );
    } else {
      this.notify();
    }
  }

  enviarBuscoOpcionesClick() {
    if (this.checkEspecificaciones) {
      if (this.fechaLlamada && this.horaLlamada && this.detalleMejora) {
        let mensajeCompleto =
          "Un cliente quiere agendar una videollamada para:\n" +
          "Fecha: " +
          this.fechaLlamada +
          "\nHora: " +
          this.horaLlamad +
          "\nFuncionalidad del equipo despues de la mejora:\n" +
          this.detalleMejora;

        const templateParams = {
          from_name: "Cliente",
          message: mensajeCompleto,
          to_name: "Ziverso"
        };

        emailjs
          .send(
            "service_kdek1nr",
            "template_qm6b081",
            templateParams,
            "user_fJ9MtftfEt8hTHs1pMa2A"
          )
          .then(
            response => {
              console.log("SUCCESS!", response.status, response.text);
              this.notify_send_success();
            },
            err => {
              console.log("FAILED...", err);
              this.notify_send_error();
            }
          );
      } else {
        this.notify();
      }
    } else {
      if (
        this.tarjetaMadre &&
        this.cantidadRAM &&
        this.sizeGabinete &&
        this.detalleMejora
      ) {
        let mensajeCompleto =
          "Tarjeta Madre: " +
          this.tarjetaMadre +
          "\nCantidad de memoria RAM: " +
          this.cantidadRAM +
          "\nTamaño del gabinete: " +
          this.sizeGabinete +
          "\nFuncionalidad del equipo despues de la mejora:\n" +
          this.detalleMejora;

        const templateParams = {
          from_name: "Cliente",
          message: mensajeCompleto,
          to_name: "Ziverso"
        };

        emailjs
          .send(
            "service_kdek1nr",
            "template_qm6b081",
            templateParams,
            "user_fJ9MtftfEt8hTHs1pMa2A"
          )
          .then(
            response => {
              console.log("SUCCESS!", response.status, response.text);
              this.notify_send_success();
            },
            err => {
              console.log("FAILED...", err);
              this.notify_send_error();
            }
          );
      } else {
        this.notify();
      }
    }
  }

  necesitoEstasPiezasOnChange(piezas) {
    this.piezasNecesariasCliente = piezas;
  }

  onChangeTarjetaMadre(tipo_tarjeta) {
    this.tarjetaMadre = tipo_tarjeta;
  }

  onChangeCantidadRam(cantidad_ram) {
    this.cantidadRAM = cantidad_ram;
  }

  onChangeSizeGabinete(size_gabinete) {
    this.sizeGabinete = size_gabinete;
  }

  caracteristicasTrasMejora(detalle) {
    this.detalleMejora = detalle;
  }

  imageOnChange(e) {
    this.isImageSet = true;
  }
  //fechaLlamadaOnCange
  fechaLlamadaOnCange(fecha) {
    this.fechaLlamada = fecha;
  }

  horaLlamadaOnChange(hora) {
    this.horaLlamada = hora;
  }

  render() {
    return (
      <>
        <ul
          ref={Tabs => {
            this.Tabs = Tabs;
          }}
          id="tabs-swipe-demo"
          className="tabs"
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        >
          <li className="tab col s6">
            <a href="#test-swipe-1">Se lo que quiero</a>
          </li>
          <li className="tab col s6">
            <a href="#test-swipe-2">Busco opciones</a>
          </li>
        </ul>

        <div id="test-swipe-1" className="col s12 m12 l12 black">
          <div
            className="input-field col s12 m12 l12"
            style={{ margin: "20px 0 0 0", padding: "8px" }}
          >
            <textarea
              id="necesito-estas-piezas"
              className="materialize-textarea"
              className="white-text"
              autoComplete="off"
              rows="6"
              cols="50"
              onChange={e => this.necesitoEstasPiezasOnChange(e.target.value)}
            ></textarea>
            <label htmlFor="necesito-estas-piezas">
              Necesito estas piezas*
            </label>
          </div>

          <div className="col s12 m12 l12">
            <button
              className="botonGaming pointer center-block"
              onClick={() => this.enviarSeQueQuieroClick()}
            >
              Enviar
            </button>
          </div>
        </div>
        <div id="test-swipe-2" className="col s12 m12 l12 black">
          <div
            className={"input-field col s12 m12 l12 " + this.state.showDefault}
            style={{ margin: "none", padding: "8px" }}
          >
            <input
              id="tipo-tarjeta-madre"
              type="text"
              className="white-text"
              autoComplete="off"
              name="Tarjeta_Madre"
              onChange={e => this.onChangeTarjetaMadre(e.target.value)}
            />
            <label htmlFor="tipo-tarjeta-madre">
              ¿Qué tarjeta madre tienes?*
            </label>
          </div>

          <div
            className={"input-field col s12 m12 l12 " + this.state.showDefault}
            style={{ margin: "none", padding: "8px" }}
          >
            <input
              id="cantidad-memoria-ram"
              type="text"
              className="white-text"
              autoComplete="off"
              name="Memoria"
              onChange={e => this.onChangeCantidadRam(e.target.value)}
            />
            <label htmlFor="cantidad-memoria-ram">
            ¿Cuánta memoria RAM tiene tu equipo?*
            </label>
          </div>

          <div
            className={"input-field col s12 m12 l12 " + this.state.showDefault}
            style={{ margin: "none", padding: "8px" }}
          >
            <input
              id="tamaño-gabinete"
              type="text"
              className="white-text"
              autoComplete="off"
              name="Tamaño_de_gabinete"
              onChange={e => this.onChangeSizeGabinete(e.target.value)}
            />
            <label htmlFor="tamaño-gabinete">
              ¿De qué tamaño es tu gabinete?*
            </label>
          </div>
          <div className={"col s12 m12 l12 " + this.state.showExtra}>
            <div className="row">
              <form
                id="form-sin-caracteristicas"
                encType="multipart/form-data"
                method="post"
              >
                <div className={"col s12 m12 l12 " + this.state.showExtra}>
                  <span className="white-text">Agenda una videollamada</span>
                </div>
                <div
                  className={"input-field col s6 m6 l6 " + this.state.showExtra}
                >
                  <input
                    id="fecha-video-llamada"
                    type="text"
                    name="Fecha_Videollamada"
                    onChange={e => this.fechaLlamadaOnCange(e.target.value)}
                  />
                  <label htmlFor="fecha-video-llamada">Fecha*</label>
                </div>
                <div
                  className={"input-field col s6 m6 l6 " + this.state.showExtra}
                >
                  <input
                    id="hora-video-llamada"
                    type="text"
                    name="Hora_Videollamada"
                    onChange={e => this.horaLlamadaOnChange(e.target.value)}
                  />
                  <label htmlFor="hora-video-llamada">Hora*</label>
                </div>
                <div
                  className="input-field col s12 m12 l12"
                  style={{ margin: "0", padding: "8px" }}
                >
                  <textarea
                    id="caracteristicas-equipo-tras-mejora"
                    className={
                      "materialize-textarea white-text " + this.state.showExtra
                    }
                    autoComplete="off"
                    rows="6"
                    cols="50"
                    name="Detalle_Mejora"
                    onChange={e =>
                      this.caracteristicasTrasMejora(e.target.value)
                    }
                  ></textarea>
                  <label
                    htmlFor="caracteristicas-equipo-tras-mejora"
                    className={this.state.showExtra}
                  >
                    ¿Qué te gustaría que hiciera tu equipo tras la mejora?*
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div
            className="input-field col s12 m12 l12"
            style={{ margin: "0", padding: "8px" }}
          >
            <textarea
              id="caracteristicas-equipo-tras-mejora"
              className={
                "materialize-textarea white-text " + this.state.showDefault
              }
              autoComplete="off"
              rows="6"
              cols="50"
              onChange={e => this.caracteristicasTrasMejora(e.target.value)}
            ></textarea>
            <label
              htmlFor="caracteristicas-equipo-tras-mejora"
              className={this.state.showDefault}
            >
              ¿Qué te gustaría que hiciera tu equipo tras la mejora?*
            </label>
          </div>
          <div
            className="input-field col s12 m12 l12"
            style={{ margin: "0", padding: "8px" }}
          >
            <label className="check-mouse-gabinete">
              <input
                type="checkbox"
                className="filled-in"
                onChange={e => this.checkNoSpecifications(e)}
              />
              <span>No sé las especificaciones de mi equipo</span>
            </label>
          </div>
          <div className="col s12 m12 l12" style={{ marginTop: "5px" }}>
            <button
              className="botonGaming pointer center-block"
              onClick={() => this.enviarBuscoOpcionesClick()}
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

export default TabsMejora;
