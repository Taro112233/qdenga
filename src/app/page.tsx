import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import FAQSection from "./components/sections/FAQSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import HeroSection from "./components/sections/HeroSection";
import SafetySection from "./components/sections/SafetySection";
import StatsSection from "./components/sections/StatsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <SafetySection />
        <StatsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
