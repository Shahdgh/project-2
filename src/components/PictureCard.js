import { useContext, useState } from "react"
import { Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import PhotosContext from "../Utils/PhotosContext"
import ModelItem from "./Model"
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
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>
              {picture._user.firstName} {picture._user.lastName}
            </Card.Title>
            <Card.Img variant="top" src={picture.image} />
            <Card.Title>{picture.title}</Card.Title>
            <Card.Text>{picture.description} </Card.Text>
            {inProfile ? (
              <>
                <Button variant="success" className="m-2" onClick={handleOpen}>
                  {" "}
                  Edit
                </Button>
                <Button className="ms-2" variant="danger" id={picture._id} onClick={deletePicture} variant="danger">
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
