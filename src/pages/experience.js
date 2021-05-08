import React from 'react'
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";

import './experience.css';

function Experience() {
    return (
        <div id='experience'>
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{ max: 25 }}>
                    <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src="./tsf-logo.jpeg" alt="" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center"> Web Development Intern </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Full Stack Developer</strong>
                    <br />
                    <strong>Technology:</strong> HTML, CSS, Bootstrap, JavaScript, PHP, MySQL
                    <br />
                    <strong>Duration:</strong> March 2021 - April 2021 
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed </strong>Full stack banking system website.</li>
                      <li><strong>Designed</strong> Frontend with the help of CSS and BOOTSTRAP. </li>
                      <li><strong>Provided</strong> transaction feature with the help of PHP in Backend. 
                      </li>
                      <li><strong>Stored</strong> user's data and transaction history with the help of MySQL.</li>
                      

                    </ul>
                    
                    
                  </Card.Text>
                </div>
                </Card.Body>

              </Card>
                    </Tilt>    
                </Container> 
            </Jumbotron>
        </div>
    )
}

export default Experience
