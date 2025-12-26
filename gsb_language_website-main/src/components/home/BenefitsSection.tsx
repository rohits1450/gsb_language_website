import { Users, Lightbulb, Clock, Award, UsersRound, IndianRupee } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const benefits = [
  {
    icon: Users,
    title: 'Expert Native Instructors',
    description: 'Learn from certified native speakers with years of teaching experience.',
  },
  {
    icon: Lightbulb,
    title: 'Interactive Learning Methods',
    description: 'Engage with multimedia content, games, and real-world scenarios.',
  },
  {
    icon: Clock,
    title: 'Flexible Schedules',
    description: 'Choose from weekday, weekend, or evening batches that fit your lifestyle.',
  },
  {
    icon: Award,
    title: 'Certification Programs',
    description: 'Earn internationally recognized certificates to boost your career.',
  },
  {
    icon: UsersRound,
    title: 'Small Batch Sizes',
    description: 'Personalized attention with maximum 10 students per batch.',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description: 'Quality education at competitive rates with flexible payment options.',
  },
];

const BenefitsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-12">
          <h2 className="section-heading">Why Choose GSB Educare?</h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`flex items-start gap-4 p-6 rounded-lg transition-all duration-500 hover:bg-muted ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-secondary icon-hover" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
