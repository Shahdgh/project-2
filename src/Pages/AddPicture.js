import { useContext } from "react"
import PhotosContext from "../Utils/PhotosContext"
import{Form} from "react-bootstrap"
//styles
import styles from "./AddPicture.module.css"
//navbar
import Navbar from "../components/Navbar"
//icon
import { MdEmail } from "react-icons/md"

import {BsFillCameraFill,  BsFillPhoneFill,BsTabletFill} from "react-icons/bs";
function AddPicture() {
  /*********
//    */
//    const options = [
//     { value: "text", label: <FontAwesomeIcon icon={faFileAlt} /> },
//     { value: "image", label: <FontAwesomeIcon icon={faFileImage} /> },
//     { value: "video", label: <FontAwesomeIcon icon={faFileVideo} /> }
// ];

{/* <Select  placeholder="Text"  options={options} /> */}
  /*
   * ******** */
  const { addPicture } = useContext(PhotosContext)
  return (
    <div className={styles.bgimg}>
      <Navbar />

      <div className={styles.content}>
        <header> Add Picture </header>
        <form onSubmit={addPicture}>
          <div className={styles.field}>
            {/* <span>Location</span> */}
            <input type="text" required name="title"text-color="black" placeholder="Location" />
          </div>
          <div className={styles.field}>
            <span>
              {/* <MdEmail /> */}
            </span>
            <input type="url" required text-color="black" name="image" placeholder="Photo" />
          </div>
          <select aria-label="Default select example" color="black"  name="description">
            <option this >  Device Used</option>
            <option value="Phone"> Phone  </option>
            <option value="Laptop"> Laptop </option>
            <option value="Tablet">  Tablet </option>
          </select>

         
          <div class={styles.Add}>
            <input type="submit" value="Add" />
           
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddPicture
