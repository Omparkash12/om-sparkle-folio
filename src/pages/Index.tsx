import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/portfolio/HeroSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import AboutSection from '@/components/portfolio/AboutSection';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import BlogSection from '@/components/portfolio/BlogSection';
import ContactSection from '@/components/portfolio/ContactSection';
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
    <Layout>
      <HeroSection />
      <ExperienceSection />
      <AboutSection />
      <PortfolioSection />
      <BlogSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
