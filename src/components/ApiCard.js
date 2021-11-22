import { useContext } from "react"
import { Card, Container,Row } from "react-bootstrap"
import PhotosContext from "../Utils/PhotosContext"
//style
import styles from "./SectionOne.module.css"
//icon 
import {  MdLinkedCamera} from "react-icons/md";
function Apicard(props) {
  const { photos } = useContext(PhotosContext)
   const { photo } = props
  // console.log(photo)
  return (
    <>
    
    <Row xs={1} sm={2} md={3} className="g-3 mt-4 mx-1 ">
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
