import { useInView } from '@/hooks/useInView';

const MissionSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-3xl text-center transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="section-heading">Our Mission</h2>
        <div className="w-16 h-1 bg-secondary mx-auto mb-8 rounded-full" />
        <p className="text-lg text-muted-foreground leading-relaxed">
          At GSB Educare, we are committed to breaking language barriers and empowering individuals to achieve global success. Our expert-led programs combine innovative teaching methodologies with cultural immersion, creating confident communicators ready to thrive in an interconnected world. We believe that language learning is not just about words—it's about opening doors to new opportunities, cultures, and perspectives.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
