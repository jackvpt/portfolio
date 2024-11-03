import "./EducationStep.scss"

export default function EducationStep({ step }) {
  return (
    <section className="div__step">
      <h4>{step.year}</h4>
      <div className="div__step-img">
        <img
          className="img__step"
          src={`/assets/education/${step.image}`}
          alt={step.image}
        ></img>
      </div>
      <div className="div__step-text">{step.text}</div>

    </section>
  )
}
