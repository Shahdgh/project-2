// import { useContext, useState } from "react"
// import { Col, Card, Button } from "react-bootstrap"
// import { Link } from "react-router-dom"
// import PhotosContext from "../Utils/PhotosContext"
// import ModelItem from "./Model"
// function PictureCard(props) {
//   const { picture, inProfile } = props
//   const [show, setShow] = useState(false)
//   const { deletePicture } = useContext(PhotosContext)
//   const handleClose = () => {
//     setShow(false)
//   }
//   const handleOpen = () => {
//     setShow(true)
//   }
//   return (
//     <>
//       <Col>
//         <Card>
//           <Card.Body>
//             <Card.Title>
//               {post._user.firstName} {post._user.lastName}
//             </Card.Title>
//             <Card.Img variant="top" src={post.image} />
//             <Card.Title>{post.title}</Card.Title>
//             <Card.Text>{post.body} </Card.Text>
//             {inProfile ? (
//               <>
//                 <Button variant="success" className="m-2" onClick={handleOpen}>
//                   {" "}
//                   Edit
//                 </Button>
//                 <Button className="ms-2" variant="danger" id={post._id} onClick={deletePost} variant="danger">
//                   Delete
//                 </Button>
//               </>
//             ) : (
//               <Link className="btn btn-primary" to={`/post/${post._id}`}>
//                 view
//               </Link>
//             )}
//           </Card.Body>
//         </Card>
//       </Col>
//       <ModelItem show={show} handleClose={handleClose} post={post} />
//     </>
//   )
// }
// export default PictureCard