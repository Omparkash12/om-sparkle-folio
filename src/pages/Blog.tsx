import Layout from '@/components/layout/Layout';
import BlogSection from '@/components/portfolio/BlogSection';

const Blog = () => {
  return (
    <Layout>
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 gradient-text torchlight">Our Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tutorials, and industry knowledge from our freelancing journey.
            </p>
          </div>
        </div>
        <BlogSection />
      </div>
    </Layout>
  );
};

export default Blog;