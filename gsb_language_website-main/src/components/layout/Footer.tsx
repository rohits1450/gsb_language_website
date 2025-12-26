import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-footer-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-secondary p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-xl font-poppins font-bold">GSB Educare</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering global citizens through excellence in German, Japanese, and Mandarin language education. Join thousands of successful learners worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Payment', path: '/payment' },
                { name: 'Terms & Conditions', path: '/payment' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  No.51, Sri Venkateswara Nagar, Pudhuper Village, Sriperumbudur, Kancheepuram District - 600069
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="mailto:contact@gsbeducare.com"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                >
                  contact@gsbeducare.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                >
                  +91-98765-43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 GSB Educare Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
