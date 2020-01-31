import React from 'react';
import logo from './logo.svg';
import './App.css';
import CertificateFactoryComponent from './components/CertificateFactory/index.js';
import CertificateComponent from './components/Certificate/index.js';
import Footer from './components/Footer/index.js';
import NavBar from './components/NavBar/index.js';
import Home from './components/Home/index.js';
import Main from './components/Main/index.js';
import { Link,BrowserRouter as Router } from 'react-router-dom';


class App extends React.Component {
  
  
  
  
  
  
  render(){
    return (
    <div className="App">
      <body>
        <Router>
        <Main></Main>
        <Footer></Footer>
        </Router>
        
      </body>
      
    </div>
  );
}

}

export default App;
