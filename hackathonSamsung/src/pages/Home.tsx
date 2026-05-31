import './Home.css';

const productsData = [
  {
    id: 1,
    name: 'Galaxy A03 LTC',
    category: 'Mobile',
    price: '$499.900',
    image: 'https://exitocol.vteximg.com.br/arquivos/ids/32506566/Celular-SAMSUNG-Galaxy-A03-Core-32-GB-Blue-3158681_a.jpg?v=639065209799500000',
    badge: 'IA Predicción: Agotándose pronto',
    badgeType: 'danger'
  },
  {
    id: 2,
    name: 'Samsung HD H5000F',
    category: 'Smart Home',
    price: '$799.900',
    image: 'https://exitocol.vtexassets.com/arquivos/ids/29566083/ZXPP9Zn.jpg?v=638955250473700000'
  },
  {
    id: 3,
    name: 'Lavadora Bespoke Carga Superior AI Wash 13Kg',
    category: 'Lavadora y Secdora',
    price: '$1.426.000',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/co/wa70f19e7cco/gallery/co-wa80f25-574307-wa70f19e7cco-550497553?$1164_776_PNG$',
    
  },
  {
    id: 4,
    name: 'Galaxy Tab S10 Lite',
    category: 'Tablet',
    price: '$1.349.910',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/co/sm-x400nzadcoo/gallery/co-galaxy-tab-s10-lite-sm-x406-sm-x400nzadcoo-548732252?$1164_776_PNG$'
  }
];

