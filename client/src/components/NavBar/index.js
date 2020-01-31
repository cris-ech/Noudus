import React from 'react';
import logo from './logo.png';
import back from './back.jpg';


export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {
  return(
    <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#"><img src={logo} style={{}}></img></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Inicio
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#certificate">Certificate</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#certificados">Mis certificados</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Full Page Image Header with Vertically Centered Content */}
  <header className="masthead" style={{
  height: '100vh',
  minHeight: '500px', 
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${back}) `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}}>
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-12 text-center">
          <h1 className="font-weight-light" style={{color:'white'}}>Certifica tu participación en el programa Explorer</h1>
          <p className="lead"></p>
        </div>
      </div>
    </div>
  </header>
</div>


  )
}
}