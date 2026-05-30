import './Products.css';
import { useEffect } from 'react';

const Productos = () => {
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
  }, []);

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
            <select className="filter-select">
              <option>Rendimiento en Ventas</option>
              <option>Predicción de Stock</option>
              <option>Margen de Beneficio IA</option>
            </select>
          </div>
          <div className="chips">
            <span className="chip">Móviles</span>
            <span className="chip">Monitores</span>
            <span className="chip">Hogar</span>
          </div>
        </div>

        <div className="products-grid">
          {/* Card 1 */}
          <div className="group product-card large">
            <div className="card-badges">
              <span className="pill primary">Puntaje IA: 98%</span>
              <span className="pill muted">Tendencia en tu Región</span>
            </div>
            <div className="media">
              <img
                src="https://lh3.googleusercontent.com/aida/ADBb0uiceiBLn6I9VY9W8LLwiDIqM9Bt_3kpq9En2jAdg2x2znzPX3XToz2s-snPUEOaR0U2RA9NzlXAgUlWS_-ZwZW_0PvFQMz6qzOxpm3KmxgHiepXn01uIWZ7tpBdAb9a2AfSIOjYc1BDPNlbQCdrtiaYryC-b3GjwES1Drzz3d6Dtv8QVdV2HgjG5q3nmOc-CPgdhmhN6nfJKsxKjsbPA7mhCQnqZX-JVHlL0ASWQxx1Q7vM6GUPdMhZHrw"
                alt="Galaxy S24 Ultra"
              />
            </div>
            <div className="card-body">
              <div className="card-head">
                <div>
                  <p className="category">Gama Alta</p>
                  <h3 className="product-name">Galaxy S24 Ultra</h3>
                </div>
                <div className="price-area">
                  <p className="price-old">$1.499.000</p>
                  <p className="price">$1.349.000</p>
                </div>
              </div>
              <div className="card-actions">
                <button className="btn-primary">Ver Detalles</button>
                <button className="btn-icon">
                  <span className="material-symbols-outlined">shopping_cart</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group product-card">
            <div className="tag-right">Bundle Recomendado</div>
            <div className="media small">
              <img
                src="https://lh3.googleusercontent.com/aida/ADBb0ujG8rLsgUMcTiHV_31MODr-yghZWDPxvKZ0T-Qxf_iUi2LFQvR4WON0w4TtMragsuizFjmLdBGksao_TkxKJjHxnmwSdT3ps3UVrSf6pZwQAWbsKR6jCRCXubIEvir0Yw_H5yWlT_AT8tiOfGOG5Ggup4B7bYzqlhaNWYICjo7GOfRilWIm1j1vOJUENm9NC6ZJC9cjcBHI1hKu4b-wrWyN-DRpDbtKeGvKuMjqaKta5shH0nfFlrRRDg"
                alt="Galaxy Buds3 Pro"
              />
            </div>
            <div className="card-body">
              <h3 className="product-name">Galaxy Buds3 Pro</h3>
              <div className="card-footer">
                <span className="price">$199.000</span>
                <div className="muted small">Stock: 42 uds.</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group product-card">
            <div className="tag-right danger">Precio Optimizado por IA</div>
            <div className="media small">
              <img
                src="https://lh3.googleusercontent.com/aida/ADBb0ugaRRugYqnUmL4VoU-rL58vbxBXev5sNejm4rjesWLireYGP85dFveH9A_aRvzk2TFC1hUYvWg3r_sP5VK3AVYgMBFybdg---z3a1txPPA_loqyqDpnHSiFTgv4kZ1dXv6aIlB8AqNAVMZ2VqnJCZxirqwggn-6XD6sZjNoVWR6FqWpY1Us9DYCtjIZuet3y0Kt8CxuLAU-7gaWnFj_F7XrDhbEBDUwP-s4-N-qQbITdK7BbQVZx1REBw"
                alt="Odyssey OLED G9"
              />
            </div>
            <div className="card-body">
              <h3 className="product-name">Odyssey OLED G9</h3>
              <div className="card-footer">
                <span className="price">$1.799.000</span>
                <div className="muted small">Sugerido IA</div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group product-card">
            <div className="media small">
              <img
                src="https://lh3.googleusercontent.com/aida/ADBb0uhr_kxtXs4UIoU3zpKlCYWOKMaRMDKlyAseXUePI7eT-9DO93axHfjS5twNlbv1mxMhlGa5Evtl0kEzfgPbxOxznVwpo1YQQFcJKOnzg8yLfKeV2_7AdVrhSwRb99kKN7MD0BrtP19VkIsFkq-HBcQthY_02JIBE6wR0Yi-Hi4ANULsYmtaaUODtyBfch1yOBLC3NUCFZabYHKZ5XlckB8qGSJQnN_mz9LlP29zHk-p0g2BY1tVLi48oec"
                alt="Bespoke 4-Door Flex"
              />
            </div>
            <div className="card-body">
              <h3 className="product-name">Bespoke 4-Door Flex</h3>
              <div className="card-footer">
                <span className="price">$3.299.000</span>
                <div className="muted small">Bajo Stock</div>
              </div>
            </div>
          </div>

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
