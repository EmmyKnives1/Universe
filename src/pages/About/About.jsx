import React from 'react';
import './About.css';
import StarfieldCanvas from '../../components/StarfieldCanvas';

export default function Sobre() {
  return (
    <>
      <StarfieldCanvas />
      <div className="sobre-container">
        <h1>Sobre o Universo Livre</h1>

        <section className="secao-introducao">
          <h2>Introdução</h2>
          <p>
            O Universo Livre é uma plataforma de expressão artística que mistura
            galeria viva e rede social. Cada usuário publica imagens, textos ou
            colagens e as vê flutuarem num feed público sob um céu estrelado
            contínuo. Perfis são planetas, postagens são constelações, e juntos
            criamos um cosmos interativo.
          </p>
        </section>

        <section className="secao-missao">
          <h2>Missão & Visão</h2>
          <p>
            Nossa missão é conectar criadores de arte e poesia digital em uma
            experiência sensorial e colaborativa. Queremos oferecer um espaço
            onde cada detalhe, da tipografia aos efeitos visuais, fortaleça a
            sensação de encantamento e pertencimento.
          </p>
        </section>

        <section className="secao-processo">
          <h2>Processo de Criação</h2>
          <ul>
            <li>
              Mapeamento de jornadas de usuário: do primeiro clique até a
              publicação de um post.
            </li>
            <li>
              Wireframes e protótipos no Figma com foco em navegação fluida e
              responsiva.
            </li>
            <li>
              Definição de design system: paleta lavanda-dourada, glassmorphism,
              tipografia poética (Cormorant Garamond).
            </li>
            <li>
              Iterações de layouts: galerias fixas, feed público, páginas de
              perfil e blog.
            </li>
            <li>
              Testes de usabilidade com visitantes reais para garantir clareza
              e sensação de imersão.
            </li>
          </ul>
        </section>

        <section className="secao-arquitetura">
          <h2>Arquitetura de Frontend</h2>
          <p>
            Estruturamos o código em componentes React reutilizáveis:
            <code>Feed.jsx</code>, <code>PostCard.jsx</code>,{' '}
            <code>PerfilUsuario.jsx</code>, <code>PostForm.jsx</code>. A
            navegação é feita via React Router, e o estado global (autenticação,
            dados de usuário) é gerenciado com Context API e Sequelize.
          </p>
        </section>

        <section className="secao-tecnologia">
          <h2>Stack & Infraestrutura</h2>
          <table>
            <thead>
              <tr>
                <th>Camada</th>
                <th>Tecnologia</th>
                <th>Função</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frontend</td>
                <td>React.js, CSS3 (Glassmorphism)</td>
                <td>UI interativa, responsiva e animada</td>
              </tr>
              <tr>
                <td>Autenticação</td>
                <td>Passport.js / Auth0 / JWT</td>
                <td>Login e registro social/email, integrado a Sequelize</td>
              </tr>
              <tr>
                <td>Banco de Dados</td>
                <td>PostgreSQL (via Sequelize)</td>
                <td>Usuários, posts, categorias, relações</td>
              </tr>
              <tr>
                <td>Animações</td>
                <td>Canvas API / react-tsparticles</td>
                <td>Fundo estrelado e partículas</td>
              </tr>
              <tr>
                <td>Hospedagem</td>
                <td>Vercel / Netlify</td>
                <td>Deploy contínuo e HTTPS</td>
              </tr>
              <tr>
                <td>Serverless</td>
                <td>AWS Lambda / Firebase Functions (opcional)</td>
                <td>Moderação de posts e notificações</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="secao-acessibilidade">
          <h2>Acessibilidade & Performance</h2>
          <ul>
            <li>Layouts responsivos para desktop e mobile.</li>
            <li>Contraste de cores e fontes legíveis para todos.</li>
            <li>ARIA roles e descrições em botões, links e imagens.</li>
            <li>Lazy-load de imagens e chunking de bundle para rapidez.</li>
            <li>Otimização de SEO: meta tags, sitemap e Open Graph.</li>
          </ul>
        </section>

        <section className="secao-roadmap">
          <h2>Roadmap & Futuro</h2>
          <ol>
            <li>Implementar sistema de comentários e mensagens privadas.</li>
            <li>Desenvolver follow/unfollow e notificações em tempo real.</li>
            <li>Lançar app mobile híbrido com animações nativas.</li>
            <li>API pública para integrações com outras galerias.</li>
            <li>Ferramentas colaborativas: edição conjunta de colagens.</li>
          </ol>
        </section>

        <section className="secao-equipe">
          <h2>Equipe & Agradecimentos</h2>
          <p>
            Este projeto nasceu da colaboração entre designers, desenvolvedores
            e amantes da arte. Agradecemos a cada usuário que compartilha sua
            criatividade e faz deste universo um lugar vivo e inspirador.
          </p>
        </section>
      </div>
    </>
  );
}
