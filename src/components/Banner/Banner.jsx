import Typewriter from "typewriter-effect"
import "./Banner.scss"

export default function Banner() {
  return (
    <div className="div__banner">
      {/* <img src="/assets/images/banner_image_1.webp" alt="computer_code" /> */}
      <img
        src={`${import.meta.env.BASE_URL}assets/images/banner_image_1.webp`}
        alt="computer_code"
      />
      <h1>
        <Typewriter
          options={{
            strings: [
              "Jacques Verpoest<span class='span__union'> - </span><span class='span__crlf'><br /></span>Développeur Web"
            ],
            autoStart: true,
            loop: true,
            pauseFor: 10000
          }}
        />
      </h1>
    </div>
  )
}
