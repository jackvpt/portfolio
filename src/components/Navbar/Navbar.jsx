import { useState } from "react"
import { HashLink } from "react-router-hash-link"
import PropTypes from "prop-types"
import "./Navbar.scss"

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired
}

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="navbar">
      <div className="navbar__burgerIcon" onClick={toggleMenu}>
        <div className={`burger-bar ${isOpen ? "close" : "open"}`}></div>
        <div className={`burger-bar ${isOpen ? "close" : "open"}`}></div>
        <div className={`burger-bar ${isOpen ? "close" : "open"}`}></div>
      </div>

      <nav className={`navbar__links ${isOpen ? "navbar__links-close" : ""}`}>
        <HashLink
          className={`link ${activeSection === "home" ? "active" : ""}`}
          smooth
          to="#home"
        >
          Accueil
        </HashLink>
        <HashLink
          className={`link ${activeSection === "introduction" ? "active" : ""}`}
          smooth
          to="#introduction"
        >
          Présentation
        </HashLink>
        <HashLink
          className={`link ${activeSection === "creations" ? "active" : ""}`}
          smooth
          to="#creations"
        >
          Réalisations
        </HashLink>
        <HashLink
          className={`link ${activeSection === "skills" ? "active" : ""}`}
          smooth
          to="#skills"
        >
          Compétences
        </HashLink>
        <HashLink
          className={`link ${activeSection === "education" ? "active" : ""}`}
          smooth
          to="#education"
        >
          Formation
        </HashLink>
        <HashLink
          className={`link ${activeSection === "contact" ? "active" : ""}`}
          smooth
          to="#contact"
        >
          Contact
        </HashLink>
      </nav>
    </div>
  )
}
