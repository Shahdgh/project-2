import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
//////////////icon
import {  BsPencilSquare, BsFillImageFill } from "react-icons/bs"
import { FaRegUserCircle } from "react-icons/fa"
import { FiLogIn } from "react-icons/fi"
// import { MdAddPhotoAlternate } from "react-icons/md";
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
          <Link className="navbar-brand" style={{fontSize:"30px", marginLeft: "60px",fontFamily:"Dancing Script"}} to="/">
            PHOTOGRAPHY
            {/* <BsFillImageFill /> */}
          </Link>
          {localStorage.token ? (
            <Nav className="me-auto">
              {/* <Link className="nav-link" to="/add-Picture">
                <MdAddPhotoAlternate style={{fontSize:"30px", marginLeft: "60px" ,width:"50%"}}  /> 
              </Link> */}
            </Nav>
          ) : null}
          {localStorage.token ? (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/profile">
                Profile <FaRegUserCircle color="light" />
              </Link>
              <Link className="nav-link" to="/" onClick={logout}>
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
