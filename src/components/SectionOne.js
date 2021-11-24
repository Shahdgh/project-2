import styles from "./SectionOne.module.css"
import { Link } from "react-router-dom"
import video from "../video/v.mp4"

function SectionOne() {
  return (
    <>
      <div className={styles.bbb}>
        <video className={styles.video} src={video} autoPlay muted loop></video>

        <h2>Photograph  </h2>
        <p> It is the image obtained from the process of photosynthesis, by the fall of light on a light-sensitive surface.</p>
        <div className={styles.button}>
          <Link variant="light" className={styles.btn} to="/apicard">
            View
          </Link>
          <Link className={styles.btn} to="/add-Picture">
            add
          </Link>
        </div>
      </div>
    </>
  )
}

export default SectionOne
