import React from 'react';
import "./Productos.css";
import "bootstrap";


class Productos extends React.Component{
    render() {
        return(
            <div className="Container">
                <div className="Row mt-5">
                    <div  className="Col text-center">
                      <h2>OFERTAS DESTACADAS</h2> 
                   </div>
                </div>
                <div className="Row">
                    <div className="Col Col-lg-12">

                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                       <div class="carousel-inner">
                    <div class="carousel-item active">
                         <img id="carousel"  src={require('../../Assets/Images/king-ahorro-ReasonWhy.es_.jpg')}  className="d-block w-100" alt="Producto"/>
                    </div>
                   <div class="carousel-item">
                   <img  id="carousel" src={require('../../Assets/Images/plantilla-anuncio-realista-rebajas-productos-belleza_52683-20023.jpg')}  className="d-block w-100" alt="Producto"/>
                   </div>
                  <div class="carousel-item">
                  <img id="carousel"  src={require('../../Assets/Images/coleccion-collares.jpg')}  className="d-block w-100 "  alt="Producto"/>
                  </div>
                 </div>
                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                   </a>
                  </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Productos;