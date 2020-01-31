import React from 'react';
import { Link,BrowserRouter as Router,Switch } from 'react-router-dom';


class Cookies extends React.Component{
  render(){
    return(<div>
      {/* Header section */}
      <header className="header-section">
    <div className="logo">
      <img src="img/noudus_negro.png" alt width="100px" />{/* Logo */}
    </div>
    {/* Navigation */}
    <div className="responsive"><i className="fa fa-bars" /></div>
    <nav>
      <ul className="menu-list">
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/certificate'}>Certifícate</Link></li>				
      </ul>
    </nav>
  </header>
      {/* Header section end */}
      {/* Page header */}
      <div className="page-top-section">
        <div className="overlay" />
        <div className="container text-right">
          <div className="page-info">
            <h2>Política de cookies</h2>
            <div className="page-links">
              <a>Home</a>
              <span>Política de cookies</span>
            </div>
          </div>
        </div>
      </div>
      {/* Page header end*/}
      {/* services section */}
      <div className="services-section spad">
        <div className="container">
          <div className="row">
            {/* single service */}
            <div className="col-md-12">
              <div className="service">
                <div className="service-text" style={{textAlign: "left"}}>
                  <p>Cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.. El navegador del usuario memoriza cookies en el disco duro solamente durante la sesión actual ocupando un espacio de memoria mínimo y no perjudicando al ordenador. Las cookies no contienen ninguna clase de información personal específica, y la mayoría de las mismas se borran del disco duro al finalizar la sesión de navegador (las denominadas cookies de sesión).
                    <br />
                    La mayoría de los navegadores aceptan como estándar a las cookies y, con independencia de las mismas, permiten o impiden en los ajustes de seguridad las cookies temporales o memorizadas.<br />
                    ¿Qué tipos de cookies utiliza esta página web?<br />
                    Cookies de terceros: La Web de devsla.com puede utilizar servicios de terceros que, por cuenta de aguirrepovedano.com, recopilarán información con fines estadísticos, de uso del Site por parte del usuario y para la prestación de otros servicios relacionados con la actividad del Website y otros servicios de Internet.<br />
                    En particular, este sitio Web utiliza Google Analytics, un servicio analítico de web prestado por Google, Inc. con domicilio en los Estados Unidos con sede central en 1600 Amphitheatre Parkway, Mountain View, California 94043.  Para la prestación de estos servicios, estos utilizan cookies que recopilan la información, incluida la dirección IP del usuario, que será transmitida, tratada y almacenada por Google en los términos fijados en la Web Google.com. Incluyendo la posible transmisión de dicha información a terceros por razones de exigencia legal o cuando dichos terceros procesen la información por cuenta de Google.<br />
                    El Usuario acepta expresamente, por la utilización de este Site, el tratamiento de la información recabada en la forma y con los fines anteriormente mencionados. Y asimismo reconoce conocer la posibilidad de rechazar el tratamiento de tales datos o información rechazando el uso de Cookies mediante la selección de la configuración apropiada a tal fin en su navegador. Si bien esta opción de bloqueo de Cookies en su navegador puede no permitirle el uso pleno de todas las funcionalidades del Website.<br />
                    Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:
                    <br />
                    -<a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank">Chrome</a>
                    <br />
                    -<a href="https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer" target="_blank">Explorer</a>
                    <br />
                    -<a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we" target="_blank">Firefox</a>
                    <br />
                    -<a href="https://support.apple.com/kb/ph5042?locale=es_ES" target="_blank">Safari</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* services section end */}
      </div>
    
 
      
    );
  }
}

export default Cookies;