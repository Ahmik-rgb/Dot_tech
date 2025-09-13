import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const Navigation = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/solutions", label: "Solutions" },
    { href: "/innovation", label: "Innovation" },
    { href: "/partners", label: "Partners" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 w-full glass-effect backdrop-blur-[2px] border-white/10 z-50" style={{background: "hsla(0, 0%, 100%, 0)"}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" data-testid="link-home-logo">
                <div className="w-32 h-8 sm:w-auto sm:h-auto rounded-md flex items-center justify-center" style={{background: "hsla(0, 0%, 100%, 0.3)"}}>
                  <span className="text-primary font-bold text-xl">DOT</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8 xl:space-x-12">
              {navigationItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                  className={`nav-link text-gray-300 font-normal text-sm ${location === item.href ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none p-2"
              data-testid="button-mobile-menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`lg:hidden glass-effect border-t border-white/10 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 sm:px-6 py-4 space-y-3">
          {navigationItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              data-testid={`link-mobile-${item.label.toLowerCase()}`}
              className="block py-3 text-gray-300 font-normal text-sm border-b border-white/10 last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
