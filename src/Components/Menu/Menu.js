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
            <nav  id="barra" className="navbar navbar-expand-lg navbar-light mt-2 ">
                <img  src={require('../../Assets/Images/logo-pronto-horizontal-color.png')} alt="Seguridad" width="15%"/>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul id="Ul" className="navbar-nav">
                        <li className="nav-item active mt-3 mr-4 ">
                            <img className="mr-2 mb-2" src={require('../../Assets/Images/bs.png')}  alt="bs" width="30px"/>

                            <select className="Select__Money">
                                <option>Bolivares</option>
                                <option>Maracaibo</option>
                                <option>Ciudad Bolivar</option>
                                <option>Maracay</option>
                            </select>
                        </li>
                        <li className="nav-item mt-3 mr-4">
                            <img className="mr-2 mb-2" src={require('../../Assets/Images/venezuela.png')}  alt="bandera" width="30px"/>

                            <select className="Select__Money">
                                <option>Caracas</option>
                                <option>Maracaibo</option>
                                <option>Ciudad Bolivar</option>
                                <option>Maracay</option>
                            </select>
                        </li>
                        <li className="nav-item mt-3">
                            <img className="mr-2 mb-2" src={require('../../Assets/Images/lugar.png')}  alt="lugar" width="30px"/>

                            <select className="Select__Money">
                                <option>Ingresar Dirección</option>
                                <option>Maracaibo</option>
                                <option>Ciudad Bolivar</option>
                                <option>Maracay</option>
                            </select>
                        </li>
                        <li className="nav-item ml-5 mt-2">
                            <img className="mr-2" src={require('../../Assets/Images/carro-compras.png')}  alt="carro" width="45px"/>
                        </li>

                        <li className="nav-item ml-5">
                            <img className="mr-2" src={require('../../Assets/Images/perfil.png')}  alt="perfil" width="60px"/>
                        </li>

                    </ul>

                </div>
            </nav>

        );
    }
}

export default Menu;