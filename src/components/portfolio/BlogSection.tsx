import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const blogs = [
    {
      id: 1,
      title: 'Building Headless E-commerce with Shopify & Next.js',
      excerpt: 'Learn how to create lightning-fast e-commerce experiences using Shopify\'s Storefront API and Next.js for the frontend.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      category: 'E-Commerce',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['Shopify', 'Next.js', 'GraphQL']
    },
    {
      id: 2,
      title: 'Modern React Patterns for Scalable Applications',
      excerpt: 'Explore advanced React patterns including custom hooks, compound components, and state management strategies.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
      category: 'React',
      date: '2024-01-10',
      readTime: '12 min read',
      tags: ['React', 'TypeScript', 'Patterns']
    },
    {
      id: 3,
      title: 'Optimizing Web Performance with GSAP Animations',
      excerpt: 'Best practices for implementing smooth, performant animations in web applications using GSAP and CSS.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      category: 'Performance',
      date: '2024-01-05',
      readTime: '6 min read',
      tags: ['GSAP', 'Performance', 'CSS']
    },
    {
      id: 4,
      title: 'Serverless Architecture with Next.js API Routes',
      excerpt: 'Building scalable backend services using Next.js API routes and serverless deployment strategies.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      category: 'Backend',
      date: '2023-12-28',
      readTime: '10 min read',
      tags: ['Next.js', 'Serverless', 'API']
    },
    {
      id: 5,
      title: 'Advanced Tailwind CSS Techniques',
      excerpt: 'Master advanced Tailwind CSS features including custom plugins, dynamic styling, and component variants.',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop',
      category: 'CSS',
      date: '2023-12-20',
      readTime: '7 min read',
      tags: ['Tailwind CSS', 'CSS', 'Design']
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

      // Create horizontal scrolling animation
      const slider = sliderRef.current;
      if (slider) {
        const cards = slider.children;
        const totalWidth = Array.from(cards).reduce((acc, card) => acc + (card as HTMLElement).offsetWidth + 24, 0);
        
        gsap.to(slider, {
          x: -(totalWidth - slider.offsetWidth),
          duration: 20,
          ease: "none",
          repeat: -1,
          paused: false
        });

        // Pause on hover
        slider.addEventListener('mouseenter', () => {
          gsap.globalTimeline.pause();
        });

        slider.addEventListener('mouseleave', () => {
          gsap.globalTimeline.resume();
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 gradient-text torchlight">Latest Blogs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing insights, tutorials, and best practices from my journey in web development.
          </p>
        </div>

        {/* Horizontal Slider */}
        <div className="overflow-hidden">
          <div ref={sliderRef} className="flex gap-6 w-max">
            {blogs.concat(blogs).map((blog, index) => ( // Duplicate for infinite scroll
              <Card 
                key={`${blog.id}-${index}`}
                className="w-80 bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 touch-dim group flex-shrink-0"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {blog.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(blog.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blog.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>

                    <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag) => (
                        <Badge 
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-muted/50 hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button 
                      variant="ghost" 
                      className="w-full justify-between group-hover:bg-primary/10 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary touch-dim">
            View All Posts
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;