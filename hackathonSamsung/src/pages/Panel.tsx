import { useState } from 'react';
import './Panel.css';

const inventoryData = [
  {
    id: 1,
    name: 'Galaxy S24 Ultra',
    category: 'Electrónica',
    stock: 1240,
    prediction: '+15%',
    fillWidth: '82%',
    status: 'SALUDABLE',
    statusClass: 'healthy',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQYBpvuk-AFCIUQd8BMMN5m4aaPcyRKA4JF81EVFA8wy857q3QScEpRfe7_QOOc0CSAs32cGLRKBGSKiff-o5TPCudwCqZyvkatajK_JZ07d6-EmVB_a6zvezQ8Ub7BVMR54hPEuHLzEagKDcwiYP1iSy_oOrXDIM7Z53trsdMCp_GckcyZeUbWyOtp00b3qunk_niu0PNXpZK0ysr0PGRmecfwOJZ-k5AzJxRlxCePy-nLpGWuqA4b1ZCrZSSPaCVAbRNCNeM9bc'
  },
  {
    id: 2,
    name: 'Neo QLED 8K',
    category: 'Hogar Inteligente',
    stock: 42,
    prediction: 'Riesgo de Quiebre (12 días)',
    fillWidth: '12%',
    status: 'REESTOCK URGENTE',
    statusClass: 'restock',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHU2YaOK0-c0QbOthwlTUX2DqeAOqssliTgoNvySxuEEVGC497oOkaw7c3wsa4v7UOKWH8V2jH3Zy0A57Jd5haKck9rVs4fzYjQVSB8zb5jDd3TkCa_HrOALhXF6caTMiN-1KsqwQBPzp5EuEj5p8bIh_Z1nQldnr4TF4iRnEhwIHE3zfsyouKsecnQR9hsHOSK-oqFzMLgqNvNXmJYJXZ0y8dAU3p1w7t349sgQYCHP6CDBcH7ZrClgkHofs6lWTNKJ2pjLD_aNU'
  },
  {
    id: 3,
    name: 'Bespoke Fridge',
    category: 'Línea Blanca',
    stock: 210,
    prediction: 'Demanda Estable',
    fillWidth: '45%',
    status: 'ESTABLE',
    statusClass: 'stable',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNYc1VsksLjA6-2GBzncd2ryueQhyz4Wyhf4NVYBMUv21BV6sbqAGFoFrbX4jKnyzpmQjVsnE1f4iLFhS6WtgeBCPy9fh-r-4-pkfcxMrgzeTFthxdhPyXbbXWOnfqPHNgaL3lTwPb-Kl_LL04JIDCZMWzQ7Ao-TVLpq0Ch8kUi7gsClYDbdyCTEVTd2CHfZ5ndZFZ57XrOoJxsRS9qQ9h7x0Ftyelf5bfoTaclhFWi3mBht5xGKXqAh07zh1DtMad7c2L3sJ-Rhg'
  }
];

