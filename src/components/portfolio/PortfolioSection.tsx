import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Headless Solution',
      description: 'Custom Shopify headless store built with Next.js and Tailwind CSS, featuring advanced filtering and lightning-fast performance.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['Shopify', 'Next.js', 'Tailwind CSS', 'GraphQL'],
      category: 'E-Commerce',
      size: 'large'
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      description: 'Modern React dashboard with real-time analytics and advanced data visualization components.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['React', 'TypeScript', 'Chart.js', 'REST API'],
      category: 'Web App',
      size: 'medium'
    },
    {
      id: 3,
      title: 'Mobile-First Portfolio',
      description: 'Responsive portfolio website with GSAP animations and optimized performance.',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop',
      tags: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
      category: 'Portfolio',
      size: 'medium'
    },
    {
      id: 4,
      title: 'Multi-Vendor Marketplace',
      description: 'Complex marketplace platform with vendor management, payment processing, and order tracking.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      tags: ['Shopify Plus', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'E-Commerce',
      size: 'large'
    },
    {
      id: 5,
      title: 'Real-Time Chat App',
      description: 'WebSocket-powered chat application with file sharing and message encryption.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tags: ['Next.js', 'Socket.io', 'PostgreSQL', 'Redis'],
      category: 'Web App',
      size: 'medium'
    },
    {
      id: 6,
      title: 'API Management Platform',
      description: 'Developer-focused API management tool with documentation and analytics.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'GraphQL', 'Docker'],
      category: 'API',
      size: 'medium'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section entrance
      gsap.fromTo(sectionRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate project cards
      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(cards,
          { y: 100, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const getGridClasses = (size: string, index: number) => {
    if (size === 'large') {
      return 'lg:col-span-2 lg:row-span-2';
    }
    return 'lg:col-span-1 lg:row-span-1';
  };

  return (
    <section ref={sectionRef} className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 gradient-text torchlight">My Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my expertise in modern web development, 
            e-commerce solutions, and user experience design.
          </p>
        </div>

        <div ref={gridRef} className="grid lg:grid-cols-3 lg:grid-rows-4 gap-6 auto-rows-min">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`group bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-500 overflow-hidden ${getGridClasses(project.size, index)} touch-dim hover:scale-105`}
            >
              <div className="relative h-64 lg:h-full overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
                
                {/* Content */}
                <CardContent className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div>
                      <Badge className="mb-2 bg-primary/20 text-primary border-primary/30">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-white/10 text-white border-white/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="bg-primary/20 hover:bg-primary/30 border-primary/30">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary touch-dim">
            View All Projects
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;