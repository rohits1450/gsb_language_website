import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface LanguageCardProps {
  language: string;
  flag: string;
  benefits: string[];
  delay?: number;
  isInView: boolean;
}

const LanguageCard = ({ language, flag, benefits, delay = 0, isInView }: LanguageCardProps) => {
  return (
    <div
      className={`bg-card rounded-xl shadow-card p-6 border border-border transition-all duration-500 card-hover group ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Flag Icon */}
      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
        <span className="text-3xl">{flag}</span>
      </div>

      <h3 className="text-xl font-poppins font-bold text-primary text-center mb-4">
        {language} Language
      </h3>

      <ul className="space-y-3 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2 text-muted-foreground">
            <span className="text-secondary mt-1">•</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <Button asChild variant="secondary" className="w-full group/btn">
        <Link to="/payment">
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </Button>
    </div>
  );
};

export default LanguageCard;
