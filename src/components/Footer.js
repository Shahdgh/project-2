import { TiSocialGithub, TiSocialTwitterCircular, TiSocialLinkedin, TiSocialFacebook } from "react-icons/ti"
function Footer() {
  return (
    <footer style={{background: "rgb(145, 151, 153)"}}  class="text-center text-white bg-">
      <div class="container pt-4">
        <section class="mb-4 ">
          <a class="btn btn-link btn-floating btn-lg  fs-1 m-1">
            <TiSocialTwitterCircular />
          </a>

          <a class="btn btn-link btn-floating btn-lg  fs-1 text-dark m-1">
            <TiSocialGithub />
          </a>
          <a class="btn btn-link btn-floating btn-lg  fs-1 m-1">
            <TiSocialLinkedin />
          </a>

          <a class="btn btn-link btn-floating btn-lg   fs-1 m-1"
          data-mdb-ripple-color="light">
            <TiSocialFacebook />
          </a>
        </section>
      </div>

      <div class="text-center text-dark p-3">
        <h4 class="text-light">PHOTOGRAPY 2021</h4>
      </div>
    </footer>
  )
}

export default Footer
