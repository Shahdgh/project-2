import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
//////////////icon
import {  BsPencilSquare, BsFillImageFill } from "react-icons/bs"
import { FaRegUserCircle } from "react-icons/fa"
import { FiLogIn } from "react-icons/fi"
import { MdAddPhotoAlternate } from "react-icons/md";
///////
import { useContext } from "react"
import PhotosContext from "../Utils/PhotosContext"
function NavbarItem() {
  const { logout } = useContext(PhotosContext)
  return (
   
    <>
      <Navbar   variant="dark pt-4">
        <Container >
          <Link className="navbar-brand" style={{fontSize:"30px", marginLeft: "40px",fontFamily:"Dancing Script", paddingTop:"16px"}} to="/">
          {/* <BsFillImageFill  /> */}
            PHOTOGRAPHY
           
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
              <Link style={{fontSize:"20px", color: "white"}}  className="nav-link" to="/profile">
                Profile <FaRegUserCircle color="light " />
              </Link>
              <Link style={{fontSize:"20px", color: "white"}} className="nav-link" to="/" onClick={logout}>
                Logout
              </Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Link style={{fontSize:"20px", color: "white"}} className="nav-link" to="/signup">
                Sign up <BsPencilSquare color="white" />
              </Link>
              <Link style={{fontSize:"20px", color: "white"}} className="nav-link" to="/login">
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
