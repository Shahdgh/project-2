import { useContext } from "react"
import PhotosContext from "../Utils/PhotosContext"
//styles
import styles from "./Login.module.css"
//navbar
import Navbar from "../components/Navbar"
//icon
import { MdEmail, MdPassword } from "react-icons/md"

function Login() {
  const { login } = useContext(PhotosContext)
  return (
    <>
      <div className={styles.bgimg}>
        <Navbar />

        <div className={styles.content}>
          <header> Login </header>
          <form onSubmit={login}>
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
            <div class={styles.pass}>
              <a href="#"> Forget Password</a>
            </div>
            <div class={styles.field}>
              <input type="submit" value="login" />
              <a href="/" />
            </div>
          </form>
          <div class={styles.login}>or login with</div>
          <div class={styles.links}>
            <div class={styles.facebook}>
              <span>Facebook</span>
            </div>
            <div class={styles.instagram}>
              <span>Instagrem</span>
            </div>
          </div>
          <div class={styles.regester}>
            Dont have account?
            <a href="./signup">Signup Now</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
