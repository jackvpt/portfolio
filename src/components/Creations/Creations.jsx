import { useState } from "react"
import Creation from "../Creation/Creation"
import "./Creations.scss"

export default function Creations() {
  const [filter, setFilter] = useState("all")

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

  const creations = [
    {
      name: "Booki",
      skills: ["html", "css"],
      image: "booki.webp",
    },
    {
      name: "Sophie Bluel",
      skills: ["javascript"],
      image: "sophie_bluel.webp",
    },
  ]

  return (
    <section className="div__creations">
      <h3>RÉALISATIONS</h3>

      <div className="div__filter">
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
      </div>

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
