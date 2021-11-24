import { useContext } from "react"
import PhotosContext from "../Utils/PhotosContext"
import SectionOne from "../components/SectionOne"
import PictureCard from "../components/PictureCard"
import { Row } from "react-bootstrap"
import Carousel from "../components/Carousel"
import Navbar from "../components/Navbar"
import Work from "../components/WorkTeam"
import Footer from "../components/Footer"

function Home(props) {
  const { picture } = props
  const { pictures } = useContext(PhotosContext)

  return (
    <>
      <Navbar />
      <SectionOne />
      <Carousel />

      <div >
        <h3 className="text-dark text-center fs-1 ml-35px"> Members Photos</h3>
        <Row xs={1} md={4} className="ms-3 me-3 mx-2">
          {pictures.map(picture => (
            <PictureCard picture={picture} />
          ))}
        </Row>
      </div>

      <Work />
      <Footer />
    </>
  )
}
export default Home
