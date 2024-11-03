import "./TypeWriter.scss"
import Typewriter from "typewriter-effect"

export default function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: ["Jacques Verpoest - Développeur Web"],
        autoStart: true,
        loop: true,
      }}
    />
  )
}
