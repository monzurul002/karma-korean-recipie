import Carousel from 'react-bootstrap/Carousel';

import img1 from "../../../assets/carousel/1.jpg"
import img2 from "../../../assets/carousel/2.jpg"
import img3 from "../../../assets/carousel/3.jpg"
const Slider = () => {
  return (
    <div style={{ border: "25px solid white", padding: "0px" }} className=' w-100 container  ' >
      <Carousel className='border-5 border-white'>
        <Carousel.Item interval={1000}>
          <img src={img1} height="450px" className='w-100  ' alt='first' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={img2} height="450px" className='w-100  ' alt='first' />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="450px" className='w-100  ' src={img3} alt='first' />
          <Carousel.Caption className=' '>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div >
  );
};

export default Slider;