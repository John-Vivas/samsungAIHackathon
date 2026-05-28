import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Insights from './pages/Insights';
import Panel from './pages/Panel';

const AppRouter = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/panel" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/productos" element={<Products />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/panel" element={<Panel />} />
    </Routes>
  </Router>
);

export default AppRouter;
