import { Check } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const features = [
  'Immersive conversation practice',
  'Grammar and vocabulary building',
  'Cultural context integration',
  'Interactive digital resources',
  'Regular assessments and feedback',
  'Real-world application exercises',
];

const MethodologySection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Image Placeholder */}
          <div
            className={`relative transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-gradient-hero rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🎓</div>
                <p className="text-primary-foreground font-poppins font-semibold text-xl">
                  Interactive Learning Experience
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold shadow-lg">
              1000+ Students Trained
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h2 className="section-heading">Our Learning Methodology</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our proven teaching approach combines traditional methods with modern technology, 
              ensuring you gain practical language skills that you can use in real-world situations.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={feature}
                  className="flex items-center gap-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-secondary/10 p-1.5 rounded-full">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
