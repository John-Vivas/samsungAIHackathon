import './Home.css';

const productsData = [
  {
    id: 1,
    name: 'Galaxy S24 Ultra',
    category: 'Premium Mobile',
    price: '$5.499.900',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6CDPtR2uEPeoB54efKAHyhgp_qVnhIBJH8QFUEn33NVEXuzdPv3NlGbNm1-wqXK6fkNXvPdo6K5x909bGJ5siXcfZsdvLNn55qPViANIWNQxe5VuG5wCh_mIexPgrXS0yhUmToyI3VOuT1bR5uhplqlWS9VMnjPWMiEc239wjHOP5SGsTjrACF_A64bD86_-r43TDjcyQiPKZRXZL0R2K83nzT9zEfSu_ntqVMCjO5qnpW5EG_qYSqvdTnP4VYhonr8_UX3RkMtI',
    badge: 'IA Predicción: Agotándose pronto',
    badgeType: 'danger'
  },
  {
    id: 2,
    name: 'Samsung OLED S90C',
    category: 'Smart Home',
    price: '$8.199.900',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxejtFbzFtFOkCRKBEySSl1FPl9-dHn8Rq8mb0JhM-Ui1GWhHlt4hUXdMj-tbcvyzSzqFdZFtmMewrBuYxWmL_Bkwb4zF56gmbTqyk1fDOOvSu8LsU5CeP3hyP2_GeSdvA3QHoZdSQMbfpUBYVNUGRvAp5TQWBBCX83mIDoHO_0bexHbvSYse3m1p47mX0KPokIRbI66PO2fjdcaX78mpS3PtnraPlAzuE2zCpKrqu-g31S6GrMeeTaYQVDY4cKulJFBiYfRA1R50'
  },
  {
    id: 3,
    name: 'Galaxy Watch6 Classic',
    category: 'Wearables',
    price: '$1.249.900',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDC6EDNpt_SRX1LDk9ugeLfQL-kMP3C1Yvxlw3gKfYRIVloP6TE_WWF0MYdRbx2HuU6bblHZBurlPPNlNinC_iJFWbJx3xrTB7rMyWERf4TFeNrTm4vHvGEDB8-lQTLUaAs_z_V7QOO3T9Guy1jgssd6v9ujgOaBwmu3-iqtw91_S0Y2vtsFXedeeulGwZwNtjTzMURN0xPiPGn09tozBtfWkat_I3HaUwljIeDSXEHPOROZe9CwLSCJHkEomE7eZq8yM8VXcYUS8',
    badge: 'Elección de la IA',
    badgeType: 'ai'
  },
  {
    id: 4,
    name: 'Galaxy Buds2 Pro',
    category: 'Audio',
    price: '$899.900',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwNM-RwXONG2weAa-kSa5basKM2qCHA526Nv1DRE2Ed5CAKP2bRVgH0XKF6sMiYuET1UVYpk9Ei6qVn3lFKK1rF0lO2RB9DH2RzHU05a1X18LhCbgAL_GMCNH4L1rzf8M2eku7F9AiiDrIUiCo2O7_xeA7zHmDQ7VlqvjrZuWdAgJgIqf6RH5wdNYpjQ23RpkYUgJ7p6nki-tFVp9fU3dIKs-q2nGxjUx7fIBtZ_oImTCqjvZb7x1I6yl6k_-OjxMJxrzB_z97VTk'
  }
];

const Home = () => {
  const cartLinks: Record<number, string> = {
    1: 'https://www.samsung.com/co/smartphones/galaxy-a/galaxy-a07-light-violet-128gb-sm-a075mlvhltc/buy/',
    2: 'https://www.samsung.com/co/tvs/hd-tv/h5000-tv-hd-32-inch-un32h5000fkxzl/',
    3: 'https://www.samsung.com/es/cart/odyssey-g9',
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
