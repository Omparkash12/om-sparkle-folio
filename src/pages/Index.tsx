import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/portfolio/HeroSection';
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
    </Layout>
  );
};

export default Index;
