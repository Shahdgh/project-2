
import styles from "./SectionOne.module.css"
// import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"

function SectionOne() {
  return (
    <>
    <div className={styles.background}>
      <Navbar />
      <div className={styles.text}>
        <h2>Photography </h2>
        <p>Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film. It is employed in many fields of science, manufacturing (e.g., photolithography), and business, as well as its more direct uses for art, 
          film and video production, recreational purposes, hobby, and mass communication</p>
        <Link variant="light" className="btn btn-light" to="/apicard">
          View
        </Link>
      </div>
    </div>
    </>
    
  )
}

export default SectionOne
