import Skill from "../Skill/Skill"
import { useFetch } from "../../utils/useFetch"
import "./Skills.scss"

export default function Skills() {
  // Fetch call returns 'data', 'isLoading' and 'error'
  const fetchResult = useFetch(`${import.meta.env.BASE_URL}data/skills.json`)

  if (!fetchResult.data) return

  // Get data from fetch
  const skills = fetchResult.data

  const skillsFront = skills.find((item) => item.category === "frontend").skills
  const skillsBack = skills.find((item) => item.category === "backend").skills

  return (
    <section className="div__skills">
      <h2>COMPÉTENCES</h2>
      <div className="div__skills-categories">
        <article className="article__category">
          <h3>Front End</h3>
          {skillsFront.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </article>
        <article className="article__category">
          <h3>Back End</h3>
          {skillsBack.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </article>
      </div>
    </section>
  )
}
