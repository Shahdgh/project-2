import { useContext } from "react"
import PhotosContext from "../Utils/PhotosContext"
import SectionOne from "../components/SectionOne"
import PictureCard from "../components/PictureCard"
import { Row } from "react-bootstrap"

function Home(props) {
  const { picture } = props
  const { pictures } = useContext(PhotosContext)

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
