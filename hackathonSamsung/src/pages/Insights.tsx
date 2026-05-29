import { useState } from 'react';
import './Insights.css';

const Insights = () => {
  const [implemented, setImplemented] = useState<boolean>(false);
  const [activeSentimentBar, setActiveSentimentBar] = useState<number>(3); // index of active bar (Lunes to Domingo)

  const sentimentBars = [
    { day: 'Lun', height: '40%' },
    { day: 'Mar', height: '60%' },
    { day: 'Mié', height: '85%' },
    { day: 'Jue', height: '100%' }, // active bar by default
    { day: 'Vie', height: '75%' },
    { day: 'Sáb', height: '55%' },
    { day: 'Dom', height: '90%' }
  ];

  return (
    <main className="insights-main">
      <div className="insights-content-container">
        {/* Hero AI Command Center Section */}
        <section className="insights-hero-card glass-panel">
          <div className="scan-line opacity-20"></div>
          <div className="insights-hero-flex">
            <div className="insights-hero-info">
              <div className="insights-hero-status">
                <span className="insights-hero-status-dot"></span>
                <span className="insights-hero-status-text">SISTEMA OPERATIVO ACTIVO</span>
              </div>
              <h2 className="insights-hero-title pulse-slow">
                Estrategia Comercial para el Q4 Generada
              </h2>
              <p className="insights-hero-description">
                Nuestra IA ha procesado 4.2TB de datos transaccionales y de mercado para definir el roadmap táctico de este trimestre. Las oportunidades detectadas sugieren una optimización del presupuesto hacia Bogotá y categorías de alto rendimiento.
              </p>
              <div className="insights-hero-buttons">
                <button
                  className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-bold text-label-bold flex items-center gap-2 hover:scale-105 transition-transform"
                  onClick={() => setImplemented(true)}
                  style={{ border: 'none', cursor: 'pointer' }}
                >
                  <span className="material-symbols-outlined">bolt</span>
                  {implemented ? 'Estrategia Implementada' : 'Implementar Automáticamente'}
                </button>
                <button className="border border-glass-stroke text-on-surface px-8 py-4 rounded-xl font-label-bold text-label-bold hover:bg-white/5 transition-colors" style={{ background: 'transparent', cursor: 'pointer' }}>
                  Exportar Reporte Full
                </button>
              </div>

              {implemented && (
                <div className="implementation-success-overlay">
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>Estrategia de pauta Q4 implementada automáticamente en todos los hubs comerciales.</span>
                </div>
              )}
            </div>

            {/* AI Decorative Visual */}
            <div className="ai-visual-container">
              <div className="ai-visual-bg-glow"></div>
              <div className="ai-visual-spin-outer rotate-spin">
                <div className="ai-visual-dashed-circle">
                  <div className="ai-visual-solid-circle">
                    <span className="material-symbols-outlined ai-visual-icon">neurology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Insights */}
        <section className="insights-grid">
          {/* Monitor Insights Card */}
          <div className="bento-card glass-panel card-monitor">
            <div className="card-monitor-header">
              <div className="card-monitor-icon-bg">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <span className="card-monitor-growth">+25%</span>
            </div>
            <div>
              <h3 className="card-monitor-title">Categoría Monitores</h3>
              <p className="card-monitor-desc">
                Crecimiento proyectado impulsado por lanzamientos de alta frecuencia.
              </p>
            </div>
            <div className="card-monitor-image-container">
              <img
                className="card-monitor-image"
                src="https://lh3.googleusercontent.com/aida/ADBb0ugaRRugYqnUmL4VoU-rL58vbxBXev5sNejm4rjesWLireYGP85dFveH9A_aRvzk2TFC1hUYvWg3r_sP5VK3AVYgMBFybdg---z3a1txPPA_loqyqDpnHSiFTgv4kZ1dXv6aIlB8AqNAVMZ2VqnJCZxirqwggn-6XD6sZjNoVWR6FqWpY1Us9DYCtjIZuet3y0Kt8CxuLAU-7gaWnFj_F7XrDhbEBDUwP-s4-N-qQbITdK7BbQVZx1REBw"
                alt="Samsung Monitor de alta gama"
              />
            </div>
          </div>

          {/* Actionable Insight Card */}
          <div className="bento-card glass-panel card-actionable">
            <span className="material-symbols-outlined card-actionable-bg-icon">location_on</span>
            <div className="card-actionable-badge">
              <span className="material-symbols-outlined">campaign</span>
            </div>
            <div>
              <h3 className="card-monitor-title" style={{ marginBottom: '1rem' }}>Acción Recomendada</h3>
              <div className="card-actionable-list">
                <div className="card-actionable-item">
                  <img
                    className="card-actionable-item-image"
                    src="https://lh3.googleusercontent.com/aida/ADBb0ujG8rLsgUMcTiHV_31MODr-yghZWDPxvKZ0T-Qxf_iUi2LFQvR4WON0w4TtMragsuizFjmLdBGksao_TkxKJjHxnmwSdT3ps3UVrSf6pZwQAWbsKR6jCRCXubIEvir0Yw_H5yWlT_AT8tiOfGOG5Ggup4B7bYzqlhaNWYICjo7GOfRilWIm1j1vOJUENm9NC6ZJC9cjcBHI1hKu4b-wrWyN-DRpDbtKeGvKuMjqaKta5shH0nfFlrRRDg"
                    alt="Samsung Galaxy Buds"
                  />
                  <div className="card-actionable-item-details">
                    <p className="title">Aumentar pauta en Bogotá</p>
                    <p className="subtitle">Target: Galaxy Buds</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actionable-progress-container">
              <div className="card-actionable-progress-bar">
                <div className="card-actionable-progress-fill"></div>
              </div>
              <p className="card-actionable-progress-label">Confianza de IA: 92%</p>
            </div>
          </div>

          {/* Audience ID Card */}
          <div className="bento-card glass-panel card-audience" style={{ backgroundColor: 'rgba(59, 144, 255, 0.05)' }}>
            <div className="card-audience-header">
              <span className="material-symbols-outlined">group</span>
              <h4>AUDIENCIA OBJETIVO</h4>
            </div>
            <div className="card-audience-list">
              <div className="card-audience-item">
                <span className="title">Gamers Elite</span>
                <span className="desc">Interés en latencia cero</span>
              </div>
              <div className="card-audience-item">
                <span className="title">Hogar Inteligente</span>
                <span className="desc">Ecosistema SmartThings</span>
              </div>
            </div>
          </div>

          {/* Sentiment Analysis Card */}
          <div className="bento-card glass-panel card-sentiment">
            <div className="card-sentiment-header">
              <h3>Sentiment Analysis</h3>
              <span className="card-sentiment-badge">Positivo</span>
            </div>
            <div className="card-sentiment-chart">
              {sentimentBars.map((bar, index) => (
                <div
                  key={bar.day}
                  className={`card-sentiment-bar ${activeSentimentBar === index ? 'active' : ''}`}
                  style={{ height: bar.height }}
                  onClick={() => setActiveSentimentBar(index)}
                  title={`${bar.day}: ${bar.height}`}
                ></div>
              ))}
            </div>
            <div className="card-sentiment-labels">
              <span>Lunes</span>
              <span>Domingo</span>
            </div>
          </div>

          {/* Regional Trends Map Card */}
          <div className="bento-card glass-panel card-regional">
            <h3 className="card-regional-title">Regional Trends</h3>
            <div className="card-regional-map-container">
              <div className="card-regional-map-wrapper">
                <img
                  className="card-regional-map"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOZZH35pjofiTLl-3lmZOtoKu4nmzUQzk1vN-PVV90kf_8QQSbJybI2e4QYLVMEQS-8r6cpLJEVLQkWIwfu0-hBeuQIsqUQCc_n7Lasii0llMtO93QEPv-HD9-cHctyWQF3Nusqo3-y1uln-GOL6sIfYZZGibE7sm1PAdlickYV2DmfNQ3bAnxMR0Gl6ieTno2ijdrlQThsbC9ezXZQW4c8bUb0CAk9yOUCe9EwZOkJnZsXWKJF2AaHm8K917HLq4y3tKt-zj9k-A"
                  alt="Mapa topográfico de Colombia con puntos de calor de datos"
                />
              </div>
              <div className="card-regional-hotspot-active pulse-slow"></div>
              <div className="card-regional-hotspot-secondary-1"></div>
              <div className="card-regional-hotspot-secondary-2"></div>
              <div className="card-regional-info-overlay">
                <p className="title">Punto Crítico: Bogotá</p>
                <p className="desc">+42% actividad vs Octubre</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="insights-footer">
        <div className="insights-footer-container">
          <div className="insights-footer-brand">
            <span className="insights-footer-title">Samsung AI</span>
            <p className="insights-footer-text">
              © 2024 Samsung Smart Commerce AI. Todos los derechos reservados.
            </p>
          </div>
          <div className="insights-footer-links">
            <a className="insights-footer-link" href="#">Privacidad</a>
            <a className="insights-footer-link" href="#">Términos de IA</a>
            <a className="insights-footer-link" href="#">Soporte Técnico</a>
            <a className="insights-footer-link" href="#">Legal</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Insights;
