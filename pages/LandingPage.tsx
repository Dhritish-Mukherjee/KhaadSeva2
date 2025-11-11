
import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface LandingPageProps {
  navigateTo: (page: Page) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ navigateTo }) => {
  return (
    <div className="bg-accent-bg min-h-screen text-accent-text">
      <Header navigateTo={navigateTo} />
      
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">Transform Waste into Wealth with KhaadSeva</h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">Connecting farmers and companies for sustainable fertilizer production.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="primary" size="lg" onClick={() => navigateTo(Page.FarmerDashboard)}>Register as Farmer</Button>
            <Button variant="secondary" size="lg" onClick={() => navigateTo(Page.BuyerDashboard)}>Register as Buyer</Button>
          </div>
          <img src="https://picsum.photos/1200/400?random=1" alt="Eco Flow Banner" className="mt-16 rounded-lg shadow-2xl" />
        </section>

        {/* How It Works Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-primary mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="bg-secondary rounded-full p-6 mb-4">
                  <Icon name="farmer" className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Farmers Upload Agro-Waste</h3>
                <p>Farmers easily list their available agricultural waste with details and photos.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary rounded-full p-6 mb-4">
                  <Icon name="search" className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Platform Matches Buyers</h3>
                <p>Our smart system connects waste listings with interested companies and fertilizer producers.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary rounded-full p-6 mb-4">
                  <Icon name="leaf" className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Waste Converted to Fertilizer</h3>
                <p>Buyers process the waste, creating valuable organic fertilizer and closing the loop.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
             <h2 className="text-3xl font-bold text-primary mb-12">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-4xl font-bold text-primary">10,000+ tons</p>
                <p className="text-lg mt-2">Waste Recycled</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-4xl font-bold text-primary">5,000+ tons</p>
                <p className="text-lg mt-2">CO₂ Reduced</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-4xl font-bold text-primary">1,500+</p>
                <p className="text-lg mt-2">Farmers Benefited</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
