import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ ocultar }) {
  return (
    <nav className={`navbar ${ocultar ? 'oculta' : ''}`}>
      <div className="logo">✨ universo livre</div>
      <ul className="nav-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/galeria">Galeria</Link></li>
        <li><Link to="/Perfil">Perfil</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
