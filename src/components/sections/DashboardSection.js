import React from 'react';
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
import { ArrowUpRight, ArrowDownRight, AlertTriangle, LightbulbIcon } from 'lucide-react';

// Theme configuration as CSS variables
const ThemeStyles = () => (
  <style>{`
    :root {
      --bg-primary: #121212;
      --bg-secondary: #1a1a1a;
      --bg-tertiary: #232323;
      --text-primary: #e0e0e0;
      --text-secondary: #999999;
      --text-muted: #666666;
      --border-light: #2a2a2a;
      --border-dark: #333333;
      --accent-blue: #0088FE;
      --accent-green: #00C49F;
      --accent-red: #FF4444;
      --accent-yellow: #FFBB28;
      --chart-grid: #333333;
    }
  `}</style>
);

const MacBookFrame = ({ children }) => (
  <div className="relative max-w-4xl mx-auto my-8 px-4">
    <div className="relative pt-[40px] pb-[30px] bg-neutral-300 rounded-[20px] shadow-xl">
      <div className="absolute top-0 left-0 right-0 h-[20px] bg-neutral-300 rounded-t-[20px] flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
      </div>
      <div className="mx-6 bg-[#121212] rounded-lg shadow-inner">
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
  <div className={`bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden ${className}`}>
    <div className="p-3 border-b border-neutral-800">
      <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
    </div>
    <div className="p-3">
      {children}
    </div>
  </div>
);

const NewsItem = ({ title, time, impact }) => {
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

const ResearchItem = ({ title, key_finding, date }) => (
  <div className="p-4 bg-neutral-800 rounded-lg">
    <h4 className="text-sm font-bold text-blue-500 mb-2">{title}</h4>
    <p className="text-sm text-gray-300 mb-2">{key_finding}</p>
    <span className="text-xs text-gray-500">{date}</span>
  </div>
);

// Sample Data
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
  return (
    <>
      <ThemeStyles />
      <section id="dashboard" className="py-6 px-4">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-200">
          Market Intelligence Dashboard
        </h2>
        
        <MacBookFrame>
          <div className="bg-[#121212] p-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* Key Insights Card */}
              <CustomCard title="Key Insights">
                <div className="space-y-2">
                  {sampleData.keyInsights.map((insight, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-sm">
                      <LightbulbIcon className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">{insight}</p>
                    </div>
                  ))}
                </div>
              </CustomCard>

              {/* News Card */}
              <CustomCard title="TOP BUSINESS NEWS">
                <div className="space-y-2">
                  {newsData.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="text-xs font-bold text-gray-400 mb-1">
                        {section.category}
                      </h3>
                      <div className="space-y-1">
                        {section.items.map((item, itemIdx) => (
                          <NewsItem key={itemIdx} {...item} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CustomCard>

              {/* Research Card */}
              <CustomCard title="RESEARCH DEVELOPMENTS">
                <div className="grid grid-cols-1 gap-2">
                  {researchData.map((item, idx) => (
                    <ResearchItem key={idx} {...item} />
                  ))}
                </div>
              </CustomCard>

              {/* Churn Risk Cohorts */}
              <CustomCard title="Churn Risk Distribution">
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sampleData.churnRiskCohorts} barSize={20}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" />
                      <XAxis 
                        dataKey="risk" 
                        tick={{ fill: 'var(--text-secondary)', fontSize: 10 }}
                      />
                      <YAxis 
                        tick={{ fill: 'var(--text-secondary)', fontSize: 10 }}
                      />
                      <Tooltip />
                      <Bar dataKey="count" fill="var(--accent-red)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CustomCard>

              {/* User Journey Issues Chart */}
              <CustomCard title="User Journey Issues">
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sampleData.UserJourneyIssues}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" />
                      <XAxis 
                        dataKey="issue" 
                        tick={{ fill: 'var(--text-secondary)', fontSize: 9 }}
                        angle={-45}
                        textAnchor="end"
                        height={60}
                      />
                      <YAxis 
                        tick={{ fill: 'var(--text-secondary)', fontSize: 10 }}
                      />
                      <Tooltip />
                      <Bar dataKey="frequency" fill="var(--accent-blue)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CustomCard>

              {/* Value Drivers Chart */}
              <CustomCard title="Value Drivers">
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sampleData.valueDrivers}
                        dataKey="impact"
                        nameKey="driver"
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        fill="var(--accent-green)"
                        label={{
                          fontSize: 10,
                          fill: 'var(--text-primary)'
                        }}
                      />
                      <Tooltip />
                      <Legend 
                        formatter={(value) => <span style={{ color: 'var(--text-primary)', fontSize: '10px' }}>{value}</span>}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CustomCard>

              {/* Sales Funnel Chart */}
              <CustomCard title="Sales Funnel" className="lg:col-span-2">
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={sampleData.funnelData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" />
                      <XAxis 
                        dataKey="stage" 
                        tick={{ fill: 'var(--text-secondary)', fontSize: 10 }}
                        angle={-45}
                        textAnchor="end"
                        height={60}
                      />
                      <YAxis 
                        tick={{ fill: 'var(--text-secondary)', fontSize: 10 }}
                      />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="users" 
                        fill="var(--accent-blue)" 
                        stroke="var(--accent-blue)"
                        fillOpacity={0.3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CustomCard>

              {/* User Insights Table */}
              <CustomCard title="Recent User Insights" className="col-span-full">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-neutral-800">
                        <th className="px-2 py-1 text-left text-gray-400 text-xs">User ID</th>
                        <th className="px-2 py-1 text-left text-gray-400 text-xs">Journey Date</th>
                        <th className="px-2 py-1 text-left text-gray-400 text-xs">Summary</th>
                        <th className="px-2 py-1 text-right text-gray-400 text-xs">Churn Risk</th>
                        <th className="px-2 py-1 text-right text-gray-400 text-xs">LTV</th>
                        <th className="px-2 py-1 text-center text-gray-400 text-xs">Success</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleData.userInsights.map((user) => (
                        <tr key={user.userId} className="border-t border-neutral-800">
                          <td className="px-2 py-1 text-gray-200 text-xs">{user.userId}</td>
                          <td className="px-2 py-1 text-gray-200 text-xs">{user.journeyDate}</td>
                          <td className="px-2 py-1 text-gray-200 text-xs">{user.summary}</td>
                          <td className="px-2 py-1 text-right text-gray-200 text-xs">{user.churnRisk}%</td>
                          <td className="px-2 py-1 text-right text-gray-200 text-xs">${user.ltv}</td>
                          <td className="px-2 py-1 text-center">
                            <span className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium ${
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
              </CustomCard>
            </div>
          </div>
        </MacBookFrame>
      </section>
    </>
  );
};

export default DashboardSection;
