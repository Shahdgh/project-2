import { useContext } from "react"
import PhotosContext from "../Utils/PhotosContext"
import SectionOne from "../components/SectionOne"
import PictureCard from "../components/PictureCard"
import { Row } from "react-bootstrap"

<<<<<<< Updated upstream
function Home(props) {
  const { picture } = props
  const { pictures } = useContext(PhotosContext)
=======
function Home() {
  // const { photos } = useContext(PhotosContext)
>>>>>>> Stashed changes

  return (
    <>
      <SectionOne />
      <Row>
        {pictures.map(picture => (
          <PictureCard picture={picture} />
        ))}
      </Row>
    </>
  )
}
export default Home
