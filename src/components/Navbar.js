import React from "react";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Fade from 'react-reveal/Fade';

const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">

      <a class="navbar-brand" href="/">DEV SAVSANI</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars}/>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
        <Fade top >
          <li class="nav-item active">
            <a class="nav-link" href="Home">Home <span class="sr-only">(current)</span></a>
          </li>
          </Fade>
          <Fade top>
          <li class="nav-item">
            <a class="nav-link" href="About">ABOUT ME</a>
          </li>
          </Fade>
          <Fade top>
          <li class="nav-item">
            <a class="nav-link" href="Exp">EXPERIENCES</a>
          </li>
          </Fade>
          <Fade top>
          <li class="nav-item">
            <a class="nav-link" href="Port">PORTFOLIO</a>
          </li>
          </Fade>
          <Fade top>
          <li class="nav-item">
            <a class="nav-link" href="Contact">CONTACT ME</a>
          </li>
          </Fade>
        </ul>
      </div>
     </div>
    </nav>
        
    )
}

export default Navbar
