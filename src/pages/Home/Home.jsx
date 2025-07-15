import { Link } from 'react-router-dom';
import './Home.css';
import Starfield from '../../components/StarfieldCanvas';


const Home = () => {
  return (
    <>
      <Starfield /> {/* Fundo estrelado em canvas */}

      <div className="home-container">
        
        <section className="entrada">
          <div className="overlay">
            <h1>Bem-vindo ao Universo Livre</h1>

            <div className="nevoa" />
            <div classname="botoes-entrada">
            <Link to="/login" className="botao-entrar">Entrar na Galeria</Link>
          <button className="botao-cadastro">Cadastrar-se</button>
        </div>
            <div className="nevoa" style={{ animationDelay: '10s', opacity: 0.25 }} />
          </div>
        </section>
      </div>
      <footer className="footer-site">
        <nav className="footer-links">
          <Link to="/about">Sobre o Universo</Link>
        </nav>
      </footer>
    </>
  );
};

export default Home;
