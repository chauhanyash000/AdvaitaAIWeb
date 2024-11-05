import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Papa from 'papaparse';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, AreaChart, Area } from '@/components/ui/charts';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const DashboardSection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerIntelligenceUrl = 'https://acaidataingestion.azurewebsites.net/api/CustomerIntelligenceFunction?code=ExFPrUMjt3ozC0mhWtMH0mOhB8DSu8FZi3MBVPJn6lLuAzFunMf4cA%3D%3D';
        const userInsightsUrl = 'https://acaidataingestion.azurewebsites.net/api/UserInsightsFunction?code=DHLfiOYi60-YipiJ6B5oLgIY77uO83eUDsJePTyLLgbJAzFu9HQFIw%3D%3D';
        
        const [customerIntelligenceResponse, userInsightsResponse] = await Promise.all([
          fetch(customerIntelligenceUrl, {
            headers: {
              'x-functions-key': 'ExFPrUMjt3ozC0mhWtMH0mOhB8DSu8FZi3MBVPJn6lLuAzFunMf4cA=='
            }
          }),
          fetch(userInsightsUrl, {
            headers: {
              'x-functions-key': 'DHLfiOYi60-YipiJ6B5oLgIY77uO83eUDsJePTyLLgbJAzFu9HQFIw=='
            }
          })
        ]);

        if (!customerIntelligenceResponse.ok || !userInsightsResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const customerIntelligenceData = await customerIntelligenceResponse.json();
        const userInsightsText = await userInsightsResponse.text();
        const parsedUserInsightsData = Papa.parse(userInsightsText, { header: true }).data;

        setData(processData(customerIntelligenceData, parsedUserInsightsData));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-2xl mx-auto my-8">
        <AlertDescription>
          Failed to load dashboard data: {error}
        </AlertDescription>
      </Alert>
    );
  }

  if (!data) {
    return (
      <Alert className="max-w-2xl mx-auto my-8">
        <AlertDescription>
          No data available at the moment. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <section id="dashboard" className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Customer Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Key Insights Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Key Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {data.keyInsights.map((insight, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Product Issues Chart */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Product Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.productIssues}>
                <XAxis dataKey="issue" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="frequency" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Value Drivers Chart */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Value Drivers</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data.valueDrivers}
                  dataKey="impact"
                  nameKey="driver"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#82ca9d"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Sales Funnel Chart */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Sales Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data.funnelData}>
                <XAxis dataKey="stage" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="users" fill="#8884d8" stroke="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Churn Risk Cohorts Chart */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Churn Risk Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.churnRiskCohorts}>
                <XAxis dataKey="risk" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* User Insights Table */}
        <Card className="shadow-lg col-span-full">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Recent User Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">User ID</th>
                    <th className="px-4 py-2 text-left">Journey Date</th>
                    <th className="px-4 py-2 text-left">Summary</th>
                    <th className="px-4 py-2 text-right">Churn Risk</th>
                    <th className="px-4 py-2 text-right">LTV</th>
                    <th className="px-4 py-2 text-center">Success</th>
                  </tr>
                </thead>
                <tbody>
                  {data.userInsights.slice(0, 5).map((user) => (
                    <tr key={user.userId} className="border-t">
                      <td className="px-4 py-2">{user.userId}</td>
                      <td className="px-4 py-2">{user.journeyDate}</td>
                      <td className="px-4 py-2">{user.summary}</td>
                      <td className="px-4 py-2 text-right">{user.churnRisk}%</td>
                      <td className="px-4 py-2 text-right">${user.ltv}</td>
                      <td className="px-4 py-2 text-center">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          user.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
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
    </section>
  );
};

// Helper function to process the fetched data
function processData(customerIntelligenceData, userInsightsData) {
  return {
    keyInsights: customerIntelligenceData.keyInsights || [],
    productIssues: Object.entries(customerIntelligenceData.productIssues || {})
      .map(([issue, frequency]) => ({ issue, frequency })),
    valueDrivers: Object.entries(customerIntelligenceData.valueDrivers || {})
      .map(([driver, impact]) => ({ driver, impact })),
    funnelData: Object.entries(customerIntelligenceData.funnelData || {})
      .map(([stage, users]) => ({ stage, users })),
    churnRiskCohorts: Object.entries(customerIntelligenceData.churnRiskCohorts || {})
      .map(([risk, count]) => ({ risk: `${risk}%`, count })),
    userInsights: (userInsightsData || []).map(user => ({
      userId: user.user_id,
      journeyDate: user.journey_date,
      summary: user.journey_summary,
      churnRisk: parseFloat(user.churn_risk_percentage) || 0,
      ltv: parseFloat(user.estimated_ltv) || 0,
      success: user.journey_successful === 'true'
    }))
  };
}

export default DashboardSection;