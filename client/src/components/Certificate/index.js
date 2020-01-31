import React from 'react';
import web3 from '../../web3.js';
import Certificate from '../../CertificateFactory.js';
import sha256 from 'js-sha256';
import axios from 'axios';
import { Link,BrowserRouter as Router } from 'react-router-dom';
import Footer from '../Footer/index.js';



class CertificateComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      hash : "",
      userData: [],
      titulacion : "",
      certificateAddress : "",
      mensaje : "",
      address : "",
      txnHash : "",
      blockNumber: "",
      successMessage: "",
      dni : "",
      nombre: "",
      institucion: ""
    
    
    };
  }

  handleChangeHash = event => {
    event.preventDefault();
    this.setState({ hash: event.target.value });
    console.log(this.state.hash);
  };

 
  handleFind = event => {
    event.preventDefault();
    console.log("vamos a ver");

    let apiUrl = "/certificates" +"/" + this.state.hash;
    console.log(apiUrl);

    axios
      .get(apiUrl)
      .then(async response => {
        const userData  = response.data[0];
        console.log(userData);
        this.setState({dni: userData.dni, 
          nombre: userData.name, 
          institucion: userData.institucion,
          titulacion: userData.title,
          txnHash: userData.txnHash,
          blockNumber: userData.blockNumber,
          certificateAddress: userData.certificateAddress
        });

      });
  };

  render() {
    return (<div>
    <div className="team-section spad">
  <div className="overlay" />
  <div className="container">
    <div className="section-title">
      <h2>Comprobar la veracidad del certificado <span>Explorer</span></h2>
    </div>
    <div className="row">
      {/* feature item */}
      <div className="col-md-12" style={{textAlign:"left"}}>
        <div className="icon-box light right">
          <div className="icon">
            <i className="flaticon-002-caliper" />
          </div>
          <div className="service-text" >
            <h2 >Comprobar el valor del certificado</h2>
            <p>Para comprobarlo debemos de introducir el codigo HASH, que previamente hemos obtenido en el paso para certificarte</p>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <form  onSubmit={this.handleFind} className="form-class" id="con_form">
          <div className="row">
            <div className="col-sm-6">
              <input type="text" name="Introduce el HASH del certificado" placeholder="Introduce el HASH del certificado" onChange={this.handleChangeHash} />
            </div>
            <div className="col-sm-12">	
              <button className="site-btn" style={{textAlign:"left"}}>Buscar</button>
            </div>
          </div>
        </form>
      </div>	
    </div>
  </div>
</div>
{/* features section end*/}
{/* certificado section */}
<div className="services-section spad">
  <div className="container">
    <div className="section-title dark">
      <h2>Certificado de <span>Especialización</span> en Emprendimiento</h2>
      <br />
      <br />
      <img src="img/noudus_negro.png" alt width="200px" />
    </div>
    <div className="row text-center">
      {/* single service */}
      <div className="service">
        <div className="service-text" >
          <p>Certifica que:</p>
          <p>{this.state.nombre} ha recibido el</p>
          <p>{this.state.titulacion} otorgada por el {this.state.institucion} </p>
          <p>y fue grabado en la red Ethereum de la BlockChain en el bloque {this.state.blockNumber} </p>
          <p>La grabación de este documento fue codificada en la transacción</p>
          <p>{this.state.txnHash}</p>
          <p>Y, en el momento de emitir este certificado, dicha información ha sido validada como correcta en la dirección </p>
          <p>{this.state.certificateAddress}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

    
    );
  }

}

export default CertificateComponent;