
import React from 'react';
import { Page } from '../types';
import Button from './Button';
import Icon from './Icon';

interface HeaderProps {
    navigateTo: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
    const navLinks = [
        { label: 'Home', page: Page.Landing },
        { label: 'Farmers', page: Page.FarmerDashboard },
        { label: 'Buyers', page: Page.BuyerDashboard },
        { label: 'Logistics', page: Page.LogisticsTracking },
        { label: 'Impact', page: Page.ImpactInsights },
    ];

    return (
        <header className="bg-accent-bg/80 backdrop-blur-sm sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigateTo(Page.Landing)}>
                    <Icon name="leaf" className="w-8 h-8 text-primary" />
                    <span className="text-2xl font-bold text-primary">KhaadSeva</span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.label} href="#" onClick={(e) => { e.preventDefault(); navigateTo(link.page); }} className="text-accent-text hover:text-primary font-medium">
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" onClick={() => navigateTo(Page.FarmerDashboard)}>Login</Button>
                    <Button variant="primary" onClick={() => navigateTo(Page.FarmerDashboard)}>Join Now</Button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
