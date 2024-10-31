import Skill from "../Skill/Skill"
import { useFetch } from "../../utils/useFetch"
import "./Skills.scss"

export default function Skills() {
  // Fetch call returns 'data', 'isLoading' and 'error'
  const fetchResult = useFetch("/data/skills.json")

  if (!fetchResult.data) return

  // Get data from fetch
  const skills = fetchResult.data

  const skillsFront = skills.find((item) => item.category === "frontend").skills
  const skillsBack = skills.find((item) => item.category === "backend").skills

  return (
    <section className="div__skills">
      <h3>COMPÉTENCES</h3>
      <div className="div__skills-categories">
        <article className="article__category">
          <h4>Front End</h4>
          {skillsFront.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </article>
        <article className="article__category">
          <h4>Back End</h4>
          {skillsBack.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </article>
      </div>
    </section>
  )
}
