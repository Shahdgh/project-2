import { useContext } from "react"
import PhotosContext from "../Utils/PhotosContext"
//styles
import styles from "./SignUp.module.css"
//navbar
import Navbar from "../components/Navbar"
//icon
import { MdEmail, MdPassword ,MdAddAPhoto} from "react-icons/md"

function SignUp() {
    const { signUp } = useContext(PhotosContext)
    return (
      
        <div className={styles.bgimg}>
        <>
        <Navbar/>
        </>

        <div className={styles.content}>
          <header> Sign Up </header>
          <form onSubmit={signUp}>
          <div className={styles.field}>
              {/* <span>
               Name
              </span> */}
              <input type="text" required name="firstName" placeholder="First Name" />
            </div>
            <div className={styles.field}>
              {/* <span>
               Name
              </span> */}
              <input type="text" required name="lastName" placeholder="Last Name" />
            </div>
            <div className={styles.field}>
              <span>
                <MdEmail />
              </span>
              <input type="email" required name="email" placeholder="Email" />
            </div>
            <div className={styles.space}>
              <span>
                <MdPassword />
              </span>
              <input type="password" required name="password" placeholder="Password" />
            </div>
            <div className={styles.field}>
              <span>
                <MdAddAPhoto />
              </span>
              <input type="url" required name="photo" placeholder="Photo" />
            </div>
            <div >
              <input class={styles.signup} type="submit" value="signup" />
              <a href="/login" />
            </div>
          </form>
          <div class={styles.regester}>
            do you have account?
            <a href="./login">Login</a>
          </div>
        </div>
      </div>
      );
}

export default SignUp;