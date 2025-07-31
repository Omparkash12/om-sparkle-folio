import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: 50, label: 'Projects Completed', suffix: '+', color: 'primary' },
    { number: 30, label: 'Clients Served', suffix: '+', color: 'accent' },
    { number: 5, label: 'Years Experience', suffix: '+', color: 'tech-green' },
    { number: 15, label: 'Technologies Mastered', suffix: '+', color: 'tech-orange' }
  ];

  const technologies = [
    'Shopify', 'React.js', 'Next.js', 'TypeScript', 'Node.js',
    'Tailwind CSS', 'GSAP', 'GraphQL', 'REST APIs', 'MongoDB',
    'PostgreSQL', 'AWS', 'Vercel', 'Git', 'Figma'
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

      // Animate counters
      stats.forEach((stat, index) => {
        const counter = countersRef.current?.children[index]?.querySelector('.counter-number');
        if (counter) {
          gsap.fromTo(counter,
            { textContent: 0 },
            {
              textContent: stat.number,
              duration: 2,
              delay: index * 0.2,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: countersRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 gradient-text torchlight">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <div className="space-y-8">
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  I'm <span className="text-primary font-semibold">Om Prakash</span>, an experienced{' '}
                  <span className="text-accent font-semibold">Shopify developer</span> specializing in{' '}
                  <span className="text-tech-green font-semibold">Shopify Oxygen, headless commerce, and custom React/Next.js apps</span>.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  With over 5 years in the industry, I've helped businesses transform their digital presence 
                  through innovative e-commerce solutions, modern web applications, and seamless user experiences.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  My passion lies in creating scalable, performant applications that not only meet business 
                  objectives but also provide exceptional user experiences. I believe in clean code, 
                  modern architecture, and continuous learning.
                </p>
              </CardContent>
            </Card>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={tech} 
                    variant="secondary"
                    className="bg-muted/50 hover:bg-primary/20 transition-colors cursor-pointer touch-dim"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div ref={countersRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label}
                className={`bg-card/50 border-${stat.color}/20 hover:border-${stat.color}/40 transition-all duration-300 touch-dim text-center`}
              >
                <CardContent className="p-6">
                  <div className={`text-4xl font-bold text-${stat.color} mb-2`}>
                    <span className="counter-number">0</span>
                    <span>{stat.suffix}</span>
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-12">
              <blockquote className="text-2xl font-medium italic text-foreground mb-4">
                "Code is like humor. When you have to explain it, it's bad."
              </blockquote>
              <p className="text-muted-foreground">
                I believe in writing clean, self-documenting code that speaks for itself.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;