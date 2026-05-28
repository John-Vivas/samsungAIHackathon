import { Bar, Line, Doughnut, Map } from './charts/Charts.tsx';

const Dashboard = () => {
  // Datos falsos para las gráficas y KPIs
  const kpis = [
    { label: 'Tasa de Conversión', value: '3.85%', change: '+2.4% vs mes anterior', color: '#4ea8ff' },
    { label: 'Valor Carrito Promedio', value: '$842.000', change: '+12% optimizado', color: '#4ea8ff' },
    { label: 'Tasa de Abandono', value: '42.3%', change: '-5.1% reducción IA', color: '#ff4e4e' },
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: 1400, margin: '0 auto' }}>
      <h2 style={{ color: '#fff', fontWeight: 700, fontSize: 24 }}>Dashboard Analítico</h2>
      <p style={{ color: '#b0b8c1', marginBottom: 32 }}>
        Visualización en tiempo real del ecosistema comercial optimizado por IA.
      </p>
      <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
        {kpis.map(kpi => (
          <div key={kpi.label} style={{ background: '#181c23', borderRadius: 12, padding: 24, flex: 1, minWidth: 220 }}>
            <div style={{ color: kpi.color, fontWeight: 600, fontSize: 14 }}>{kpi.change}</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: '#fff', margin: '12px 0 4px' }}>{kpi.value}</div>
            <div style={{ color: '#b0b8c1', fontSize: 15 }}>{kpi.label}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
        <div style={{ flex: 2, background: '#181c23', borderRadius: 12, padding: 24, minHeight: 320 }}>
          <h3 style={{ color: '#fff', fontSize: 18, marginBottom: 16 }}>Tendencias de Venta Semanal</h3>
          <Line />
        </div>
        <div style={{ flex: 1, background: '#181c23', borderRadius: 12, padding: 24, minHeight: 320 }}>
          <h3 style={{ color: '#fff', fontSize: 18, marginBottom: 16 }}>Embudo IA</h3>
          <Doughnut />
        </div>
      </div>
      <div style={{ display: 'flex', gap: 24 }}>
        <div style={{ flex: 1, background: '#181c23', borderRadius: 12, padding: 24, minHeight: 320 }}>
          <h3 style={{ color: '#fff', fontSize: 18, marginBottom: 16 }}>Mapa de Calor: Colombia</h3>
          <Map />
        </div>
        <div style={{ flex: 1, background: '#181c23', borderRadius: 12, padding: 24, minHeight: 320 }}>
          <h3 style={{ color: '#fff', fontSize: 18, marginBottom: 16 }}>Productos Top vs Bottom</h3>
          <Bar />
        </div>
      </div>
      <div style={{ marginTop: 40, color: '#b0b8c1', fontSize: 16 }}>
        <h3 style={{ color: '#fff', fontSize: 18, marginBottom: 12 }}>Preguntas IA Respondidas</h3>
        <ul style={{ lineHeight: 1.7 }}>
          <li>¿Qué producto tendrá mayor rotación los próximos meses?</li>
          <li>¿Cuáles clientes tienen tendencia a desaparecer?</li>
          <li>¿Qué producto incrementará sus ventas?</li>
          <li>¿Qué cliente reducirá sus ventas?</li>
          <li>¿A qué cliente le debería despachar más producto y qué producto?</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
