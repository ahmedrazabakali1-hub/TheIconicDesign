import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingSection from "../components/PricingSection";
import ServicesHeroSection from "../components/ServicesHeroSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <ServicesHeroSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      {/* Add more sections below */}
    </div>
  );
}