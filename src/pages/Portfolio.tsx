import Layout from '@/components/layout/Layout';
import PortfolioSection from '@/components/portfolio/PortfolioSection';

const Portfolio = () => {
  return (
    <Layout>
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 gradient-text torchlight">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcase of our best freelancing projects and client success stories.
            </p>
          </div>
        </div>
        <PortfolioSection />
      </div>
    </Layout>
  );
};

export default Portfolio;