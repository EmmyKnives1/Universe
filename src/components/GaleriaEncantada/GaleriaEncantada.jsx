import { useState, useEffect } from 'react';
import './GaleriaEncantada.css';
import StarfieldCanvas from '../../components/StarfieldCanvas'; // ajuste o caminho conforme a estrutura


const obras = [
  {
    titulo: 'Fragmento Solar',
    descricao: 'Colagem sobre presença e ausência.',
    imagem: '/imagens/fragmento-solar.jpg',
  },
  {
    titulo: 'Flor Invertida',
    descricao: 'Poema visual em dissolução digital.',
    imagem: '/imagens/flor-invertida.jpg',
  },
  {
    titulo: 'Nebulosa de Abril',
    descricao: 'Camadas de papel e memória flutuante.',
    imagem: '/imagens/nebulosa-abril.jpg',
  },
  {
    titulo: 'Pétala Submersa',
    descricao: 'Aquarela sobre profundidade e silêncio.',
    imagem: '/imagens/petala-submersa.jpg',
  },
  {
    titulo: 'Vértice Lunar',
    descricao: 'Geometria intuitiva em tons galácticos.',
    imagem: '/imagens/vertice-lunar.jpg',
  },
  {
    titulo: 'Aura Partida',
    descricao: 'Experimento digital com luz e sombra.',
    imagem: '/imagens/aura-partida.jpg',
  },
];

export default function GaleriaEncantada({ onLightbox }) {
  const [imagemAmpliada, setImagemAmpliada] = useState(null);

  // Comunica a visibilidade da navbar com base na lightbox
  useEffect(() => {
    <>
  <StarfieldCanvas />

  <div className="galeria-container">
    {/* Seu conteúdo da galeria aqui */}
  </div>
</>

    if (onLightbox) {
      onLightbox(!imagemAmpliada); // false = esconder navbar, true = mostrar
    }
  }, [imagemAmpliada, onLightbox]);

  return (
    <>
      <section className="galeria-encantada">
        <h2> Galeria Encantada </h2>
        <p className="galeria-descricao">
          Obras que flutuam entre o sentir e o imaginar.
        </p>

        <div className="grid-galeria">
          {obras.map((obra, index) => (
            <div className="card-obra" key={index}>
              <img
                src={obra.imagem}
                alt={obra.titulo}
                onClick={() => setImagemAmpliada(obra)}
                className="miniatura"
              />
              <h3>{obra.titulo}</h3>
              <p>{obra.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {imagemAmpliada && (
        <div className="lightbox" onClick={() => setImagemAmpliada(null)}>
          <img
            src={imagemAmpliada.imagem}
            alt={imagemAmpliada.titulo}
            className="imagem-ampliada"
          />
          <span className="fechar">✕</span>
        </div>
      )}
    </>
  );
}
