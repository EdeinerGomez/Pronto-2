import React from 'react';
import {
    Container,
    Row,
    Col,


} from "reactstrap/es";
import "./Menu.css";

class Menu extends React.Component{
    render() {
        return (
           <div className="Nav__menu">
              <Container className="mt-1">
                  <Row>
                      <Col className="Img__Logo" xs={12} lg={3}>
                       <img src={require('../../Assets/Images/logo-pronto-horizontal-color.png')} alt="logo" width="60%"/>
                      </Col>
                      <Col  className="mt-lg-3" xs={4} lg={1}>
                          <img className="Img__Menu" src={require('../../Assets/Images/bs.png')}  alt="bs" width="60%"/>
                      </Col>
                      <Col className="mt-4" xs={6} lg={1}>
                          <select className="Select__Money">
                              <option>Bolivares</option>
                              <option>Maracaibo</option>
                              <option>Ciudad Bolivar</option>
                              <option>Maracay</option>
                          </select>
                      </Col>

                      <Col  className="mt-lg-3 " xs={4} lg={1}>
                          <img className="Img__Menu" src={require('../../Assets/Images/venezuela.png')}  alt="bs" width="65%"/>
                      </Col>
                      <Col className="mt-4" xs={6} lg={1}>
                          <select className="Select__Money">
                              <option>Caracas</option>
                              <option>Maracaibo</option>
                              <option>Ciudad Bolivar</option>
                              <option>Maracay</option>
                          </select>
                      </Col>

                      <Col  className="mt-lg-3" xs={4} lg={1}>
                          <img className="Img__Menu" src={require('../../Assets/Images/lugar.png')}  alt="bs" width="65%"/>
                      </Col>
                      <Col className="mt-4" xs={6} lg={2}>
                      <select className="Select__Money">
                          <option>Ingresar Dirección</option>
                          <option>Maracaibo</option>
                          <option>Ciudad Bolivar</option>
                          <option>Maracay</option>
                      </select>
                      </Col>

                      <Col  className="mt-lg-3" xs={6} lg={1}>
                          <img  src={require('../../Assets/Images/carro-compras.png')}  className="bs" width="65%"/>
                      </Col>
                      <Col  className="mt-lg-2" xs={6} lg={1}>
                          <img  src={require('../../Assets/Images/perfil.png')}  className="Perfil" width="80%"/>
                      </Col>

                  </Row>
              </Container>
           </div>
        );
    }
}

export default Menu;