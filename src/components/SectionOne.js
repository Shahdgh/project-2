import styles from "./SectionOne.module.css"
// import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import video from "../video/v.mp4"
import { MdAddPhotoAlternate } from "react-icons/md";
function SectionOne() {
  return (
    <>
      <div className={styles.bbb}>
        <video className={styles.video} src={video} autoPlay muted loop></video>

        

        <h2>Photography </h2>
        <p>Photography is the art, application, and practice of creating durable images by recording light</p>
        <div className={styles.button}>
        <Link variant="light" className={styles.btn} to="/apicard">
          View
        </Link>
        <Link className={styles.btn} to="/add-Picture">
               add  <MdAddPhotoAlternate   className={styles.icon}/> 
              </Link>
              </div>
      </div>

      {/* <div className={styles.background}>
      <Navbar />
      <div className={styles.text}>
        <h2>Photography </h2>
        <p>Photography is the art, application, and practice of creating durable images by recording light</p>
        <Link variant="light" className="btn  btn-light" to="/apicard">
          View
        </Link>
      </div>
    </div> */}
    </>
    //   <div className={styles.background}>
    //   <Navbar />
    //   <div className={styles.text}>
    //     <h2>Photography </h2>
    //     <p>Photography is the art, application, and practice of creating durable images by recording light</p>
    //     <Link variant="light" className="btn  btn-light" to="/apicard">
    //       View
    //     </Link>
    //   </div>
    // </div>
  )
}

export default SectionOne
