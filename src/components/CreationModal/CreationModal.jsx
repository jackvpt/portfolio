import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./CreationModal.scss"

CreationModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  creation: PropTypes.shape({
    name: PropTypes.string.isRequired,
    website: PropTypes.string,
    github: PropTypes.string,
    text: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
}

export default function CreationModal({ closeModal, creation }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(closeModal, 500)
  }

  const handleBackgroundClick = (event) => {
    if (event.target.classList.contains("modal_window")) {
      handleClose()
    }
  }

  return (
    <div
      className={`modal_window ${isVisible ? "modal-enter" : "modal-exit"}`}
      onClick={handleBackgroundClick}
    >
      <div className="modal_container">
        <div className="modal_header">
          <div className="modal_header-name">{creation.name}</div>
          <div className="modal_header-links">
            {creation.website && (
              <div className="modal_website">
                <a
                  href={creation.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGlobe} size="2xl" />
                </a>
              </div>
            )}

            <div className="modal_github">
              <a
                href={creation.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2xl" />
              </a>
            </div>
            <div className="modal_close" onClick={handleClose}>
              <FontAwesomeIcon icon={faSquareXmark} size="2xl" />
            </div>
          </div>
        </div>
        <div className="modal_content">
          <div className="modal_text">
            <div dangerouslySetInnerHTML={{ __html: creation.text }}></div>
            <div className="modal_skills">
              {creation.skills.map((skill, index) => (
                <img
                  key={index}
                  className="img__tag"
                  src={`${
                    import.meta.env.BASE_URL
                  }assets/skills/${skill.toLocaleLowerCase()}.webp`}
                  alt={skill}
                ></img>
              ))}
            </div>
          </div>
          <div className="modal_img">
            <img
              src={`${import.meta.env.BASE_URL}assets/creations/${
                creation.image
              }_page.webp`}
              alt={creation.name}
              loading="lazy"
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}
