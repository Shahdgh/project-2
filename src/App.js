import { useEffect, useState } from "react"
import axios from "axios"
// import { Routes } from "react-router-dom";
// import Navbar from "./components/Navbar"
import PhotosContext from "./Utils/PhotosContext"
import "./App.css"
import { Route, Routes, useNavigate } from "react-router"
import Home from "./Pages/Home"
import ApiCard from "./components/ApiCard"
import SignUp from "./Pages/SignUp"
import Login from "./Pages/Login"
import AddPicture from "./Pages/AddPicture"
import Profile from "./Pages/Profile"

function App() {
<<<<<<< HEAD
  const [photos, setPhotos] = useState([])
  const [picture, setPicture] = useState([])
  const [profile, setProfile] = useState(null)

  const navigate = useNavigate()

=======
  // const [photos, setPhotos] = useState([])
  const [picture, setPicture] = useState([])
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()

  /////////Api puplic get ////////
  // useEffect(() => {
  //   getPhotos()
  // }, [])
  // const getPhotos = async () => {
  //   try {
  //     const response = await axios.get("https://picsum.photos/v2/list")
  //     console.log("get Finished")
  //     const data = response.data
  //     setPhotos(data)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // console.log(photos)
  /////////////////////////////////////////////end///////////////////////////////////

  //////////////////////////////////my api get /////////////////////////////////////
  const getPicture = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/photography-209/items")
      setPicture(response.data)
    } catch (error) {
      if (error.response) {
        console.log(error.response.data)
      } else {
        console.log(error)
      }
    }
  }
  console.log(picture)
>>>>>>> 3adc811dd44b9a38744f673785478d716939cefb
  useEffect(() => {
    getPicture()
    if (localStorage.tokenPost) {
      getProfile()
    }
  }, [])
<<<<<<< HEAD

  const getPhotos = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      console.log("get Finished")
      const data = response.data
      setPhotos(data)
=======
  ////////////////////////////////end//////////////////////////////////
  ////////////////////////////signUP/////////////////////////////
  const signUp = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        password: form.elements.password.value,
        email: form.elements.email.value,
        photo: form.elements.photo.value,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/v2/photography-209/items", userBody)
      console.log("sign up success")
      navigate("/login")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  ////////////////////////////////////////END//////////////////////////////////
  /////////////////////////login////////////////////////////////////////////////
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      const response = await axios.post("https://vast-chamber-06347.herokuapp.com/api/user/auth", userBody)

      const token = response.data
      localStorage.token = token
      console.log(token)
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  /////////////////////////////////////////end/////////////////////////////////////////////////
  ///////////////////////////////////logout////////////////////////////////////////////////
  const logout = () => {
    localStorage.removeItem("token")
  }
  //////////////////////////////////////////end///////////////////////////////////////////////
  ////////////////////////////////////////addpicture////////////////////////////////////////

  const addPicture = async e => {
    e.preventDefault()

    try {
      const form = e.target

      const postBody = {
        title: form.elements.title.value,
        body: form.elements.body.value,
        image: form.elements.image.value,
      }

      await axios.post("https://vast-chamber-06347.herokuapp.com/api/v2/photography-209/items", postBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      getPicture()
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  ///////////////////////////////////////////////////////end////////////////////////////////////////
  /////////////////////////////////////profile///////////////////////////////////////
  const getProfile = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/user/me", {
        headers: {
          Authorization: localStorage.token,
        },
      })
      setProfile(response.data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
  ////////////////////////////////////////////end///////////////////////////////////////////////////
  ///////////////////////////////////confirm/////////////////////
  const confirmPicture = async (e, postId) => {
    e.preventDefault()

    try {
      const form = e.target
      const postBody = {
        title: form.elements.title.value,
        body: form.elements.body.value,
        image: form.elements.image.value,
      }

      await axios.put(`https://vast-chamber-06347.herokuapp.com/api/v2/photography-209/items${postId}`, postBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      getPicture()
    } catch (error) {
      console.log(error.response.data)
    }
  }
  ////////////////////////////////////////////////end//////////////////////////////////////////////////
  /////////////////////////////////////////////del///////////////////////////////////////////

  const deletePicture = async (e, postId) => {
    e.preventDefault()
    try {
      const postId = e.target.id
      await axios.delete(`https://vast-chamber-06347.herokuapp.com/api/v2/photography-209/items${postId}`, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      getPicture()
>>>>>>> 3adc811dd44b9a38744f673785478d716939cefb
    } catch (error) {
      console.log(error.response.data)
    }
  }
<<<<<<< HEAD
  console.log(photos)
  /*****************get Pictuer privt Api */

  useEffect(() => {
    getPicture()
    if (localStorage.token) {
      getProfile()
    }
  }, [])

  const getPicture = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/photography-209/items")
      setPicture(response.data)
    } catch (error) {
      if (error.response) {
        console.log(error.response.data)
      } else {
        console.log(error)
      }
    }
  }
  console.log(picture)
  ///////////////////////////////addPictuer///////////////////////////////
  const addPicture = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const pictureBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/v2/photography-209/items", pictureBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      console.log("you hava add picture")
      getPicture()

      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  ////////////////////////////sinup/////////////////////////////
  const signUp = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        password: form.elements.password.value,
        email: form.elements.email.value,
        photo: form.elements.photo.value,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/user", userBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      console.log("sign up success")
      navigate("/login")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  ////////////////////////////////LOGIN/////////////////////////////
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("https://vast-chamber-06347.herokuapp.com/api/user/auth", userBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      const token = response.data
      localStorage.token = token
      console.log(token)
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  /////////logout///////////
  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }
  ///////get profile
  const getProfile = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/user/me", {
        headers: {
          Authorization: localStorage.token,
        },
      })
      setProfile(response.data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  /////////////confirm //////////////////////
  const confirmPicture = async (e, pictureId) => {
    e.preventDefault()
    try {
      const form = e.target
      const pictureBody = {
        title: form.elements.title.value,
        body: form.elements.body.value,
        image: form.elements.image.value,
      }
      await axios.put(
        `https://vast-chamber-06347.herokuapp.com/api/v2/photography-209/items/${pictureId}`,
        pictureBody,
        {
          headers: {
            Authorization: localStorage.token,
          },
        }
      )
      getPicture()
    } catch (error) {
      console.log(error.response.data)
    }
  }
  ///////////delete////////////////////
  const deletePicture = async (e, pictureId) => {
    e.preventDefault()
    try {
      const pictureId = e.target.id
      await axios.delete(`https://vast-chamber-06347.herokuapp.com/api/v2/photography-209/items/${pictureId}`, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      getPicture()
    } catch (error) {
      console.log(error.response.data)
    }
  }
  ////////////////////////////////////////////////////////
  const store = {
    photos: photos,
=======
  const store = {
    // photos: photos,
>>>>>>> 3adc811dd44b9a38744f673785478d716939cefb
    picture: picture,
    profile: profile,
    signUp: signUp,
    login: login,
    logout: logout,
    addPicture: addPicture,
    getProfile: getProfile,
    confirmPicture: confirmPicture,
    deletePicture: deletePicture,
  }
  return (
    <>
      <PhotosContext.Provider value={store}>
        lkkmklnknlk
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apicard" element={<ApiCard />} />
<<<<<<< HEAD
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-picture" element={<AddPicture />} />
=======
          <Route path="/add-picture" element={<AddPicture />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
>>>>>>> 3adc811dd44b9a38744f673785478d716939cefb
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </PhotosContext.Provider>
    </>
  )
}

export default App
