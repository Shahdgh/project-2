import { useContext } from "react"
import { Col, Container, Row, Image } from "react-bootstrap"
import PictureCard from "../components/PictureCard"
import PhotosContext from "../Utils/PhotosContext"
// import Navbar from "../components/Navbar"
import ImgProfile from "../components/ImgProfile"
function Profile() {
  const { profile, pictures } = useContext(PhotosContext)
  if (!profile) {
    return <h1>LOADING ...</h1>
  }
  const myPicture = pictures.filter(picture => picture._user._id === profile._id)
  return (
    <>
     
      <ImgProfile  />
      <Container>
       
       
        <Row md={4} sm={2} xs={1}>
          {myPicture.map(picture => (
            <PictureCard picture={picture} inProfile={true} />
          ))}
        </Row>
      </Container>
    </>
  )
}
export default Profile
