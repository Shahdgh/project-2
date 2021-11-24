import styles from "./WorkTeam.module.css"
import reahb from "../images/rehab.jpg"
import shahad from "../images/shahad.jpg"
import Sanobar from "../images/ff.jpg"

function WorkTeam() {
  return (
    <div className={styles.work}>
      <div>
        <h2 className={styles.headerwork}>Team Work </h2>
      </div>
      <div class="row mb-2">
        <div class="col-md-6">
          <div class="row g-0  flex-md-row mb-4 ml-6 shadow-sm h-md-250 position-relative">
            <div class="col-auto d-lg-block">
              <img className="ms-1" src={reahb} width="250" height="250" />
            </div>
            <div class="col p-4 d-flex flex-column ">
              <h3 class="mb-0 text-dark">Rehab Algahmdi</h3>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row g-0  flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col-auto d-lg-block">
              <img className="ms-1"
                src={shahad}
                width="250"
                height="250"
              />
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <h3 class="mb-0 text-dark">Shahad Alghmdi</h3>
            </div>
          </div>
        </div>
        <h2 className={styles.headerwork}> Supervisor </h2>
        <div class="col-md-6">
          <div class="row g-0 flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col-auto ms-0  d-lg-block ms-0">
              <img  className=" ms-2"
                src={Sanobar}
                width="250"
                height="250" />
            </div>
            <div class="col p-4  flex-column position-static">
              <h3 class="mb-0 text-dark "> Ms Sanobar Fatema </h3>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row g-0   flex-md-row mb-4 shadow-sm h-md-250 position-relative b-none">
            <div class="col-auto  d-lg-block">
              <img className="ms-1" 
               src="https://ca.slack-edge.com/T02FM3FE1DJ-U02G3S4EQR2-101e89aa0287-512" width="250" height="250" />
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <h3 class="mb-0 text-dark">Mr Adnan </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkTeam
