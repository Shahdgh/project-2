import { useContext } from "react"
import PhotosContext from "../Utils/PhotosContext"
//styles
import styles from "./SignUp.module.css"
//navbar
import Navbar from "../components/Navbar"
//icon
import { MdEmail, MdPassword } from "react-icons/md"
function AddPicture() {
    const { addPicture } = useContext(PhotosContext)
    return (
        <div className={styles.bgimg}>
        <Navbar />

        <div className={styles.content}>
          <header> Add Picture </header>
          <form onSubmit={addPicture}>
          <div className={styles.field}>
              <span>
            title
              </span>
              <input type="text" required name="title" placeholder="First Name" />
            </div>
            <div className={styles.field}>
              <span>
           body
              </span>
              <input type="text" required name="description" placeholder="Last Name" />
            </div>  
            <div className={styles.photo}>
              <span>
                <MdEmail />
              </span>
              <input type="url" required name="image" placeholder="Photo" />
            </div>
            <div class={styles.field}>
              <input type="submit"  />
            </div>
          </form>
        </div>
      </div>
   
    );
}

export default AddPicture;