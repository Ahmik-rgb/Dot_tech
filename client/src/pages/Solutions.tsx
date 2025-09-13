import { useEffect } from "react";
import LazyImage from "../components/LazyImage";

const Solutions = () => {
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
              Our <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed and manufactured in Africa, for Africa and the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hardware Solutions */}
            <div className="card-hover p-8 rounded-xl section-fade" data-testid="card-hardware-manufacturing">
              <div className="icon-container">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Hardware Manufacturing</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Custom hardware solutions including embedded systems, IoT devices, and industrial equipment designed for African conditions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  IoT Sensors & Devices
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Industrial Controllers
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Agricultural Tech
                </div>
              </div>
            </div>

            {/* Software Solutions */}
            <div className="card-hover p-8 rounded-xl section-fade" data-testid="card-software-development">
              <div className="icon-container">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Software Development</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Enterprise software solutions and mobile applications that address unique African business challenges and opportunities.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Mobile Applications
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Enterprise Systems
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Cloud Platforms
                </div>
              </div>
            </div>

            {/* Consulting Services */}
            <div className="card-hover p-8 rounded-xl section-fade" data-testid="card-technology-consulting">
              <div className="icon-container">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Technology Consulting</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Strategic technology consulting to help organizations leverage technology for growth and digital transformation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Digital Strategy
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  System Integration
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Technology Training
                </div>
              </div>
            </div>
          </div>

          {/* Featured Solution */}
          <div className="mt-16 section-fade">
            <div className="card-hover p-8 rounded-xl" data-testid="card-featured-solution">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <LazyImage
                    src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="African electronics manufacturing line"
                    className="rounded-lg w-full h-auto muted-color"
                    data-testid="img-electronics-manufacturing"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Smart Agriculture Platform</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Our flagship IoT platform combines hardware sensors, mobile applications, and AI-powered analytics to help African farmers optimize crop yields and resource usage.
                  </p>
                  <button className="tech-button text-white px-6 py-3 font-normal text-sm tracking-wide rounded-lg" data-testid="button-learn-more-agriculture">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
