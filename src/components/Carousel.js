
import { Carousel } from "react-bootstrap"
function CarouselItem() {
    return (
        <Carousel className="d-block mx-auto mt-0px" style={{ width: "75%", marginBottom: 40 }} >
  <Carousel.Item  interval={2000}>
    <img
      className="d-block w-100" height="500px"
      src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Nature Photography</h3>
      <p>One of the most famous types of photography.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block h-40 w-100" height="500px"
      src="https://images.pexels.com/photos/69970/pexels-photo-69970.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>creative images</h3>
      <p>The image is called one of the innovations that a person has reached in order to obtain a form completely similar to a specific thing</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" height="500px"
      src="https://images.pexels.com/photos/8000826/pexels-photo-8000826.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>color picture</h3>
      <p>It is a digital image that contains the color information in each pixel.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     );
}
export default CarouselItem;