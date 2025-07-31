import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Download, Github, Linkedin } from 'lucide-react';
import heroAvatar from '@/assets/hero-avatar.jpg';
import heroBg from '@/assets/hero-bg.jpg';
import gsap from 'gsap';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const texts = [
    'Shopify Developer',
    'React.js Expert',
    'Next.js Specialist',
    'Full-Stack Developer'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  useEffect(() => {
    if (avatarRef.current) {
      gsap.to(avatarRef.current, {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });
    }

    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-background/80 via-background/60 to-transparent" />
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={heroRef} className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold">
                Hi, I'm{' '}
                <span className="gradient-text torchlight">
                  Om Prakash
                </span>
              </h1>
              
              <div className="text-2xl lg:text-3xl text-muted-foreground h-12">
                <span>{currentText}</span>
                <span className="animate-blink">|</span>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Crafting exceptional digital experiences with 5+ years of expertise in 
                Shopify development, React.js, and Next.js. Specialized in headless commerce 
                and custom e-commerce solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="gradient-primary glow-primary hover:glow-accent transition-all duration-300 group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Hire Me
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/50 hover:border-primary touch-dim"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            <div className="flex gap-6">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors glow-primary hover:glow-primary rounded-full p-2"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors glow-primary hover:glow-primary rounded-full p-2"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div 
              ref={avatarRef}
              className="relative w-80 h-80 lg:w-96 lg:h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-glow-pulse opacity-20" />
              <img 
                src={heroAvatar}
                alt="Om Prakash - Developer Avatar"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-primary/20"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-float" />
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary rounded-full animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-tech-green rounded-full animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;