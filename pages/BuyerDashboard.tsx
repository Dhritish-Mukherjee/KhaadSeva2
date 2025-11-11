
import React, { useState } from 'react';
import { Page, WasteListing } from '../types';
import DashboardLayout from '../components/DashboardLayout';
import Card from '../components/Card';
import Button from '../components/Button';
import Icon from '../components/Icon';

interface BuyerDashboardProps {
  navigateTo: (page: Page) => void;
}

const sidebarLinks = [
  { label: 'Dashboard', icon: 'dashboard' },
  { label: 'Browse Waste', icon: 'search' },
  { label: 'My Orders', icon: 'orders' },
  { label: 'Analytics', icon: 'chart' },
  { label: 'Settings', icon: 'settings' },
];

const mockListings: WasteListing[] = [
    { id: 1, type: 'Wheat Straw', quantity: '10 tons', price: 95, location: 'Punjab, IN', seller: 'A. Singh', imageUrl: 'https://picsum.photos/400/300?random=10' },
    { id: 2, type: 'Rice Husk', quantity: '25 tons', price: 110, location: 'Haryana, IN', seller: 'B. Kaur', imageUrl: 'https://picsum.photos/400/300?random=11' },
    { id: 3, type: 'Corn Stover', quantity: '15 tons', price: 100, location: 'Uttar Pradesh, IN', seller: 'C. Verma', imageUrl: 'https://picsum.photos/400/300?random=12' },
    { id: 4, type: 'Sugarcane Bagasse', quantity: '50 tons', price: 130, location: 'Maharashtra, IN', seller: 'D. Patil', imageUrl: 'https://picsum.photos/400/300?random=13' },
    { id: 5, type: 'Cotton Stalks', quantity: '8 tons', price: 85, location: 'Gujarat, IN', seller: 'E. Mehta', imageUrl: 'https://picsum.photos/400/300?random=14' },
    { id: 6, type: 'Jute Sticks', quantity: '12 tons', price: 90, location: 'West Bengal, IN', seller: 'F. Bannerjee', imageUrl: 'https://picsum.photos/400/300?random=15' },
];

const BuyerDashboard: React.FC<BuyerDashboardProps> = ({ navigateTo }) => {
  const [activePage, setActivePage] = useState('Dashboard');

  return (
    <DashboardLayout
      sidebarLinks={sidebarLinks}
      activePage={activePage}
      setActivePage={setActivePage}
      navigateTo={navigateTo}
    >
      <div className="space-y-6">
        {/* Search and Filter Bar */}
        <Card className="!p-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative flex-grow">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Icon name="search" className="w-5 h-5 text-gray-400" />
              </span>
              <input type="search" placeholder="Search by waste type..." className="pl-10 p-2 border border-gray-300 rounded-md w-full sm:w-64" />
            </div>
            <input type="text" placeholder="Location" className="p-2 border border-gray-300 rounded-md w-full sm:w-auto" />
            <input type="text" placeholder="Max Price" className="p-2 border border-gray-300 rounded-md w-full sm:w-auto" />
            <Button className="w-full sm:w-auto">Filter</Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Waste Listings Grid */}
            <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {mockListings.map(listing => (
                        <Card key={listing.id} className="!p-0 flex flex-col overflow-hidden">
                            <img src={listing.imageUrl} alt={listing.type} className="w-full h-40 object-cover" />
                            <div className="p-4 flex-grow flex flex-col">
                                <h3 className="font-bold text-lg text-primary">{listing.type}</h3>
                                <p className="text-sm text-gray-500">{listing.location}</p>
                                <div className="my-2 flex-grow">
                                    <p><span className="font-semibold">{listing.quantity}</span> available</p>
                                    <p>from <span className="font-semibold">{listing.seller}</span></p>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-xl font-bold text-gray-800">${listing.price}<span className="text-sm font-normal">/ton</span></p>
                                    <Button variant="primary" className="!py-1 !px-3">Buy</Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
                <Card>
                    <h3 className="font-bold text-primary mb-2">Order Summary</h3>
                    <p className="text-sm text-gray-600">Total Spend:</p>
                    <p className="text-2xl font-bold">$1,850</p>
                    <hr className="my-4" />
                    <p className="text-sm text-gray-600">Ongoing Deliveries:</p>
                    <p className="text-2xl font-bold">3</p>
                </Card>
                <Card>
                     <h3 className="font-bold text-primary mb-2">Environmental Impact</h3>
                     <div className="space-y-3 mt-4">
                        <div>
                            <p className="text-sm text-gray-600">CO₂ Saved</p>
                            <p className="text-xl font-bold">12 tons</p>
                        </div>
                         <div>
                            <p className="text-sm text-gray-600">Waste Recycled</p>
                            <p className="text-xl font-bold">28 tons</p>
                        </div>
                     </div>
                </Card>
            </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BuyerDashboard;
