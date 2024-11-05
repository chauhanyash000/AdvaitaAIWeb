// components/ui/charts/index.js
import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  AreaChart as RechartsAreaChart,
  Area
} from 'recharts';

const defaultColors = {
  primary: '#8884d8',
  secondary: '#82ca9d',
  tertiary: '#ffc658'
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 shadow-sm rounded-lg">
        <p className="text-sm font-medium">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const BarChart = ({ 
  data, 
  dataKey, 
  nameKey = 'name',
  color = defaultColors.primary,
  height = 300,
  layout = 'vertical',
  className = ''
}) => (
  <ResponsiveContainer width="100%" height={height} className={className}>
    <RechartsBarChart data={data} layout={layout}>
      {layout === 'vertical' ? (
        <>
          <XAxis type="number" />
          <YAxis dataKey={nameKey} type="category" />
        </>
      ) : (
        <>
          <XAxis dataKey={nameKey} />
          <YAxis />
        </>
      )}
      <Tooltip content={<CustomTooltip />} />
      <Bar dataKey={dataKey} fill={color} />
    </RechartsBarChart>
  </ResponsiveContainer>
);

export const PieChart = ({ 
  data, 
  dataKey, 
  nameKey = 'name',
  color = defaultColors.secondary,
  height = 300,
  className = ''
}) => (
  <ResponsiveContainer width="100%" height={height} className={className}>
    <RechartsPieChart>
      <Pie
        data={data}
        dataKey={dataKey}
        nameKey={nameKey}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill={color}
        label
      />
      <Tooltip content={<CustomTooltip />} />
    </RechartsPieChart>
  </ResponsiveContainer>
);

export const AreaChart = ({ 
  data, 
  dataKey, 
  nameKey = 'name',
  color = defaultColors.primary,
  height = 300,
  className = ''
}) => (
  <ResponsiveContainer width="100%" height={height} className={className}>
    <RechartsAreaChart data={data}>
      <XAxis dataKey={nameKey} />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Area
        type="monotone"
        dataKey={dataKey}
        stroke={color}
        fill={color}
        fillOpacity={0.6}
      />
    </RechartsAreaChart>
  </ResponsiveContainer>
);

export const StackedBarChart = ({
  data,
  bars,
  nameKey = 'name',
  height = 300,
  className = ''
}) => (
  <ResponsiveContainer width="100%" height={height} className={className}>
    <RechartsBarChart data={data}>
      <XAxis dataKey={nameKey} />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      {bars.map(({ dataKey, color, stackId = 'a' }, index) => (
        <Bar
          key={index}
          dataKey={dataKey}
          stackId={stackId}
          fill={color || defaultColors[Object.keys(defaultColors)[index % 3]]}
        />
      ))}
    </RechartsBarChart>
  </ResponsiveContainer>
);
