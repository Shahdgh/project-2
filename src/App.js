import { useEffect, useState } from "react"
import axios from "axios"
import PhotosContext from "./Utils/PhotosContext"
import { Route, Routes, useNavigate } from "react-router"
import Home from "./Pages/Home"
import ApiCard from "./components/ApiCard"
import SignUp from "./Pages/SignUp"
import Login from "./Pages/Login"
import AddPicture from "./Pages/AddPicture"
import Profile from "./Pages/Profile"

function App() {
  const [photos, setPhotos] = useState([])
  const [pictures, setPicture] = useState([])
  const [profile, setProfile] = useState(null)

  const navigate = useNavigate()

  // useEffect(() => {
  //   getPhotos()
  // }, [])

  const getPhotos = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      console.log("get Finished")
      const data = response.data
      setPhotos(data)
    } catch (error) {
      console.log(error.response?.data)
    }
  }

/////////////////
  useEffect(() => {
    getPhotos()
    getPicture()
    if (localStorage.token) {
      getProfile()
    }
  }, [])
/*****************get Pictuer privt Api */
  const getPicture = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/photography-209/items")
      setPicture(response.data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  console.log(pictures)

  ////////////////////////////Sign Up /////////////////////////////
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
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/user", userBody)
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
      getProfile()
    } catch (error) {
      console.log(error)
    }
  }
  /////////logout///////////
  const logout = () => {
    localStorage.removeItem("token")
     navigate("/")
  }
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
      console.log(error.response?.data)
    }
  }
  
  ///////get profile/////////////////////////////
  const getProfile = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/user/me", {
        headers: {
          Authorization: localStorage.token,
        },
      })
      setProfile(response.data)
    } catch (error) {
      console.log(error.response?.data)
    }
  }

  /////////////confirm //////////////////////
  const confirmPicture = async (e, pictureId) => {
    e.preventDefault()
    try {
      const form = e.target
      const pictureBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
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
      getProfile()
    } catch (error) {
      console.log(error.response?.data)
    }
  }
  ///////////delete////////////////////
  const deletePicture = async e=> {
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
      console.log(error.response?.data)
    }
  }
  ///////////////////store/////////////////////////////////////
  const store = {
    photos: photos,
    pictures: pictures,
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apicard" element={<ApiCard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-picture" element={<AddPicture />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </PhotosContext.Provider>
    </>
  )
}

export default App
