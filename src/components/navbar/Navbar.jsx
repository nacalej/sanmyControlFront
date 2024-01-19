import { Link } from "react-router-dom";
import '../styles/navBar.css';
import logo from '../../img/sanmy.png';

import { Nav, Navbar} from 'react-bootstrap'

const NavBar = () => {

  return (

     <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand href="/">
          <img src={logo} width="50px" height="50px" alt="Sanmy Control"/>{' '}
          <span className="brand-text"> 
                    Sanmy Control 
          </span> 
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className="mx-auto" > 
     
             <Nav.Link  as={Link} to="/#">Inicio</Nav.Link>  
             <Nav.Link as={Link} to="/users">Usuarios</Nav.Link> 
             <Nav.Link as={Link} to="/rentalWifi">Red</Nav.Link> 
             <Nav.Link as={Link} to="/earnings">Ingresos diarios</Nav.Link> 
             <Nav.Link as={Link} to="/earningsPerMonth">Ganancias por meses</Nav.Link> 
      
             
        </Nav>
        </Navbar.Collapse>

      </Navbar> 

      
      

  );
};

export default NavBar;