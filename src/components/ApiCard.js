import { useContext } from "react"
import { Card, Container,Navbar,Row } from "react-bootstrap"
import PhotosContext from "../Utils/PhotosContext"
//style
import styles from "./ApiCard.module.css"
//icon 
import {  MdLinkedCamera} from "react-icons/md";
import { BsSkipBackwardBtnFill } from "react-icons/bs";
///////////
import CarouselApi from "./CarouselApi";
function Apicard(props) {
  const { photos } = useContext(PhotosContext)
   const { photo } = props
  // console.log(photo)
  return (
    <>
    <navbar >
      <nav >
        <p style={{width: "100%",color:"whith" ,fontSize:"30px",backgroundColor: "rgb(65, 45, 21)", }}>
          <a  style={{color:""}} href="/"><BsSkipBackwardBtnFill/> Back</a></p>
      </nav>
    </navbar>
    <CarouselApi />
   
    <Row xs={1} sm={2} md={3} className="g-3 mt-0 mx-1 ">
          {photos.map(photo => (
            <Container>
            <Card className={styles.card} >
              {/* style={{ width: "18rem" }} */}
              <Card.Img className={styles.img} variant="top" src={photo.download_url} />
              <Card.Body>
                <Card.Title className={styles.title}></Card.Title>
                <h5><MdLinkedCamera className="fs-3" />{photo.author}</h5>
              </Card.Body>
            </Card>
          </Container>
          ))}
        </Row>
      
    </>
  )
}
export default Apicard
