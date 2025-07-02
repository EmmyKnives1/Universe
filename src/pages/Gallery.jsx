import GaleriaGrid from '../components/GaleriaEncantada/GaleriaEncantada'; // caminho pode mudar dependendo da sua estrutura

const Gallery = () => {
  return (
    <main className="pagina-galeria">
      <GaleriaGrid />
      <StarfieldCanvas />
      
    </main>
  );
};

export default Gallery;