const Home = () => {
  const cartLinks: Record<number, string> = {
    1: 'https://www.samsung.com/co/smartphones/galaxy-a/galaxy-a07-light-violet-128gb-sm-a075mlvhltc/buy/',
    2: 'https://www.samsung.com/co/tvs/hd-tv/h5000-tv-hd-32-inch-un32h5000fkxzl/',
    3: 'https://www.samsung.com/co/washers-and-dryers/washing-machines/wa80f-24-top-load-washer-ai-wash-ecobubble-ai-energy-mode-13kg-black-wa80f13s5bco/?cid=co_pd_pmax_google_shoppingreal_performance-cross_ecommerce_22804954721_pla_182156941106_conversion&gad_source=1&gad_campaignid=22804954721&gbraid=0AAAAADQAeL5UBM9wHx0YZZDN5UewTIqUF&gclid=Cj0KCQjwlerQBhDMARIsAB16H-VCY6xZN8jdZjXkeaExzPtxeaZeuhRt-8poz3OlVjyMojuMyGiUTtwaAlftEALw_wcB',
    4: 'https://www.samsung.com/es/cart/buspeak-buds'
  };

  const handleCartClick = (id: number) => {
    if (id === 1) {
      const accepted = window.confirm('El producto está agotado');
      if (accepted) {
        window.location.href = 'https://www.samsung.com/co/smartphones/galaxy-a/galaxy-a07-light-violet-128gb-sm-a075mlvhltc/buy/';
      }
      return;
    }
    // Para los demás productos, ir a su link específico
    const link = cartLinks[id] || 'https://www.samsung.com';
    window.location.href = link;
  };
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="ai-badge">
              <span className="dot"></span>
              <span>Motor IA Activo</span>
            </div>
            <h2 className="hero-title">
              Optimización en Tiempo Real <br />
              <span className="highlight">impulsada por IA</span>
            </h2>
            <p className="hero-description">
              Anticipe las tendencias del mercado y gestione su inventario con precisión quirúrgica a través de nuestro comando central de comercio inteligente.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Comenzar Ahora</button>
              <button className="btn btn-secondary">Ver Demo Técnica</button>
            </div>
          </div>

          {/* AI Floating Insight */}
          <div className="ai-insight-floating">
            <div className="insight-card">
              <div className="insight-header">
                <span className="insight-title">Insight en Vivo</span>
                <span className="material-symbols-outlined insight-icon">trending_up</span>
              </div>
              <p className="insight-text">
                La demanda de la serie Galaxy Book Pro ha aumentado un 24% en las últimas 2 horas en la región metropolitana.
              </p>
              <div className="insight-progress">
                <div className="insight-progress-bar"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic FAB */}
        <div className="fab-container">
          <button className="fab">
            <span className="material-symbols-outlined fab-icon">psychology</span>
            <span className="fab-tooltip">Activar Modo Estrategia IA</span>
          </button>
        </div>

        {/* Products Section */}
        <section className="products-section">
          <div className="section-header">
            <div>
              <h3 className="section-title">Alta Demanda</h3>
              <p className="section-subtitle">Productos optimizados y ordenados por relevancia algorítmica.</p>
            </div>
            <div className="carousel-controls">
              <button className="carousel-btn">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="carousel-btn">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="products-grid">
            {productsData.map((product) => (
              <div className="product-card" key={product.id}>
                {product.badge && (
                  <span className={`product-badge ${product.badgeType === 'ai' ? 'ai-choice' : ''}`}>
                    {product.badge}
                  </span>
                )}
                <div className="product-image-container">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="product-info">
                  <p className="product-category">{product.category}</p>
                  <h4 className="product-name">{product.name}</h4>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <button className="product-add-btn" onClick={() => handleCartClick(product.id)}>
                      <span className="material-symbols-outlined">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Generated Banner */}
        <section className="ai-banner-section">
          <div className="ai-banner">
            <img
              className="ai-banner-image"
              src="https://lh3.googleusercontent.com/aida/ADBb0uhvM1fzBwcCOouxY1vVQ1agvHH30abf8raz16X6R6jY_9XwXn36g1khc7CDJgI3mSMWevW1ih7c-iSVd0ZTnsitR0zStrLaCCWXg2ovel4pxXzRbEnur-Uk9pAJUNw3A0CW-HKo2peRabR8g0GHxFxWBXWTMOEzGQSryV4IhWBX1W_rthmu4MkkXFqeOoqMGkpHpXjnwFv_UuXG8RufPdW8gQyr5s1cUubg0QcEOZi7tw0Q--L8s6gEaIo"
              alt="IA Smart Living Banner"
            />
            <div className="ai-banner-overlay">
              <h4 className="ai-banner-title">El Futuro es Hoy: Ecosistema Conectado</h4>
              <p className="ai-banner-description">
                Descubre cómo la IA de Samsung aprende de tus hábitos para crear un hogar que se anticipa a tus necesidades.
              </p>
              <button className="ai-banner-btn">Explorar Ecosistema</button>
            </div>
          </div>
        </section>

        {/* Smart Recommendations (Bento Grid) */}
        <section className="recommendations-section">
          <h3 className="recommendations-title">Recomendaciones Inteligentes</h3>
          <div className="bento-grid">
            {/* Bento Item 1 */}
            <div className="bento-item">
              <div>
                <div className="bento-icon">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <h4 className="bento-title">Análisis de Perfil IA</h4>
                <p className="bento-description">
                  Basado en tu historial, sugerimos el nuevo <strong>Galaxy Z Fold5</strong> para maximizar tu productividad móvil en un 40%.
                </p>
              </div>
              <div className="confidence-bg">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="confidence-label">Confianza de IA</span>
                  <span className="confidence-label">98%</span>
                </div>
                <div className="confidence-bar">
                  <div className="confidence-fill"></div>
                </div>
              </div>
            </div>

            {/* Bento Item 2 */}
            <div className="bento-item navy">
              <div>
                <h4 className="bento-title">Accesorios Sugeridos</h4>
                <p className="bento-description">Complementa tu experiencia con cargadores ultrarápidos.</p>
              </div>
              <span className="material-symbols-outlined icon-bg">cable</span>
            </div>

            {/* Bento Item 3 */}
            <div className="bento-item">
              <div className="bento-product">
                <div className="bento-product-image">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBrluBPsbPRaJAFcRIXZEtHelTUQZiHiPtBkDAi6Xp5GD9CQYBvkdlRmEvoY88KZAEQ4X5scrArynthj12ixknCCUh3LJP8PS57A1Vl6cTE9M6XdDHIdTIadvmwPPF-ER1U8WIl24CDNergI5TmhZBYT-JKYr3RjiEOebY2Ld8NiyF2-s9zdkOxiKdX1fbJh8dwxoEL31pECh0U5p2Wi7SQuxHEHVcH89L0gfkg30HWD-8dFs1v7lQyWrlf_SDUpMsiOx5ej-J-2o"
                    alt="Tab S9"
                  />
                </div>
                <div className="bento-product-info">
                  <h4>Galaxy Tab S9 FE</h4>
                  <p>Visto recientemente por otros expertos.</p>
                  <a href="#" className="bento-product-link">Ver Detalles →</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-brand-header">
                <span className="material-symbols-outlined footer-brand-icon">smart_toy</span>
                <h2 className="footer-brand-title">Samsung Smart Commerce AI</h2>
              </div>
              <p className="footer-brand-text">
                Liderando la vanguardia del comercio inteligente con soluciones de IA diseñadas para la próxima generación de retail digital.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link">
                  <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>public</span>
                </a>
                <a href="#" className="social-link">
                  <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>share</span>
                </a>
              </div>
            </div>

            <div className="footer-links-grid">
              <div className="footer-links-column">
                <h5 className="footer-links-title">Recursos</h5>
                <ul className="footer-links-list">
                  <li><a href="#">Privacidad</a></li>
                  <li><a href="#">Términos de IA</a></li>
                  <li><a href="#">Soporte Técnico</a></li>
                  <li><a href="#">Legal</a></li>
                </ul>
              </div>
              <div className="footer-links-column">
                <h5 className="footer-links-title">Empresa</h5>
                <ul className="footer-links-list">
                  <li><a href="#">Sobre Nosotros</a></li>
                  <li><a href="#">Carreras</a></li>
                  <li><a href="#">Blog IA</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">© 2024 Samsung Smart Commerce AI. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
