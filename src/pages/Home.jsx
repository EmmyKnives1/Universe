function Home() {
  return (
    <div className="home-container">
      <section className="hero">
  <div className="container">
    <h2>Bem-vindo ao universo livre</h2>
    <p>Um espaço onde as ideias flutuam, os sentimentos têm forma e o silêncio também fala.</p>
    <button>explorar</button>
  </div>
</section>

<section className="destaques">
  <div className="container">
    <div className="cards">
      <div className="card">
        <h3>🌸 Escritas Livres</h3>
        <p>Textos que transbordam sem moldura, poesia em estado bruto.</p>
      </div>
      <div className="card">
        <h3>🌊 Galeria de Sentimentos</h3>
        <p>Imagens que falam, cores que tocam, arte que acolhe.</p>
      </div>
      <div className="card">
        <h3>🔮 Reflexões Cotidianas</h3>
        <p>Pequenas epifanias e questionamentos suaves do dia a dia.</p>
      </div>
    </div>
  </div>
</section>

<section className="cta">
  <div className="container">
    <h2>comece sua jornada</h2>
    <button>ver mais</button>
  </div>
</section>
    </div>
  );
}


export default Home;