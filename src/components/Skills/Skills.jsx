import Skill from "../Skill/Skill"
import "./Skills.scss"

export default function Skills() {
  const skills = [
    { name: "HTML", rating: 10 },
    { name: "CSS", rating: 9 },
    { name: "React", rating: 8 },
  ]

  return (
    <section className="div__skills">
      <h3>COMPÉTENCES</h3>
      <div className="div__skills-categories">
        <article className="article__category">
          <h4>Front End</h4>
          {skills.map((skill, index) => (
            <Skill skill={skill} />
          ))}
        </article>
      </div>
    </section>
  )
}
