import { useContext, useState } from "react"
import { Col, Card, Button } from "react-bootstrap"
import PhotosContext from "../Utils/PhotosContext"
import ModelItem from "./Model"
//icon
import { GrMapLocation,MdDevicesOther, MdAddLocationAlt } from "react-icons/gr"
import { FcMultipleDevices } from "react-icons/fc";
////style
import styles from "./PictureCard.module.css"
function PictureCard(props) {
  const { inProfile, picture } = props
  console.log(picture)
  const [show, setShow] = useState(false)
  const { deletePicture } = useContext(PhotosContext)
  const handleClose = () => {
    setShow(false)
  }
  const handleOpen = () => {
    setShow(true)
  }
  return (
    <>
      <Col >
        <Card className={styles.colcard}>
          <Card.Body className={styles.colcardd}>
            <Card.Img className={styles.cardimg} src={picture.image} />
            <Card.Title className={styles.cardtitlee}>
              <GrMapLocation color="dark" className={styles.icon} /> : {picture.title}
            </Card.Title>
            <Card.Text style={{color: "black"}} className={styles.cardtitlee}>
             <FcMultipleDevices  className={styles.icon}/> : {picture.description}{" "}
            </Card.Text>
            {inProfile ? (
              <>
                <Button className=" me-4" variant="success " onClick={handleOpen}>
                  {" "}
                  Edit{" "}
                </Button>
                <Button id={picture._id} onClick={deletePicture} variant="danger">
                  Delete
                </Button>
              </>
            ) : null}
          </Card.Body>
        </Card>
      </Col>
      <ModelItem show={show} handleClose={handleClose} picture={picture} />
    </>
  )
}
export default PictureCard
