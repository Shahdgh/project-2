import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
//////////////icon
import {  BsPencilSquare, BsFillImageFill } from "react-icons/bs"
import { FaRegUserCircle } from "react-icons/fa"
import { FiLogIn } from "react-icons/fi"
import { useContext } from "react"
import PhotosContext from "../Utils/PhotosContext"
function NavbarItem() {
  const { logout } = useContext(PhotosContext)
  return (
    // <>
    // <navbar >
    //   <container>
    //     <nav>
    //    <ul>
    //      <li></li>
    //    </ul>
    //     </nav>
    //   </container>
    // </navbar>
    <>
      <Navbar  style={{display: "fixed", backgroundColor: "none"}}  variant="dark pt-4">
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
          {localStorage.token ? (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/profile">
                Profile <FaRegUserCircle color="light" />
              </Link>
<<<<<<< Updated upstream
              <Link className="nav-link" to="/" onClick={logout}>
=======
              <Link className="nav-link" to="/" onClick={logout} >
>>>>>>> Stashed changes
                Logout
              </Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/signup">
                Sign up <BsPencilSquare color="white" />
              </Link>
              <Link className="nav-link" to="/login">
                Login <FiLogIn color="white" />
              </Link>
            </Nav>
          )}
        </Container>
      </Navbar> 
    </>
  )
}
export default NavbarItem
