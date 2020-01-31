import React from 'react';
import { Link,BrowserRouter as Router,Switch } from 'react-router-dom';

class Aviso extends React.Component{
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
            <h2>Aviso Legal</h2>
            <div className="page-links">
              <a>Home</a>
              <span>Aviso Legal</span>
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
                  <h2>DATOS IDENTIFICATIVOS</h2>
                  <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación, se reflejan los datos de contacto del titular de dominio web. Raúl Adame Hernández (en adelante Noudus), con domicilio a estos efectos en Córdoba. Correo electrónico de contacto: raul.noudus@gmail.com.</p>
                  <h2>Usuarios</h2>
                  <p>El acceso y/o uso de este portal de Noudus le atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.</p>
                  <h2>SOBRE EL CORRECTO USO DEL PORTAL</h2>
                  <p>www.noudus.com proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, “los contenidos”) en Internet pertenecientes a Noudus o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad seextiende al registro que fuese necesario para acceder a determinados servicios o contenidos.
                    En dicho registro el USUARIO será responsable de aportar información veraz y lícita. Como consecuencia de este registro, al USUARIO se le puede proporcionar una contraseña de la que será responsable, comprometiéndose a hacer un uso diligente y confidencial de la misma.
                    El USUARIO se compromete a hacer un uso adecuado de los contenidos y servicios (como por ejemplo servicios de chat, foros de discusión, APP legal o grupos de noticias) que Noudus ofrece a través de su portal y con carácter enunciativo pero no limitativo, a no emplearlos  para (i) incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público; (ii) difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos; (iii) provocar daños en los sistemas físicos y lógicos de Noudus, de sus proveedores o de terceras personas, introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados; (iv) intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificarlo manipular sus mensajes. Noudus se reserva el derecho de retirar todos aquellos comentarios y aportaciones que vulneren el respeto a la dignidad de la persona, que sean discriminatorios, xenófobos, racistas, pornográficos, que atenten contra la juventud o la infancia, el orden o la seguridad pública o que, a su juicio, no resultaran adecuados para su publicación. En cualquier caso, Noudus no será responsable de las opiniones vertidas por los usuarios a través de los foros, chats, u otras herramientas de participación.</p>
                  <h2>PROTECCIÓN DE DATOS</h2>
                  <p>Noudus asegura la confidencialidad de los datos aportados por los usuarios a través de correo electrónico a la dirección de contacto establecida en la web o APP legal y garantiza que en ningún caso serán cedidos a terceros. En cumplimiento de lo dispuesto en la Ley Orgánica 15/1999 de 13 de Diciembre de Protección de Datos de Carácter Personal y en el Reglamento Europeo de Protección de Datos (2016/679), Noudus le informa que podrá ejercitar los derechos de acceso, rectificación, cancelación, oposición, portabilidad y limitación remitiendo un escrito identificado con la referencia “Protección de Datos”, en el que se concrete su solicitud y al que acompañe fotocopia de su Documento Nacional de Identidad, dirigido a raul.noudus@gmail.com . El afectado, también puede
                    ejercitar sus derechos mediante correo ordinario a la atención de don Raúl Adame Hernández Córdoba.
                    Por otra parte, Noudus asegura que en el caso de posibles contrataciones laborales usted se compromete a ceder sus datos personales enviando su curriculum vitae, para el uso exclusivo de posibles vacantes. Los datos proporcionados se conservarán hasta la adjudicación de un puesto de trabajo o hasta que usted ejerza su derecho de cancelación por tanto tiene derecho a acceder a sus datos personales, rectificar los datos inexactos o solicitar su supresión cuando los datos ya no sean necesarios. Los datos no se cederán a terceros.
                    En Noudus tratamos la información que nos facilita con el fin de prestarles el servicio solicitado y realizar la facturación del mismo. Los datos proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales. Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal.
                    Usted tiene derecho a obtener confirmación sobre si en Noudus estamos tratando sus datos personales por tanto tiene derecho a acceder a sus datos personales, rectificar los datos inexactos o solicitar su supresión cuando los datos ya no sean necesarios.
                    Asimismo, Noudus es la empresa responsable del tratamiento de tus datos personales, los cuales se incorporan a un fichero, y tiene su domicilio en la Córdoba.
                    A su vez desde Noudus les informamos de los siguientes extremos:
                    <br />
                    -Los datos de carácter personal que nos ha suministrado en esta y otras comunicaciones mantenidas con usted serán objeto de tratamiento en los ficheros responsabilidad de Noudus.
                    <br />
                    -La finalidad del tratamiento es la de gestionar de forma adecuada la prestación del servicio que nos ha requerido. Asimismo, estos datos no serán cedidos a terceros, salvo las cesiones legalmente permitidas o necesaria para la consecución de los objetivos del contrato.
                    <br />
                    -Los datos solicitados a través de esta y otras comunicaciones son de suministro obligatorio para la prestación del servicio. Estos son adecuados, pertinentes y no excesivos.
                    <br />
                    -Su negativa a suministrar los datos solicitados implica la imposibilidad de prestarle el servicio.</p>
                  <h2>PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
                  <p>Raúl Adame Hernández ( Noudus ) por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software, app o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.), titularidad de Raúl Adame Hernández ( Noudus ) o bien de sus licenciantes.
                    Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Raúl Adame Hernández ( Noudus ). El USUARIO se compromete a respetar los derechos de Propiedad Intelectual e Industrial titularidad de Raúl Adame Hernández ( Noudus ). Podrá visualizar los elementos del portal e incluso imprimirlos, copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte físico siempre y cuando sea, única y exclusivamente, para su uso personal y privado. El USUARIO deberá abstenerse de suprimir, alterar, eludir o manipular cualquier dispositivo de protección o sistema de seguridad que estuviera instalado en las páginas de Raúl Adame Hernández ( Noudus ).</p>
                  <h2>EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h2>
                  <p>Noudus no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
                  <h2>MODIFICACIONES</h2>
                  <p>Noudus se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.</p>
                  <h2>ENLACES</h2>
                  <p>En el caso de que www.noudus.com se dispusiese enlaces o hipervínculos hacía otros sitios de Internet, Noudus no ejercerá ningún control sobre dichos sitios y contenidos. En ningún caso Noudus asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en ninguno de dichos hipervínculos u otros sitios de Internet.
                    Igualmente, la inclusión de estas conexiones externas no implicará ningún tipo de asociación, fusión o participación con las entidades conectadas.</p>
                  <h2>DERECHO DE EXCLUSIÓN</h2>
                  <p>Noudus se reserva el derecho a denegar o retirar el acceso a portal y/o los servicios ofrecidos sin necesidad de previo aviso, a instancia propia o de un tercero, a aquellos usuarios que incumplan las presentes Condiciones Generales de Uso.</p>
                  <h2>GENERALIDADES</h2>
                  <p>Noudus perseguirá el incumplimiento de las presentes condiciones, así como cualquier utilización indebida de su portal ejerciendo todas las acciones civiles y penales que le puedan corresponder en derecho.</p>
                  <h2>MODIFICACIÓN DE LAS PRESENTES CONDICIONES Y DURACIÓN</h2>
                  <p>Noudus podrá modificar en cualquier momento las condiciones aquí determinadas, siendo debidamente publicadas como aquí aparecen. La vigencia de las citadas condiciones irá en función de su exposición y estarán vigentes hasta que se encuentren debidamente publicadas o que sean modificadas por otras.</p>
                  <h2>LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2>
                  <p>La relación entre Noudus el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Córdoba con renuncia expresa de cuantos fueros pudieran corresponderle a las partes.</p>
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

export default Aviso;