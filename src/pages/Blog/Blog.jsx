import React from 'react';
import './Blog.css';
import StarfieldCanvas from '../../components/StarfieldCanvas';

const posts = [
  {
    id: 1,
    title: 'Mergulho na Aquarela Cósmica',
    author: 'Mariana Celeste',
    date: '10 Jul 2025',
    excerpt:
      'Exploro como cores dissolvem memórias em camadas líquidas, revelando universos suspensos.',
    category: 'Aquarela'
  },
  {
    id: 2,
    title: 'Geometrias Lunares',
    author: 'AstroLira',
    date: '08 Jul 2025',
    excerpt:
      'Descubra padrões invisíveis que nascem do encontro entre formas e fases da lua.',
    category: 'Digital'
  },
  {
    id: 3,
    title: 'Poesia em Colagem',
    author: 'Violeta Nebula',
    date: '05 Jul 2025',
    excerpt:
      'Fragmentos de papel dialogam com versos, criando paisagens textuais pouco convencionais.',
    category: 'Poético'
  },
  {
  id: 4,
  title: 'Silêncios Digitais',
  author: 'Sol Leve',
  date: '12 Jul 2025',
  excerpt:
    'Reflexões sobre o espaço entre palavras, o vazio criativo e a pausa como estética narrativa.',
  category: 'Reflexão'
}

  // … mais posts
];

const categorias = ['Aquarela', 'Digital', 'Poético', 'Colagem', 'Híbrido'];

export default function Blog() {
  return (
    <>
      <StarfieldCanvas />
      <div className="blog-container">
        <header className="blog-header">
          <h1>Blog do Universo Livre</h1>
          <p>Explorando colagens, poesias e descobertas cósmicas.</p>
        </header>

        <div className="blog-content">
          <aside className="blog-sidebar">
            <input
              type="search"
              placeholder="🔍 Buscar posts"
              className="busca"
            />
            <h3>Categorias</h3>
            <ul className="lista-categorias">
              {categorias.map((cat) => (
                <li key={cat}>{cat}</li>
              ))}
            </ul>
          </aside>

          <section className="blog-posts">
            {posts.map((p) => (
              <article className="card-post" key={p.id}>
                <div className="tag">{p.category}</div>
                <h2>{p.title}</h2>
                <p className="meta">
                  {p.author} • <time>{p.date}</time>
                </p>
                <p className="excerpt">{p.excerpt}</p>
                <button className="leia-mais">leia mais →</button>
              </article>
            ))}
          </section>
        </div>

        <footer className="blog-footer">
          © 2025 Universo Livre • Todos os direitos reservados
        </footer>
      </div>
    </>
  );
}
