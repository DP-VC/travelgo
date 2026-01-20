import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
                    alt="Tropical Beach"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-4 border border-white/30">
                        Explore the Unseen
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">
                        Discover the World <br /> With <span className="text-blue-400">Us</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Experience the beauty of the world's most stunning destinations.
                        Curated tours, luxury stays, and unforgettable memories await.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2 group">
                            Explore Destinations
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold transition-all flex items-center gap-2">
                            Plan a Trip
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-white rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
