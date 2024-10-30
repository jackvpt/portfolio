import "./Creation.scss"

export default function Creation({ name, skills, image }) {
  return (
    <div className="div__creation">
        <div className="card-front">
          <h4>{name}</h4>
          <div className="tags">
            {skills.map((skill, index) => (
              <img key={index}
                className="img__tag"
                src={`/assets/skills/${skill.toLocaleLowerCase()}.webp`}
                alt={skill}
              ></img>
            ))}
          </div>
          <img
            className="img__creation"
            src={`/assets/creations/${image}`}
            alt={name}
          ></img>
        </div>

        <div className="card-back">
          <h4>{name}</h4>
          <div className="tags">
            {skills.map((skill, index) => (
              <img key={index}
                className="img__tag"
                src={`/assets/skills/${skill.toLocaleLowerCase()}.webp`}
                alt={skill}
              ></img>
            ))}
          </div>
          <p>Back</p>
        </div>
      </div>
  )
}
