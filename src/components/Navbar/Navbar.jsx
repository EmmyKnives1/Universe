import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">✨ universo livre</div>
      <ul className="nav-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/galeria">Galeria</Link></li>
        <li><Link to="/eventos">Eventos</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
