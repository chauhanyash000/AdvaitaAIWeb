import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  AreaChart,
  Area,
  CartesianGrid, 
  Legend 
} from 'recharts';
import { ArrowUpRight, ArrowDownRight, AlertTriangle } from 'lucide-react';

// Sample data
const newsData = [
  {
    category: "COMPETITOR NEWS",
    items: [
      { title: "Zara Accelerates Digital Push with AI-Powered Virtual Fitting Rooms", time: "15:30", impact: "positive" },
      { title: "H&M Group Reports 12% YoY E-commerce Growth in Q3", time: "14:45", impact: "neutral" },
      { title: "SHEIN Faces New Regulatory Challenges in EU Markets", time: "13:20", impact: "negative" }
    ]
  },
  {
    category: "MARKET DYNAMICS",
    items: [
      { title: "Cotton Prices Surge 8% on Supply Chain Disruptions", time: "12:15", impact: "negative" },
      { title: "US Online Retail Growth Slows to 6.3% in Q4", time: "11:30", impact: "neutral" },
      { title: "Fast Fashion Sustainability Index Launch by Reuters", time: "10:45", impact: "positive" }
    ]
  }
];

// Convert to functional component
const MacBookFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative max-w-6xl mx-auto my-12 px-4">
      <div className="relative pt-[60px] pb-[40px] bg-neutral-300 rounded-[30px] shadow-xl">
        <div className="absolute top-0 left-0 right-0 h-[30px] bg-neutral-300 rounded-t-[30px] flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-neutral-600" />
        </div>
        <div className="mx-8 bg-neutral-900 rounded-lg overflow-hidden shadow-inner">
          <div className="overflow-auto max-h-[600px]">
            {children}
          </div>
        </div>
        <div className="absolute bottom-0 left-[10%] right-[10%] h-[40px] bg-neutral-300 rounded-b-xl">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-[5px] bg-neutral-400 rounded-t-lg" />
        </div>
      </div>
    </div>
  );
};

// Convert to functional component
const NewsItem = ({ title, time, impact }: { title: string; time: string; impact: 'positive' | 'negative' | 'neutral' }) => {
  const ImpactIcon = {
    positive: ArrowUpRight,
    negative: ArrowDownRight,
    neutral: AlertTriangle
  }[impact];

  const impactColorClass = {
    positive: 'text-emerald-500',
    negative: 'text-red-500',
    neutral: 'text-yellow-500'
  }[impact];

  return (
    <div className="flex items-center justify-between p-2 border-l-4 border-blue-500 bg-neutral-800">
      <div className="flex-1">
        <p className="text-sm text-gray-200">{title}</p>
        <span className="text-xs text-gray-400">{time} EST</span>
      </div>
      <ImpactIcon className={`w-4 h-4 ${impactColorClass}`} />
    </div>
  );
};

// Main component as functional component
const DashboardSection = () => {
  const chartConfig = {
    tooltip: {
      contentStyle: {
        backgroundColor: '#1a1a1a',
        border: '1px solid #2a2a2a',
        color: '#e0e0e0'
      }
    }
  };

  return (
    <section id="dashboard" className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-200">
        Market Intelligence Dashboard
      </h2>
      
      <MacBookFrame>
        <div className="bg-neutral-900 min-h-screen">
          <div className="py-8 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* News Card */}
              <Card className="bg-neutral-900 border-neutral-800">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-200">
                    TOP BUSINESS NEWS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {newsData.map((section, idx) => (
                      <div key={idx}>
                        <h3 className="text-sm font-bold text-gray-400 mb-2">
                          {section.category}
                        </h3>
                        <div className="space-y-2">
                          {section.items.map((item, itemIdx) => (
                            <NewsItem 
                              key={itemIdx}
                              title={item.title}
                              time={item.time}
                              impact={item.impact as 'positive' | 'negative' | 'neutral'}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

               {/* Research Card */}
                <Card className="bg-neutral-900 border-neutral-800">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-200">
                      RESEARCH DEVELOPMENTS
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-4">
                      {researchData.map((item, idx) => (
                        <ResearchItem key={idx} {...item} />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* User Journey Issues Chart */}
                <Card className="bg-neutral-900 border-neutral-800">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-200">
                      User Journey Issues
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={sampleData.UserJourneyIssues}>
                          <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" />
                          <XAxis 
                            dataKey="issue" 
                            stroke="var(--text-secondary)"
                            tick={{ fill: 'var(--text-secondary)' }}
                          />
                          <YAxis 
                            stroke="var(--text-secondary)"
                            tick={{ fill: 'var(--text-secondary)' }}
                          />
                          <Tooltip contentStyle={chartConfig.tooltip.contentStyle} />
                          <Bar dataKey="frequency" fill="var(--accent-blue)" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Value Drivers Chart */}
                <Card className="bg-neutral-900 border-neutral-800">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-200">
                      Value Drivers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={sampleData.valueDrivers}
                          dataKey="impact"
                          nameKey="driver"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="var(--accent-green)"
                          label
                        />
                        <Tooltip contentStyle={chartConfig.tooltip.contentStyle} />
                        <Legend 
                          formatter={(value) => <span style={{ color: 'var(--text-primary)' }}>{value}</span>}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Sales Funnel Chart */}
                <Card className="bg-neutral-900 border-neutral-800">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-200">
                      Sales Funnel
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={sampleData.funnelData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" />
                        <XAxis 
                          dataKey="stage" 
                          stroke="var(--text-secondary)"
                          tick={{ fill: 'var(--text-secondary)' }}
                        />
                        <YAxis 
                          stroke="var(--text-secondary)"
                          tick={{ fill: 'var(--text-secondary)' }}
                        />
                        <Tooltip contentStyle={chartConfig.tooltip.contentStyle} />
                        <Area 
                          type="monotone" 
                          dataKey="users" 
                          fill="var(--accent-blue)" 
                          stroke="var(--accent-blue)"
                          fillOpacity={0.3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* User Insights Table */}
                <Card className="bg-neutral-900 border-neutral-800">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-200">
                      Recent User Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-neutral-800">
                            <th className="px-4 py-2 text-left text-gray-400">User ID</th>
                            <th className="px-4 py-2 text-left text-gray-400">Journey Date</th>
                            <th className="px-4 py-2 text-left text-gray-400">Summary</th>
                            <th className="px-4 py-2 text-right text-gray-400">Churn Risk</th>
                            <th className="px-4 py-2 text-right text-gray-400">LTV</th>
                            <th className="px-4 py-2 text-center text-gray-400">Success</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sampleData.userInsights.map((user) => (
                            <tr key={user.userId} className="border-t border-neutral-800">
                              <td className="px-4 py-2 text-gray-200">{user.userId}</td>
                              <td className="px-4 py-2 text-gray-200">{user.journeyDate}</td>
                              <td className="px-4 py-2 text-gray-200">{user.summary}</td>
                              <td className="px-4 py-2 text-right text-gray-200">{user.churnRisk}%</td>
                              <td className="px-4 py-2 text-right text-gray-200">${user.ltv}</td>
                              <td className="px-4 py-2 text-center">
                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                  user.success 
                                    ? 'bg-emerald-500 text-white' 
                                    : 'bg-red-500 text-white'
                                }`}>
                                  {user.success ? 'Yes' : 'No'}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

              
            </div>
          </div>
        </div>
      </MacBookFrame>
    </section>
  );
};

export default DashboardSection;
