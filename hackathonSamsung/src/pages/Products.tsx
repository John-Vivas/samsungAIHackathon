import './Products.css';
import { useEffect, useState } from 'react';

const productsData = [
  {
    id: 1,
    name: 'Galaxy S24 Ultra',
    category: 'Móviles',
    price: 1349000,
    priceOld: 1499000,
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uiceiBLn6I9VY9W8LLwiDIqM9Bt_3kpq9En2jAdg2x2znzPX3XToz2s-snPUEOaR0U2RA9NzlXAgUlWS_-ZwZW_0PvFQMz6qzOxpm3KmxgHiepXn01uIWZ7tpBdAb9a2AfSIOjYc1BDPNlbQCdrtiaYryC-b3GjwES1Drzz3d6Dtv8QVdV2HgjG5q3nmOc-CPgdhmhN6nfJKsxKjsbPA7mhCQnqZX-JVHlL0ASWQxx1Q7vM6GUPdMhZHrw',
    aiScore: 98,
    badge: 'Puntaje IA: 98%',
    trend: 'Tendencia en tu Región',
    large: true,
    performance: 'high'
  },
  {
    id: 2,
    name: 'Galaxy Buds3 Pro',
    category: 'Accesorios',
    price: 199000,
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujG8rLsgUMcTiHV_31MODr-yghZWDPxvKZ0T-Qxf_iUi2LFQvR4WON0w4TtMragsuizFjmLdBGksao_TkxKJjHxnmwSdT3ps3UVrSf6pZwQAWbsKR6jCRCXubIEvir0Yw_H5yWlT_AT8tiOfGOG5Ggup4B7bYzqlhaNWYICjo7GOfRilWIm1j1vOJUENm9NC6ZJC9cjcBHI1hKu4b-wrWyN-DRpDbtKeGvKuMjqaKta5shH0nfFlrRRDg',
    badge: 'Bundle Recomendado',
    stock: 42,
    performance: 'high'
  },
  {
    id: 3,
    name: 'Odyssey OLED G9',
    category: 'Monitores',
    price: 1799000,
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ugaRRugYqnUmL4VoU-rL58vbxBXev5sNejm4rjesWLireYGP85dFveH9A_aRvzk2TFC1hUYvWg3r_sP5VK3AVYgMBFybdg---z3a1txPPA_loqyqDpnHSiFTgv4kZ1dXv6aIlB8AqNAVMZ2VqnJCZxirqwggn-6XD6sZjNoVWR6FqWpY1Us9DYCtjIZuet3y0Kt8CxuLAU-7gaWnFj_F7XrDhbEBDUwP-s4-N-qQbITdK7BbQVZx1REBw',
    badge: 'Precio Optimizado por IA',
    ai: true,
    performance: 'medium'
  },
  {
    id: 4,
    name: 'Bespoke 4-Door Flex',
    category: 'Hogar',
    price: 3299000,
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhr_kxtXs4UIoU3zpKlCYWOKMaRMDKlyAseXUePI7eT-9DO93axHfjS5twNlbv1mxMhlGa5Evtl0kEzfgPbxOxznVwpo1YQQFcJKOnzg8yLfKeV2_7AdVrhSwRb99kKN7MD0BrtP19VkIsFkq-HBcQthY_02JIBE6wR0Yi-Hi4ANULsYmtaaUODtyBfch1yOBLC3NUCFZabYHKZ5XlckB8qGSJQnN_mz9LlP29zHk-p0g2BY1tVLi48oec',
    stock: 'Bajo Stock',
    performance: 'low'
  },
  {
    id: 5,
    name: 'Galaxy Z Fold5',
    category: 'Móviles',
    price: 1999000,
    priceOld: 2199000,
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uiceiBLn6I9VY9W8LLwiDIqM9Bt_3kpq9En2jAdg2x2znzPX3XToz2s-snPUEOaR0U2RA9NzlXAgUlWS_-ZwZW_0PvFQMz6qzOxpm3KmxgHiepXn01uIWZ7tpBdAb9a2AfSIOjYc1BDPNlbQCdrtiaYryC-b3GjwES1Drzz3d6Dtv8QVdV2HgjG5q3nmOc-CPgdhmhN6nfJKsxKjsbPA7mhCQnqZX-JVHlL0ASWQxx1Q7vM6GUPdMhZHrw',
    aiScore: 92,
    badge: 'Puntaje IA: 92%',
    performance: 'high'
  },
  {
    id: 6,
    name: 'Neo QLED 8K 65"',
    category: 'Hogar',
    price: 4999000,
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ugaRRugYqnUmL4VoU-rL58vbxBXev5sNejm4rjesWLireYGP85dFveH9A_aRvzk2TFC1hUYvWg3r_sP5VK3AVYgMBFybdg---z3a1txPPA_loqyqDpnHSiFTgv4kZ1dXv6aIlB8AqNAVMZ2VqnJCZxirqwggn-6XD6sZjNoVWR6FqWpY1Us9DYCtjIZuet3y0Kt8CxuLAU-7gaWnFj_F7XrDhbEBDUwP-s4-N-qQbITdK7BbQVZx1REBw',
    badge: 'Premium',
    performance: 'high'
  },
  {
    id: 7,
    name: 'Galaxy Watch6 Classic',
    category: 'Accesorios',
    price: 449000,
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujG8rLsgUMcTiHV_31MODr-yghZWDPxvKZ0T-Qxf_iUi2LFQvR4WON0w4TtMragsuizFjmLdBGksao_TkxKJjHxnmwSdT3ps3UVrSf6pZwQAWbsKR6jCRCXubIEvir0Yw_H5yWlT_AT8tiOfGOG5Ggup4B7bYzqlhaNWYICjo7GOfRilWIm1j1vOJUENm9NC6ZJC9cjcBHI1hKu4b-wrWyN-DRpDbtKeGvKuMjqaKta5shH0nfFlrRRDg',
    aiScore: 85,
    performance: 'medium'
  },
  {
    id: 8,
    name: 'Odyssey OLED G8',
    category: 'Monitores',
    price: 999000,
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ugaRRugYqnUmL4VoU-rL58vbxBXev5sNejm4rjesWLireYGP85dFveH9A_aRvzk2TFC1hUYvWg3r_sP5VK3AVYgMBFybdg---z3a1txPPA_loqyqDpnHSiFTgv4kZ1dXv6aIlB8AqNAVMZ2VqnJCZxirqwggn-6XD6sZjNoVWR6FqWpY1Us9DYCtjIZuet3y0Kt8CxuLAU-7gaWnFj_F7XrDhbEBDUwP-s4-N-qQbITdK7BbQVZx1REBw',
    badge: 'Gaming Pro',
    performance: 'high'
  },
  {
    id: 9,
    name: 'Galaxy A54',
    category: 'Móviles',
    price: 449000,
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uiceiBLn6I9VY9W8LLwiDIqM9Bt_3kpq9En2jAdg2x2znzPX3XToz2s-snPUEOaR0U2RA9NzlXAgUlWS_-ZwZW_0PvFQMz6qzOxpm3KmxgHiepXn01uIWZ7tpBdAb9a2AfSIOjYc1BDPNlbQCdrtiaYryC-b3GjwES1Drzz3d6Dtv8QVdV2HgjG5q3nmOc-CPgdhmhN6nfJKsxKjsbPA7mhCQnqZX-JVHlL0ASWQxx1Q7vM6GUPdMhZHrw',
    badge: 'Mejor Relación P/C',
    performance: 'medium'
  },
  {
    id: 10,
    name: 'Bespoke Lavadora',
    category: 'Hogar',
    price: 1199000,
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhr_kxtXs4UIoU3zpKlCYWOKMaRMDKlyAseXUePI7eT-9DO93axHfjS5twNlbv1mxMhlGa5Evtl0kEzfgPbxOxznVwpo1YQQFcJKOnzg8yLfKeV2_7AdVrhSwRb99kKN7MD0BrtP19VkIsFkq-HBcQthY_02JIBE6wR0Yi-Hi4ANULsYmtaaUODtyBfch1yOBLC3NUCFZabYHKZ5XlckB8qGSJQnN_mz9LlP29zHk-p0g2BY1tVLi48oec',
    performance: 'medium'
  },
  {
    id: 11,
    name: 'Galaxy Tab S9',
    category: 'Accesorios',
    price: 799000,
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujG8rLsgUMcTiHV_31MODr-yghZWDPxvKZ0T-Qxf_iUi2LFQvR4WON0w4TtMragsuizFjmLdBGksao_TkxKJjHxnmwSdT3ps3UVrSf6pZwQAWbsKR6jCRCXubIEvir0Yw_H5yWlT_AT8tiOfGOG5Ggup4B7bYzqlhaNWYICjo7GOfRilWIm1j1vOJUENm9NC6ZJC9cjcBHI1hKu4b-wrWyN-DRpDbtKeGvKuMjqaKta5shH0nfFlrRRDg',
    badge: 'Tablet Premium',
    performance: 'high'
  },
  {
    id: 12,
    name: 'Galaxy Buds2',
    category: 'Accesorios',
    price: 149000,
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujG8rLsgUMcTiHV_31MODr-yghZWDPxvKZ0T-Qxf_iUi2LFQvR4WON0w4TtMragsuizFjmLdBGksao_TkxKJjHxnmwSdT3ps3UVrSf6pZwQAWbsKR6jCRCXubIEvir0Yw_H5yWlT_AT8tiOfGOG5Ggup4B7bYzqlhaNWYICjo7GOfRilWIm1j1vOJUENm9NC6ZJC9cjcBHI1hKu4b-wrWyN-DRpDbtKeGvKuMjqaKta5shH0nfFlrRRDg',
    stock: 120,
    performance: 'high'
  }
];

