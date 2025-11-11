
import React from 'react';
import { Page } from '../types';
import Card from '../components/Card';
import Button from '../components/Button';
import Icon from '../components/Icon';

interface LogisticsTrackingProps {
  navigateTo: (page: Page) => void;
}

const LogisticsTracking: React.FC<LogisticsTrackingProps> = ({ navigateTo }) => {
  return (
    <div className="bg-accent-bg min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => navigateTo(Page.FarmerDashboard)} className="mb-4">
          &larr; Back to Dashboard
        </Button>

        {/* Header */}
        <Card className="mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-2xl font-bold text-primary">Order Tracking</h1>
              <p className="font-mono text-sm text-gray-500">Order ID: ORD123</p>
            </div>
            <div className="mt-2 sm:mt-0">
              <span className="bg-indigo-100 text-indigo-800 text-lg font-medium px-4 py-1.5 rounded-full">In Transit</span>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <h2 className="text-xl font-bold text-primary mb-4">Live Map</h2>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
                <img src="https://picsum.photos/800/450?random=map" className="w-full h-full object-cover" alt="Map view" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary">
                    <Icon name="truck" className="w-12 h-12" />
                </div>
              </div>
            </Card>
          </div>
          
          {/* Details & Timeline Section */}
          <div className="space-y-6">
            <Card>
                <h3 className="font-bold text-primary mb-4">Delivery Timeline</h3>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <div className="w-4 h-4 bg-primary rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                        <div>
                            <p className="font-semibold">Pickup Completed</p>
                            <p className="text-sm text-gray-500">Mon, 10:30 AM</p>
                        </div>
                    </li>
                     <li className="flex items-start">
                        <div className="relative mr-4">
                            <div className="w-4 h-4 bg-primary rounded-full mt-1.5 flex-shrink-0 ring-4 ring-white"></div>
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gray-200"></div>
                        </div>
                        <div>
                            <p className="font-semibold">In Transit</p>
                            <p className="text-sm text-gray-500">Currently on its way</p>
                        </div>
                    </li>
                    <li className="flex items-start opacity-50">
                        <div className="w-4 h-4 bg-gray-300 rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                        <div>
                            <p className="font-semibold">Delivered</p>
                            <p className="text-sm text-gray-500">Est. Arrival: Tue, 02:00 PM</p>
                        </div>
                    </li>
                </ul>
            </Card>
            <Card>
              <h3 className="font-bold text-primary mb-4">Driver Details</h3>
              <div className="flex items-center space-x-4">
                  <img src="https://picsum.photos/60/60?random=driver" alt="Driver" className="w-16 h-16 rounded-full" />
                  <div>
                      <p className="font-semibold text-lg">R. Kumar</p>
                      <p className="text-sm text-gray-500">Vehicle: MH 12 AB 3456</p>
                      <a href="tel:+1234567890" className="text-primary hover:underline text-sm">Contact Driver</a>
                  </div>
              </div>
            </Card>
            <Button className="w-full">Contact Support</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsTracking;
