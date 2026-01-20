import React from 'react';
import { Plane, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 text-2xl font-bold font-serif mb-4">
                            <Plane className="w-6 h-6 text-blue-500" />
                            <span>Travel<span className="text-blue-500">Go</span></span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Making your travel dreams a reality with expertly curated tours and unforgettable experiences.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#destinations" className="hover:text-blue-500 transition-colors">Destinations</a></li>
                            <li><a href="#packages" className="hover:text-blue-500 transition-colors">Packages</a></li>
                            <li><a href="#features" className="hover:text-blue-500 transition-colors">About Us</a></li>
                            <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-blue-500 transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
                            <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                            <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
                            <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-700 cursor-pointer transition-colors" />
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} TravelGo. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
