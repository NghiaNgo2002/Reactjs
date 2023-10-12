import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function UncontrolledExample() {
  return (
    <div className="carousel-container">
    <Carousel fade>
      <Carousel.Item>
        <img src="meow.png" alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Day la banh burger tui thích</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="nghiango.png" alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="Hamburger.png" alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;
