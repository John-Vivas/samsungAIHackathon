import './Products.css';
import { useEffect, useState } from 'react';

const productsData = [
  {
    id: 1,
    name: 'Oven Compact',
    category: 'Hogar',
    price: 1349000,
    priceOld: 1499000,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/levant/nq5b4353fbk-u4/gallery/levant-nq7000b-nq5b4553fbs-nq5b4353fbk-u4-535824473?$1164_776_PNG$',
    aiScore: 98,
    badge: 'Puntaje IA: 98%',
    trend: 'Tendencia en tu Región',
    large: true,
    performance: 'high'
  },
  {
    id: 2,
    name: 'MINI COMPO CD',
    category: 'Accesorios',
    price: 1199000,
    image: 'https://images.samsung.com/is/image/samsung/co-mini-audio-system-j630-mx-j630-zx-001-front-black?$330_330_JPG$',
    badge: 'Bundle Recomendado',
    stock: 42,
    performance: 'high'
  },
  {
    id: 3,
    name: 'SET BACK BOX',
    category: 'Asesorios',
    price: 1799000,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/nz/sbb-ss08nu1xxy/gallery/nz-sbb-ssnu-sbb-ss08nu1xxy-538647006?$Q90_684_547_JPG$',
    badge: 'Precio Optimizado por IA',
    ai: true,
    performance: 'medium'
  },
  {
    id: 4,
    name: 'VCC Lavadora Secadora Bespoke AI Laundry Combo',
    category: 'Hogar',
    price: 6929145,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/co/wd26db8995bzco/gallery/co-wd8000dk-wd26db8995bzco-542309490?$1164_776_PNG$',
    stock: 'Bajo Stock',
    performance: 'low'
  },
  {
    id: 5,
    name: 'VTL',
    category: 'HOGAR',
    price: 1999000,
    priceOld: 2199000,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/co/ac024dxadkg-cb/gallery/co-ac5000b-ac024dxadkg-cb-548055852?$Q90_684_547_JPG$',
    aiScore: 92,
    performance: 'high'
  },
  {
    id: 6,
    name: 'Galaxy A03 LTC',
    category: 'Móviles',
    price: 499900,
    image: 'https://exitocol.vteximg.com.br/arquivos/ids/32506566/Celular-SAMSUNG-Galaxy-A03-Core-32-GB-Blue-3158681_a.jpg?v=639065209799500000',
    badge: 'IA Predicción: Agotándose pronto',
    badgeType: 'danger'
  },
  {
    id: 7,
    name: 'Samsung HD H5000F',
    category: 'Smart Home',
    price: 799900,
    image: 'https://exitocol.vtexassets.com/arquivos/ids/29566083/ZXPP9Zn.jpg?v=638955250473700000'
  },
  {
    id: 8,
    name: 'Lavadora Bespoke Carga Superior AI Wash 13Kg',
    category: 'Lavadora y Secdora',
    price: 1426000,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/co/wa70f19e7cco/gallery/co-wa80f25-574307-wa70f19e7cco-550497553?$1164_776_PNG$',
    
  },
  {
    id: 9,
    name: 'Galaxy Tab S10 Lite',
    category: 'Tablet',
    price: 1349910,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/co/sm-x400nzadcoo/gallery/co-galaxy-tab-s10-lite-sm-x406-sm-x400nzadcoo-548732252?$1164_776_PNG$'
  },
  {
    id: 10,
    name: 'DVM S Water, estándar',
    category: 'Accesorios',
    price: 1199000,
    image: 'https://images.samsung.com/is/image/samsung/co-ac-dvm-amxxxhxwafr-am192hxwafr-aa-001-front-white-51816165?$Q90_684_547_JPG$',
    performance: 'medium'
  },
  {
    id: 11,
    name: 'QLED',
    category: 'Televisores',
    price: 12990000,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/co/qn43q65bakxzl/gallery/co-qled-q60b-qn43q65bakxzl-531990106?$Q90_684_547_JPG$',
    badge: 'Tablet Premium',
    performance: 'high'
  },
  {
    id: 12,
    name: 'MINI MX T70',
    category: 'Accesorios',
    price: 1349000,
    image: 'https://images.samsung.com/is/image/samsung/co-giga-party-audio-mx-t70-mx-t70-zl-frontblack-216635193?$1164_776_PNG$',
    stock: 120,
    performance: 'high'
  }
];

const categories = ['Móviles', 'Telvisores', 'Hogar', 'Accesorios'];
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
