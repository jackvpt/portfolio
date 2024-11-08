import "./TypeWriter.scss"
import Typewriter from "typewriter-effect"

export default function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: ["Jacques Verpoest - gdfgfdgfdfggdfdfgfgdDéveloppeur Web"],
        autoStart: true,
        loop: true,
      }}
    />
  )
}
