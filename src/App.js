import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Router>
  );
}
<section className="hero">
  <div className="container">
    <h2>Bem-vinde ao universo livre</h2>
    <p>Um espaço para ideias, expressões e conexões que fogem do óbvio.</p>
    <button>explorar</button>
  </div>
</section>




export default App;


