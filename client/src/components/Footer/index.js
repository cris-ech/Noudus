import React from 'react';
import { Link,BrowserRouter as Router } from 'react-router-dom';


export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {
  return(	<footer class="footer-section">
 
  <h2>Copyright © 2019 Noudus. <Link to={'/aviso-legal'}>Aviso Legal</Link> | <Link to={'/cookies'}>Cookies</Link> | Designed by <a href="https://colorlib.com" target="_blank">Colorlib</a></h2>
  
  </footer>
  )
}
}
