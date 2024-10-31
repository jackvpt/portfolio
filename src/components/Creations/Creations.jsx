import { useState } from "react"
import { useFetch } from "../../utils/useFetch"
import Creation from "../Creation/Creation"
import "./Creations.scss"

export default function Creations() {
  // const [filter, setFilter] = useState("all")

    // Fetch call returns 'data', 'isLoading' and 'error'
    const fetchResult = useFetch("/data/creations.json")

    if (!fetchResult.data) return

    // Get data from fetch
    const creations = fetchResult.data

  const tools = [
    "Tous",
    "HTML",
    "CSS",
    "Sass",
    "Javascript",
    "React",
    "NodeJS",
    "MongoDB",
  ]

  return (
    <section className="div__creations">
      <h3>RÉALISATIONS</h3>

      {/* <div className="div__filter">
        {tools.map((tool, index) => (
          <div
            key={index}
            className={`tag ${tool === "Tous" ? "tag-all" : "tag-notAll"}`}
          >
            {tool !== "Tous" && (
              <img
                src={`/assets/skills/${tool.toLocaleLowerCase()}.webp`}
                alt={tool}
              />
            )}
            <h4>{tool}</h4>
          </div>
        ))}
      </div> */}

      <div className="div__projects">
        {creations.map((creation, index) => (
          <Creation key={index}
            name={creation.name}
            skills={creation.skills}
            image={creation.image}
          />
        ))}
      </div>
    </section>
  )
}
