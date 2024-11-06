import React from "react"
import { useFetch } from "../../utils/useFetch"
import EducationStep from "../EducationStep/EducationStep"
import "./Education.scss"

export default function Education() {
  // Fetch call returns 'data', 'isLoading' and 'error'
  const fetchResult = useFetch(`${import.meta.env.BASE_URL}data/education.json`)

  if (!fetchResult.data) return

  // Get data from fetch
  const education = fetchResult.data

  return (
    <section className="div__education">
      <h2>FORMATION</h2>
      <div className="div__education-steps">
        {education
          .sort((a, b) => b.rank - a.rank)
          .map((step, index) => (
            <React.Fragment key={index}>
              <EducationStep step={step} />
              {index < education.length - 1 && (
                <div className="div__education-line"></div>
              )}
            </React.Fragment>
          ))}
      </div>
    </section>
  )
}
