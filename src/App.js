import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Inicio from '../src/pages/Inicio';
import Servicios from '../src/pages/Servicios';
import Contacto from '../src/pages/Contacto';



function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </Router>


      <Footer />
    </div>

  );
}

export default App;
