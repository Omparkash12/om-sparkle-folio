import Layout from '@/components/layout/Layout';
import AboutSection from '@/components/portfolio/AboutSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';

const About = () => {
  return (
    <Layout>
      <div className="py-12">
        <AboutSection />
        <ExperienceSection />
      </div>
    </Layout>
  );
};

export default About;