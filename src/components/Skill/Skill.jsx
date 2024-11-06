import "./Skill.scss"

export default function Skill({ skill }) {
  return (
    <div className="div__skill">
      <div className="div__skill-img">
        <img
          src={`${import.meta.env.BASE_URL}assets/skills/${skill.name.toLocaleLowerCase()}.webp`}
          alt=""
        ></img>
      </div>
      <div className="div__skill-name">{skill.name}</div>
      <div className="div__skill-ratings">
        {[...Array(10)].map((e, index) => (
          <div key={index}
            className={`rating ${
              index < skill.rating ? "active" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}
