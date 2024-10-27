import banner_image from "../../assets/banner_image_1.webp"
import "./Banner.scss"

export default function Banner() {
  return (
    <div className="div__banner">
      <img src={banner_image} alt="computer_code"></img>
    </div>
  )
}
