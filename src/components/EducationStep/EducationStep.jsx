import "./EducationStep.scss"

export default function EducationStep({ step }) {
  return (
    <section className="div__step">
      <h4 className={step.rank % 2 != 0 ? "titleDisplayRight" : ""}>
        {step.year}
      </h4>
      <div className="div__step-img">
        <img
          className="img__step"
          src={`/assets/education/${step.image}`}
          alt={step.image}
        ></img>
      </div>
      <div
        className={`div__step-text ${
          step.rank % 2 != 0 ? "textDisplayLeft" : ""
        }`}
      >
        {step.text}
      </div>
    </section>
  )
}
