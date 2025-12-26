import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import LanguageProgramsSection from '@/components/home/LanguageProgramsSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import MethodologySection from '@/components/home/MethodologySection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MissionSection />
      <LanguageProgramsSection />
      <BenefitsSection />
      <MethodologySection />
    </Layout>
  );
};

export default Index;
