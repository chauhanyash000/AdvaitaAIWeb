import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Scatter, ScatterChart, BarChart, Bar,
  PieChart, Pie, AreaChart, Area, Cell
} from 'recharts';

const MacBookFrame = ({ children }) => (
  <div className="relative max-w-4xl mx-auto my-8 px-4">
    <div className="relative pt-[40px] pb-[30px] bg-neutral-300 rounded-[20px] shadow-xl">
      <div className="absolute top-0 left-0 right-0 h-[20px] bg-neutral-300 rounded-t-[20px] flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
      </div>
      <div className="mx-6 bg-white rounded-lg shadow-inner">
        <div className="overflow-auto" style={{ maxHeight: '65vh' }}>
          {children}
        </div>
      </div>
      <div className="absolute bottom-0 left-[10%] right-[10%] h-[30px] bg-neutral-300 rounded-b-xl">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-[4px] bg-neutral-400 rounded-t-lg" />
      </div>
    </div>
  </div>
);

const CustomCard = ({ title, children, className = "" }) => (
  <div className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm ${className}`}>
    <div className="p-3 border-b border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <div className="p-3">
      {children}
    </div>
  </div>
);

// Advanced data generators remain the same
const generateTimeSeriesData = () => ({
  heatmap: Array.from({ length: 24 }, (_, hour) => ({
    hour,
    engagement: Math.random() * 100,
    conversion: Math.random() * 100,
    retention: Math.random() * 100
  })),
  correlation: Array.from({ length: 100 }, (_, i) => ({
    time: i,
    var1: Math.sin(i / 10) * 50 + 50 + Math.random() * 10,
    var2: Math.cos(i / 10) * 50 + 50 + Math.random() * 10,
    var3: Math.random() * 100
  }))
});

const generateClusterData = () => ({
  tsne: Array.from({ length: 200 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    cluster: Math.floor(Math.random() * 4),
    confidence: Math.random()
  }))
});

const DashboardSection = () => {
  const [activeTab, setActiveTab] = useState('time-series');
  const timeSeriesData = generateTimeSeriesData();
  const clusterData = generateClusterData();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'time-series':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Dynamic Time-Series Analysis */}
            <CustomCard title="Time Series Analysis" className="col-span-2">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={timeSeriesData.correlation}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="user activity" stroke="#1d4ed8" />
                    <Line type="monotone" dataKey="Average Revenue" stroke="#047857" />
                    <Line type="monotone" dataKey="Campaign Spend" stroke="#b45309" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CustomCard>

            {/* Anomaly Detection */}
            <CustomCard title="Anomaly Pattern">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={timeSeriesData.correlation}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="high risk cohort" stroke="#1d4ed8" fill="#1d4ed8" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CustomCard>

            {/* Data Distribution */}
            <CustomCard title="Data Distribution LTV - Engagement">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" dataKey="x" />
                    <YAxis type="number" dataKey="y" />
                    <Tooltip />
                    <Scatter data={clusterData.tsne} fill="#1d4ed8" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </CustomCard>
          </div>
        );

      case 'insights':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Feature Impact */}
            <CustomCard title="Feature Impact" className="col-span-2">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Feature A Usage', value: 40  },
                        { name: 'Feature B Usage', value: 24 },
                        { name: 'Feature C Usage', value: 22 },
                        { name: 'Feature D Usage', value: 14 }
                      ]}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={120}
                      label
                    >
                      {
                        [0, 1, 2, 3].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={['#1d4ed8', '#047857', '#b45309', '#7c3aed'][index % 4]} />
                        ))
                      }
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CustomCard>

            {/* Metrics Overview */}
            <CustomCard title="Key Metrics">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={timeSeriesData.heatmap.slice(0, 5)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="engagement" fill="#1d4ed8" />
                    <Bar dataKey="conversion" fill="#047857" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CustomCard>

            {/* Trend Analysis */}
            <CustomCard title="Trend Analysis">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={timeSeriesData.correlation.slice(-20)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="User Engagment After 7 Days" stroke="#1d4ed8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CustomCard>
          </div>
        );

      case 'behavior':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* User Journey */}
            <CustomCard title="User Journey Funnel" className="col-span-2">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={[
                      { stage: 'Awareness', value: 100 },
                      { stage: 'Interest', value: 80 },
                      { stage: 'Consideration', value: 60 },
                      { stage: 'Intent', value: 40 },
                      { stage: 'Purchase', value: 20 }
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="stage" type="category" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#1d4ed8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CustomCard>

            {/* Engagement Metrics */}
            <CustomCard title="Engagement Patterns">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={timeSeriesData.heatmap}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="engagement" stroke="#1d4ed8" fill="#1d4ed8" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CustomCard>

            {/* User Segments */}
            <CustomCard title="User Segments">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'New Users', value: 40 },
                        { name: 'Regular', value: 30 },
                        { name: 'Power Users', value: 30 }
                      ]}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {
                        [0, 1, 2].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={['#1d4ed8', '#047857', '#b45309'][index % 3]} />
                        ))
                      }
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CustomCard>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <MacBookFrame>
      <div className="bg-white p-3">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Interactive Analytics Dashboard
        </h2>
        
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('time-series')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'time-series' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
          >
            Time Series & Patterns
          </button>
          <button
            onClick={() => setActiveTab('insights')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'insights' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
          >
            ML & Model Insights
          </button>
          <button
            onClick={() => setActiveTab('behavior')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'behavior' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
          >
            User Behavior & Journey
          </button>
        </div>

        {renderTabContent()}
      </div>
    </MacBookFrame>
  );
};

export default DashboardSection;
