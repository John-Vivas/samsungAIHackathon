import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Insights from './pages/Insights';
import Panel from './pages/Panel';
import About from './pages/About';

const AppRouter = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/productos" element={<Products />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/panel" element={<Panel />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default AppRouter;
