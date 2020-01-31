import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../Home/index';
import Certificate from '../CertificateFactory/index.js';
import Footer from '../Footer/index.js';
import Aviso from '../aviso.js';
import Cookies from '../cookies.js';



class Main extends React.Component{
  render(){
    return(
      
        <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
        <Route exact path={process.env.PUBLIC_URL + '/certificate'} component={Certificate} />
        <Route exact path={process.env.PUBLIC_URL + '/aviso-legal'} component={Aviso} />
        <Route exact path={process.env.PUBLIC_URL + '/cookies'} component={Cookies} />
        </Switch>
        
    );
  }
}

export default Main;