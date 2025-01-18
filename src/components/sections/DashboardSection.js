import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Scatter, ScatterChart, BarChart, Bar,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  TreeMap, Sankey, Rectangle, Area, AreaChart
} from 'recharts';

// Advanced data generators
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
  })),
  domains: Array.from({ length: 100 }, () => ({
    sourceX: Math.random() * 100,
    sourceY: Math.random() * 100,
    targetX: Math.random() * 100 + 20,
    targetY: Math.random() * 100 + 20
  }))
});

const generateNetworkData = () => ({
  nodes: Array.from({ length: 20 }, (_, i) => ({
    id: i,
    value: Math.random() * 100
  })),
  links: Array.from({ length: 30 }, () => ({
    source: Math.floor(Math.random() * 20),
    target: Math.floor(Math.random() * 20),
    value: Math.random() * 100
  }))
});

const DashboardSection = () => {
  const [timeRange, setTimeRange] = useState([0, 100]);
  const [activeNode, setActiveNode] = useState(null);
  
  const timeSeriesData = generateTimeSeriesData();
  const clusterData = generateClusterData();
  const networkData = generateNetworkData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Interactive Analytics Dashboard
      </h2>
      
      <Tabs defaultValue="time-series" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="time-series">Time Series & Patterns</TabsTrigger>
          <TabsTrigger value="ml-insights">ML & Model Insights</TabsTrigger>
          <TabsTrigger value="user-behavior">User Behavior & Journey</TabsTrigger>
        </TabsList>

        <TabsContent value="time-series">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Dynamic Time-Series Heatmap */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Dynamic Time-Series Heatmap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={timeSeriesData.correlation}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="var1" stroke="#f97316" />
                      <Line type="monotone" dataKey="var2" stroke="#82ca9d" />
                      <Line type="monotone" dataKey="var3" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <Slider
                  value={timeRange}
                  onValueChange={setTimeRange}
                  className="mt-4"
                  min={0}
                  max={100}
                />
              </CardContent>
            </Card>

            {/* Anomaly Detection */}
            <Card>
              <CardHeader>
                <CardTitle>Anomaly Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={timeSeriesData.correlation}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="var1" stroke="#f97316" fill="#f97316" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Trajectory Predictions */}
            <Card>
              <CardHeader>
                <CardTitle>Trajectory Predictions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" dataKey="x" />
                      <YAxis type="number" dataKey="y" />
                      <Tooltip />
                      <Scatter data={clusterData.tsne} fill="#f97316">
                        {clusterData.tsne.map((entry, index) => (
                          <Rectangle
                            key={index}
                            x={entry.x}
                            y={entry.y}
                            width={4}
                            height={4}
                            fill={`hsl(${entry.cluster * 90}, 70%, 50%)`}
                          />
                        ))}
                      </Scatter>
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ml-insights">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Neural Network Map */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Interactive Neural Network Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <Sankey
                      data={networkData}
                      node={{ fill: '#f97316' }}
                      link={{ stroke: '#d1d5db' }}
                      nodePadding={50}
                    />
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Feature Importance Tree */}
            <Card>
              <CardHeader>
                <CardTitle>Feature Importance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={timeSeriesData.heatmap}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="hour" />
                      <PolarRadiusAxis />
                      <Radar dataKey="engagement" fill="#f97316" fillOpacity={0.6} />
                      <Radar dataKey="conversion" fill="#82ca9d" fillOpacity={0.6} />
                      <Radar dataKey="retention" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Domain Alignment */}
            <Card>
              <CardHeader>
                <CardTitle>Domain Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" dataKey="sourceX" />
                      <YAxis type="number" dataKey="sourceY" />
                      <Tooltip />
                      <Scatter data={clusterData.domains} fill="#f97316" />
                      <Scatter data={clusterData.domains.map(d => ({
                        x: d.targetX,
                        y: d.targetY
                      }))} fill="#82ca9d" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="user-behavior">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Journey Funnel */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>User Journey Funnel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      layout="vertical"
                      data={[
                        { stage: 'Awareness', value: 100 },
                        { stage: 'Interest', value: 80 },
                        { stage: 'Consideration', value: 60 },
                        { stage: 'Intent', value: 40 },
                        { stage: 'Evaluation', value: 30 },
                        { stage: 'Purchase', value: 20 }
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="stage" type="category" />
                      <Tooltip />
                      <Bar dataKey="value" fill="#f97316" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Engagement Heatmap */}
            <Card>
              <CardHeader>
                <CardTitle>Engagement Intensity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <TreeMap
                      data={[
                        { name: 'Motivation', size: 800, color: '#f97316' },
                        { name: 'Satisfaction', size: 600, color: '#82ca9d' },
                        { name: 'Stress', size: 400, color: '#8884d8' },
                        { name: 'Engagement', size: 700, color: '#ffc658' }
                      ]}
                      dataKey="size"
                      stroke="#fff"
                      fill="#8884d8"
                      content={({ root, depth, x, y, width, height, index, payload, colors, rank, name }) => {
                        return (
                          <g>
                            <rect
                              x={x}
                              y={y}
                              width={width}
                              height={height}
                              style={{
                                fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 6)] : '#ffffff',
                                stroke: '#fff',
                                strokeWidth: 2 / (depth + 1e-10),
                                strokeOpacity: 1 / (depth + 1e-10),
                              }}
                            />
                            {
                              depth === 1 ? (
                                <text
                                  x={x + width / 2}
                                  y={y + height / 2 + 7}
                                  textAnchor="middle"
                                  fill="#fff"
                                  fontSize={14}
                                >
                                  {name}
                                </text>
                              ) : null
                            }
                          </g>
                        );
                      }}
                    />
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Personality Archetypes */}
            <Card>
              <CardHeader>
                <CardTitle>Personality Archetypes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" dataKey="x" name="Openness" />
                      <YAxis type="number" dataKey="y" name="Conscientiousness" />
                      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                      <Scatter
                        data={clusterData.tsne}
                        fill="#f97316"
                      />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardSection;
