import { useEffect, useState } from "react"
import axios from "axios"
// import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import PhotosContext from "./Utils/PhotosContext"

import { Route, Routes } from "react-router"
import Home from "./Pages/Home"

function App() {
  const [photos, setPhotos] = useState([])

  const getPhotos = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      console.log("get Finished")
      setPhotos(response.data)
      console.log(photos)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getPhotos()
  }, [])

  const store = {
    photos: photos,
  }
  return (
    <>
      <PhotosContext.Provider value={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PhotosContext.Provider>
    </>
  )
}

export default App
