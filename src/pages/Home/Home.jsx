import React, { useState } from 'react';
import './Home.css';
import Starfield from '../../components/StarfieldCanvas';  // 1) import


 const Home = () => {
   const [mostrarGaleria, setMostrarGaleria] = useState(false);

   return (
     <>
     <Starfield />
-      <title>Universo Livre</title>
+      {/* 2) Céu animado por trás de tudo */}
+      

       <title>Universo Livre</title>
       <meta
         name="description"
         content="Um espaço onde sentir, criar e existir são a mesma coisa."
       />

       <div className="home-container">
         <section className="entrada">
           <div className="overlay">
             <h1>Bem-vindo ao universo livre</h1>
             <p>um espaço onde sentir, criar e existir são a mesma coisa.</p>

             <button
               className="entrar"
               onClick={() => setMostrarGaleria(!mostrarGaleria)}
             >
               entrar na galeria
             </button>

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

         {mostrarGaleria && (
           <section className="galeria fadeIn">
             <h2>🌸 Galeria Encantada 🌸</h2>
             <p>Você desbloqueou o universo visual!</p>
             {/* Cards, imagens, animações podem ir aqui */}
           </section>
         )}
       </div>
     </>
   );
 };

 export default Home;
