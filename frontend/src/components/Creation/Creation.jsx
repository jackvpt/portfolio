import { useState } from "react"
import CreationModal from "../CreationModal/CreationModal"
import { faEye } from "@fortawesome/free-regular-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./Creation.scss"

export default function Creation({ creation }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="div__creation">
      {isModalOpen && (
        <CreationModal closeModal={closeModal} creation={creation} />
      )}

      <h4>{creation.name}</h4>
      <div className="div__cards">
        <div className="card__front">
          <img
            className="img__creation"
            src={`/assets/creations/${creation.image}_thumbnail.webp`}
            alt={creation.name}
          ></img>
        </div>
        <div className="card__back">
          <div className="card__back-title">{creation.title}</div>
          <div className="card__back-description">{creation.description}</div>
          <div className="card__back-buttons">
            <a
              href={creation.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGlobe} size="2xl" />
            </a>
            <a href={creation.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </a>
            <div className="card__back-button-open" onClick={openModal}>
              <FontAwesomeIcon icon={faEye} size="xl" />
            </div>
          </div>
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
