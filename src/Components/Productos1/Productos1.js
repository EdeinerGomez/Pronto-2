import React from 'react';
import "./Productos1.css";
import "bootstrap"
import {
    Container,
    Row,
    Col,
    Button,
} from "reactstrap/es";

class Productos1 extends React.Component{
    render() {
        return(
            <Container className="mt-5">
                <Row>
                    <Col xm={6} sm={4} lg={2}>
                        <img id="Images" src={require('../../Assets/Images/635.png')} alt="Seguridad" width="100%"/>

                        <div className="Description">
                            <p className="P1">Reloj inteligente</p>
                            <p className="P2">01 unidad</p>
                            <select className="Select__Producto">
                                <option>Moneda</option>
                                <option>Bolivares</option>
                                <option>bicoin</option>
                            </select>
                            <p className="d-inline-block">33.999 <button className="Button1">
                                Añadir<img   src={require('../../Assets/Images/carro-compras.png')} alt="Car" width="20px" height="20px"/>
                            </button> </p>
                        </div>
                    </Col>

                    <Col xm={6} sm={4} lg={2} >
                        <img id="Images" src={require('../../Assets/Images/IMG_0388-840x910.png')} alt="Seguridad" width="100%"/>
                        <div className="Description">
                            <p className="P1">Reloj inteligente</p>
                            <p className="P2">01 unidad</p>
                            <select className="Select__Producto">
                                <option>Moneda</option>
                                <option>Bolivares</option>
                                <option>bicoin</option>
                            </select>
                            <p className="d-inline-block">33.999 <button className="Button1">
                                Añadir<img   src={require('../../Assets/Images/carro-compras.png')} alt="Car" width="20px" height="20px"/>
                            </button> </p>
                        </div>
                    </Col>

                    <Col sm={4}  lg={2}>
                        <img id="Images" src={require('../../Assets/Images/secador.png')} alt="Seguridad" width="100%"/>

                        <div className="Description">
                            <p className="P1">Reloj inteligente</p>
                            <p className="P2">01 unidad</p>
                            <select className="Select__Producto">
                                <option>Moneda</option>
                                <option>Bolivares</option>
                                <option>bicoin</option>
                            </select>
                            <p className="d-inline-block">33.999 <button className="Button1">
                                Añadir<img   src={require('../../Assets/Images/carro-compras.png')} alt="Car" width="20px" height="20px"/>
                            </button> </p>
                        </div>
                    </Col>

                    <Col sm={4}  lg={2}>
                        <img id="Images" src={require('../../Assets/Images/98911108e7cf60d8bce1624004a6ffb9.png')} alt="Seguridad" width="100%"/>

                        <div className="Description">
                            <p className="P1">Reloj inteligente</p>
                            <p className="P2">01 unidad</p>
                            <select className="Select__Producto">
                                <option>Moneda</option>
                                <option>Bolivares</option>
                                <option>bicoin</option>
                            </select>
                            <p className="d-inline-block">33.999 <button className="Button1">
                                Añadir<img   src={require('../../Assets/Images/carro-compras.png')} alt="Car" width="20px" height="20px"/>
                            </button> </p>
                        </div>
                    </Col>

                    <Col sm={4}  lg={2}>
                        <img id="Images" src={require('../../Assets/Images/destapa-corchos.png')} alt="Seguridad" width="100%"/>

                        <div className="Description">
                            <p className="P1">Reloj inteligente</p>
                            <p className="P2">01 unidad</p>
                            <select className="Select__Producto">
                                <option>Moneda</option>
                                <option>Bolivares</option>
                                <option>bicoin</option>
                            </select>
                            <p className="d-inline-block">33.999 <button className="Button1">
                                Añadir<img   src={require('../../Assets/Images/carro-compras.png')} alt="Car" width="20px" height="20px"/>
                            </button> </p>
                        </div>
                    </Col>
                </Row>
            </Container>







        );
    }

}

export default Productos1;