// import styles from "./SectionOne.module.css"
import styles from "./SectionOne.module.css"
// import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"

function SectionOne() {
  return (
    <div className={styles.background}>
      <Navbar />
      <div className={styles.text}>
        <h2>lougiyfutdsrljuvx </h2>
        <p>jlieydry</p>
        <Link variant="light" className="btn btn-light" to="/apicard">
          View
        </Link>
      </div>
    </div>
  )
}

export default SectionOne
