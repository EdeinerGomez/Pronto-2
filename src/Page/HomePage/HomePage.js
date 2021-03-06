import React from "react";
import {
    Col,
    Row,
    Container,
} from "reactstrap/es";
import "./HomePage.css";
import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";

class HomePage extends React.Component{
    render() {
        return(
            <React.Fragment>
            <Menu/>
                <Container  fluid id="Contenedor__Home">

                    <Row >
                        <Col xs={2} lg={1}>
                        </Col>
                        <Col className="text-center" xs={8} lg={5}>
                            <h1>PRONTO</h1>

                        </Col>
                        <Col xs={2} lg={6}>
                        </Col>
                    </Row>

                    <Row>
                        <Col  lg={1}></Col>
                        <Col className="text-center"lg={5}> <h2>BUSCA, ELIGE, COMPRA, Y DISFRUTA</h2> </Col>
                        <Col lg={6}></Col>
                    </Row>

                    <Row>


                        <Col className="text-center" xs={12} lg={7}>
                        <select className="Button__Select">
                            <option>
                                ELIGE TU CIUDAD
                            </option>
                            <option>Maracaibo</option>
                            <option>Ciudad Bolivar</option>
                            <option>Maracay</option>

                        </select>

                            <img className="Image__Buscar ml-2" src={require('../../Assets/Images/buscar.png')} alt="logo" width="45px" height="47px"/>





                        </Col>

                        <Col lg={5}>

                        </Col>

                    </Row>

                    <Row>
                      <Col xs={2} lg={1}>
                      </Col>

                      <Col className="Categorias" xs={8} lg={8}>
                          <img src={require('../../Assets/Images/alimentos.png')} alt="logo" width="85px" height="85px"/>
                          <img src={require('../../Assets/Images/comida-rapida.png')} alt="logo" width="85px" height="85px"/>
                          <img src={require('../../Assets/Images/bebidas.png')} alt="logo" width="85px" height="85px"/>
                          <img src={require('../../Assets/Images/accesorios.png')} alt="logo" width="85px" height="85px"/>
                          <img src={require('../../Assets/Images/belleza.png')} alt="logo" width="85px" height="85px"/>
                          <img src={require('../../Assets/Images/vehiculos.png')} alt="logo" width="85px" height="85px"/>
                      </Col>

                      <Col xs={2} lg={3}>

                      </Col>


                    </Row>

                     <Row>
                         <Col lg={1}></Col>
                         
                         <Col className="col" xs={8} lg={6}>
                         <button type="button" class="btn btn-color ml-2">Ver Más</button>

                         </Col>
                         <Col xs={2} lg={6}>
                         </Col>
                     </Row>

                </Container>

                <Row className="mt-5">
                    <Footer/>
                </Row>
            </React.Fragment>
        );
    }
}

export default HomePage;