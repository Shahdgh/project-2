import { useContext } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import PhotosContext from "../Utils/PhotosContext"
function ModelItem(props) {
  const { show, handleClose, picture } = props
  const { confirmPicture } = useContext(PhotosContext)
  return (
    <Modal className=" text-dark " show={show} onHide={handleClose} centered>
      <Modal.Header  closeButton>
        <Modal.Title className=" text-dark">Edit picture</Modal.Title>
      </Modal.Header>
      <Form onSubmit={e => confirmPicture(e, picture._id)}>
        <Modal.Body>
          <Form.Group className="mb-3 text-dark ">
            <Form.Label className=" text-dark">Location</Form.Label>
            <Form.Control name="title" type="text" defaultValue={picture.title} required />
          </Form.Group>
          <Form.Group className="mb-3 ">
          <select aria-label="Default select example" color="black"  name="description">
            <option this >  Device Used</option>
            <option value="Phone"> Phone  </option>
            <option value="Laptop"> Laptop </option>
            <option value="Tablet">  Tablet </option>
          </select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className=" text-dark" column md="2">
              Image
            </Form.Label>
            <Form.Control name="image" type="url" defaultValue={picture.image} required />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
export default ModelItem
