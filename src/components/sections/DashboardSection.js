//import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
//import Papa from 'papaparse';
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


const bloombergTheme = {
  background: {
    primary: '#121212',
    secondary: '#1a1a1a',
    tertiary: '#232323'
  },
  text: {
    primary: '#e0e0e0',
    secondary: '#999999',
    muted: '#666666'
  },
  border: {
    light: '#2a2a2a',
    dark: '#333333'
  },
  accent: {
    blue: '#0088FE',
    green: '#00C49F',
    red: '#FF4444',
    yellow: '#FFBB28'
  },
  chart: {
    grid: '#333333'
  }
};



// Use it in your components:
<Card className="bg-[#1a1a1a] border-[#2a2a2a] text-[#e0e0e0]">
  {/* Card content */}
</Card>

const MacBookFrame = ({ children }) => {
  return (
    <div className="relative max-w-6xl mx-auto my-12 px-4">
      {/* MacBook Frame */}
      <div className="relative pt-[60px] pb-[40px] bg-[#c1c1c1] rounded-[30px] shadow-xl">
        {/* Screen Bezel */}
        <div className="absolute top-0 left-0 right-0 h-[30px] bg-[#c1c1c1] rounded-t-[30px] flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#4a4a4a]" />
        </div>
        
        {/* Screen Content */}
        <div className={`mx-8 bg-[${bloomberg.background.primary}] rounded-lg overflow-hidden shadow-inner`}>
          <div className="overflow-auto max-h-[600px]">
            {children}
          </div>
        </div>
        
        {/* Base */}
        <div className="absolute bottom-0 left-[10%] right-[10%] h-[40px] bg-[#c1c1c1] rounded-b-xl">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[25%] h-[5px] bg-[#b1b1b1] rounded-t-lg" />
        </div>
      </div>
    </div>
  );
};

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

const researchData = [
  {
    title: "Gen Z Shopping Behavior Analysis 2024",
    key_finding: "76% prioritize brands with strong social media presence",
    date: "2024-03-15"
  },
  {
    title: "Mobile Commerce Adoption Patterns",
    key_finding: "92% conversion rate increase with AR integration",
    date: "2024-02-28"
  },
  {
    title: "Customer Lifetime Value Predictors Study",
    key_finding: "First 30-day engagement patterns predict 85% of LTV",
    date: "2024-02-15"
  }
];

const sampleData = {
  keyInsights: [
    "65% of customers who use the virtual try-on feature make a purchase within 2 weeks",
    "Personalized product recommendations lead to a 30% increase in average order value",
    "Customers who engage with size guide have 40% lower return rates",
    "Mobile app users have 2.5x higher purchase frequency compared to web-only users",
    "Loyalty program members spend 45% more annually than non-members"
  ],
  UserJourneyIssues: [
    { issue: "Size Inconsistency", frequency: 150 },
    { issue: "Checkout Process Errors", frequency: 120 },
    { issue: "Slow Page Loading", frequency: 90 },
    { issue: "Out of Stock Items", frequency: 75 },
    { issue: "Mobile App Crashes", frequency: 60 }
  ],
  valueDrivers: [
    { driver: "Product Quality", impact: 30 },
    { driver: "Fast Shipping", impact: 25 },
    { driver: "Easy Returns", impact: 20 },
    { driver: "Competitive Pricing", impact: 15 },
    { driver: "Unique Designs", impact: 10 }
  ],
  funnelData: [
    { stage: "Website Visit", users: 100000 },
    { stage: "Product View", users: 50000 },
    { stage: "Add to Cart", users: 20000 },
    { stage: "Checkout", users: 8000 },
    { stage: "Purchase", users: 5000 }
  ],
  churnRiskCohorts: [
    { risk: "0-20%", count: 3000 },
    { risk: "21-40%", count: 1500 },
    { risk: "41-60%", count: 800 },
    { risk: "61-80%", count: 500 },
    { risk: "81-100%", count: 200 }
  ],
  userInsights: [
    {
      userId: "U001",
      journeyDate: "2024-10-01",
      summary: "First-time buyer, purchased a dress using a discount code",
      churnRisk: 40,
      ltv: 150,
      success: true
    },
    {
      userId: "U002",
      journeyDate: "2024-10-02",
      summary: "Loyal customer, frequently buys seasonal collections",
      churnRisk: 10,
      ltv: 2500,
      success: true
    },
    {
      userId: "U003",
      journeyDate: "2024-10-03",
      summary: "Abandoned cart due to shipping costs, later used free shipping coupon",
      churnRisk: 30,
      ltv: 300,
      success: true
    },
    {
      userId: "U004",
      journeyDate: "2024-10-04",
      summary: "Returns multiple items frequently, citing size issues",
      churnRisk: 75,
      ltv: 50,
      success: false
    },
    {
      userId: "U005",
      journeyDate: "2024-10-05",
      summary: "High-value customer, purchases premium brands regularly",
      churnRisk: 5,
      ltv: 5000,
      success: true
    }
  ]
};


const DashboardSection = () => {
  const chartConfig = {
    tooltip: {
      contentStyle: { 
        backgroundColor: bloomberg.background.secondary,
        border: `1px solid ${bloomberg.border.light}`,
        color: bloomberg.text.primary
      }
    },
    grid: {
      stroke: bloomberg.chart.grid
    }
  };

  return (
    <section id="dashboard" className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-200">Market Intelligence Dashboard</h2>
      
      <MacBookFrame>
        <div className="bg-[#121212] min-h-screen">
          <div className="py-8 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Top Business News Card */}
              <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-[#e0e0e0]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-200">TOP BUSINESS NEWS</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {newsData.map((section, idx) => (
                      <div key={idx}>
                        <h3 className="text-sm font-bold text-gray-400 mb-2">{section.category}</h3>
                        <div className="space-y-2">
                          {section.items.map((item, itemIdx) => (
                            <div key={itemIdx} className={`flex items-center justify-between p-2 border-l-4 border-[${bloomberg.accent.blue}] bg-[${bloomberg.background.tertiary}]`}>
                              <div className="flex-1">
                                <p className="text-sm text-gray-200">{item.title}</p>
                                <span className="text-xs text-gray-400">{item.time} EST</span>
                              </div>
                              {item.impact === "positive" && <ArrowUpRight className={`w-4 h-4 text-[${bloomberg.accent.green}]`} />}
                              {item.impact === "negative" && <ArrowDownRight className={`w-4 h-4 text-[${bloomberg.accent.red}]`} />}
                              {item.impact === "neutral" && <AlertTriangle className={`w-4 h-4 text-[${bloomberg.accent.yellow}]`} />}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Research Developments Card */}
             <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-[#e0e0e0]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-200">RESEARCH DEVELOPMENTS</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    {researchData.map((item, idx) => (
                      <div key={idx} className={`p-4 bg-[${bloomberg.background.tertiary}] rounded-lg`}>
                        <h4 className={`text-sm font-bold text-[${bloomberg.accent.blue}] mb-2`}>{item.title}</h4>
                        <p className="text-sm text-gray-300 mb-2">{item.key_finding}</p>
                        <span className="text-xs text-gray-500">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* User Journey Issues Chart */}
              <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-[#e0e0e0]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">User Journey Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={sampleData.UserJourneyIssues}>
                        <CartesianGrid strokeDasharray="3 3" stroke={bloomberg.chart.grid} />
                        <XAxis dataKey="issue" stroke={bloomberg.text.secondary} />
                        <YAxis stroke={bloomberg.text.secondary} />
                        <Tooltip contentStyle={chartConfig.tooltip.contentStyle} />
                        <Bar dataKey="frequency" fill={bloomberg.accent.blue} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Value Drivers Chart */}
              <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-[#e0e0e0]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Value Drivers</CardTitle>
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
                        fill={bloomberg.accent.green}
                        label
                      />
                      <Tooltip contentStyle={chartConfig.tooltip.contentStyle} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Sales Funnel Chart */}
              <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-[#e0e0e0]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Sales Funnel</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={sampleData.funnelData}>
                      <CartesianGrid strokeDasharray="3 3" stroke={bloomberg.chart.grid} />
                      <XAxis dataKey="stage" stroke={bloomberg.text.secondary} />
                      <YAxis stroke={bloomberg.text.secondary} />
                      <Tooltip contentStyle={chartConfig.tooltip.contentStyle} />
                      <Area 
                        type="monotone" 
                        dataKey="users" 
                        fill={bloomberg.accent.blue} 
                        stroke={bloomberg.accent.blue}
                        fillOpacity={0.3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* User Insights Table */}
              <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-[#e0e0e0]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Recent User Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className={`bg-[${bloomberg.background.tertiary}]`}>
                          <th className={`px-4 py-2 text-left text-[${bloomberg.text.secondary}]`}>User ID</th>
                          <th className={`px-4 py-2 text-left text-[${bloomberg.text.secondary}]`}>Journey Date</th>
                          <th className={`px-4 py-2 text-left text-[${bloomberg.text.secondary}]`}>Summary</th>
                          <th className={`px-4 py-2 text-right text-[${bloomberg.text.secondary}]`}>Churn Risk</th>
                          <th className={`px-4 py-2 text-right text-[${bloomberg.text.secondary}]`}>LTV</th>
                          <th className={`px-4 py-2 text-center text-[${bloomberg.text.secondary}]`}>Success</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sampleData.userInsights.map((user) => (
                          <tr key={user.userId} className={`border-t border-[${bloomberg.border.light}]`}>
                            <td className={`px-4 py-2 text-[${bloomberg.text.primary}]`}>{user.userId}</td>
                            <td className={`px-4 py-2 text-[${bloomberg.text.primary}]`}>{user.journeyDate}</td>
                            <td className={`px-4 py-2 text-[${bloomberg.text.primary}]`}>{user.summary}</td>
                            <td className={`px-4 py-2 text-right text-[${bloomberg.text.primary}]`}>{user.churnRisk}%</td>
                            <td className={`px-4 py-2 text-right text-[${bloomberg.text.primary}]`}>${user.ltv}</td>
                            <td className="px-4 py-2 text-center">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                user.success 
                                  ? `bg-[${bloomberg.accent.green}] text-[${bloomberg.text.primary}]` 
                                  : `bg-[${bloomberg.accent.red}] text-[${bloomberg.text.primary}]`
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
