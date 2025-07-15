import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Gallery from './components/GaleriaEncantada/GaleriaEncantada';
import Perfil from './pages/Perfil/Perfil';
import Login from './pages/Login/Login';
import Contact from './pages/Contact';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [mostrarNavbar, setMostrarNavbar] = useState(true);

  return (
    <Router>
      <Navbar ocultar={!mostrarNavbar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/galeria"
          element={<Gallery onLightbox={setMostrarNavbar} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
