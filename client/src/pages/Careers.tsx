import { useEffect } from "react";

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
    <div className="fade-in">
      <section className="min-h-screen pt-16 sm:pt-20 dark-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center mb-16 section-fade">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light text-white mb-8 glow-text">
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Be part of Africa's technological revolution. Build the future while growing your career.
            </p>
          </div>

          {/* Company Culture */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div className="section-fade">
              <img 
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

          {/* Open Positions */}
          <div className="mb-16 section-fade">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">Open Positions</h2>
            <div className="space-y-4">
              <div className="card-hover p-6 rounded-xl" data-testid="job-hardware-engineer">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Senior Hardware Engineer</h3>
                    <p className="text-gray-400 mb-2">Design and develop cutting-edge IoT devices for African markets</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Hardware</span>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">IoT</span>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Senior Level</span>
                    </div>
                  </div>
                  <button className="tech-button-outline px-4 py-2 text-sm rounded mt-4 sm:mt-0" data-testid="button-apply-hardware">
                    Apply Now
                  </button>
                </div>
              </div>

              <div className="card-hover p-6 rounded-xl" data-testid="job-fullstack-developer">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Full Stack Developer</h3>
                    <p className="text-gray-400 mb-2">Build scalable web applications and mobile platforms</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">React</span>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Node.js</span>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Mid Level</span>
                    </div>
                  </div>
                  <button className="tech-button-outline px-4 py-2 text-sm rounded mt-4 sm:mt-0" data-testid="button-apply-fullstack">
                    Apply Now
                  </button>
                </div>
              </div>

              <div className="card-hover p-6 rounded-xl" data-testid="job-product-manager">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Product Manager</h3>
                    <p className="text-gray-400 mb-2">Lead product strategy and development for African market solutions</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Product Strategy</span>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Leadership</span>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Senior Level</span>
                    </div>
                  </div>
                  <button className="tech-button-outline px-4 py-2 text-sm rounded mt-4 sm:mt-0" data-testid="button-apply-product">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="card-hover p-8 rounded-xl section-fade" data-testid="section-benefits">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">Why Work With Us?</h2>
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
    </div>
  );
};

export default Careers;
