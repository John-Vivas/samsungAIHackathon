import { useMemo, useState } from 'react';
import './Panel.css';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

import resumenData from '../data/resumen_ejecutivo.json';
import clientesRiesgoData from '../data/clientes_en_riesgo.json';
import tiposProblemaData from '../data/tipos_de_problema.json';
import clientesRecuperablesData from '../data/clientes_recuperables.json';
import planAccionData from '../data/plan_de_accion.json';

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Tooltip, Legend, Title);

const inventoryData = [
  {
    id: 1,
    name: 'SM-A022M',
    category: 'MOBILE',
    stock: 1,
    prediction: 'Riesgo inminente (1.1 semanas)',
    fillWidth: '3%',
    status: 'CRÍTICO',
    statusClass: 'restock',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQYBpvuk-AFCIUQd8BMMN5m4aaPcyRKA4JF81EVFA8wy857q3QScEpRfe7_QOOc0CSAs32cGLRKBGSKiff-o5TPCudwCqZyvkatajK_JZ07d6-EmVB_a6zvezQ8Ub7BVMR54hPEuHLzEagKDcwiYP1iSy_oOrXDIM7Z53trsdMCp_GckcyZeUbWyOtp00b3qunk_niu0PNXpZK0ysr0PGRmecfwOJZ-k5AzJxRlxCePy-nLpGWuqA4b1ZCrZSSPaCVAbRNCNeM9bc'
  },
  {
    id: 2,
    name: 'SM-A366E/DS',
    category: 'MOBILE',
    stock: 153,
    prediction: 'Crecimiento +41.8%',
    fillWidth: '75%',
    status: 'CRECIMIENTO',
    statusClass: 'healthy',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQYBpvuk-AFCIUQd8BMMN5m4aaPcyRKA4JF81EVFA8wy857q3QScEpRfe7_QOOc0CSAs32cGLRKBGSKiff-o5TPCudwCqZyvkatajK_JZ07d6-EmVB_a6zvezQ8Ub7BVMR54hPEuHLzEagKDcwiYP1iSy_oOrXDIM7Z53trsdMCp_GckcyZeUbWyOtp00b3qunk_niu0PNXpZK0ysr0PGRmecfwOJZ-k5AzJxRlxCePy-nLpGWuqA4b1ZCrZSSPaCVAbRNCNeM9bc'
  },
  {
    id: 3,
    name: 'SM-A165M/DS',
    category: 'MOBILE',
    stock: 448,
    prediction: 'Declinación -60.8%',
    fillWidth: '20%',
    status: 'DECLIVE',
    statusClass: 'restock',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQYBpvuk-AFCIUQd8BMMN5m4aaPcyRKA4JF81EVFA8wy857q3QScEpRfe7_QOOc0CSAs32cGLRKBGSKiff-o5TPCudwCqZyvkatajK_JZ07d6-EmVB_a6zvezQ8Ub7BVMR54hPEuHLzEagKDcwiYP1iSy_oOrXDIM7Z53trsdMCp_GckcyZeUbWyOtp00b3qunk_niu0PNXpZK0ysr0PGRmecfwOJZ-k5AzJxRlxCePy-nLpGWuqA4b1ZCrZSSPaCVAbRNCNeM9bc'
  }
];

