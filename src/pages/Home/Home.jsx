
import './Home.css';
import Starfield from '../../components/StarfieldCanvas';  // 1) import


 const Home = () => {
   

   return (
     <>
     <Starfield />
      <title>Universo Livre</title>
      {/* 2) Céu animado por trás de tudo */}
      

       <title>Universo Livre</title>
       <meta
         name="description"
         content="Um espaço onde sentir, criar e existir são a mesma coisa."
       />

       <div className="home-container">
         <section className="entrada">
           <div className="overlay">
             <h1>Bem-vindo ao Universo Livre</h1>
             
             <div className="botoes-entrada">
  <button className="entrar">Entrar na galeria</button>
  <button className="botao-cadastro">Cadastrar-se</button>
</div>


             <div className="nevoa" />
             <div
               className="nevoa"
               style={{ animationDelay: '10s', opacity: 0.25 }}
             />
           </div>

           <img src={require('../brilhar.png')} className="flores" alt="brilhar" />
           <img
             src={require('../brilhar.png')}
             className="estrelas"
             alt="estrelas flutuantes"
           />
         </section>

         
       </div>
     </>
   );
 };

 export default Home;
