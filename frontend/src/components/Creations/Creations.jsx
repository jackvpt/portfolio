import { useState } from "react"
import { useFetch } from "../../utils/useFetch"
import Masonry from "react-masonry-css"
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

  const breakpointColumnsObj = {
    default: 5,
    1440: 4,
    1024: 3,
    768: 2,
    480: 1,
  }

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
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="div__projects"
        columnClassName="grid-column"
      >
        {creations.map((creation, index) => (
          <Creation
            key={index}
            // name={creation.name}
            // skills={creation.skills}
            // image={creation.image}
            creation={creation}
          />
        ))}
      </Masonry>
    </section>
  )
}
