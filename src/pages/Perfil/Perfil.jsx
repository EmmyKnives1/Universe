// src/pages/PerfilUsuario.jsx

import './Perfil.css';
import StarfieldCanvas from '../../components/StarfieldCanvas';

const postagens = [
  {
    imagem: '/imagens/petala-submersa.jpg',
    titulo: 'Pétala Submersa',
  },
  {
    imagem: '/imagens/vertice-lunar.jpg',
    titulo: 'Vértice Lunar',
  },
  {
    imagem: '/imagens/aura-partida.jpg',
    titulo: 'Aura Partida',
  },
];

export default function PerfilUsuario() {
  return (
    <>
      <StarfieldCanvas />
      <div className="perfil-container">
        <div className="nebulosa"></div>

        <section className="perfil-header">
          <img
            className="avatar"
            src="/imagens/avatar-usuario.png"
            alt="Avatar do usuário"
          />
          <div className="infos">
            <h2 className="nome">Mariana Celeste</h2>
            <h2 className="usuario">@Bonniezinha13</h2>
            <p className="bio">
              Criadora de colagens cósmicas e poemas visuais. Habita entre
              o silêncio do espaço e os suspiros da arte.
            </p>
            <button className="botao-editar">editar perfil</button>
          </div>
        </section>

        <section className="grid-postagens">
          {postagens.map((post, index) => (
            <div className="card-postagem" key={index}>
              <img src={post.imagem} alt={post.titulo} />
              <h3>{post.titulo}</h3>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
