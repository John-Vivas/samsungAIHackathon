import { Bar as BarChart, Line as LineChart, Doughnut as DoughnutChart } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend, Filler } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend, Filler);

// Datos falsos para las gráficas
export const Line = () => {
  const data = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Ventas Reales',
        data: [120, 150, 170, 140, 200, 180, 220],
        borderColor: '#4ea8ff',
        backgroundColor: 'rgba(78,168,255,0.2)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Proyección IA',
        data: [130, 160, 180, 150, 210, 190, 230],
        borderColor: '#b0b8c1',
        backgroundColor: 'rgba(176,184,193,0.1)',
        borderDash: [5, 5],
        tension: 0.4,
        fill: false,
      },
    ],
  };
  const options = {
    plugins: { legend: { labels: { color: '#fff' } } },
    scales: {
      x: { ticks: { color: '#b0b8c1' }, grid: { color: '#23272f' } },
      y: { ticks: { color: '#b0b8c1' }, grid: { color: '#23272f' } },
    },
  };
  return <LineChart data={data} options={options} />;
};

export const Doughnut = () => {
  const data = {
    labels: ['Sesiones', 'Vista Producto', 'Carrito', 'Checkout'],
    datasets: [
      {
        data: [124000, 82000, 18000, 4800],
        backgroundColor: ['#4ea8ff', '#b0b8c1', '#23272f', '#ff4e4e'],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    plugins: { legend: { labels: { color: '#fff' } } },
  };
  return <DoughnutChart data={data} options={options} />;
};

export const Bar = () => {
  const data = {
    labels: ['Galaxy S24 Ultra', 'Neo QLED 8K', 'Bespoke Refrigerator', 'Galaxy Book4 Pro'],
    datasets: [
      {
        label: 'Clicks',
        data: [24500, 18200, 12800, 9400],
        backgroundColor: ['#4ea8ff', '#b0b8c1', '#23272f', '#ff4e4e'],
      },
    ],
  };
  const options = {
    plugins: { legend: { labels: { color: '#fff' } } },
    indexAxis: 'y' as const,
    scales: {
      x: { ticks: { color: '#b0b8c1' }, grid: { color: '#23272f' } },
      y: { ticks: { color: '#b0b8c1' }, grid: { color: '#23272f' } },
    },
  };
  return <BarChart data={data} options={options} />;
};

// Mapa de calor simulado (puedes reemplazarlo por un mapa real en el futuro)
export const Map = () => (
  <div style={{ width: '100%', height: 220, background: '#23272f', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4ea8ff', fontWeight: 600, fontSize: 18 }}>
    [Mapa de calor de Colombia aquí]
  </div>
);