const rotationReport = {
  modelMetrics: {
    r2: 0.763,
    mae: 26.38,
    precision: 0.79,
    horizon: '30 días',
    summary:
      'Random Forest aplicado a rotación SKU identifica productos de alta prioridad de despacho y riesgos de stock crítico.'
  },
  topDispatch: [
    { rank: 1, modelo: 'Galaxy S24 Ultra', prioridad: 'Crítica', score: 98, demanda: 'Máxima' },
    { rank: 2, modelo: 'Neo QLED 8K', prioridad: 'Alta', score: 92, demanda: 'Muy alta' },
    { rank: 3, modelo: 'Bespoke Fridge', prioridad: 'Media', score: 79, demanda: 'Estable' },
    { rank: 4, modelo: 'Galaxy Watch6', prioridad: 'Media', score: 75, demanda: 'Creciente' },
    { rank: 5, modelo: 'Samsung Bespoke Oven', prioridad: 'Media', score: 71, demanda: 'Moderada' },
    { rank: 6, modelo: 'Galaxy Tab S9', prioridad: 'Media', score: 68, demanda: 'Fluctuante' },
    { rank: 7, modelo: 'SmartThings Hub', prioridad: 'Baja', score: 62, demanda: 'Estable' },
    { rank: 8, modelo: 'Galaxy Buds3', prioridad: 'Baja', score: 58, demanda: 'Baja' },
    { rank: 9, modelo: 'Family Hub', prioridad: 'Baja', score: 54, demanda: 'Lenta' },
    { rank: 10, modelo: 'Galaxy Book4', prioridad: 'Baja', score: 50, demanda: 'Reducida' },
    { rank: 11, modelo: 'Frame TV', prioridad: 'Baja', score: 47, demanda: 'Reducida' },
    { rank: 12, modelo: 'Bespoke AirDresser', prioridad: 'Baja', score: 43, demanda: 'Reducida' },
    { rank: 13, modelo: 'Samsung Oven Flex', prioridad: 'Baja', score: 40, demanda: 'Reducida' },
    { rank: 14, modelo: 'Samsung Soundbar', prioridad: 'Baja', score: 38, demanda: 'Reducida' },
    { rank: 15, modelo: 'Galaxy A55', prioridad: 'Baja', score: 35, demanda: 'Reducida' },
    { rank: 16, modelo: 'Samsung Monitor', prioridad: 'Baja', score: 32, demanda: 'Reducida' },
    { rank: 17, modelo: 'Wireless Charger', prioridad: 'Baja', score: 29, demanda: 'Reducida' },
    { rank: 18, modelo: 'Samsung Printer', prioridad: 'Baja', score: 26, demanda: 'Reducida' },
    { rank: 19, modelo: 'Smart LED Strip', prioridad: 'Baja', score: 23, demanda: 'Reducida' },
    { rank: 20, modelo: 'Galaxy Tab S9 FE', prioridad: 'Baja', score: 20, demanda: 'Reducida' }
  ],
  criticalAlert: {
    title: 'ALERTA CRÍTICA: QUIEBRE DE STOCK',
    detail:
      'Neo QLED 8K proyecta quiebre en 12 días con una rotación negativa esperada. Recomendado reabastecimiento inmediato y foco en despacho directo.',
    action: 'Alinear despacho urgente y activar rebajas selectivas para liberar espacio de inventario.'
  },
  growthOpportunities: [
    { producto: 'Galaxy S24 Ultra', potencial: '+18%', accion: 'Promoción premium bundle' },
    { producto: 'Galaxy Watch6', potencial: '+14%', accion: 'Campaña cross-sell wearable' },
    { producto: 'Galaxy Tab S9', potencial: '+12%', accion: 'Ofertas educativas' },
    { producto: 'Bespoke Fridge', potencial: '+10%', accion: 'Promoción de instalación incluida' },
    { producto: 'SmartThings Hub', potencial: '+8%', accion: 'Bundle hogar conectado' }
  ],
  declineProducts: [
    { producto: 'Galaxy Buds3', tendencia: '-12%', recomendacion: 'Reducir descuentos y ajustar stock en tiendas físicas' },
    { producto: 'Family Hub', tendencia: '-15%', recomendacion: 'Revisar precios y rotar en canales de e-commerce' },
    { producto: 'Galaxy Book4', tendencia: '-18%', recomendacion: 'Limitar reposición y aumentar promoción por valor' },
    { producto: 'Frame TV', tendencia: '-20%', recomendacion: 'Enfocar en clearance y ofertas de temporada' }
  ]
};

