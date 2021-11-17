// import { useContext } from "react"
import { Card, Container } from "react-bootstrap"
// import PhotosContext from "../Utils/PhotosContext"
function Pictuer(props) {
  //   const { photos } = useContext(PhotosContext)
  const { photo } = props
  return (
    <>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={photo.download_url} />
          <Card.Body>
            <Card.Title>{photo.author}</Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
export default Pictuer
