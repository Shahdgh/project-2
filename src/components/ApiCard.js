import { useContext } from "react"
import { Card, Container,Navbar,Row } from "react-bootstrap"
import PhotosContext from "../Utils/PhotosContext"
//style
import styles from "./ApiCard.module.css"
//icon
import {  MdLinkedCamera} from "react-icons/md";
// import { BsSkipBackwardBtnFill } from "react-icons/bs";
///////////
import SectionApi from "./SectionApi";
function Apicard(props) {
  const { photos } = useContext(PhotosContext)
   const { photo } = props
 
  return (
    <>
    <SectionApi/>
    <Row xs={1} sm={2} md={3} className="g-3 mt-0 mx-1 ">
          {photos.map(photo => (
            <Container>
            <Card className={styles.card} >
              <Card.Img className={styles.img}  src={photo.download_url} />
              <Card.Body >
                <h5 className={styles.title}><MdLinkedCamera/> {photo.author}</h5>
              </Card.Body>
            </Card>
          </Container>
          ))}
        </Row>
    </>
  )
}
export default Apicard
