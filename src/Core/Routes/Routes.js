import React, {Component} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../../Page/HomePage/HomePage";
import ProductosPage from "../../Page/ProductosPage";

class Routes extends Component {
    render() {
        return(
           <BrowserRouter>
               <Switch>
                   <Route path="/home" component={HomePage}/>
                   <Route path="/productos" component={ProductosPage}/>
               </Switch>
           </BrowserRouter>
        );
    }
}

export default Routes;