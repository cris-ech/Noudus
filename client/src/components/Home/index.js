import React from 'react';
import { Link,BrowserRouter as Router,Switch } from 'react-router-dom';
import back from './img/04.jpg';
import Footer from '../Footer/index.js';



class Home extends React.Component {


render(){
  return(
    <div>
  {/* Header section */}
  <header className="header-section">
    <div className="logo">
      <img src="img/noudus_negro.png" alt width="100px" />{/* Logo */}
    </div>
    {/* Navigation */}
    <div className="responsive"><i className="fa fa-bars" /></div>
    <nav>
      <ul className="menu-list">
        <li className="active"><Link to={'/'}>Home</Link></li>
        <li><Link to={'/certificate'}>Certifícate</Link></li>				
      </ul>
    </nav>
  </header>
  {/* Header section end */}
  {/* Intro Section */}
  <div className="hero-section"  style={{
  height: '100vh',
  minHeight: '500px', 
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),url(${back}) `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}}>
    <div className="hero-content">
      <div className="hero-center">
        <img src="img/Noudus_logotype.png" alt width="500px" />
        <p style={{fontWeight: 'bold'}}>La Universidad del futuro, la Universidad 4.0</p>
      </div>
    </div>
    {/* slider */}
 
  </div>
  {/* Intro Section */}
  {/* About section */}
  <div className="about-section">
    {/* About contant */}
    <div className="about-contant">
      <div className="container">
        <div className="section-title">
          <h2>Que es <span>Noudus</span> y que hacemos</h2>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>Noudus es el primer sistema que automatiza procesos certificando hitos académicos y profesionales dotando de una identidad digital tanto al estudiante como al docente con base Blockchain/DTL, que da soporte a las instituciones académicas y empresas con eficacia legal en el ambito español y acorde a la regulación europea.</p>
            <br />
          </div>
          <div className="col-md-12 text-center">
            <p>El sistema esta abierto a cualquier institución académica o empresa que quiera disponer de una herramienta para mejorar su propio sistema, para así proporcionar a sus estudiantes y docentes una forma de acreditar de manera eficaz, segura y trazable todos sus hitos académicos y profesionales a las empresas. Conecta universidades públicas con privadas y universidades españolas con extranjeras.</p>
            <br />
          </div>
          <div className="col-md-12 text-center">
            <p>Se puede resumir Noudus como un sistema de certificación Blockchain/DLT privada, independiente, permisionada y neutral, diseñada para ser conforme con la regulación existente, trabajando bajo Alastria, que permite a las instituciones académicas y empresas, una manera de verificar todo tipo de hitos académicos y profesionales. Automatizando procesos que a dia de hoy son de manera manual.</p>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About section end */}
  {/* Services section */}
  <div className="services-section spad">
    <div className="container">
      <div className="section-title dark">
        <h2>Características de <span>Noudus</span></h2>
      </div>
      <div className="row">
        {/* single service */}
        <div className="col-md-4 col-sm-6">
          <div className="service">
            <div className="icon">
              <i className="flaticon-023-flask" />
            </div>
            <div className="service-text">
              <h2>Innovador</h2>
              <p>Saliendo del marco de la educación actual y como medida para la disrupción educativa y empresarial.</p>
            </div>
          </div>
        </div>
        {/* single service */}
        <div className="col-md-4 col-sm-6">
          <div className="service">
            <div className="icon">
              <i className="flaticon-011-compass" />
            </div>
            <div className="service-text">
              <h2>Trazable</h2>
              <p>Cada datos que se añade, modifica o elimina, queda registrado y por consiguiente lleva a la transparencia.</p>
            </div>
          </div>
        </div>
        {/* single service */}
        <div className="col-md-4 col-sm-6">
          <div className="service">
            <div className="icon">
              <i className="flaticon-037-idea" />
            </div>
            <div className="service-text">
              <h2>Seguro</h2>
              <p>La configuración de Blockchain y nuestra red privada permiten la privacidad de los datos de los usuarios.</p>
            </div>
          </div>
        </div>
        {/* single service */}
        <div className="col-md-4 col-sm-6">
          <div className="service">
            <div className="icon">
              <i className="flaticon-026-search" />
            </div>
            <div className="service-text">
              <h2>Descentralizado</h2>
              <p>La red está descentralizada, lo que significa que no tiene ninguna autoridad que la gobierne o una sola persona que ejerce control total.</p>
            </div>
          </div>
        </div>
        {/* single service */}
        <div className="col-md-4 col-sm-6">
          <div className="service">
            <div className="icon">
              <i className="flaticon-043-sketch" />
            </div>
            <div className="service-text">
              <h2>Inmutabilidad</h2>
              <p>No puede ser cambiado o alterado. Esta es una de las características de la blockchain que ayuda a garantizar que la tecnología se mantenga como está: una red permanente e inalterable.</p>
            </div>
          </div>
        </div>
        {/* single service */}
        <div className="col-md-4 col-sm-6">
          <div className="service">
            <div className="icon">
              <i className="flaticon-012-cube" />
            </div>
            <div className="service-text">
              <h2>Distribuido</h2>
              <p>Un registro público proporcionará toda la información sobre una transacción y el participante.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* services section end */}
  {/* Team Section */}
  <div className="team-section spad">
    <div className="overlay" />
    <div className="container">
      <div className="section-title">
        <h2>Equipo de <span>Noudus</span></h2>
      </div>
      <div className="row">
        {/* single member */}
        <div className="col-sm-4">
          <div className="member">
            <img src="img/team/3.jpg" alt />
            <h2>Raúl Adame Hernández</h2>
            <h3>CEO | Fundador</h3>
          </div>
        </div>
        {/* single member */}
        <div className="col-sm-4">
          <div className="member">
            <img src="img/team/4.jpg" alt />
            <h2>Cristian Ruz Najar</h2>
            <h3>Software Developer</h3>
          </div>
        </div>
        {/* single member */}
        <div className="col-sm-4">
          <div className="member">
            <img src="img/team/1.jpg" alt />
            <h2>Ricardo del Rey Hidalgo</h2>
            <h3>UX Designer</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team Section end*/}
  {/* Promotion section */}
  <div className="promotion-section">
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <h2>Timeline</h2>
          <h3>2019</h3>
          <br />
          <p>17 DE ENERO | Inauguración del Explorer Space Córdoba.</p>
          <br />
          <p>28 DE MARZO | Desarrollo del canvas y validación.</p>
          <br />
          <p>10 DE ABRIL | Desarrollo de la tecnológia y estudio del paradigma. </p>
          <br />
          <p>30 DE MAYO | Desarrollo del plan de negocio.</p>
          <br />
          <p>5 DE JUNIO | Finalización del desarrollo de la prueba de concepto.</p>
          <br />
          <p>18 DE JUNIO | Presentación ante Jurado Explorer Space Córdoba.</p>
          <br />
          <p>19 DE JUNIO | Entrega de premios del Explorer Space Córdoba.</p>
        </div>
      </div>
    </div>
  </div>
  {/* Promotion section end*/}
  {/* Contact section */}
  <div className="about-section">
    <div className="container">
      <div className="row">
        {/* contact info */}			
        <div className="col-md-12 col-md-offset-1 contact-info">
          <div className="section-title left">
            <h2>Contacto</h2>
          </div>
          <div style={{textAlign: "left"}}>
          <p>Si quieres mas información o contactar con Noudus por cualquier duda, envianos un correo e infórmate.</p>
          <h3 className="mt60">Oficina</h3>
          <p className="con-item">Córdoba </p>
          <p className="con-item"> +34 693 300 537</p>
          <p className="con-item">raul.noudus@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
  
</div>

  );
}

}

export default Home;