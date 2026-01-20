import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold font-serif mb-4">Get in Touch</h2>
                    <p className="text-gray-600">
                        Have questions? We're here to help you plan the perfect trip.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-12"
                        >
                            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                            <p className="text-gray-600">We'll get back to you shortly.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Destination of Interest</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                                    <option>Select a destination...</option>
                                    <option>Europe</option>
                                    <option>Asia</option>
                                    <option>Africa</option>
                                    <option>South America</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    required
                                    rows="4"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    placeholder="Tell us about your dream trip..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:bg-blue-400"
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                {!status === 'submitting' && <Send className="w-5 h-5" />}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
