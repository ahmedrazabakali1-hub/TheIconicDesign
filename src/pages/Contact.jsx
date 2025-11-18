import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import ContactHeroSection from "../components/ContactHeroSection";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <ContactHeroSection />
      <ContactSection />
      <Footer />
      {/* Add more sections below */}
    </div>
  );
}
