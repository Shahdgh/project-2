import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import { BsFillSunriseFill, BsPencilSquare, BsFillImageFill } from "react-icons/bs"
import { FaRegUserCircle } from "react-icons/fa"
import { useContext } from "react"
import PhotosContext from "../Utils/PhotosContext"
function NavbarItem() {
  const {logout} = useContext(PhotosContext)
  return (
    <>
      <Navbar bg="dark" variant="dark pt-4">
        <Container>
          <Link className="navbar-brand" to="/">
            <BsFillImageFill /> PHOTOGRAPHY
          </Link>
          {localStorage.token ? (
            <Nav className="me-auto">
              <Link className="nav-link" to="/add-Picture">
                <BsFillImageFill color="white" /> Add Picure
              </Link>
            </Nav>
          ) : null}
          {localStorage.token? (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/profile">
                Profile <FaRegUserCircle color="light" />
              </Link>
              <Link className="nav-link" onClick={logout} >
                Logout
              </Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/signup">
                Sign up <BsPencilSquare color="white" />
              </Link>
              <Link className="nav-link" to="login">
                Login <BsFillSunriseFill color="white" />
              </Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  )
}
export default NavbarItem