const Panel = () => {
  // Simulator range value state
  const [adSpend, setAdSpend] = useState<number>(50);

  // Automation switch states
  const [pricingActive, setPricingActive] = useState<boolean>(true);
  const [restockActive, setRestockActive] = useState<boolean>(false);

  // Dynamic calculations based on slider
  const projectedSales = (12.0 + adSpend / 10).toFixed(1);
  const projectedMargin = (-1.0 - adSpend / 45).toFixed(1);

  return (
    <main className="panel-main">
      {/* Executive Hero Header */}
      <section className="panel-header-section">
        <div className="panel-header-container">
          <div>
            <p className="panel-subtitle">Comando Central</p>
            <h2 className="panel-title">Panel Ejecutivo de Operaciones</h2>
          </div>
          <div className="panel-status-sync">
            <span className="material-symbols-outlined">cloud_done</span>
            <span className="status-text">Sincronización IA Tiempo Real: Activa</span>
          </div>
        </div>
      </section>

      {/* Top Level Metrics (Bento Style) */}
      <section className="metrics-grid">
        {/* ROI Campaign Card */}
        <div className="glass-card roi-card p-6 rounded-3xl">
          <div className="roi-card-header">
            <span className="material-symbols-outlined roi-icon">rocket_launch</span>
            <span className="roi-growth">+24.8% vs mes ant.</span>
          </div>
          <div>
            <p className="metric-label">ROI Campañas IA Generativas</p>
            <h3 className="metric-value">12.4x</h3>
          </div>
          <div className="roi-graph">
            <div className="roi-graph-bars">
              <div className="roi-graph-bar" style={{ height: '20%' }}></div>
              <div className="roi-graph-bar" style={{ height: '35%' }}></div>
              <div className="roi-graph-bar" style={{ height: '30%' }}></div>
              <div className="roi-graph-bar" style={{ height: '55%' }}></div>
              <div className="roi-graph-bar" style={{ height: '45%' }}></div>
              <div className="roi-graph-bar" style={{ height: '70%' }}></div>
              <div className="roi-graph-bar" style={{ height: '85%' }}></div>
            </div>
          </div>
        </div>

        {/* CLV Metric Card */}
        <div className="glass-card p-6 rounded-3xl flex flex-col justify-between">
          <div>
            <p className="metric-label">Customer Lifetime Value (CLV)</p>
            <h3 className="metric-value-medium">$2,840</h3>
          </div>
          <div className="metric-subtext-container">
            <span className="material-symbols-outlined metric-subtext-icon-up">trending_up</span>
            <span className="metric-subtext-primary">Predicción optimizada por IA</span>
          </div>
        </div>

        {/* CAC Metric Card */}
        <div className="glass-card p-6 rounded-3xl flex flex-col justify-between" style={{ borderLeft: '4px solid var(--primary)' }}>
          <div>
            <p className="metric-label">Costo Adquisición (CAC)</p>
            <h3 className="metric-value-medium">$142.50</h3>
          </div>
          <div className="metric-subtext-container">
            <span className="material-symbols-outlined metric-subtext-icon-down">arrow_downward</span>
            <span className="metric-subtext-muted">Reducción del 12% este Q</span>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="dashboard-grid">
        {/* Left main column */}
        <div className="dashboard-main-col">
          {/* Inventory Forecast Card */}
          <div className="glass-card p-8 rounded-3xl">
            <div className="card-header-actions">
              <div className="card-title-group">
                <h3>Predicción de Inventario</h3>
                <p>Proyección logística a 3 meses (IA Predictiva)</p>
              </div>
              <div className="card-header-buttons">
                <button className="card-btn-outline">Exportar Datos</button>
                <button className="card-btn-active">Vista Trimestral</button>
              </div>
            </div>

            <div className="inventory-list">
              {inventoryData.map((item) => (
                <div className="inventory-row" key={item.id}>
                  <div className="inventory-product-info">
                    <img className="inventory-product-image" src={item.image} alt={item.name} />
                    <div className="inventory-product-names">
                      <p className="name">{item.name}</p>
                      <p className="category">{item.category}</p>
                    </div>
                  </div>
                  <div className="inventory-stock-tracking">
                    <div className="stock-bar-container">
                      <div
                        className={item.statusClass === 'restock' ? 'stock-bar-fill-danger' : 'stock-bar-fill-healthy'}
                        style={{ width: item.fillWidth }}
                      ></div>
                    </div>
                    <div className="inventory-stock-stats">
                      <span className="stock-count">Stock Actual: {item.stock}</span>
                      <span className={`stock-prediction ${item.statusClass === 'restock' ? 'danger' : ''}`}>
                        {item.prediction}
                      </span>
                    </div>
                  </div>
                  <div className="inventory-status-pill-container">
                    <span className={`status-pill ${item.statusClass}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scenario Simulator Card */}
          <div className="glass-card simulator-card p-8 rounded-3xl">
            <h3 className="card-title-group mb-6 flex items-center gap-3" style={{ fontSize: '24px', fontWeight: 500 }}>
              <span className="material-symbols-outlined simulator-header-icon">experiment</span>
              Simulador de Escenarios IA
            </h3>
            <div className="simulator-content-grid">
              <div className="simulator-form-group">
                <div>
                  <label className="simulator-label">Estrategia de Promoción</label>
                  <select className="simulator-select">
                    <option>Promo X: Cyber Week (+15% Descuento)</option>
                    <option>Promo Y: Lanzamiento Premium</option>
                    <option>Promo Z: Liquidación de Temporada</option>
                  </select>
                </div>
                <div>
                  <label className="simulator-label">Inversión en Ad-Spend (IA)</label>
                  <input
                    type="range"
                    className="simulator-slider"
                    min="10"
                    max="100"
                    value={adSpend}
                    onChange={(e) => setAdSpend(Number(e.target.value))}
                  />
                  <div className="slider-labels">
                    <span>$10k</span>
                    <span>$50k (Recomendado)</span>
                    <span>$100k</span>
                  </div>
                </div>
              </div>

              <div className="simulator-results-box">
                <p className="simulator-results-title">Impacto Proyectado</p>
                <div className="simulator-metrics-list">
                  <div className="simulator-metric-row">
                    <span className="label">Ventas Estimadas</span>
                    <span className="value-positive">+{projectedSales}%</span>
                  </div>
                  <div className="simulator-metric-row">
                    <span className="label">Margen Bruto</span>
                    <span className="value-neutral">{projectedMargin}%</span>
                  </div>
                </div>
                <button className="simulator-action-btn">
                  Ejecutar Simulación Avanzada
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right side column */}
        <div className="dashboard-side-col">
          {/* Automation controls */}
          <div className="glass-card p-6 rounded-3xl">
            <div className="automation-header">
              <h4 className="automation-title">Automatización</h4>
              <div className="pulse-container">
                <span className="pulse-ring"></span>
                <span className="pulse-dot"></span>
              </div>
            </div>
            <div className="automation-toggles">
              <div className="toggle-switch-container">
                <div className="toggle-switch-info">
                  <p className="title">Precios Algorítmicos</p>
                  <p className="desc">Optimización dinámica 24/7</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={pricingActive}
                    onChange={(e) => setPricingActive(e.target.checked)}
                  />
                  <span className="slider-round"></span>
                </label>
              </div>

              <div className="toggle-switch-container">
                <div className="toggle-switch-info">
                  <p className="title">Re-stock Automático</p>
                  <p className="desc">Solo para categorías A/B</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={restockActive}
                    onChange={(e) => setRestockActive(e.target.checked)}
                  />
                  <span className="slider-round"></span>
                </label>
              </div>
            </div>
          </div>

          {/* Actionable Insights Card */}
          <div className="glass-card p-6 rounded-3xl">
            <h4 className="automation-title mb-6">Próximos Pasos (IA Insights)</h4>
            <div className="insights-list">
              <div className="insight-action-item">
                <div className="insight-action-header">
                  <span className="material-symbols-outlined insight-action-icon">lightbulb</span>
                  <p className="insight-action-title">Optimizar Envío en CDMX</p>
                </div>
                <p className="insight-action-desc">
                  Detectamos retrasos de 4h en última milla. Recomendamos activar Hub secundario.
                </p>
              </div>
              <div className="insight-action-item">
                <div className="insight-action-header">
                  <span className="material-symbols-outlined insight-action-icon">warning</span>
                  <p className="insight-action-title">Anomalía de Precio</p>
                </div>
                <p className="insight-action-desc">
                  Competencia bajó 12% en pantallas QLED. ¿Deseas igualar margen?
                </p>
              </div>
            </div>
            <button className="insights-view-all-btn">
              Ver todos los insights (12)
            </button>
          </div>

          {/* Strategic Summary Image Card */}
          <div className="strategic-summary-card">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2w-E3Ee3Enn0hGjHgHWRqiUK0HXbG20Rif0BeXzgtzlRK9aeDobbHtCnFItM1kSiYu7dW1Fn1Glya2kb4zbR2vRhBOl4_ZNf5_EklMKLjCzkvNr1VriC7Gca-hMWUVSbd6vS0l1Vosrc9paEq35_IG9PmJedUlxeOmbbsMQZRd3WWO8pzwaF8fZ6pT6JMxvd4ImudAmHKCplLX88nd7HkmeCs0_gXmA95VKq4Jpxusg9WuwiYtUpbVAgndatSJPMpvUogfxZrQ8E"
              alt="Data visualization report background"
            />
            <div className="strategic-summary-overlay"></div>
            <div className="strategic-summary-content">
              <p className="summary-tag">REPORTE Q4</p>
              <h4 className="summary-title">Crecimiento Proyectado del 32% Anual</h4>
              <button className="summary-action-btn">
                Leer Resumen Ejecutivo
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="panel-footer">
        <div className="panel-footer-container">
          <div>
            <h2 style={{ fontSize: '24px', color: 'var(--primary)', margin: '0 0 16px 0' }}>Samsung AI</h2>
            <p style={{ fontSize: '14px', color: 'var(--secondary)', margin: 0 }}>
              © 2024 Samsung Smart Commerce AI. Todos los derechos reservados.
            </p>
          </div>
          <div className="panel-footer-links">
            <a href="#">Privacidad</a>
            <a href="#">Términos de IA</a>
            <a href="#">Soporte Técnico</a>
            <a href="#">Legal</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Panel;
