import { bloomberg } from './theme';

export const chartConfig = {
  tooltip: {
    contentStyle: {
      backgroundColor: bloomberg.background.secondary,
      border: `1px solid ${bloomberg.border.light}`,
      borderRadius: '4px',
      padding: '8px 12px',
      color: bloomberg.text.primary,
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    },
  },
  grid: {
    strokeDasharray: '3 3',
    stroke: bloomberg.chart.grid,
  },
  axis: {
    tick: {
      fill: bloomberg.text.secondary,
      fontSize: 12,
    },
    line: {
      stroke: bloomberg.border.light,
    },
  },
  colors: {
    blue: bloomberg.accent.blue,
    green: bloomberg.accent.green,
    red: bloomberg.accent.red,
    yellow: bloomberg.accent.yellow,
  },
};

export function formatChartValue(value: number, type: 'currency' | 'percentage' | 'number' = 'number') {
  const formatters = {
    currency: (val: number) => `$${formatCompactNumber(val)}`,
    percentage: (val: number) => `${val}%`,
    number: formatCompactNumber,
  };

  return formatters[type](value);
}

export function formatCompactNumber(value: number) {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });
  return formatter.format(value);
}

export function getGradient(color: string, opacity = 0.3) {
  return [
    { offset: '5%', color, opacity: 0.1 },
    { offset: '95%', color, opacity },
  ];
}

export function calculatePercentageChange(current: number, previous: number) {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
}

export function generateTimeSeriesData(days = 30) {
  const data = [];
  const now = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    data.push({
      date: date.toISOString().split('T')[0],
      value: Math.floor(Math.random() * 1000),
    });
  }
  
  return data;
}
