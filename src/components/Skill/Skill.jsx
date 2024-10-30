import "./Skill.scss"

export default function Skill({ skill }) {
  return (
    <div className="div__skill">
      <div className="div__skill-img">
        <img
          src={`/assets/skills/${skill.name.toLocaleLowerCase()}.webp`}
          alt={skill.name}
        ></img>
      </div>
      <div className="div__skill-name">{skill.name}</div>
      {[...Array(10)].map((e, index) => (
        <div
          className={`div__skill-rating ${
            index < skill.rating ? "active" : ""
          }`}
        ></div>
      ))}
    </div>
  )
}
