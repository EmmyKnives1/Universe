
function Home() {
  // Import the image from the same folder

  return (
    <div className="home-container">
      <section className="entrada">
        <div className="overlay">
          <h1>Bem-vindo ao universo livre</h1>
          <p>um espaço onde sentir, criar e existir são a mesma coisa.</p>
          <div className="nevoa"></div>
            <div className="nevoa" style={{animationDelay: '10s', opacity: 0.25}}></div>
        </div>
        <div>
          <section className="entrada">
            <div className="overlay">
              <h1>...</h1>
              <button className="entrar">entrar na galeria</button>
            </div>
          </section>
          <img src={require('./brilhar.png')} className="flores" alt="brilhar" />
          <img src={require('./brilhar.png')} className="estrelas" alt="estrelas flutuantes" />
        </div>
      </section>
    </div>
  );
}







export default Home;