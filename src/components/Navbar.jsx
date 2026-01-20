import React, { useState, useEffect } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Destinations', href: '#destinations' },
        { title: 'Packages', href: '#packages' },
        { title: 'Why Us', href: '#features' },
        { title: 'Testimonials', href: '#testimonials' },
        { title: 'Contact', href: '#contact' },
    ];

    const handleScrollTo = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 text-2xl font-bold font-serif text-blue-600">
                    <Plane className={`w-8 h-8 ${scrolled ? 'text-blue-600' : 'text-white'} transition-colors`} />
                    <span className={scrolled ? 'text-gray-900' : 'text-white'}>Travel<span className="text-blue-500">Go</span></span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className={`font-medium hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'}`}
                        >
                            {link.title}
                        </a>
                    ))}
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-transform hover:scale-105">
                        Book Now
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="text-gray-900" /> : <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    onClick={(e) => handleScrollTo(e, link.href)}
                                    className="text-gray-800 font-medium hover:text-blue-600 transition-colors"
                                >
                                    {link.title}
                                </a>
                            ))}
                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium">
                                Book Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
