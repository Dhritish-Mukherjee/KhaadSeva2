
import React, { useState, useCallback } from 'react';
import { Page } from './types';
import LandingPage from './pages/LandingPage';
import FarmerDashboard from './pages/FarmerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import LogisticsTracking from './pages/LogisticsTracking';
import ImpactInsights from './pages/ImpactInsights';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Landing);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Landing:
        return <LandingPage navigateTo={navigateTo} />;
      case Page.FarmerDashboard:
        return <FarmerDashboard navigateTo={navigateTo} />;
      case Page.BuyerDashboard:
        return <BuyerDashboard navigateTo={navigateTo} />;
      case Page.LogisticsTracking:
        return <LogisticsTracking navigateTo={navigateTo} />;
      case Page.ImpactInsights:
        return <ImpactInsights navigateTo={navigateTo} />;
      default:
        return <LandingPage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="font-sans">
      {renderPage()}
    </div>
  );
};

export default App;
