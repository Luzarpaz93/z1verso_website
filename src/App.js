import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  Home,
  Gaming,
  Creative,
  Business,
  Conoce,
  Quienessomos,
  Casosexito,
  Mejora,
  Contacto
} from "./pages";
import Navbar from "./Navbar/Navbar";
import Header from "./sideBar/Header";
import Sidebar from "./Navbar/Sidebar";
import WhatsappButtonSM from "./Social/WhatsAppButtonSM";
import Footer from "./Footer/Footer";
import AvisodePrivacidad from "./pages/Avisodeprivacidad";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Header />
          <Navbar />
          <Switch>
          <Route path="/avisodeprivacidad">
              <AvisodePrivacidad />
            </Route>
            <Route path="/contacto">
              <Contacto />
            </Route>
            <Route path="/mejoratuequipo">
              <Mejora />
            </Route>
            <Route path="/casosdeexito">
              <Casosexito />
            </Route>
            <Route path="/quienessomos">
              <Quienessomos />
            </Route>
            <Route path="/conocemas">
              <Conoce />
            </Route>
            <Route path="/creative">
              <Creative />
            </Route>
            <Route path="/business">
              <Business />
            </Route>
            <Route path="/gaming">
              <Gaming />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
      <WhatsappButtonSM />
    </React.Fragment>
  );
}

export default App;
