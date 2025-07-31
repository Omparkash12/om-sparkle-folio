import Layout from '@/components/layout/Layout';
import ContactSection from '@/components/portfolio/ContactSection';

const Contact = () => {
  return (
    <Layout>
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 gradient-text torchlight">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your project? Let's discuss your freelancing needs.
            </p>
          </div>
        </div>
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Contact;