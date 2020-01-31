import React from 'react';
import web3 from '../../web3.js';
import CertificateFactory from '../../CertificateFactory.js';
import sha256 from 'js-sha256';
import axios from 'axios';
import { Link,BrowserRouter as Router } from 'react-router-dom';
import Footer from '../Footer/index.js';
import CerfificateComponent from '../Certificate/index.js';



class CertificateFactoryComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      nombre : "",
      entrega : false,
      unimood : false,
      titulacion : "certificado de prueba",
      certificateAddress : "",
      mensaje : "",
      address : "",
      txnHash : "",
      blockNumber: 0,
      successMessage: "",
      dni : "",
      userData : [],
      visibility: "hidden"
    
    };
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();

    

   
 

   console.log(accounts[0]);
  }


  handleChangeName = event => {
    this.setState({ nombre: event.target.value });
    console.log(this.state.nombre);
  }

  handleChangeDni = event => {
    this.setState({ dni: event.target.value });
    console.log(this.state.dni);
  }
  
  handleChangeEntrega = event => {
    this.setState({ entrega: !this.state.entrega });
    console.log(this.state.entrega);
  }
  
  handleChangeUnimood = event => {
    this.setState({ unimood: !this.state.unimood });
    console.log(this.state.unimood);
  }
  
  handleSubmit = async (event) => {
    event.preventDefault();
    

    const confirmation = web3.transactionConfirmationBlocks;
    console.log(confirmation);

    //Api request
    let apiUrl = "/user" +"/" + this.state.dni;
    console.log(apiUrl);
    this.setState({visibility : ""});
    
    axios
      .get(apiUrl)
      .then(async response => {
        const userData  = response.data[0];
        console.log(userData);
        this.setState({ userData });
        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0]);
        console.log(this.state.userData);

        const nombre = this.state.userData.name;
        console.log(nombre);
        const dni = this.state.userData.dni;
        console.log(dni);
        const asistencia = this.state.userData.asistencia;
        console.log(asistencia);
        const asistenciaRoad = this.state.userData.asistenciaRoad;
        console.log(asistenciaRoad);
        const valoracionesRoad = this.state.userData.valoracionesRoad;
        console.log(valoracionesRoad);
        const tutorias = this.state.userData.tutorias;
        console.log(tutorias);
        const entrega = this.state.entrega;
        console.log(entrega);
        const unimood = this.state.unimood;
        console.log(unimood);
        

        //check the type of certificate that the user can claim
        //CERTIFICADO DE ESPECIALIZACION DE EMPRENDIMIENTO
        if(asistencia >= 80 && asistenciaRoad >= 80 && valoracionesRoad >= 80 && tutorias && entrega && unimood){
          console.log("especializacion");
          this.setState({titulacion : "Certificado de especialización de emprendimiento"});
        }else if(entrega && asistenciaRoad >= 80 && valoracionesRoad >= 80 ){
          console.log("formacion");
          this.setState({titulacion : "Certificado de formación"});

        }else if(entrega){
          console.log("participacion");
          this.setState({titulacion : "Certificado de participación"});
        }else{
          console.log("Sin certificado");
          this.setState({titulacion : "No puede obtener ningun certificado"});
        }

        if(this.state.titulacion == "No puede obtener ningun certificado"){
          this.setState({mensaje : "Usted no cuenta con los requisitos necesarios para obtener ningun certificado"});

        }else{
          let cadenaHash = nombre+dni+this.state.titulacion;
          cadenaHash = cadenaHash.replace(/ /g,"");
          console.log(cadenaHash);
          const hash = sha256(cadenaHash);
          console.log(hash);
          //Transaction to ethereum blockchain
          this.setState({mensaje : "Procesando su petición de certificado"});
          let transaction = await CertificateFactory.methods
          .createCertificate(this.state.titulacion,hash)
          .send({ from : accounts[0] });
          this.setState({
            txnHash: transaction.transactionHash, 
            blockNumber: transaction.blockNumber,
            successMessage: `Tu certificado ha sido registrado en el bloque : 
            ${transaction.blockNumber} y  el hash de la transaccion es: ${transaction.transactionHash}`
          })
          console.log(transaction);
          const contractAddress = transaction.events.ContractCreated.returnValues.contractAddress;
          this.setState({certificateAddress : contractAddress});
          this.setState({ mensaje: this.state.successMessage + "\n" +"La dirección en la que se encuentra es " + this.state.certificateAddress 
          + "y el hash de los datos " + hash });
          console.log(this.state);

          const certificate = {
            name: nombre,
            dni: dni,
            certificateAddress: contractAddress,
            txnHash: this.state.txnHash,
            blockNumber: this.state.blockNumber,
            institucion: "Programa explorer",
            title: this.state.titulacion,
            hash: hash
          };

          console.log(certificate);
          
          apiUrl = "/certificates/create" ;

          axios.post(apiUrl, {
            name: nombre,
            dni: dni,
            certificateAddress: contractAddress,
            txnHash: this.state.txnHash,
            blockNumber: this.state.blockNumber,
            institucion: "Programa explorer",
            title: this.state.titulacion,
            hash: hash
          } )
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
          


        }


      });

  }


