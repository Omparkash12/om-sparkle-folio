import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Shopify', percentage: 90, color: 'from-tech-green to-primary' },
    { name: 'React.js', percentage: 85, color: 'from-primary to-accent' },
    { name: 'Next.js', percentage: 80, color: 'from-accent to-primary' },
    { name: 'Backend (Node.js)', percentage: 70, color: 'from-tech-orange to-accent' },
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
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate skill bars
      skills.forEach((skill, index) => {
        const skillBar = skillsRef.current?.children[index]?.querySelector('.skill-progress');
        if (skillBar) {
          gsap.fromTo(skillBar,
            { width: '0%' },
            {
              width: `${skill.percentage}%`,
              duration: 1.5,
              delay: index * 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: skillsRef.current,
                start: "top 60%",
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
    <section ref={sectionRef} className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 gradient-text">My Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hello, I'm a <span className="text-primary font-semibold">Shopify, React.js, and Next.js Developer</span> with{' '}
            <span className="text-accent font-semibold">5+ years</span> of experience crafting exceptional digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skills Bars */}
          <div ref={skillsRef} className="space-y-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground font-mono">{skill.percentage}%</span>
                </div>
                
                <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`skill-progress h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    style={{ width: '0%' }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Cards */}
          <div className="grid gap-6">
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 touch-dim">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-2xl">🛍️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Shopify Expert</h3>
                    <p className="text-muted-foreground">5+ Years Experience</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Specialized in Shopify Oxygen, headless commerce, and custom theme development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-accent/20 hover:border-accent/40 transition-all duration-300 touch-dim">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">React & Next.js</h3>
                    <p className="text-muted-foreground">Modern Web Apps</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Building scalable, performant web applications with React.js and Next.js.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-tech-green/20 hover:border-tech-green/40 transition-all duration-300 touch-dim">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-tech-green to-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Full-Stack Development</h3>
                    <p className="text-muted-foreground">End-to-End Solutions</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Complete development lifecycle from concept to deployment and maintenance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;