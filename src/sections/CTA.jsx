import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop"
                    alt="Adventure Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/80"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
                        Ready for Your Next Adventure?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Don't wait to make memories. Book your dream vacation today and get exclusive offers.
                    </p>
                    <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-transform hover:scale-105 shadow-xl">
                        Start Planning Now
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
