import Carousel from 'react-bootstrap/Carousel';
import  images from "../img/home-images.js";
import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card';



function Home(){

  return (
    <Container id="home">
    <Card className="text-center">
            
            <Card.Body>
                <Card.Title><h2>Pizza Labb</h2></Card.Title>
                <Card.Text><h3>The best in the North-West</h3></Card.Text>
                <Carousel  fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images["Carosel1"]}
          alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
          className="d-block w-100"
          src={images["Carosel2"]}
          alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
          className="d-block w-100"
          src={images["Carosel3"]}
          alt="First slide"
        />
    </Carousel.Item>
      </Carousel>
            </Card.Body>
        </Card>
        </Container>
  )}

export default Home;