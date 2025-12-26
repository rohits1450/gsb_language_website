import { ArrowRight, Globe, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-hero overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Globe className="w-16 h-16 text-primary-foreground" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <BookOpen className="w-12 h-12 text-primary-foreground" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <Globe className="w-10 h-10 text-primary-foreground" />
        </div>
        <div className="absolute bottom-40 right-1/3 animate-float" style={{ animationDelay: '0.5s' }}>
          <BookOpen className="w-14 h-14 text-primary-foreground" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Master Global Languages with{' '}
            <span className="text-secondary">GSB Educare</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Excellence in German, Japanese & Mandarin Education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button asChild variant="secondary" size="lg" className="group">
              <Link to="/payment">
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/about">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50L60 45.7C120 41.3 240 32.7 360 36.8C480 41 600 58 720 62.3C840 66.7 960 58.3 1080 50C1200 41.7 1320 33.3 1380 29.2L1440 25V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="hsl(0, 0%, 100%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
