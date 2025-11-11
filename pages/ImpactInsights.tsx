
import React from 'react';
import { Page } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import Card from '../components/Card';
import Button from '../components/Button';

interface ImpactInsightsProps {
  navigateTo: (page: Page) => void;
}

const wasteCollectedData = [
  { name: 'Jan', tons: 400 },
  { name: 'Feb', tons: 300 },
  { name: 'Mar', tons: 500 },
  { name: 'Apr', tons: 450 },
  { name: 'May', tons: 600 },
  { name: 'Jun', tons: 700 },
];

const wasteTypeData = [
  { name: 'Rice Husk', value: 400 },
  { name: 'Wheat Straw', value: 300 },
  { name: 'Sugarcane Bagasse', value: 300 },
  { name: 'Corn Stover', value: 200 },
];
const COLORS = ['#2E7D32', '#66BB6A', '#A5D6A7', '#C8E6C9'];

const co2ReductionData = [
  { name: 'Jan', co2: 200 },
  { name: 'Feb', co2: 250 },
  { name: 'Mar', co2: 350 },
  { name: 'Apr', co2: 380 },
  { name: 'May', co2: 420 },
  { name: 'Jun', co2: 500 },
];

const ImpactInsights: React.FC<ImpactInsightsProps> = ({ navigateTo }) => {
  return (
    <div className="bg-accent-bg min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-primary">KhaadSeva Impact Dashboard</h1>
            <Button variant="ghost" onClick={() => navigateTo(Page.Landing)}>
              &larr; Back to Home
            </Button>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <h3 className="text-lg font-semibold text-accent-text">Farmers Empowered</h3>
            <p className="text-4xl font-bold text-primary mt-2">1,500+</p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-accent-text">Fertilizer Produced</h3>
            <p className="text-4xl font-bold text-primary mt-2">8,000+ tons</p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-accent-text">Revenue Generated for Farmers</h3>
            <p className="text-4xl font-bold text-primary mt-2">$1.2M+</p>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <Card className="lg:col-span-3">
                <h3 className="font-bold text-primary mb-4">Total Waste Collected (monthly)</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={wasteCollectedData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="tons" fill="#2E7D32" />
                    </BarChart>
                </ResponsiveContainer>
            </Card>

            <Card className="lg:col-span-2">
                <h3 className="font-bold text-primary mb-4">Waste Type Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={wasteTypeData} cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value">
                            {wasteTypeData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </Card>
            
            <Card className="lg:col-span-5">
                <h3 className="font-bold text-primary mb-4">CO₂ Reduction Over Time</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={co2ReductionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="co2" stroke="#2E7D32" strokeWidth={2} activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </Card>
        </div>

      </div>
    </div>
  );
};

export default ImpactInsights;
