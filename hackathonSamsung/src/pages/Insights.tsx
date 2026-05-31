import { useMemo, useState } from 'react';
import './Insights.css';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  Title,
  Filler
} from 'chart.js';
import ventasData from '../data/top_ventas_por_cliente.json';
import productosData from '../data/top_ventas_por_producto.json';
import tendenciaData from '../data/tendencia_temporal.json';
import ventasAnoData from '../data/ventas_por_ano.json';
import sobrestockData from '../data/sobrestock_menor_rotacion.json';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend, Title, Filler);

interface ClienteVentas {
  Channel: string;
  Ventas_Total: number;
}

interface ProductoVentas {
  Producto: string;
  Ventas_Total: number;
}

interface TrendPeriod {
  Periodo: string;
  Año: string;
  Semana: string;
  Sell_In: number;
  Cust_Sales: number;
  Channel_Inv: number;
}

interface YearSales {
  Año: string;
  Ventas_Total: number;
  Promedio_Semanal: number;
  Registros: number;
}

interface LowRotationItem {
  Producto: string;
  Ventas_Total: number;
  Inventario_Promedio: number;
  Rotacion: number;
}

const Insights = () => {
  const [implemented, setImplemented] = useState<boolean>(false);
  const [activeClienteIndex, setActiveClienteIndex] = useState<number>(0);
  const [activeProductoIndex, setActiveProductoIndex] = useState<number>(0);
  const [selectedRotationIndex, setSelectedRotationIndex] = useState<number>(0);
  const years = Array.from(new Set(tendenciaData.data.map((item: TrendPeriod) => item.Año))).sort();
  const [selectedYear, setSelectedYear] = useState<string>(years[0] ?? '2023');
  const [selectedMetric, setSelectedMetric] = useState<'Sell_In' | 'Cust_Sales' | 'Channel_Inv'>('Cust_Sales');

  const topClientes: ClienteVentas[] = ventasData.top_clientes.slice(0, 10);
  const maxVentas = Math.max(...topClientes.map((cliente) => cliente.Ventas_Total));
  const customerSalesBars = topClientes.map((cliente) => ({
    ...cliente,
    height: `${Math.round((cliente.Ventas_Total / maxVentas) * 100)}%`
  }));

  const topProductos: ProductoVentas[] = productosData.data.slice(0, 10);
  const maxProductoVentas = Math.max(...topProductos.map((producto) => producto.Ventas_Total));
  const productSalesBars = topProductos.map((producto) => ({
    ...producto,
    height: `${Math.round((producto.Ventas_Total / maxProductoVentas) * 100)}%`
  }));

  const yearSales: YearSales[] = ventasAnoData.data;
  const yearLabels = yearSales.map((item) => item.Año);
  const yearValues = yearSales.map((item) => item.Ventas_Total);
  const bestYear = yearSales.reduce((best, item) => (item.Ventas_Total > best.Ventas_Total ? item : best), yearSales[0]);

  const rotationItems: LowRotationItem[] = sobrestockData.data;
  const selectedRotation = rotationItems[selectedRotationIndex] ?? rotationItems[0];

  const filteredTrend: TrendPeriod[] = tendenciaData.data.filter((item: TrendPeriod) => item.Año === selectedYear);
  const trendTotal = filteredTrend.reduce((sum, item) => sum + item[selectedMetric], 0);
  const trendAverage = filteredTrend.length ? trendTotal / filteredTrend.length : 0;

  const trendLabels = useMemo(() => filteredTrend.map((item) => item.Periodo), [filteredTrend]);
  const trendValues = useMemo(() => filteredTrend.map((item) => item[selectedMetric]), [filteredTrend, selectedMetric]);

  const lineData = useMemo(
    () => ({
      labels: trendLabels,
      datasets: [
        {
          label: selectedMetric,
          data: trendValues,
          fill: true,
          backgroundColor: 'rgba(169, 199, 255, 0.16)',
          borderColor: '#a9c7ff',
          pointBackgroundColor: '#a9c7ff',
          pointBorderColor: '#fff',
          pointRadius: 3,
          pointHoverRadius: 6,
          tension: 0.35,
          borderWidth: 2
        }
      ]
    }),
    [trendLabels, trendValues, selectedMetric]
  );

  const lineOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            maxRotation: 45,
            minRotation: 45,
            autoSkip: true,
            maxTicksLimit: 12,
            color: '#c6c6c6'
          },
          grid: {
            display: false
          }
        },
        y: {
          ticks: {
            color: '#c6c6c6',
            callback: (value: number | string) => `$${Number(value).toLocaleString('es-CO')}`
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.08)'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: (context: any) => `${context.dataset.label}: ${context.parsed.y.toLocaleString('es-CO')}`
          }
        },
        title: {
          display: false
        }
      }
    }),
    [selectedMetric]
  );

  const annualData = useMemo(
    () => ({
      labels: yearLabels,
      datasets: [
        {
          label: 'Ventas Totales',
          data: yearValues,
          backgroundColor: 'rgba(74, 222, 128, 0.35)',
          borderColor: '#4ade80',
          borderWidth: 2,
          borderRadius: 18,
          maxBarThickness: 48
        }
      ]
    }),
    [yearLabels, yearValues]
  );

  const annualOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            color: '#c6c6c6'
          },
          grid: {
            display: false
          }
        },
        y: {
          ticks: {
            color: '#c6c6c6',
            callback: (value: number | string) => `${Number(value).toLocaleString('es-CO')}`
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.08)'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: (context: any) => `${context.dataset.label}: $${context.parsed.y.toLocaleString('es-CO')}`
          }
        }
      }
    }),
    []
  );

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
                Analisis comercial con Graficas Exclusivas para Samsung
              </h2>
              <p className="insights-hero-description">
                En este apartado  encontrara las graficas exclusivas de las ventas top y su mejores aticulos, ademas observar año por año las ventas.
              </p>

              {/*botones que no usamos */}
             {/*<div className="insights-hero-buttons">
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
              </div> */} 

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

          {/* Top 10 Clientes por Ventas */}
          <div className="bento-card glass-panel card-sentiment">
            <div className="card-sentiment-header">
              <h3>Top 10 Clientes por Ventas</h3>
              <span className="card-sentiment-badge">Cust_Sales</span>
            </div>
            <div className="card-sales-chart">
              {customerSalesBars.map((cliente, index) => (
                <div
                  key={cliente.Channel}
                  className={`card-sales-bar ${activeClienteIndex === index ? 'active' : ''}`}
                  style={{ height: cliente.height }}
                  onClick={() => setActiveClienteIndex(index)}
                  title={`${cliente.Channel}: ${cliente.Ventas_Total.toLocaleString('es-CO')}`}
                ></div>
              ))}
            </div>
            <div className="card-sales-info">
              <div>
                <span className="title">Cliente Principal</span>
                <span className="value">{topClientes[activeClienteIndex].Channel}</span>
              </div>
              <div>
                <span className="title">Ventas Totales</span>
                <span className="value">{topClientes[activeClienteIndex].Ventas_Total.toLocaleString('es-CO')}</span>
              </div>
            </div>
            <p className="card-sales-desc">Seleccione una barra para ver el cliente con mayor venta en este top 10.</p>
          </div>

          {/* Top 10 Productos por Ventas */}
          <div className="bento-card glass-panel card-sentiment">
            <div className="card-sentiment-header">
              <h3>Top 10 Productos por Ventas</h3>
              <span className="card-sentiment-badge">Prod_Sales</span>
            </div>
            <div className="card-sales-chart">
              {productSalesBars.map((producto, index) => (
                <div
                  key={producto.Producto}
                  className={`card-sales-bar ${activeProductoIndex === index ? 'active' : ''}`}
                  style={{ height: producto.height }}
                  onClick={() => setActiveProductoIndex(index)}
                  title={`${producto.Producto}: $${producto.Ventas_Total.toLocaleString('es-CO')}`}
                ></div>
              ))}
            </div>
            <div className="card-sales-info">
              <div>
                <span className="title">Producto Principal</span>
                <span className="value">{topProductos[activeProductoIndex].Producto}</span>
              </div>
              <div>
                <span className="title">Ventas Totales</span>
                <span className="value">{topProductos[activeProductoIndex].Ventas_Total.toLocaleString('es-CO')}</span>
              </div>
            </div>
            <p className="card-sales-desc">Seleccione una barra para ver el producto con mayor venta en este top 10.</p>
          </div>

          {/* Annual Sales Pulse */}
          <div className="bento-card glass-panel card-annual">
            <div className="card-sentiment-header">
              <h3>Ventas por Año</h3>
              <span className="card-sentiment-badge">Anual</span>
            </div>
            <div className="card-annual-chart">
              <Bar data={annualData} options={annualOptions} />
            </div>
            <div className="card-sales-info">
              <div>
                <span className="title">Mejor Año</span>
                <span className="value">{bestYear.Año}</span>
              </div>
              <div>
                <span className="title">Ventas Totales</span>
                <span className="value">{bestYear.Ventas_Total.toLocaleString('es-CO')}</span>
              </div>
              <div>
                <span className="title">Promedio Semanal</span>
                <span className="value">{bestYear.Promedio_Semanal.toFixed(2)}</span>
              </div>
            </div>
            <p className="card-sales-desc">Una vista rápida del pulso anual y los años con mayor dinamismo comercial.</p>
          </div>

          {/* Rotación de Inventario Crítica */}
          <div className="bento-card glass-panel card-rotation">
            <div className="card-sentiment-header">
              <h3>Inventario Dormido</h3>
              <span className="card-sentiment-badge">Rotación 0</span>
            </div>
            <div className="rotation-list">
              {rotationItems.map((item, index) => (
                <button
                  key={item.Producto}
                  className={`rotation-pill ${selectedRotationIndex === index ? 'active' : ''}`}
                  onClick={() => setSelectedRotationIndex(index)}
                >
                  <span>{item.Producto}</span>
                  <span>{item.Inventario_Promedio.toFixed(2)}</span>
                </button>
              ))}
            </div>
            <div className="card-sales-info">
              <div>
                <span className="title">Producto</span>
                <span className="value">{selectedRotation.Producto}</span>
              </div>
              <div>
                <span className="title">Inventario Promedio</span>
                <span className="value">{selectedRotation.Inventario_Promedio.toFixed(3)}</span>
              </div>
              <div>
                <span className="title">Rotación</span>
                <span className="value">{selectedRotation.Rotacion.toFixed(1)}</span>
              </div>
            </div>
            <p className="card-sales-desc">Selecciona un producto para ver qué está acumulando inventario sin rotar.</p>
          </div>

          {/* Tendencia Temporal */}
          <div className="bento-card glass-panel card-trend">
            <div className="card-sentiment-header">
              <h3>Tendencia Temporal</h3>
              <span className="card-sentiment-badge">{selectedMetric}</span>
            </div>
            <div className="trend-filter-controls">
              <div className="trend-year-buttons">
                {years.map((year) => (
                  <button
                    key={year}
                    className={`trend-pill ${selectedYear === year ? 'active' : ''}`}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
              <div className="trend-metric-select">
                <label htmlFor="metric-select">Métrica:</label>
                <select
                  id="metric-select"
                  value={selectedMetric}
                  onChange={(event) => setSelectedMetric(event.target.value as 'Sell_In' | 'Cust_Sales' | 'Channel_Inv')}
                >
                  <option value="Cust_Sales">Cust_Sales</option>
                  <option value="Sell_In">Sell_In</option>
                  <option value="Channel_Inv">Channel_Inv</option>
                </select>
              </div>
            </div>
            <div className="card-trend-chart">
              <Line data={lineData} options={lineOptions} />
            </div>
            <div className="card-sales-info">
              <div>
                <span className="title">Periodo</span>
                <span className="value">{selectedYear}</span>
              </div>
              <div>
                <span className="title">Total</span>
                <span className="value">{trendTotal.toLocaleString('es-CO')}</span>
              </div>
              <div>
                <span className="title">Promedio</span>
                <span className="value">{Math.round(trendAverage).toLocaleString('es-CO')}%</span>
              </div>
            </div>
            <p className="card-sales-desc">Filtra por año para ver la evolución semanal de la métrica seleccionada.</p>
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
