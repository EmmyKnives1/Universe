import { useEffect, useState } from 'react';
import '../pages/Blog/Blog.css'; // Importando o CSS do Blog

export default function ModoNoturno() {
  const [darkAtivo, setDarkAtivo] = useState(false);

  useEffect(() => {
    const modoSalvo = localStorage.getItem('modo-noturno') === 'true';
    setDarkAtivo(modoSalvo);
    document.body.classList.toggle('dark-mode', modoSalvo);
  }, []);

  const toggleModo = () => {
    const novoModo = !darkAtivo;
    setDarkAtivo(novoModo);
    document.body.classList.toggle('dark-mode', novoModo);
    localStorage.setItem('modo-noturno', novoModo);
  };

  return (
    <button className="botao-lua" onClick={toggleModo} aria-label="Modo Noturno">
      {darkAtivo ? '🌞' : '🌙'}
    </button>
  );
}
