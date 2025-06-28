import Particulas from "../components/Particulas";
function Home() {
  // Import the image from the same folder

  return (
    <div className="home-container">
      <section className="entrada">
        <div className="overlay">
          <h1>Bem-vindo ao universo livre</h1>
          <p>um espaço onde sentir, criar e existir são a mesma coisa.</p>
        </div>
        <div><button className="entrar">entrar na galeria</button></div>

        <div>
          <section className="entrada">
        <Particulas />

      </section>
          <img src={require('./brilhar.png')} className="flores" alt="brilhar" />
          <img src={require('./brilhar.png')} className="estrelas" alt="estrelas flutuantes" />
        </div>
      </section>
    </div>
  );
}






export default Home;