import { useEffect } from "react";
import { Link } from "wouter";

const Partners = () => {
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
    <div className="fade-in">
      <section className="min-h-screen pt-16 sm:pt-20 dark-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center mb-16 section-fade">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light text-white mb-8 glow-text">
              Our <span className="text-gradient">Partners</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building strategic partnerships to accelerate African technological advancement and create sustainable growth.
            </p>
          </div>

          {/* Partnership Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card-hover p-8 rounded-xl text-center section-fade" data-testid="card-technology-partners">
              <div className="icon-container mx-auto">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Technology Partners</h3>
              <p className="text-gray-400 leading-relaxed">
                Collaborating with global technology companies to bring innovation to Africa.
              </p>
            </div>

            <div className="card-hover p-8 rounded-xl text-center section-fade" data-testid="card-investment-partners">
              <div className="icon-container mx-auto">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Investment Partners</h3>
              <p className="text-gray-400 leading-relaxed">
                Working with investors who share our vision for African technological independence.
              </p>
            </div>

            <div className="card-hover p-8 rounded-xl text-center section-fade" data-testid="card-academic-partners">
              <div className="icon-container mx-auto">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Academic Partners</h3>
              <p className="text-gray-400 leading-relaxed">
                Partnering with universities to develop talent and advance research capabilities.
              </p>
            </div>
          </div>

          {/* Current Partners Section */}
          <div className="card-hover p-8 rounded-xl mb-16 section-fade" data-testid="section-current-partners">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">Current Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="w-24 h-12 bg-gray-600 rounded mx-auto mb-2"></div>
                <p className="text-gray-400 text-sm">Partner Logo</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-12 bg-gray-600 rounded mx-auto mb-2"></div>
                <p className="text-gray-400 text-sm">Partner Logo</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-12 bg-gray-600 rounded mx-auto mb-2"></div>
                <p className="text-gray-400 text-sm">Partner Logo</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-12 bg-gray-600 rounded mx-auto mb-2"></div>
                <p className="text-gray-400 text-sm">Partner Logo</p>
              </div>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="section-fade">
              <h2 className="text-2xl font-semibold text-white mb-6">Why Partner With Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start" data-testid="benefit-market-access">
                  <div className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Market Access</h4>
                    <p className="text-gray-400 text-sm">Gain access to rapidly growing African markets with local expertise and connections.</p>
                  </div>
                </div>
                <div className="flex items-start" data-testid="benefit-local-innovation">
                  <div className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Local Innovation</h4>
                    <p className="text-gray-400 text-sm">Collaborate with African talent to develop solutions for local and global challenges.</p>
                  </div>
                </div>
                <div className="flex items-start" data-testid="benefit-sustainable-growth">
                  <div className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Sustainable Growth</h4>
                    <p className="text-gray-400 text-sm">Build long-term value through sustainable development and social impact.</p>
                  </div>
                </div>
              </div>
              <Link href="/contact" data-testid="button-become-partner">
                <button className="tech-button text-white px-6 py-3 font-normal text-sm tracking-wide rounded-lg mt-8">
                  Become a Partner
                </button>
              </Link>
            </div>
            <div className="section-fade">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="African business partnership meeting" 
                className="rounded-xl w-full h-auto muted-color"
                data-testid="img-partnership-meeting"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
