#import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
#import Papa from 'papaparse';
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
  Area
} from 'recharts';
#import { Loader2 } from 'lucide-react';


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
              {sampleData.keyInsights.map((insight, index) => (
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
            <CardTitle className="text-xl font-semibold">User Journey Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={sampleData.UserJourneyIssuesIssues}>
                  <XAxis dataKey="issue" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="frequency" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
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
                  data={sampleData.valueDrivers}
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
              <AreaChart data={sampleData.funnelData}>
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
              <BarChart data={sampleData.churnRiskCohorts}>
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
                  {sampleData.userInsights.map((user) => (
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

export default DashboardSection;
