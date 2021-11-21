import { useEffect, useState } from "react"
import axios from "axios"
// import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import PhotosContext from "./Utils/PhotosContext"
import "./App.css"
import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
 import ApiCard from "./components/ApiCard"
 import SignUp from "./Pages/SignUp"
import Login from "./Pages/Login"
import AddPicture from "./Pages/AddPicture"
import Profile from "./Pages/Profile"

function App() {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    getPhotos()
  }, [])
  const getPhotos = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      console.log("get Finished")
      const data = response.data
      setPhotos(data)
      
    } catch (error) {
      console.log(error)
    }
  }
  console.log(photos)
  
  const store = {
    photos: photos,
  }
  return (
    <>
      <PhotosContext.Provider value={store}>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apicard" element={<ApiCard />} />
          <Route path="/add-picture" element={<AddPicture />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </PhotosContext.Provider>
    </>
  )
}

export default App
