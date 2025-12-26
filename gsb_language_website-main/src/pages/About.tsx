import Layout from '@/components/layout/Layout';
import { MapPin, Mail, Phone, Target, Eye } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const About = () => {
  const { ref: introRef, isInView: introInView } = useInView();
  const { ref: contactRef, isInView: contactInView } = useInView();
  const { ref: missionRef, isInView: missionInView } = useInView();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-primary-foreground mb-4 animate-fade-in-up">
            About GSB Educare Pvt Ltd
          </h1>
          <p className="text-xl text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your Gateway to Global Language Excellence
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-background">
        <div
          ref={introRef}
          className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${
            introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-poppins font-bold text-primary text-center mb-2">
            GSB Educare Private Limited
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-8 rounded-full" />
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Founded with a vision to bridge language barriers and create global opportunities, 
              <strong className="text-foreground"> GSB Educare Private Limited</strong> has emerged as a 
              premier institution for foreign language education in India. We specialize in teaching 
              German, Japanese, and Mandarin—three of the most influential languages in today's 
              globalized world.
            </p>
            <p>
              Our journey began with a simple belief: that quality language education should be 
              accessible, engaging, and effective. Today, we take pride in having trained over 
              1,000 students who have successfully leveraged their language skills for career 
              advancement, higher education abroad, and cultural exploration.
            </p>
            <p>
              At GSB Educare, we combine traditional teaching methods with modern technology 
              to create an immersive learning experience. Our team of native speakers and 
              certified instructors ensures that every student receives personalized attention 
              and achieves their language goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4" ref={contactRef}>
          <h2 className="section-heading text-center">Get in Touch</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: MapPin,
                title: 'Our Address',
                content: 'No.51, Sri Venkateswara Nagar, Pudhuper Village, Sriperumbudur, Kancheepuram District - 600069',
              },
              {
                icon: Mail,
                title: 'Email Us',
                content: 'contact@gsbeducare.com',
                href: 'mailto:contact@gsbeducare.com',
              },
              {
                icon: Phone,
                title: 'Call Us',
                content: '+91-98765-43210',
                href: 'tel:+919876543210',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`bg-card rounded-xl shadow-card p-6 text-center card-hover transition-all duration-500 ${
                  contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-poppins font-semibold text-primary mb-2">{item.title}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Find Us</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-12 rounded-full" />
          
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-card-hover border-4 border-primary">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.167193857839!2d79.96789597494873!3d12.961387387343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f5e0d0fc49d3%3A0x7a7e9e9e9e9e9e9e!2sSriperumbudur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GSB Educare Location"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4" ref={missionRef}>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                content: 'To provide world-class language education that empowers individuals to communicate confidently, build successful careers, and embrace global cultures. We strive to make quality language learning accessible to all.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                content: 'To be the leading language education institution in South Asia, recognized for our innovative teaching methods, exceptional student outcomes, and contribution to creating a more connected world.',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`bg-card rounded-xl shadow-card p-8 transition-all duration-500 ${
                  missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-poppins font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
