import { useContext } from "react"
import PhotosContext from "../Utils/PhotosContext"
import SectionOne from "../components/SectionOne"
import PictureCard from "../components/PictureCard"
import { Row } from "react-bootstrap"
import Carousel from "../components/Carousel"
import Navbar from "../components/Navbar"
import Work from "../components/WorkTeam"

function Home(props) {
  const { picture } = props
  const { pictures } = useContext(PhotosContext)

  return (
    <>
      <Navbar />
      <SectionOne />
          <Work/>

      <Carousel />

      <div >
        <Row  xs={1} md={3} >
          {pictures.map(picture => (
            <PictureCard picture={picture} />
          ))}
        </Row>
      </div>
    </>
  )
}
export default Home
