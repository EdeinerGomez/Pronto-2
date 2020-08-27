import React from "react";
import "./Footer.css";
import {
    Col,
    Row,
    Container,
} from "reactstrap/es";

class Footer extends React.Component{
    render() {
        return(
          <Container fluid >
              <Row id="Footer">
                  <Col lg={12} className=" text-center  mb-5">
                  <img  className="mr-3"  src={require('../../Assets/Images/logo-pronto-blanco.png')} alt="Seguridad" width="10%"/>

                  </Col>
                  <Col  lg={4} className="text-center mb-5">
                      <p id="Redes">Contactanos</p>
                  <img  className="mr-3"  src={require('../../Assets/Images/whatsapp.png')} alt="Seguridad" width="10%"/>

                  </Col>

                  <Col lg={4} className="text-center mb-5">
                  <p id="Redes">Siguenos en:</p>
                  <img  className="mr-3"  src={require('../../Assets/Images/instagram.png')} alt="Seguridad" width="10%"/>
                  <img  className="mr-3"  src={require('../../Assets/Images/twitter.png')} alt="Seguridad" width="10%"/>
                  <img  className="mr-3"  src={require('../../Assets/Images/facebook.png')} alt="Seguridad" width="10%"/>

                  </Col>

                  <Col  lg={4} className="text-center mb-5">
                  <p id="Redes">Mapa de Cobertura</p>
                  <img  className="mr-3 "  src={require('../../Assets/Images/ubicación.png')} alt="Seguridad" width="10%"/>

                  </Col>
              </Row>
              <Row>
                  <Col lg={6}>
                      <h4>Legal</h4>
                      <h3>Terminos y Condiciones</h3>
                      <h3>Preguntas Frecuentes</h3>
                      <h3>Politicas de Privacidad</h3>
                      <h3>Superintendencia de Industria y Comercio</h3>
                  </Col>

                  <Col className="text-center"  lg={6}>
                      <h4 className="text-center">Metodo de Pago</h4>
                      <img  className="mr-3"  src={require('../../Assets/Images/visa-logo-4.png')} alt="Seguridad" width="12%"/>
                      <img  className="mr-3" src={require('../../Assets/Images/1024px-Bitcoin_logo.svg.png')} alt="Seguridad" width="20%"/>
                      <img  className="mr-3" src={require('../../Assets/Images/paypal-logo-2.png')} alt="Seguridad" width="20%"/>
                      <img  className="mr-3" src={require('../../Assets/Images/icon-pse.png')} alt="Seguridad" width="20%"/>
                     <section>
                     <img  className="mr-3" src={require('../../Assets/Images/1280px-Stripe_Logo,_revised_2016.svg.png')} alt="Seguridad" width="13%"/>
                     <img  className="mr-3" src={require('../../Assets/Images/mastercard-logo.png')} alt="Seguridad" width="13%"/>
                     <img  className="mr-3" src={require('../../Assets/Images/American-Express-Logotype-Stacked.png')} alt="Seguridad" width="13%"/>

                     </section>
                  </Col>
              </Row>
          </Container>
        );
    }

}

export default Footer;