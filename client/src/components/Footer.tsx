import { Link } from "wouter";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook } from "lucide-react";

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
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/5 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 border border-white/10 hover:border-primary/30"
                data-testid="social-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/5 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 border border-white/10 hover:border-primary/30"
                data-testid="social-twitter"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/5 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 border border-white/10 hover:border-primary/30"
                data-testid="social-github"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/5 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 border border-white/10 hover:border-primary/30"
                data-testid="social-facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
              </a>
            </div>
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
              <a 
                href="#" 
                className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                data-testid="footer-link-news"
              >
                News & Updates
              </a>
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
                href="#" 
                className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                data-testid="footer-link-consulting"
              >
                Consulting Services
              </a>
              <a 
                href="#" 
                className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                data-testid="footer-link-research"
              >
                Research & Development
              </a>
              <a 
                href="#" 
                className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                data-testid="footer-link-training"
              >
                Training Programs
              </a>
              <a 
                href="#" 
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
                    Technology Hub, Innovation District<br />
                    Lagos, Nigeria<br />
                    West Africa
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+234-1-234-5678" 
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                  data-testid="contact-phone"
                >
                  +234 (1) 234-5678
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@dottechnology.africa" 
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                  data-testid="contact-email"
                >
                  info@dottechnology.africa
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

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white font-semibold text-lg mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for the latest updates on African technology innovation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                data-testid="input-newsletter-email"
              />
              <button 
                className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium"
                data-testid="button-newsletter-subscribe"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} DOT Technology. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors"
                data-testid="footer-link-privacy"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors"
                data-testid="footer-link-terms"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors"
                data-testid="footer-link-cookies"
              >
                Cookie Policy
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors"
                data-testid="footer-link-accessibility"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;