import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Headphones, Award } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "Expert Guides",
            description: "Our guides are locals who know the hidden gems and stories of each location."
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Best Price Guarantee",
            description: "We ensure you get the best value for your money with no hidden costs."
        },
        {
            icon: <Headphones className="w-8 h-8" />,
            title: "24/7 Support",
            description: "Our support team is always available to assist you during your trip."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Safe & Trusted",
            description: "We work with certified partners to ensure your safety and comfort."
        }
    ];

    return (
        <section id="features" className="py-20 bg-blue-600 text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-serif mb-4">Why Choose Us</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto">
                        We go the extra mile to make sure your journey is nothing short of extraordinary.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
                        >
                            <div className="bg-white text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-blue-100 text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
