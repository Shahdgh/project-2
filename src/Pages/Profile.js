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
      {/* <Navbar /> */}
      <ImgProfile  />
      <Container>
        <Row xs={1} md={3} className="d-flex align-item-center mb-5 text-coloe-black">
          <Col>
            <Image src={profile.photo} height="250px" Styles={{marginleft:"40%", }}/>
          </Col>
          <Col>
            <h2 className="mb-2">
              {profile.firstName} {profile.lastName}
            </h2>
            <p className="text-muted">{profile.email}</p>
          </Col>
        </Row>
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
