 import { useEffect, useState } from "react";
import axios from "axios";
// import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import PhotosContext from "./Utils/PhotosContext";
import Pictuer from "./pages/Pictuer";

  function App() {
    const [photos , setPhotos] = useState([])
      
    const getPhotos = async () => {
      try{
        const response = await axios.get("https://picsum.photos/v2/list")
        console.log("get Finished")
        setPhotos(response) 
        console.log(response.data)
      }catch (error){
        console.log(error)
      }
    }
    useEffect(() => {
      getPhotos()
    } , [])









    const store ={
      photos:photos,
    }
    return ( 
      <>
       <PhotosContext.Provider value={store}>
      <Navbar />

      <Pictuer/>
     
    </PhotosContext.Provider>
     
      </>
     );
  }
  
  export default App;