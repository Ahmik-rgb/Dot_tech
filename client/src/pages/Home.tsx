import { useEffect } from "react";
import { Link } from "wouter";
import PageTransition from "@/components/PageTransition";

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section-fade');
    setTimeout(() => {
      sections.forEach(section => {
        section.classList.add('visible');
      });
    }, 300);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    sections.forEach(el => {
      observer.observe(el);
    });

    return () => {
      sections.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center pt-16 sm:pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="hero-title text-3xl sm:text-5xl lg:text-7xl font-light text-white mb-6 sm:mb-8 leading-tight section-fade glow-text">
              Transforming Africa<br/>
              Through Local<br/>
              <span className="text-gradient font-normal">Innovation</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-2xl font-light leading-relaxed section-fade">
              DOT Technology is building Africa's future in technology manufacturing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 section-fade">
              <Link 
                href="/about" 
                data-testid="button-learn-more"
                className="tech-button text-white px-6 sm:px-8 py-3 sm:py-4 font-normal text-sm tracking-wide w-full sm:w-auto rounded-lg"
              >
                Learn More
              </Link>
              <Link 
                href="/partners" 
                data-testid="button-partner-with-us"
                className="tech-button-outline px-6 sm:px-8 py-3 sm:py-4 font-normal text-sm tracking-wide w-full sm:w-auto rounded-lg"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="section-padding py-16 sm:py-24 lg:py-32 accent-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center" data-testid="card-local-manufacturing">
              <div className="icon-container mx-auto">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Local Manufacturing</h3>
              <p className="text-gray-400 leading-relaxed">Building technology solutions right here in Africa, for Africa.</p>
            </div>
            <div className="text-center" data-testid="card-innovation-hub">
              <div className="icon-container mx-auto">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovation Hub</h3>
              <p className="text-gray-400 leading-relaxed">Driving technological advancement through African ingenuity.</p>
            </div>
            <div className="text-center" data-testid="card-economic-growth">
              <div className="icon-container mx-auto">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 12h-5l-2 4h5l2-4zm-6-4h5l-2-4h-5l2 4zm9-4v16h-16v-16h16zm2-2h-20v20h20v-20z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Economic Growth</h3>
              <p className="text-gray-400 leading-relaxed">Creating jobs and driving economic development across the continent.</p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
