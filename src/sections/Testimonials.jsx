import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import testimonials from '../data/testimonials.json';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold font-serif mb-16">What Travelers Say</h2>

                <div className="max-w-4xl mx-auto relative h-80">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center p-8"
                        >
                            <Quote className="w-12 h-12 text-blue-200 mb-6" />
                            <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                                "{testimonials[currentIndex].text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                                />
                                <div className="text-left">
                                    <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                                    <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                                    <div className="text-yellow-500 text-sm">
                                        {'★'.repeat(testimonials[currentIndex].rating)}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
