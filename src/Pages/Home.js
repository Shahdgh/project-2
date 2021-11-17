import { useContext } from "react"
import PhotosContext from "../Utils/PhotosContext"
import Pictuer from "../components/Pictuer"
import { Container, Row } from "react-bootstrap"
function Home() {
  const { photos } = useContext(PhotosContext)

  return (
    <>
      <Container>
        <Row xs={1} sm={2} md={4} className="g-4 mt-4 ">
          {photos.map(photo => (
            <Pictuer photo={photo} />
          ))}
        </Row>
      </Container>
    </>
  )
}
export default Home
