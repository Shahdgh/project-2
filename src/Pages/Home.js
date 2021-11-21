import { useContext } from "react"
import PhotosContext from "../Utils/PhotosContext"
import SectionOne from "../components/SectionOne"

function Home() {
  const { photos } = useContext(PhotosContext)

  return (
    <>
      <SectionOne />
    </>
  )
}
export default Home
