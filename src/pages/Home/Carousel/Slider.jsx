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
          <Carousel.Caption className='mb-5'>
            <h3>Kimchi (fermented vegetables)</h3>
            <p>Honestly, for most foreigners, Korean cuisine is actually synonymous with this sour and spicy dish.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={img2} height="450px" className='w-100  ' alt='first' />
          <Carousel.Caption>
            <h3>Gimbap or Kimbap (Korean sushi)</h3>
            <p>Get ready to relish a bowl of distinctive flavours with sundubu-jjigae.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="450px" className='w-100  ' src={img3} alt='first' />
          <Carousel.Caption className=' '>
            <h3>Bibimbap -rice bowl
            </h3>
            <p>
              A bowl of filling starch with various ingredients mixed into it.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div >
  );
};

export default Slider;