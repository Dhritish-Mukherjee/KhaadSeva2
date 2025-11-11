
import React from 'react';
import Icon from './Icon';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Icon name="leaf" className="w-8 h-8" />
                            <span className="text-2xl font-bold">KhaadSeva</span>
                        </div>
                        <p className="text-green-200">Transforming waste into wealth for a sustainable future.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline text-green-200">About Us</a></li>
                            <li><a href="#" className="hover:underline text-green-200">Careers</a></li>
                            <li><a href="#" className="hover:underline text-green-200">Press</a></li>
                            <li><a href="#" className="hover:underline text-green-200">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact</h3>
                        <p className="text-green-200">123 Green Lane, Sustainability City</p>
                        <p className="text-green-200">info@khaadseva.com</p>
                        <p className="text-green-200">+1 234 567 890</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            {/* Placeholder icons */}
                            <a href="#" className="hover:text-secondary"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."></path></svg></a>
                            <a href="#" className="hover:text-secondary"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."></path></svg></a>
                            <a href="#" className="hover:text-secondary"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."></path></svg></a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-green-700 pt-6 text-center text-green-300">
                    <p>&copy; {new Date().getFullYear()} KhaadSeva. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
