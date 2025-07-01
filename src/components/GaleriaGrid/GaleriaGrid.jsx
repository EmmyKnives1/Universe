import React, { useState, useEffect } from 'react';
import './GaleriaGrid.css';

const GaleriaGrid = () => {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    // Simula busca de dados (pode virar fetch no futuro)
    const dadosFake = [
  {
    id: '1',
    titulo: 'Fragmento Solar',
    descricao: 'Colagem sobre presença e ausência.',
    imageUrl: '/imagens/fragmento-solar.jpg'
  },
  {
    id: '2',
    titulo: 'Nebulosa de Abril',
    descricao: 'Camadas de papel e memória flutuante.',
    imageUrl: '/imagens/nebulosa-abril.jpg'
  },
  {
    id: '3',
    titulo: 'Flor Invertida',
    descricao: 'Poema visual em dissolução digital.',
    imageUrl: '/imagens/flor-invertida.jpg'
  }
];
    // Atualiza o estado com os dados simulados

    setImagens(dadosFake);
  }, []);

  return (
    <section className="galeria-grid">
      {imagens.map((img) => (
        <div key={img.id} className="grid-item">
          <img src={img.imageUrl} alt={img.titulo} />
          <div className="legenda">
            <h3>{img.titulo}</h3>
            <p>{img.descricao}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default GaleriaGrid;
