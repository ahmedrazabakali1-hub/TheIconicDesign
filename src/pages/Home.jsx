import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import PixelBlast from "../components/PixelBlast";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
<div style={{ width: '100%', height: '100%', position: 'relative' }}>
  {/*<PixelBlast
    variant="circle"
    pixelSize={6}
    color="#B19EEF"
    patternScale={3}
    patternDensity={1.2}
    pixelSizeJitter={0.5}
    enableRipples
    rippleSpeed={0.4}
    rippleThickness={0.12}
    rippleIntensityScale={1.5}
    liquid
    liquidStrength={0.12}
    liquidRadius={1.2}
    liquidWobbleSpeed={5}
    speed={0.6}
    edgeFade={0.25}
    transparent
      />*/}
      </div> 
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      
      <Footer />
      {/* Add more sections below */}
    </div>
  );
}
