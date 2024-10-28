import "./Creations.scss"

export default function Creations() {
  const tools = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "NodeJS",
    "Sass",
    "MongoDB",
  ]

  return (
    <section className="div__creations">
      <h3>RÉALISATIONS</h3>
      <div className="div__tags">
        {tools.map((tool, index) => (
          <article key={index}>
            <img src={`/assets/${tool.toLocaleLowerCase()}.webp`} alt={tool} />
            <h4>{tool}</h4>
          </article>
        ))}
      </div>
    </section>
  )
}
