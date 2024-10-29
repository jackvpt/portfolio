import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link className="navbar-link" to="/">Accueil</Link>
            <Link className="navbar-link" to="/#introduction">Présentation</Link>
            <Link className="navbar-link" to="/#creations">Réalisations</Link>
            <Link className="navbar-link" to="/skills">Compétences</Link>
            <Link className="navbar-link" to="/contact">Contact</Link>
        </nav>
    );
}
