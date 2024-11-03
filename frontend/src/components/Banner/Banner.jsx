import Typewriter from "typewriter-effect"
import "./Banner.scss"

export default function Banner() {

  return (
    <div className="div__banner">
      <img src="/assets/banners/banner_image_1.webp" alt="computer_code" />

      <Typewriter
        options={{
          strings:  ["Jacques Verpoest<span class='span__union'> - </span><span class='span__crlf'><br /></span>Développeur Web"],
          autoStart: true,
          loop: true,
          pauseFor: 3000,
        }}
      />
    </div>
  )
}
