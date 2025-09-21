import { useEffect } from "react";
import LazyImage from "../components/LazyImage";
import PageTransition from "@/components/PageTransition";

const Careers = () => {
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
      <section className="min-h-screen pt-16 sm:pt-20 dark-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          
          {/* Header */}
          <div className="text-center mb-16 section-fade">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light text-white mb-8 glow-text">
              Grow With Us – <span className="text-gradient">Be Part of Africa’s Digital Future</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Be part of Africa's technological revolution. Build the future while growing your career.
            </p>
          </div>

          {/* Company Culture */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div className="section-fade">
              <LazyImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Diverse African tech team collaborating"
                className="rounded-xl w-full h-auto muted-color"
                data-testid="img-team-collaboration"
              />
            </div>
            <div className="section-fade">
              <h2 className="text-2xl font-semibold text-white mb-6">Our Culture</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                We believe in the power of African talent and innovation. Our team is driven by purpose, collaboration, and the vision of technological independence for Africa.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="stats-card p-4 rounded-lg text-center" data-testid="stats-satisfaction">
                  <div className="text-2xl font-bold text-primary mb-1">95%</div>
                  <div className="text-gray-400 text-sm">Employee Satisfaction</div>
                </div>
                <div className="stats-card p-4 rounded-lg text-center" data-testid="stats-countries">
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-gray-400 text-sm">Countries Represented</div>
                </div>
              </div>
            </div>
          </div>

          {/* Careers Info Sections (replaces job listings) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 section-fade">
            <div className="card-hover p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Work With Us</h2>
              <p className="text-gray-400">Explore opportunities across engineering, R&D, and management. Join a mission-driven team shaping Africa’s tech future.</p>
            </div>
            <div className="card-hover p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Internships & Graduate Programs</h2>
              <p className="text-gray-400">We’re building the next generation of African tech leaders. Gain real-world experience and mentorship to accelerate your career.</p>
            </div>
            <div className="card-hover p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Employee Stories</h2>
              <p className="text-gray-400">Hear from DOT team members about their career journeys, growth, and contributions to building Africa’s digital future.</p>
            </div>
            <div className="card-hover p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Why Join DOT?</h2>
              <p className="text-gray-400">Experience an innovative culture, strong values, and endless opportunities for professional growth and impact.</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="card-hover p-8 rounded-xl section-fade" data-testid="section-benefits">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">Perks & Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center" data-testid="benefit-competitive">
                <div className="icon-container mx-auto">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Competitive Benefits</h3>
                <p className="text-gray-400 text-sm">Health insurance, equity options, professional development budget</p>
              </div>
              <div className="text-center" data-testid="benefit-flexible">
                <div className="icon-container mx-auto">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Flexible Work</h3>
                <p className="text-gray-400 text-sm">Remote work options, flexible hours, work-life balance</p>
              </div>
              <div className="text-center" data-testid="benefit-growth">
                <div className="icon-container mx-auto">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Growth Opportunities</h3>
                <p className="text-gray-400 text-sm">Career advancement, mentorship programs, skills development</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};

export default Careers;