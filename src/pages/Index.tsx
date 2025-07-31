import { useEffect } from 'react';
import HeroSection from '@/components/portfolio/HeroSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import AboutSection from '@/components/portfolio/AboutSection';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import BlogSection from '@/components/portfolio/BlogSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Smooth scrolling
    gsap.config({
      nullTargetWarn: false,
      force3D: true
    });

    // Set dark theme by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <ExperienceSection />
      <AboutSection />
      <PortfolioSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
