import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Inicio', path: '/home' },
  { label: 'Productos', path: '/productos' },
  { label: 'Insights', path: '/insights' },
  { label: 'Panel', path: '/panel' },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav style={{
      background: '#181c23',
      padding: '0.5rem 2rem',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid #23272f',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <span style={{ fontWeight: 700, fontSize: 18, color: '#fff', marginRight: 32 }}>
        <span role="img" aria-label="logo">🏠</span> Samsung Smart Commerce AI
      </span>
      <div style={{ display: 'flex', gap: 24 }}>
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              color: location.pathname === item.path ? '#4ea8ff' : '#fff',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: 16,
              padding: '6px 12px',
              borderRadius: 6,
              background: location.pathname === item.path ? '#23272f' : 'transparent',
              transition: 'background 0.2s',
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
