import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import QualificationsSection from "@/components/QualificationsSection";
import PhilosophySection from "@/components/PhilosophySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResourcesSection from "@/components/ResourcesSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <QualificationsSection />
      <PhilosophySection />
      <TestimonialsSection />
      <ResourcesSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
};

export default Index;
