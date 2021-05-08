import React from 'react';
import Container from 'react-bootstrap/Container';
import './about.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';



function about() {
    return (
        <div id='about'>
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
                <Container>
                <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src="./Profile_pic.jpg" thumbnail fluid />
              </Row>
            </Col>
                    {/* About me */}
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                {/* description */}
                                Hi there! I am <strong>&nbsp;DEV SAVSANI</strong>
                            </Row>

                    <Row>
                                {/* buttons */}
                        <Col className="d-flex justify-content-center flex-wrap">
                            <div>
                                <a href="">
                                    <Button className="m-2" variant="outline-primary">
                                        Let's Talk
                                    </Button>
                                </a>
                            </div>
                            <div>
                            <a href=""  rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-success">
                                My Resume
                            </Button>
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/DevSavsani" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-dark">
                                GitHub
                            </Button>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/dev-savsani-4576b8127/" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-info">
                                LinkedIn
                            </Button>
                            </a>
                        </div>
                        </Col>
                    </Row>
                        </Col> 
                </Row>
                </Container>
        </div>
        </div>
    )
}

export default about
