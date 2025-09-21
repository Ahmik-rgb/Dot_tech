import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/95 backdrop-blur-sm border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              {/* Logo Placeholder - Space reserved for DOT Technology logo */}
              <div className="w-48 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border border-primary/30 flex items-center justify-center mb-4" data-testid="footer-logo-placeholder">
                <span className="text-primary font-semibold text-lg">DOT Technology</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Pioneering African technology solutions for global impact. Transforming communities through innovation, 
                sustainability, and cutting-edge research.
              </p>
            </div>
            
            {/* Social links removed per request */}
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <nav className="space-y-3">
              <Link 
                href="/about" 
                className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                data-testid="footer-link-about"
              >
                About Us
              </Link>
              <Link 
                href="/solutions" 
                className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                data-testid="footer-link-innovation"
              >
                Solutions
              </Link>
              <Link 
                href="/innovation" 
                className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                data-testid="footer-link-innovation"
              >
                Innovation Lab
              </Link>
              <Link 
                href="/careers" 
                className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                data-testid="footer-link-careers"
              >
                Careers
              </Link>
              <Link 
                href="/partners" 
                className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                data-testid="footer-link-partners"
              >
                Partners
              </Link>
            </nav>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <nav className="space-y-3">
              <Link 
                href="/solutions" 
                className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                data-testid="footer-link-solutions"
              >
                Technology Solutions
              </Link>
              <a 
                href="/solutions" 
                className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                data-testid="footer-link-consulting"
              >
                Consulting Services
              </a>
              <a 
                href="/solutions" 
                className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                data-testid="footer-link-research"
              >
                Research & Development
              </a>
              <a 
                href="/solutions" 
                className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                data-testid="footer-link-training"
              >
                Training Programs
              </a>
              <a 
                href="/solutions" 
                className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                data-testid="footer-link-support"
              >
                Technical Support
              </a>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Kadco Building #2,
                    Room 305<br></br> Ethio China Friendship Road<br></br> Addis Ababa<br></br>Ethiopia
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+2511147070718" 
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                  data-testid="contact-phone"
                >
                  +251114707071
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@dot-techafrica.com" 
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                  data-testid="contact-email"
                >
                  info@dot-techafrica.com
                </a>
              </div>

              <Link 
                href="/contact" 
                className="inline-flex items-center px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 rounded-lg transition-all duration-300 text-sm font-medium mt-4"
                data-testid="button-contact-us"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center">
              <div className="text-gray-400 text-sm text-center">
                © {currentYear} DOT Technology. All rights reserved.
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;