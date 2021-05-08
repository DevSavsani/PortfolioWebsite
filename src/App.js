import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/carousal";
import Title from './components/title';
import About from "./pages/about";
import Container from "react-bootstrap/Container";
import Background from "./pages/background.jpg";
import Skills from './pages/skills';
import Experience from './pages/experience';
 
import Zoom from "react-reveal/Zoom";
import { Parallax } from "react-parallax";

function App() {
  return (
  <div className="App" style={{ position: "relative" }}> 
    <Navbar />
    <Carousel />
    <Title />
        <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={Background}
          bgImageAlt=""
          strength={-200}
        >
          
            <Container className="container-box rounded">
              <Zoom>
              <About />
              </Zoom>
            </Container>
          
        </Parallax>
        </div>

    
    <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          strength={-200}
        >
          
            <Container className="container-box rounded">
              <Zoom>
              <Skills />
              </Zoom>
            </Container>
          
        </Parallax>
        </div>

        
        <div>
        <Container className="container-box rounded">
          <Experience />
        </Container>
        </div>

   </div>
  );
}

export default App;