const Panel = () => {
  const [alertThreshold, setAlertThreshold] = useState<number>(60);
  const [viewMode, setViewMode] = useState<'dispatch' | 'growth' | 'decline'>('dispatch');

  const attentionLevel = alertThreshold >= 75 ? 'Alta' : alertThreshold >= 45 ? 'Media' : 'Moderada';

  const selectedReportItems = useMemo(() => {
    if (viewMode === 'growth') {
      return rotationReport.growthOpportunities;
    }
    if (viewMode === 'decline') {
      return rotationReport.declineProducts;
    }
    return rotationReport.topDispatch.slice(0, 5);
  }, [viewMode]);

  const dispatchChartData = useMemo(
    () => ({
      labels: rotationReport.topDispatch.slice(0, 5).map((item) => item.modelo),
      datasets: [
        {
          label: 'Prioridad de despacho',
          data: rotationReport.topDispatch.slice(0, 5).map((item) => item.score),
          backgroundColor: '#7c3aed',
          borderRadius: 10,
          barThickness: 16
        }
      ]
    }),
    []
  );

  const reportChartOptions = useMemo(
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
          beginAtZero: true,
          ticks: {
            color: '#c6c6c6',
            stepSize: 20
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
            label: (context: any) => `${context.parsed.y} pts`
          }
        }
      }
    }),
    []
  );

  const reliability = resumenData.confiabilidad_modelo;
  const riskCards = resumenData.resumen_clientes.tarjetas;
  const problemItems = tiposProblemaData.diagnosticos;
  const recoverySummary = clientesRecuperablesData.resumen;
  const topRiskClients = clientesRiesgoData.clientes.slice(0, 4);
  const planActions = planAccionData.acciones;

  const riskSummaryChartData = useMemo(
    () => ({
      labels: riskCards.map((card) => card.nivel),
      datasets: [
        {
          label: 'Clientes en riesgo',
          data: riskCards.map((card) => card.clientes),
          backgroundColor: riskCards.map((card) => card.color),
          borderRadius: 12,
          barThickness: 22
        }
      ]
    }),
    [riskCards]
  );

  const recoverySummaryChartData = useMemo(
    () => ({
      labels: ['Alta prioridad', 'Media prioridad', 'Baja prioridad'],
      datasets: [
        {
          label: 'Clientes recuperables',
          data: [
            recoverySummary.prioridad_alta,
            recoverySummary.prioridad_media,
            recoverySummary.prioridad_baja
          ],
          backgroundColor: ['#e74c3c', '#f39c12', '#2ecc71'],
          borderRadius: 12,
          barThickness: 22
        }
      ]
    }),
    [recoverySummary]
  );

  const summaryChartOptions = useMemo(
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
          beginAtZero: true,
          ticks: {
            color: '#c6c6c6'
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
            label: (context: any) => `${context.parsed.y} clientes`
          }
        }
      }
    }),
    []
  );

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
        <div className="glass-card roi-card p-6 rounded-3xl">
          <div className="roi-card-header">
            <span className="material-symbols-outlined roi-icon">shield_moon</span>
            <div className="roi-header-meta">
              <span className="card-badge">Riesgo IA</span>
              <span className="roi-growth">AUC {reliability.auc}</span>
            </div>
          </div>
          <div className="roi-card-body">
            <div>
              <p className="metric-label">Confianza del modelo de riesgo</p>
              <h3 className="metric-value">{reliability.valor}</h3>
            </div>
            <p className="metric-subtext-muted roi-card-detail">
              {reliability.detalle}
            </p>
          </div>
          <div className="roi-graph">
            <div className="roi-graph-bars">
              <div className="roi-graph-bar" style={{ height: '56%' }}></div>
              <div className="roi-graph-bar" style={{ height: '64%' }}></div>
              <div className="roi-graph-bar" style={{ height: '72%' }}></div>
              <div className="roi-graph-bar" style={{ height: '94%' }}></div>
              <div className="roi-graph-bar" style={{ height: '81%' }}></div>
            </div>
          </div>
          <div className="roi-card-footer">
            <span>Actualización: hace 3 horas</span>
            <span>Segmentación multicanal lista</span>
          </div>
        </div>

        <div className="glass-card p-6 rounded-3xl summary-chart-card">
          <div>
            <p className="metric-label">Clientes en riesgo</p>
            <h3 className="metric-value-medium">{resumenData.resumen_clientes.total_analizados}</h3>
          </div>
          <div className="summary-chart-wrapper">
            <Bar data={riskSummaryChartData} options={summaryChartOptions} />
          </div>
        </div>

        <div className="glass-card p-6 rounded-3xl summary-chart-card">
          <div>
            <p className="metric-label">Clientes recuperables</p>
            <h3 className="metric-value-medium">{recoverySummary.total_recuperables}</h3>
          </div>
          <div className="summary-chart-wrapper">
            <Bar data={recoverySummaryChartData} options={summaryChartOptions} />
          </div>
        </div>
{/* 
        <div className="glass-card p-6 rounded-3xl problem-card">
          <div className="roi-card-header">
            <span className="material-symbols-outlined roi-icon">insights</span>
            <span className="roi-growth">{alertItems.length} alertas críticas</span>
          </div>
          <div>
            <p className="metric-label">Tipos de problema detectados</p>
            <h2 className="metric-value">{problemItems.reduce((sum, item) => sum + item.clientes, 0)} clientes</h2>
          </div>
          <div className="problem-chart-preview">
            <Bar data={problemChartData} options={problemChartOptions} />
          </div>
        </div> */}
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
                <p>Proyección logística (IA Predictiva)</p>
              </div>
              {/* <div className="card-header-buttons">
                <button className="card-btn-outline">Exportar Datos</button>
                <button className="card-btn-active">Vista Trimestral</button>
              </div> */}
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
            <div className="simulator-report-header">
              <div>
                <h3 className="card-title-group mb-2 flex items-center gap-3" style={{ fontSize: '24px', fontWeight: 500 }}>
                  <span className="material-symbols-outlined simulator-header-icon">insights</span>
                  Reporte Ejecutivo IA
                </h3>
                <p className="simulator-subtitle">Rotación predictiva y prioridades de despacho basadas en el modelo Random Forest.</p>
              </div>
              <div className="simulator-metric-pill">
                <span>R²</span>
                <strong>{rotationReport.modelMetrics.r2}</strong>
              </div>
              <div className="simulator-metric-pill">
                <span>MAE</span>
                <strong>{rotationReport.modelMetrics.mae}</strong>
              </div>
            </div>

            <div className="simulator-content-grid">
              <div className="simulator-side-panel">
                <div className="simulator-alert-box">
                  <div className="simulator-alert-title">
                    <span className="material-symbols-outlined">warning_amber</span>
                    {rotationReport.criticalAlert.title}
                  </div>
                  <p>{rotationReport.criticalAlert.detail}</p>
                  <small>{rotationReport.criticalAlert.action}</small>
                </div>

                <div className="simulator-metric-pill" style={{ padding: '1.25rem' }}>
                  <span>Confianza del modelo</span>
                  <strong>{(rotationReport.modelMetrics.precision * 100).toFixed(0)}%</strong>
                  <small>{rotationReport.modelMetrics.horizon} de proyección</small>
                </div>

                <div>
                  <label className="simulator-label">Nivel de Atención IA</label>
                  <input
                    type="range"
                    className="simulator-slider"
                    min="10"
                    max="100"
                    value={alertThreshold}
                    onChange={(e) => setAlertThreshold(Number(e.target.value))}
                  />
                  <div className="slider-labels">
                    <span>Moderada</span>
                    <span>{attentionLevel}</span>
                    <span>Crítica</span>
                  </div>
                </div>
              </div>

              <div className="simulator-details-grid">
                <div className="simulator-list-card">
                  <div className="simulator-tabs">
                    <button
                      className={`simulator-tab ${viewMode === 'dispatch' ? 'active' : ''}`}
                      onClick={() => setViewMode('dispatch')}
                    >
                      Prioridad de despacho
                    </button>
                    <button
                      className={`simulator-tab ${viewMode === 'growth' ? 'active' : ''}`}
                      onClick={() => setViewMode('growth')}
                    >
                      Oportunidades
                    </button>
                    <button
                      className={`simulator-tab ${viewMode === 'decline' ? 'active' : ''}`}
                      onClick={() => setViewMode('decline')}
                    >
                      Productos en declive
                    </button>
                  </div>

                  {viewMode === 'dispatch' ? (
                    <div className="summary-chart-wrapper" style={{ height: '240px' }}>
                      <Bar data={dispatchChartData} options={reportChartOptions} />
                    </div>
                  ) : (
                    <div className="simulator-list-grid">
                      {selectedReportItems.map((item, index) => {
                        if (viewMode === 'growth') {
                          const growthItem = item as (typeof rotationReport.growthOpportunities)[number];
                          return (
                            <div key={`${growthItem.producto}-${index}`} className="simulator-list-item">
                              <span className="simulator-list-item-title">{growthItem.producto}</span>
                              <span className="simulator-list-item-meta">{growthItem.potencial}</span>
                            </div>
                          );
                        }

                        const declineItem = item as (typeof rotationReport.declineProducts)[number];
                        return (
                          <div key={`${declineItem.producto}-${index}`} className="simulator-list-item">
                            <span className="simulator-list-item-title">{declineItem.producto}</span>
                            <span className="simulator-list-item-meta">{declineItem.tendencia}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="simulator-list-card">
                  <h4 className="simulator-data-title">Resumen rápido</h4>
                  <div className="simulator-list-grid">
                    <div className="simulator-list-item">
                      <span className="simulator-list-item-title">Modelos en top dispatch</span>
                      <span className="simulator-list-item-meta">{rotationReport.topDispatch.length}</span>
                    </div>
                    <div className="simulator-list-item">
                      <span className="simulator-list-item-title">Oportunidades clave</span>
                      <span className="simulator-list-item-meta">{rotationReport.growthOpportunities.length}</span>
                    </div>
                    <div className="simulator-list-item">
                      <span className="simulator-list-item-title">Productos en declive</span>
                      <span className="simulator-list-item-meta">{rotationReport.declineProducts.length}</span>
                    </div>
                    <div className="simulator-list-item">
                      <span className="simulator-list-item-title">Prioridad IA</span>
                      <span className="simulator-list-item-meta">{attentionLevel}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tipos de problema detectados Card */}
          <div className="glass-card p-6 rounded-3xl problem-summary-card">
            <div className="card-header-actions">
              <div className="card-title-group">
                <h3>Tipos de problema detectados</h3>
                <p>Distribución de casos por diagnóstico de canal.</p>
              </div>
            </div>
            <div className="problem-summary-list">
              {problemItems.map((item) => (
                <div key={item.tipo} className="problem-summary-item">
                  <div className="problem-summary-meta">
                    <span className="problem-dot" style={{ backgroundColor: item.color }}></span>
                    <div>
                      <p className="problem-summary-label">{item.etiqueta}</p>
                      <p className="problem-summary-desc">{item.que_significa}</p>
                    </div>
                  </div>
                  <div className="problem-summary-stats">
                    <strong>{item.clientes}</strong>
                    <span>{item.porcentaje}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="problem-summary-callout">
              <span className="material-symbols-outlined">warning</span>
              <p>Prioriza primero los problemas con alerta y mayor impacto en el canal.</p>
            </div>
          </div>
        </div>

        {/* Right side column */}
        <div className="dashboard-side-col">
          {/* Top Clientes en Riesgo Card */}
          <div className="glass-card p-6 rounded-3xl risk-card">
            <div className="card-header-actions">
              <div className="card-title-group">
                <h3>Top Clientes en Riesgo</h3>
                <p>Selección prioritaria según probabilidad y diagnóstico.</p>
              </div>
            </div>
            <div className="risk-table">
              {topRiskClients.map((client) => (
                <div className="risk-row" key={client.cliente}>
                  <div>
                    <p className="risk-client">{client.cliente}</p>
                    <p className="risk-detail">{client.nivel}</p>
                  </div>
                  <div className="risk-chip" style={{ borderColor: client.diagnostico_color, color: client.diagnostico_color }}>
                    {client.diagnostico}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Plan Card */}
          <div className="glass-card p-6 rounded-3xl plan-card">
            <div className="card-header-actions">
              <div className="card-title-group">
                <h3>{planAccionData.titulo}</h3>
                <p>{planAccionData.subtitulo}</p>
              </div>
            </div>
            <div className="plan-step-list">
              {planActions.map((action) => (
                <div className="plan-step-item" key={action.plazo}>
                  <div className="plan-step-badge" style={{ backgroundColor: action.color }}>
                    {action.icono}
                  </div>
                  <div>
                    <p className="plan-step-title">{action.plazo}</p>
                    <ul>
                      {action.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
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
