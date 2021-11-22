import {Carousel} from "react-bootstrap"
import Navbar from "./Navbar"
// import styles from ".SectionApi.module.css"
function CarouselApi() {
    return (  
        <>
      
        <Carousel style={{marginTop:"0px"}}>
       
  <Carousel.Item>
    <img
    style={{width: "100%", height: "60vh"}}
      className="d-block w-100 h-30px mt-0"
      src="https://images.pexels.com/photos/593322/pexels-photo-593322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{width: "100%", height: "60vh"}}
      className="d-block w-100"
      src="https://images.pexels.com/photos/593324/pexels-photo-593324.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{width: "100%", height: "60vh"}}
      className="d-block w-100"
      src="https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
}

export default CarouselApi;