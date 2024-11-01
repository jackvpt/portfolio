import { HashLink } from "react-router-hash-link"
import "./Navbar.scss"

export default function Navbar({ activeSection }) {
  return (
    <nav className="navbar">
      <HashLink
        className={`navbar-link ${activeSection === "home" ? "active" : ""}`}
        to="#home"
      >
        Accueil
      </HashLink>
      <HashLink
        className={`navbar-link ${
          activeSection === "introduction" ? "active" : ""
        }`}
        to="#introduction"
      >
        Présentation
      </HashLink>
      <HashLink
        className={`navbar-link ${
          activeSection === "creations" ? "active" : ""
        }`}
        to="#creations"
      >
        Réalisations
      </HashLink>
      <HashLink
        className={`navbar-link ${activeSection === "skills" ? "active" : ""}`}
        to="#skills"
      >
        Compétences
      </HashLink>
      <HashLink
        className={`navbar-link ${activeSection === "education" ? "active" : ""}`}
        to="#education"
      >
        Formation
      </HashLink>
      <HashLink
        className={`navbar-link ${activeSection === "contact" ? "active" : ""}`}
        to="#contact"
      >
        Contact
      </HashLink>
    </nav>
  )
}
