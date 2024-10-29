import Banner from "../../components/Banner/Banner"
import Navbar from "../../components/Navbar/Navbar"
import Introduction from "../../components/Introduction/Introduction"
import Creations from "../../components/Creations/Creations"
import "./Home.scss"

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Introduction id="introduction" />
      <Creations id="creations" />
    </>
  )
}
