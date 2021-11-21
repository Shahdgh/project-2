import { useContext } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import PhotosContext from "../Utils/PhotosContext"
function ModelItem(props) {
  const { show, handleClose, picture } = props
  const { confirmPicture } = useContext(PhotosContext)
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit picture</Modal.Title>
      </Modal.Header>
      <Form onSubmit={e => confirmPicture(e, picture._id)}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" type="title" defaultValue={picture.title} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label column md="2">
              description
            </Form.Label>
            <Form.Control as="textarea" name="body" defaultValue={picture.description} rows={3} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label column md="2">
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