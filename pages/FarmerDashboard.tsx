
import React, { useState } from 'react';
import { Page, Order } from '../types';
import DashboardLayout from '../components/DashboardLayout';
import Card from '../components/Card';
import Button from '../components/Button';

interface FarmerDashboardProps {
  navigateTo: (page: Page) => void;
}

const sidebarLinks = [
  { label: 'Dashboard', icon: 'dashboard' },
  { label: 'List Waste', icon: 'list' },
  { label: 'My Orders', icon: 'orders' },
  { label: 'Messages', icon: 'message' },
  { label: 'Settings', icon: 'settings' },
];

const mockOrders: Order[] = [
    { id: 'ORD123', status: 'Pending', wasteType: 'Rice Husk', quantity: '2 tons' },
    { id: 'ORD124', status: 'Sold', wasteType: 'Sugarcane Bagasse', quantity: '5 tons' },
    { id: 'ORD125', status: 'Delivered', wasteType: 'Wheat Straw', quantity: '3 tons' },
];


const StatusBadge: React.FC<{ status: Order['status'] }> = ({ status }) => {
    const colorClasses = {
        Pending: 'bg-yellow-100 text-yellow-800',
        Sold: 'bg-blue-100 text-blue-800',
        Delivered: 'bg-green-100 text-green-800',
        'In Transit': 'bg-indigo-100 text-indigo-800'
    };
    return <span className={`px-2 py-1 text-sm font-medium rounded-full ${colorClasses[status]}`}>{status}</span>;
}


const FarmerDashboard: React.FC<FarmerDashboardProps> = ({ navigateTo }) => {
  const [activePage, setActivePage] = useState('Dashboard');
  
  return (
    <DashboardLayout
      sidebarLinks={sidebarLinks}
      activePage={activePage}
      setActivePage={setActivePage}
      navigateTo={navigateTo}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Form */}
        <div className="lg:col-span-2">
            <Card>
                <h2 className="text-xl font-bold text-primary mb-4">List Agro-Waste</h2>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Waste Type</label>
                            <input type="text" placeholder="e.g., Rice Husk" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Quantity (in tons)</label>
                            <input type="number" placeholder="e.g., 5" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Asking Price</label>
                            <input type="number" placeholder="e.g., $10/ton" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary" />
                        </div>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input type="text" placeholder="City, State" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Upload Photo</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                <div className="flex text-sm text-gray-600"><label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-green-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"><span>Upload a file</span><input id="file-upload" name="file-upload" type="file" className="sr-only" /></label><p className="pl-1">or drag and drop</p></div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button type="submit">List Waste</Button>
                    </div>
                </form>
            </Card>
        </div>

        {/* Right Column: Price & Notifications */}
        <div className="space-y-6">
            <Card>
                <h3 className="font-bold text-primary mb-2">Suggested Price</h3>
                <p className="text-3xl font-bold text-gray-800">$125 <span className="text-lg font-medium text-gray-500">/ ton</span></p>
                <p className="text-sm text-gray-500 mt-2">Based on current market rates for similar waste types.</p>
            </Card>
            <Card>
                <h3 className="font-bold text-primary mb-4">Notifications</h3>
                <ul className="space-y-3">
                    <li className="text-sm">New bid from 'EcoFertilizers' on your Rice Husk listing.</li>
                    <li className="text-sm text-gray-500 border-t pt-3 mt-3">Your 'Sugarcane Bagasse' listing is expiring in 3 days.</li>
                </ul>
            </Card>
        </div>

        {/* Bottom Section: Active Orders */}
        <div className="lg:col-span-3">
            <Card>
                <h2 className="text-xl font-bold text-primary mb-4">My Active Orders</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="p-2">Order ID</th>
                                <th className="p-2">Waste Type</th>
                                <th className="p-2">Quantity</th>
                                <th className="p-2">Status</th>
                                <th className="p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockOrders.map(order => (
                                <tr key={order.id} className="border-b">
                                    <td className="p-2 font-mono text-sm">{order.id}</td>
                                    <td className="p-2">{order.wasteType}</td>
                                    <td className="p-2">{order.quantity}</td>
                                    <td className="p-2"><StatusBadge status={order.status} /></td>
                                    <td className="p-2">
                                      <Button variant="ghost" className="!py-1 !px-3" onClick={() => navigateTo(Page.LogisticsTracking)}>Track</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FarmerDashboard;
