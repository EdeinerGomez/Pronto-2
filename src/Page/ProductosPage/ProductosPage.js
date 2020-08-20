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


class ProductosPage extends React.Component{
    render() {
        return(
            <React.Fragment>
                <Menu/>
                <Container fluid className="Selection__Products">
                    <Row>
                        <Col lg={3}>
                            <DropdownToggle className="Button">
                                CATEGORIAS
                            </DropdownToggle>
                        </Col>
                        <Col className="Ofertas" lg={9}>
                            <h2>OFERTAS DESTACADAS</h2>
                        </Col>

                    </Row>

                    <Row >
                        <Col className="Lista1" lg={2.5}>

                        <ButtonDropdown >
                            <DropdownToggle caret className="Button__Drop"><img  src={require('../../Assets/Images/alimentos-2.png')} alt="logo" width="45px" height="47px"/>
                            Alimentos
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>hola </DropdownItem>
                                <DropdownItem>hola </DropdownItem>
                                <DropdownItem>hola </DropdownItem>
                                <DropdownItem>hola </DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>


                            <DropdownToggle caret className="Button__Drop1"><img  src={require('../../Assets/Images/comida-rapida-2.png')} alt="logo" width="45px" height="47px"/>

                                Comida Rapida
                            </DropdownToggle>

                            <DropdownToggle caret className="Button__Drop2"><img  src={require('../../Assets/Images/bebidas-2.png')} alt="logo" width="45px" height="47px"/>

                                Bebidas
                            </DropdownToggle>

                            <DropdownToggle caret className="Button__Drop3"><img  src={require('../../Assets/Images/accesorios-2.png')} alt="logo" width="45px" height="47px"/>

                                Accesorios
                            </DropdownToggle>


                            <DropdownToggle caret className="Button__Drop4"><img  src={require('../../Assets/Images/belleza-2.png')} alt="logo" width="45px" height="47px"/>

                                Belleza
                            </DropdownToggle>

                            <DropdownToggle caret className="Button__Drop5"><img  src={require('../../Assets/Images/vehiculos-2.png')} alt="logo" width="45px" height="47px"/>

                                Vehiculos
                            </DropdownToggle>

                        </Col>






                        <Col className="d-flex" lg={9}>

                            <div className="Catalogo">
                            <img className="Cja__Producto"  src={require('../../Assets/Images/635.png')} alt="Reloj" width="150px" height="130px"/>

                              <div className="Description">
                                <p className="P1">Reloj inteligente</p>
                                <p className="P2">01 unidad</p>

                              <select className="Select__Producto">
                                <option>Moneda</option>
                                <option>Bolivares</option>
                                <option>bicoin</option>
                              </select>

                                <p className="Precio">
                                    33.999
                                    <button className="Button1">
                                Añadir<img   src={require('../../Assets/Images/carro-compras.png')} alt="Car" width="18px" height="18px"/>
                                   </button>
                                </p>
                              </div>
                            </div>

                            <div className="Catalogo">
                            <img className="Cja__Producto"  src={require('../../Assets/Images/IMG_0388-840x910.png')} alt="Mochila" width="150px" height="130px"/>

                            <div className="Description">
                                <p className="P1">Reloj inteligente</p>
                                <p className="P2">01 unidad</p>
                                <select className="Select__Producto">
                                    <option>Moneda</option>
                                    <option>Bolivares</option>
                                    <option>bicoin</option>
                                </select>

                                <p >33.999
                                    <button className="Button1">Añadir
                                        <img   src={require('../../Assets/Images/carro-compras.png')} alt="Car" width="20px" height="20px"/>
                                    </button>
                                </p>
                            </div>
                            </div>

                            <div className="Catalogo">
                                <img className="Cja__Producto"  src={require('../../Assets/Images/secador.png')} alt="Reloj" width="150px" height="130px"/>
                            <div className="Description">
                                <p className="P1">Reloj inteligente</p>
                                <p className="P2">01 unidad</p>
                                <select className="Select__Producto">
                                    <option>Moneda</option>
                                    <option>Bolivares</option>
                                    <option>bicoin</option>
                                </select>
                                <p className="d-inline-block">33.999 <button className="Button1">
                                    Añadir <img   src={require('../../Assets/Images/carro-compras.png')} alt="Car" width="20px" height="20px"/>
                                </button> </p></div>
                            </div>

                        <div className="Catalogo">
                            <img className="Cja__Producto"  src={require('../../Assets/Images/98911108e7cf60d8bce1624004a6ffb9.png')} alt="Reloj" width="150px" height="130px"/>
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
                                </button> </p></div>
                        </div>

                            <div className="Catalogo">
                                <img className="Cja__Producto"  src={require('../../Assets/Images/destapa-corchos.png')} alt="Reloj" width="150px" height="130px"/>
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
                                    </button> </p></div>
                            </div>

                        </Col>

                    </Row>



                    <Row className="SubTitulo">
                        <Col>
                        <h2>Carnes Frias y embutidos</h2>
                        </Col>
                    </Row>

                   <Row className="Carnes">
                    <Col className="d-flex" lg={12}>

                        <div className="Catalogo">
                            <img className="Cja__Producto"  src={require('../../Assets/Images/7701101245958-1600x1600.png')} alt="Reloj" width="150px" height="130px"/>

                            <div className="Description">
                                <p className="P1">Reloj inteligente</p>
                                <p className="P2">01 unidad</p>

                                <select className="Select__Producto">
                                    <option>Moneda</option>
                                    <option>Bolivares</option>
                                    <option>bicoin</option>
                                </select>

                                <p className="Precio">
                                    33.999
                                    <button className="Button1">
                                        Añadir<img   src={require('../../Assets/Images/carro-compras.png')} alt="Car" width="18px" height="18px"/>
                                    </button>
                                </p>
                            </div>
                        </div>

                        <div className="Catalogo">
                            <img className="Cja__Producto"  src={require('../../Assets/Images/Pechuga_Pavo_Balance_250g_escalonada-600x454.png')} alt="Mochila" width="150px" height="130px"/>

                            <div className="Description">
                                <p className="P1">Reloj inteligente</p>
                                <p className="P2">01 unidad</p>
                                <select className="Select__Producto">
                                    <option>Moneda</option>
                                    <option>Bolivares</option>
                                    <option>bicoin</option>
                                </select>

                                <p >33.999
                                    <button className="Button1">Añadir
                                        <img   src={require('../../Assets/Images/carro-compras.png')} alt="Car" width="20px" height="20px"/>
                                    </button>
                                </p>
                            </div>
                        </div>

                        <div className="Catalogo">
                            <img className="Cja__Producto"  src={require('../../Assets/Images/thumb.png')} alt="Reloj" width="150px" height="130px"/>
                            <div className="Description">
                                <p className="P1">Reloj inteligente</p>
                                <p className="P2">01 unidad</p>
                                <select className="Select__Producto">
                                    <option>Moneda</option>
                                    <option>Bolivares</option>
                                    <option>bicoin</option>
                                </select>
                                <p className="d-inline-block">33.999 <button className="Button1">
                                    Añadir <img   src={require('../../Assets/Images/carro-compras.png')} alt="Car" width="20px" height="20px"/>
                                </button> </p></div>
                        </div>

                        <div className="Catalogo">
                            <img className="Cja__Producto"  src={require('../../Assets/Images/images.png')} alt="Reloj" width="150px" height="130px"/>
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
                                </button> </p></div>
                        </div>

                        <div className="Catalogo">
                            <img className="Cja__Producto"  src={require('../../Assets/Images/7701101246818-1600x1600.png')} alt="Reloj" width="150px" height="130px"/>
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
                                </button> </p></div>
                        </div>

                    </Col>

                </Row>

                    <Row className="Carnes">
                        <Col className="d-flex" lg={12}>

                            <div className="Catalogo">
                                <img className="Cja__Producto"  src={require('../../Assets/Images/salchicha-premium-ranchera-500g.jpg')} alt="Reloj" width="150px" height="130px"/>

                                <div className="Description">
                                    <p className="P1">Reloj inteligente</p>
                                    <p className="P2">01 unidad</p>

                                    <select className="Select__Producto">
                                        <option>Moneda</option>
                                        <option>Bolivares</option>
                                        <option>bicoin</option>
                                    </select>

                                    <p className="Precio">
                                        33.999
                                        <button className="Button1">
                                            Añadir<img   src={require('../../Assets/Images/carro-compras.png')} alt="Car" width="18px" height="18px"/>
                                        </button>
                                    </p>
                                </div>
                            </div>

                            <div className="Catalogo">
                                <img className="Cja__Producto"  src={require('../../Assets/Images/unnamed.png')} alt="Mochila" width="150px" height="130px"/>

                                <div className="Description">
                                    <p className="P1">Reloj inteligente</p>
                                    <p className="P2">01 unidad</p>
                                    <select className="Select__Producto">
                                        <option>Moneda</option>
                                        <option>Bolivares</option>
                                        <option>bicoin</option>
                                    </select>

                                    <p >33.999
                                        <button className="Button1">Añadir
                                            <img   src={require('../../Assets/Images/carro-compras.png')} alt="Car" width="20px" height="20px"/>
                                        </button>
                                    </p>
                                </div>
                            </div>

                            <div className="Catalogo">
                                <img className="Cja__Producto"  src={require('../../Assets/Images/unnamed (1).png')} alt="Reloj" width="150px" height="130px"/>
                                <div className="Description">
                                    <p className="P1">Reloj inteligente</p>
                                    <p className="P2">01 unidad</p>
                                    <select className="Select__Producto">
                                        <option>Moneda</option>
                                        <option>Bolivares</option>
                                        <option>bicoin</option>
                                    </select>
                                    <p className="d-inline-block">33.999 <button className="Button1">
                                        Añadir <img   src={require('../../Assets/Images/carro-compras.png')} alt="Car" width="20px" height="20px"/>
                                    </button> </p></div>
                            </div>

                            <div className="Catalogo">
                                <img className="Cja__Producto"  src={require('../../Assets/Images/images.jpg')} alt="Reloj" width="150px" height="130px"/>
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
                                    </button> </p></div>
                            </div>

                            <div className="Catalogo">
                                <img className="Cja__Producto"  src={require('../../Assets/Images/Cooking-Market-Jamón-Inglés-Rebanado.png')} alt="Reloj" width="150px" height="130px"/>
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
                                    </button> </p></div>
                            </div>

                        </Col>

                    </Row>

                    <Row>
                        <Col lg={6}>
                            <img   src={require('../../Assets/Images/movil-pronto.png')} alt="Car" width="400px" height="700px"/>
                        </Col>
                        <Col lg={6}>
                            <h3>PRONTO</h3>
                            <p className="P3">BUSCA, ELIGE, COMPRA Y DISFRUTA</p>
                            <p className="P4">DESCARGA NUESTRA APP <img   src={require('../../Assets/Images/app-store-esp.png')} alt="Car" width="130px" height="50px"/>
                                <img   src={require('../../Assets/Images/disponible-en-google-play-badge-300x89.png')} alt="Car" width="130px" height="47px"/>
                            </p>

                        </Col>


                    </Row>





                </Container>
            </React.Fragment>
        );
    }
}

export default ProductosPage;