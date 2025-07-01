import GaleriaGrid from '../components/GaleriaGrid/GaleriaGrid'; // caminho pode mudar dependendo da sua estrutura

const Gallery = () => {
  return (
    <main className="pagina-galeria">
      <h1>🌌 Galeria Universo Livre</h1>
      <p>Explore fragmentos visuais e poesias em colagem.</p>
      <GaleriaGrid />
    </main>
  );
};

export default Gallery;
