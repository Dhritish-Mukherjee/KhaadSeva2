
import React from 'react';
import { Page } from '../types';
import Icon from './Icon';

interface SidebarLink {
  label: string;
  icon: string;
}

interface DashboardLayoutProps {
  sidebarLinks: SidebarLink[];
  activePage: string;
  setActivePage: (page: string) => void;
  navigateTo: (page: Page) => void;
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  sidebarLinks,
  activePage,
  setActivePage,
  navigateTo,
  children,
}) => {
  return (
    <div className="bg-accent-bg min-h-screen flex text-accent-text">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:flex flex-col">
        <div 
          className="flex items-center space-x-2 p-6 border-b cursor-pointer" 
          onClick={() => navigateTo(Page.Landing)}
        >
          <Icon name="leaf" className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold text-primary">KhaadSeva</span>
        </div>
        <nav className="flex-1 p-4">
          <ul>
            {sidebarLinks.map((link) => (
              <li key={link.label}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage(link.label);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 my-1 rounded-lg font-medium transition-colors ${
                    activePage === link.label
                      ? 'bg-primary text-white'
                      : 'hover:bg-secondary hover:text-primary'
                  }`}
                >
                  <Icon name={link.icon as any} className="w-6 h-6" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateTo(Page.Landing); }}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg font-medium hover:bg-red-100 hover:text-red-700"
          >
            <Icon name="logout" className="w-6 h-6" />
            <span>Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-primary">{activePage}</h1>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <Icon name="bell" className="w-6 h-6 text-gray-600" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <Icon name="message" className="w-6 h-6 text-gray-600" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-2">
                <img src="https://picsum.photos/40/40?random=profile" alt="Profile" className="w-10 h-10 rounded-full" />
                <span className="hidden sm:block font-medium">User Name</span>
            </div>
            
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
