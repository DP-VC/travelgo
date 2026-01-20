import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import destinations from '../data/destinations.json';

const PopularDestinations = () => {
    return (
        <section id="destinations" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold font-serif mb-4"
                    >
                        Popular Destinations
                    </motion.h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our most visited locations and find your perfect getaway spot.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((destination, index) => (
                        <motion.div
                            key={destination.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={destination.image}
                                    alt={destination.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-blue-600">
                                    {destination.price}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center text-gray-500 text-sm mb-2">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    {destination.location}
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                                    {destination.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {destination.description}
                                </p>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                    <button className="text-blue-600 font-medium text-sm hover:underline">
                                        View Details
                                    </button>
                                    <span className="text-yellow-500 text-sm">★★★★★</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularDestinations;
