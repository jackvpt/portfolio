import "./Creation.scss"

export default function Creation({ creation }) {
  return (
    <div className="div__creation">
      <h4>{creation.name}</h4>
      <div className="div__cards">
        <div className="card-front">
          <img
            className="img__creation"
            src={`/assets/creations/${creation.image}_thumbnail.webp`}
            alt={creation.name}
          ></img>
        </div>
        <div className="card-back">
          {creation.description}
        </div>
      </div>
      <div className="tags">
        {creation.skills.map((skill, index) => (
          <img
            key={index}
            className="img__tag"
            src={`/assets/skills/${skill.toLocaleLowerCase()}.webp`}
            alt={skill}
          ></img>
        ))}
      </div>
    </div>
  )
}
