import Navbar from "./Navbar"
import styles from "./ImgProfile.module.css"
import { useContext } from "react"
import PhotosContext from "../Utils/PhotosContext"
import { Col, Row, Image } from "react-bootstrap"

function ImgProfile() {
  const { profile } = useContext(PhotosContext)

  return (
    <div className={styles.background}>
        <Navbar />
        
        <Row xs={1} md={3} style={{}}>
          <Col>
            <Image src={profile.photo} height="250px" className={styles.imageprofile} />
          </Col>
          <Col>
            <div className={styles.information}>
              <h2>
                {profile.firstName} {profile.lastName}
              </h2>
              <p>{profile.email}</p>
            </div>
          </Col>
        </Row>
     
    </div>
  )
}

export default ImgProfile
