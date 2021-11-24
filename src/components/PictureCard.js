import { useContext, useState } from "react"
import { Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import PhotosContext from "../Utils/PhotosContext"
import ModelItem from "./Model"
//styles
import {MdDevicesOther,  MdAddLocationAlt} from "react-icons/md";

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
    <div >
      <Col >
        <Card >
          <Card.Body className={styles.colcard} >
            <Card.Title className={styles.cardtitle}>
              {picture._user.firstName} {picture._user.lastName}
            </Card.Title>
            <Card.Img className={styles.cardimg} src={picture.image} />
            <Card.Title className={styles.cardtitlee}><MdAddLocationAlt className={styles.icon}/>:  {picture.title}</Card.Title>
            <Card.Text className={styles.cardtitlee}><MdDevicesOther className={styles.icon}/>:  {picture.description} </Card.Text>
            {inProfile ? (
              <>
                <Button className=" me-4" variant="success " onClick={handleOpen}> Edit </Button>
                <Button  id={picture._id} onClick={deletePicture} variant="danger">
                  Delete
                </Button>
              </>
            ) : null}
          </Card.Body>
        </Card>
      </Col>
      <ModelItem show={show} handleClose={handleClose} picture={picture} />
    </div>
  )
}
export default PictureCard
