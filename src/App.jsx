import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import PopularDestinations from './sections/PopularDestinations';
import Packages from './sections/Packages';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <PopularDestinations />
        <Packages />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
