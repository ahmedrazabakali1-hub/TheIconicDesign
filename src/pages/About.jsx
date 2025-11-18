import Navbar from "../components/Navbar";
import AboutSecHero from "../components/AboutSecHero"
import Footer from "../components/Footer";
import TrustedBySection from "../components/TrustedBySection";
import TestimonialsSection from "../components/TestimonialsSection"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <AboutSecHero /> 
      <TrustedBySection />
      <TestimonialsSection />
      <Footer />
      {/* Add more sections below */}
    </div>
  );
}
