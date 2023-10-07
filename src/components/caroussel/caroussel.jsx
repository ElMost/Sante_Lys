import Carousel from 'react-bootstrap/Carousel';
import lis from '../../utils/img/aide.jpg';
import logo from '../../utils/img/solidaire.jpg';
import services from '../../utils/img/aide-a-domicile.webp';
import './caroussel.css';

function Caroussel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="caroussel-img-1"></div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="caroussel-img-2"></div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="caroussel-img-3"></div>
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

export default Caroussel;
