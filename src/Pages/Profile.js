import { useContext, useState } from "react"
import { Col, Container, Row, Image } from "react-bootstrap"
import PictureCard from "../components/PictureCard"
import PhotosContext from "../Utils/PhotosContext"
import Navbar from "../components/Navbar"
function Profile() {
  const { profile, picture } = useContext(PhotosContext)
  if (!profile) {
    return <h1>LOADING ...</h1>
  }
  const myPicture = picture.filter(picture => picture._user._id === profile._id)
  return (
    <>
      <Navbar />
      <Container>
        <Row className="d-flex align-item-center mb-5">
          <Col>
            <Image src={profile.photo} height="250px" />
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
