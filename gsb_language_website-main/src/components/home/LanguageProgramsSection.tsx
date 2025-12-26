import { useInView } from '@/hooks/useInView';
import LanguageCard from './LanguageCard';

const languages = [
  {
    language: 'German',
    flag: '🇩🇪',
    benefits: [
      'Access to top EU career opportunities',
      'Gateway to world-class engineering & technology',
      'Rich cultural heritage and literature',
      'Strong business and trade connections',
    ],
  },
  {
    language: 'Japanese',
    flag: '🇯🇵',
    benefits: [
      'Explore anime, manga & pop culture',
      'Connect with leading tech companies',
      'Master unique writing systems',
      'Bridge to Asian business markets',
    ],
  },
  {
    language: 'Mandarin',
    flag: '🇨🇳',
    benefits: [
      'World\'s most spoken language (1B+ speakers)',
      'Essential for global business success',
      'Unlock career advancement opportunities',
      'Access to rich 5000-year heritage',
    ],
  },
];

const LanguageProgramsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-12">
          <h2 className="section-heading">Language Programs We Offer</h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {languages.map((lang, index) => (
            <LanguageCard
              key={lang.language}
              {...lang}
              delay={index * 150}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageProgramsSection;
