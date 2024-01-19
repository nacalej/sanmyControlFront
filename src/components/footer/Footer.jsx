import React from "react";
import '../styles/footer.css';


const Footer = () => {
    const year = new Date().getFullYear();
  
    return <div className="navbar navbar-fixed-bottom bg-dark justify-content-center py-6 text-white">
          <span>{" "}Hecho con 💜. Nacarith Sequera</span>&nbsp; ©  {` ${year} `}
        | Todos los derechos reservados.</div>
            
  };
  
  export default Footer;
