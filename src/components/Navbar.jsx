import { Link } from 'react-router-dom';
import '../index.css';

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

<div className="navbar">
  <h1>universo livre</h1>
  <div className="nav-links">
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
    <a href="/galeria">Galeria</a>
    <a href="/sobre">Sobre</a>
    <a href="/contato">Contato</a>
  </div>
</div>