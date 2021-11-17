import { Link } from "react-router-dom"
import{Navbar , Container,Nav} from "react-bootstrap"
import { BsFillSunriseFill,BsPencilSquare,BsFillImageFill } from "react-icons/bs";
import {FaRegUserCircle} from "react-icons/fa";
function NavbarItem() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">
          <BsFillImageFill/> PHOTO
          </Link>
          {localStorage.tokenPost ? (
            <Nav className="me-auto">
              <Link className="nav-link" to="/add-post">
              <BsFillImageFill color="white"/> PHOTO
              </Link>
            </Nav>
          ) : null}
          {localStorage.tokenPost ? (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/profile">
                Profile <FaRegUserCircle color="light"/>
              </Link>
              <Link className="nav-link" to="/">
                Logout
              </Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/signup">
                Sign up <BsPencilSquare color="white"/>
              </Link>
              <Link className="nav-link" to="login">
                Login <BsFillSunriseFill color="white"/>
              </Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  )
}
export default NavbarItem