const categories = ['Móviles', 'Monitores', 'Hogar', 'Accesorios'];
const filterTypes = ['Rendimiento en Ventas', 'Predicción de Stock', 'Margen de Beneficio IA'];

const Productos = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filterType, setFilterType] = useState('Rendimiento en Ventas');

  const filteredProducts = selectedCategory
    ? productsData.filter((p) => p.category === selectedCategory)
    : productsData;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (filterType === 'Rendimiento en Ventas') {
      const perfOrder = { high: 3, medium: 2, low: 1 };
      return (perfOrder[b.performance as keyof typeof perfOrder] || 0) - (perfOrder[a.performance as keyof typeof perfOrder] || 0);
    }
    if (filterType === 'Predicción de Stock') {
      return b.price - a.price;
    }
    return a.price - b.price;
  });

  useEffect(() => {
    const cards = document.querySelectorAll('.group');
    cards.forEach((card, index) => {
      (card as HTMLElement).style.opacity = '0';
      (card as HTMLElement).style.transform = 'translateY(20px)';
      setTimeout(() => {
        (card as HTMLElement).style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        (card as HTMLElement).style.opacity = '1';
        (card as HTMLElement).style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, [sortedProducts]);

  return (
    <>
      <main className="productos-main">
        <section className="hero mb-8">
          <h1 className="hero-title">Catálogo Optimizado por IA</h1>
          <p className="hero-sub">
            Visualiza el inventario reorganizado dinámicamente según la relevancia
            predictiva del mercado y el comportamiento de tus usuarios en tiempo real.
          </p>
        </section>

        <div className="filters mb-8">
          <div className="glass-card filter-pill">
            <span className="material-symbols-outlined text-primary">filter_list</span>
            <span className="filter-label">Filtrar por:</span>
            <select className="filter-select" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
              {filterTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="chips">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`chip ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                style={{
                  cursor: 'pointer',
                  backgroundColor: selectedCategory === cat ? 'var(--primary, #a9c7ff)' : '#2b2d2d',
                  color: selectedCategory === cat ? '#002957' : 'inherit'
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="products-grid">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className={`group product-card ${product.large ? 'large' : ''}`}
            >
              {product.badge && (
                <div className="card-badges">
                  <span className="pill primary">{product.badge}</span>
                  {product.trend && <span className="pill muted">{product.trend}</span>}
                </div>
              )}
              <div className={`media ${product.large ? '' : 'small'}`}>
                <img src={product.image} alt={product.name} />
              </div>
              <div className="card-body">
                {product.large ? (
                  <>
                    <div className="card-head">
                      <div>
                        <p className="category">{product.category}</p>
                        <h3 className="product-name">{product.name}</h3>
                      </div>
                      <div className="price-area">
                        {product.priceOld && <p className="price-old">${product.priceOld.toLocaleString('es-CO')}</p>}
                        <p className="price">${product.price.toLocaleString('es-CO')}</p>
                      </div>
                    </div>
                    <div className="card-actions">
                      <button className="btn-primary">Ver Detalles</button>
                      <button className="btn-icon">
                        <span className="material-symbols-outlined">shopping_cart</span>
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="card-footer">
                      <span className="price">${product.price.toLocaleString('es-CO')}</span>
                      <div className="muted small">{product.stock || 'Stock disponible'}</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}

          <div className="glass-card more-cta">
            <span className="material-symbols-outlined add">add_circle</span>
            <p className="bold">Analizar más categorías con IA</p>
          </div>
        </div>
      </main>

      <footer className="productos-footer">
        <div className="footer-inner">
          <div>
            <h4 className="brand">Samsung Smart Commerce AI</h4>
            <p className="muted">Potenciando el comercio del futuro con inteligencia predictiva y análisis de datos en tiempo real.</p>
          </div>
          <div className="links">
            <a href="#">Privacidad</a>
            <a href="#">Términos de IA</a>
            <a href="#">Soporte Técnico</a>
            <a href="#">Legal</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Productos;
