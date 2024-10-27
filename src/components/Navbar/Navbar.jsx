import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link className="navbar-link" to="/">Accueil</Link>
            <Link className="navbar-link" to="/presentation">Présentation</Link>
            <Link className="navbar-link" to="/realisations">Réalisations</Link>
            <Link className="navbar-link" to="/skills">Compétences</Link>
            <Link className="navbar-link" to="/contact">Contact</Link>
        </nav>
    );
}
