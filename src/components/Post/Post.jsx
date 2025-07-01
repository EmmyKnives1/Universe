import { useState } from 'react';

function Post({ titulo, conteudo }) {
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);

  const enviarComentario = () => {
    if (comentario.trim() !== '') {
      setComentarios([...comentarios, comentario]);
      setComentario('');
    }
  };

  return (
    <div className="post">
      <h2>{titulo}</h2>
      <p>{conteudo}</p>

      <div className="comentario-section">
        <input 
          type="text" 
          placeholder="Compartilhe algo…" 
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
        <button onClick={enviarComentario}>Comentar</button>
      </div>

      <ul className="lista-comentarios">
        {comentarios.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default Post;