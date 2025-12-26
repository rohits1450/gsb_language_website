import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Check, Lock, Shield, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useInView } from '@/hooks/useInView';
import { toast } from '@/hooks/use-toast';

const courses = [
  {
    id: 'german',
    language: 'German',
    flag: '🇩🇪',
    duration: '6 Months (120 Hours)',
    level: 'Beginner to B1',
    price: 35000,
    features: [
      'Live interactive classes with native speakers',
      'Comprehensive grammar & vocabulary modules',
      'Cultural immersion sessions',
      'Mock tests & certification prep',
      'Lifetime access to learning materials',
    ],
    featured: true,
  },
  {
    id: 'japanese',
    language: 'Japanese',
    flag: '🇯🇵',
    duration: '6 Months (100 Hours)',
    level: 'Beginner to N5',
    price: 32000,
    features: [
      'Hiragana, Katakana & Kanji mastery',
      'Conversational Japanese practice',
      'Anime & media-based learning',
      'JLPT N5 preparation',
      'Access to exclusive learning resources',
    ],
    featured: false,
  },
  {
    id: 'mandarin',
    language: 'Mandarin',
    flag: '🇨🇳',
    duration: '6 Months (100 Hours)',
    level: 'Beginner to HSK 2',
    price: 30000,
    features: [
      'Pinyin & character writing system',
      'Tone & pronunciation training',
      'Business Mandarin basics',
      'HSK 2 certification prep',
      'Cultural context integration',
    ],
    featured: false,
  },
];

const termsAndConditions = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: 'By enrolling in any course offered by GSB Educare Pvt Ltd, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not proceed with the enrollment.',
  },
  {
    id: 'registration',
    title: 'Course Registration & Fees',
    content: 'Payment methods accepted include UPI, Credit/Debit Cards, Net Banking, and Digital Wallets. All fees are quoted in Indian Rupees (INR). Course fees once paid are non-refundable except as specified in our refund policy. Full payment is required before course commencement.',
  },
  {
    id: 'refund',
    title: 'Refund & Cancellation Policy',
    content: 'Students may request a full refund within 7 days before the course start date. Refund requests made after the course has commenced will not be entertained. Approved refunds will be processed within 10-15 business days to the original payment method.',
  },
  {
    id: 'obligations',
    title: 'User Obligations',
    content: 'Students must provide accurate personal and contact information during registration. Regular attendance is mandatory; students with less than 75% attendance may not receive certification. Course materials must not be shared or distributed without written consent.',
  },
  {
    id: 'security',
    title: 'Payment Security',
    content: 'All payments are processed through secure, PCI-DSS compliant payment gateways. We do not store your credit/debit card information on our servers. SSL encryption is used to protect all sensitive data during transmission.',
  },
  {
    id: 'intellectual',
    title: 'Intellectual Property',
    content: 'All course materials, including videos, documents, and assessments, are the intellectual property of GSB Educare Pvt Ltd. Unauthorized reproduction, distribution, or modification of materials is strictly prohibited.',
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: 'GSB Educare shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by the student for the specific course.',
  },
  {
    id: 'governing',
    title: 'Governing Law',
    content: 'These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.',
  },
  {
    id: 'contact',
    title: 'Contact for Queries',
    content: 'For any queries regarding these Terms and Conditions, please contact GSB Educare Pvt Ltd at contact@gsbeducare.com or call +91-98765-43210. Our support team is available Monday to Saturday, 9 AM to 6 PM IST.',
  },
];

const Payment = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { ref: coursesRef, isInView: coursesInView } = useInView();

  const selectedCourseData = courses.find((c) => c.id === selectedCourse);

  const handlePayment = () => {
    if (!selectedCourse || !agreedToTerms) return;
    
    toast({
      title: "Redirecting to Payment Gateway",
      description: "You will be redirected to our secure payment partner shortly.",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-primary-foreground mb-4 animate-fade-in-up">
            Course Enrollment & Payment
          </h1>
          <p className="text-xl text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Secure and Easy Payment Process
          </p>
        </div>
      </section>

      {/* Course Selection */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4" ref={coursesRef}>
          <h2 className="section-heading text-center">Select Your Course</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {courses.map((course, index) => (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course.id)}
                className={`relative bg-card rounded-xl shadow-card p-6 cursor-pointer transition-all duration-500 border-2 ${
                  selectedCourse === course.id
                    ? 'border-secondary shadow-orange-glow scale-[1.02]'
                    : 'border-transparent hover:border-secondary/30 hover:-translate-y-1'
                } ${coursesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {course.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <span className="text-4xl mb-3 block">{course.flag}</span>
                  <h3 className="text-xl font-poppins font-bold text-primary">
                    {course.language}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{course.duration}</p>
                  <p className="text-xs text-muted-foreground">{course.level}</p>
                </div>

                <div className="text-center mb-6">
                  <span className="text-3xl font-poppins font-bold text-primary">
                    ₹{course.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-center">
                  <div
                    className={`w-5 h-5 rounded-full border-2 transition-colors ${
                      selectedCourse === course.id
                        ? 'border-secondary bg-secondary'
                        : 'border-muted-foreground'
                    }`}
                  >
                    {selectedCourse === course.id && (
                      <Check className="w-4 h-4 text-secondary-foreground" />
                    )}
                  </div>
                  <span className="ml-2 text-sm font-medium">
                    {selectedCourse === course.id ? 'Selected' : 'Select Course'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-heading text-center">Terms and Conditions</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-12 rounded-full" />

          <Accordion type="single" collapsible className="space-y-3">
            {termsAndConditions.map((term, index) => (
              <AccordionItem
                key={term.id}
                value={term.id}
                className="bg-card rounded-lg shadow-sm border border-border px-4"
              >
                <AccordionTrigger className="text-left font-poppins font-semibold text-primary hover:text-secondary transition-colors">
                  {index + 1}. {term.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {term.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Payment Gateway */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-md">
          {selectedCourseData ? (
            <div className="bg-card rounded-xl shadow-card p-6 border border-border">
              <h3 className="text-lg font-poppins font-bold text-primary mb-4 text-center">
                Order Summary
              </h3>
              
              <div className="bg-muted rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{selectedCourseData.flag}</span>
                  <div>
                    <p className="font-semibold text-foreground">{selectedCourseData.language} Language Course</p>
                    <p className="text-sm text-muted-foreground">{selectedCourseData.duration}</p>
                  </div>
                </div>
                <div className="border-t border-border pt-3 flex justify-between items-center">
                  <span className="font-medium">Total Amount</span>
                  <span className="text-xl font-poppins font-bold text-primary">
                    ₹{selectedCourseData.price.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                  className="mt-0.5"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
                >
                  I have read and agree to the <span className="text-secondary font-medium">Terms and Conditions</span>
                </label>
              </div>

              <Button
                onClick={handlePayment}
                disabled={!agreedToTerms}
                variant="secondary"
                size="lg"
                className="w-full group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Lock className="w-4 h-4 mr-2" />
                Proceed to Payment
              </Button>

              <div className="flex items-center justify-center gap-4 mt-6 text-muted-foreground">
                <div className="flex items-center gap-1 text-xs">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <CreditCard className="w-4 h-4 text-primary" />
                  <span>PCI-DSS Compliant</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              <p className="mb-2">Please select a course above to proceed with payment.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