render() {
  return (
<div>
{/* Page Preloder */}

{/* Header section */}
<header className="header-section">
    <div className="logo">
      <img src="img/noudus_negro.png" alt width="100px" />{/* Logo */}
    </div>
    {/* Navigation */}
    <div className="responsive"><i className="fa fa-bars" /></div>
    <nav>
      <ul className="menu-list">
        <li ><Link to={'/'}>Home</Link></li>
        <li className="active"><Link to={'/certificate'}>Certifícate</Link></li>				
      </ul>
      
    </nav>
  </header>
{/* Header section end */}
{/* Page header */}
<div className="page-top-section">
  <div className="overlay" />
  <div className="container text-right">
    <div className="page-info">
      <h2>Certifícate</h2>
      <div className="page-links">
        <a>Home</a>
        <span>Certifícate</span>
      </div>
    </div>
  </div>
</div>
{/* Page header end*/}
{/* services section */}
<div className="services-section spad">
  <div className="container">
    <div className="section-title dark">
      <h2>Certifícate en el <span>Programa Explorer</span> en el Explorer Space Córdoba</h2>
    </div>
    <div className="row">
      {/* single service */}
      <div className="col-md-12">
        <div className="service">
          <div className="service-text" style={{textAlign:"left"}}>
            <h2>Comienza el proceso !</h2>
            <p>Para Certificarte, previamente has de rellenar los dos campos requeridos para la autenticación en el sistema y en el programa.</p>
            <p>Después tendras que seleccionar si cumples con los dos últimos requisitos: <br />
              - Entregas para seguir en el Programa Explorer. <br />
              - Certificado UniMOOC</p>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <form  onSubmit={this.handleSubmit} className="form-class" id="con_form">
          <div className="row">
            <div className="col-sm-6">
              <input type="text" name="Nombre y apellidos" placeholder="Nombre y apellidos" onChange={this.handleChangeName}/>
            </div>
            <div className="col-sm-6">
              <input type="text" name="Identificador" placeholder="Identificador" onChange={this.handleChangeDni} />
            </div>
            <div className="col-sm-12">	
              <div className="service">
                <div className="service-text">
                <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="entrega" onChange={this.handleChangeEntrega} />
                <label className="form-check-label" htmlFor="entrega">¿Has realizado las entregas necesarias para el curso?</label>
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="unimood" onChange={this.handleChangeUnimood} />
                <label className="form-check-label" htmlFor="unimood">¿Has obtenido el certificado de Unimood?</label>
    </div>
                </div>
              </div>
            </div>
            
            <div className="col-sm-12">	
            <div class="alert alert-info" style={{visibility: this.state.visibility}} role="alert">{this.state.mensaje}</div>
              <button className="site-btn" type="submit" style={{textAlign:"left"}}>Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
{/* services section end */}
{/* features section */}

{/* certificado section end */}
<CerfificateComponent></CerfificateComponent>

</div>
  
  );
}


}

export default CertificateFactoryComponent;


/***
 * CERTIFICADO DE PARTICIPACION HACER 2º ENTREGA
 * 
 * CERTIFICADO DE FORMACION
 * ENTREGA REALIZADA Y HABER ASISTIDO Y VALORADO EL 80 % DE LAS SESIONES ROADSHOW
 * 
 * CERTIFICADO DE ESPECIALIZACION DE EMPRENDIMIENTO
 * ENTREGA
 * 80% ROAD
 * 80% valoraciones
 * UNIMOOD
 * 5 TUTORIAS
 * 80% CLASES
 */