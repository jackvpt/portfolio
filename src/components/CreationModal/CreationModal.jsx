import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./CreationModal.scss"

export default function CreationModal({ closeModal, creation }) {
  return (
    <div className="modal_window">
      <div className="modal_container">
        <div className="modal_header">
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
            <a href={creation.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </a>
          </div>
          <div className="modal_close" onClick={closeModal}>
            <FontAwesomeIcon icon={faSquareXmark} size="2xl" />
          </div>
        </div>
        <div className="modal_content">
          <img
            className="modal_img"
            src={`${import.meta.env.BASE_URL}assets/creations/${
              creation.image
            }_page.webp`}
            alt={creation.name}
            loading="lazy"
          ></img>
        </div>
      </div>
    </div>
  )
}
