import  React from "react";
import {
    Col,
    Row,
    Container,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    ButtonDropdown,

} from "reactstrap/es";
import "./ProductosPage.css"
import Menu from "../../Components/Menu";
import Productos from "../../Components/Productos_1/Productos";
import Productos1 from "../../Components/Productos1";
import Footer from "../../Components/Footer";


class ProductosPage extends React.Component{
    render() {
        return(
            <React.Fragment>
                <Menu/>
                
                <Container fluid className="Selection__Products">
                    <Row>
                        <Col sm={12} lg={3} >
                            <button type="button" className="btn btn-warning btn-lg btn-block mt-4">
                                <span id="title">CATEGORIAS</span>
                            </button>

                         <section id="Productos">
                            <div className="dropdown">
                                <button className="btn btn-boton btn-block dropdown-toggle" type="button"
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                    <img  src={require('../../Assets/Images/alimentos-2.png')} alt="Seguridad" width="20%"/>
                                    Alimentos
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>

                            <div className="dropdown">
                                <button className="btn btn-boton btn-block dropdown-toggle" type="button"
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                    <img  src={require('../../Assets/Images/alimentos-2.png')} alt="Seguridad" width="20%"/>
                                   Comida Rapida
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>

                            <div className="dropdown">
                                <button className="btn btn-boton btn-block dropdown-toggle" type="button"
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                    <img  src={require('../../Assets/Images/alimentos-2.png')} alt="Seguridad" width="20%"/>
                                   Bebidas
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>

                            <div className="dropdown">
                                <button className="btn btn-boton btn-block dropdown-toggle" type="button"
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                    <img  src={require('../../Assets/Images/alimentos-2.png')} alt="Seguridad" width="20%"/>
                                    Accesorios
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>

                            <div className="dropdown">
                                <button className="btn btn-boton btn-block dropdown-toggle" type="button"
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                    <img  src={require('../../Assets/Images/alimentos-2.png')} alt="Seguridad" width="20%"/>
                                    Belleza
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>

                            <div className="dropdown">
                                <button className="btn btn-boton btn-block dropdown-toggle" type="button"
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                    <img  src={require('../../Assets/Images/alimentos-2.png')} alt="Seguridad" width="20%"/>
                                    Vehiculos
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                         </section>

                        </Col>

                        <Col sm={12} lg={9}>
                        <Productos/>
                        <Productos1/>
                        <h2>Carnes frias y embutidas</h2>
                            <Productos1/>
                            <Productos1/>
                        </Col>
                    </Row>

                    <Row>
                      <Col lg={4}>
                          <img  src={require('../../Assets/Images/movil-pronto.png')} alt="Seguridad" width="100%"/>
                      </Col>

                      <Col lg={8} className="mt-5">
                        <h3 id="Section_Promo" className="text-center">PRONTO</h3>
                        <h4 id="Section_Promo1" className="text-center">BUSCA, ELIGE, COMPRA Y DISFRUTA</h4>
                          <section>
                        <h2 className="text-center mt-5">DESCARGA NUESTRA APP</h2>
                              <section className="text-center">
                                  <img  src={require('../../Assets/Images/app-store-esp.png')} alt="Seguridad" width="20%"/>
                                  <img  src={require('../../Assets/Images/disponible-en-google-play-badge-300x89.png')} alt="Seguridad" width="23%"/>

                              </section>
                          </section>
                      </Col>
                    </Row>
                    <Row>
                        <Footer/>
                    </Row>

                </Container>
            </React.Fragment>
        );
    }
}

export default ProductosPage;
