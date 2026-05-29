import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../pages/Home.css'; // Import page styles containing navigation classes

const navItems = [
  { label: 'Inicio', path: '/home', icon: 'home' },
  { label: 'Productos', path: '/productos', icon: 'shopping_bag' },
  { label: 'Insights', path: '/insights', icon: 'insights' },
  { label: 'Panel', path: '/panel', icon: 'dashboard' },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* TopAppBar */}
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="header-container">
          <div className="logo-section">
            <span className="material-symbols-outlined logo-icon">smart_toy</span>
            <h1>Samsung Smart Commerce AI</h1>
          </div>
          <nav>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button className="strategy-btn">
            <span className="material-symbols-outlined text-sm">bolt</span>
            Modo Estrategia IA
          </button>
          <button className="mobile-menu">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="bottom-nav">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
