import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Check } from 'lucide-react';
import packages from '../data/packages.json';

const Packages = () => {
    return (
        <section id="packages" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold font-serif mb-4"
                    >
                        Exclusive Packges
                    </motion.h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Curated experiences designed to give you the best value and memories.
                    </p>
                </div>

                <div className="space-y-12">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                        >
                            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold font-serif">{pkg.title}</h3>
                                    <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                                        {pkg.price}
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-500 mb-6">
                                    <Clock className="w-5 h-5 mr-2" />
                                    <span>{pkg.duration}</span>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {pkg.features.map((feature, i) => (
                                        <div key={i} className="flex items-center text-gray-600 text-sm">
                                            <Check className="w-4 h-4 mr-2 text-green-500" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <button className="w-fit bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                                    View Full Itinerary
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;
