import { useContext } from "react"
import PhotosContext from "../Utils/PhotosContext"
import SectionOne from "../components/SectionOne"
// import PictureCard from "../components/PictureCard"

function Home() {
  const { photos } = useContext(PhotosContext)

  return (
    <>
      <SectionOne />
      {/* <>
      <PictureCard />
      </> */}
    </>
  )
}
export default Home
