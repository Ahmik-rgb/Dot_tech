import { useEffect } from "react";

const About = () => {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 section-fade">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light text-white mb-8 glow-text">
                About <span className="text-gradient">DOT Technology</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Founded on the belief that Africa has the talent and capability to manufacture world-class technology products, DOT Technology is pioneering a new era of African innovation.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We're not just building products; we're building an ecosystem that empowers local talent, creates sustainable jobs, and positions Africa as a global technology leader.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="stats-card p-6 rounded-lg" data-testid="stats-engineers">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-400">Local Engineers</div>
                </div>
                <div className="stats-card p-6 rounded-lg" data-testid="stats-products">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-gray-400">Products Launched</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 section-fade">
              <img 
                src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern African technology manufacturing facility" 
                className="rounded-xl shadow-lg w-full h-auto muted-color"
                data-testid="img-manufacturing-facility"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-24 accent-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-hover p-8 rounded-xl section-fade" data-testid="card-mission">
              <h3 className="text-2xl font-semibold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To accelerate Africa's technological independence by building world-class manufacturing capabilities and fostering innovation that serves both local and global markets.
              </p>
            </div>
            <div className="card-hover p-8 rounded-xl section-fade" data-testid="card-vision">
              <h3 className="text-2xl font-semibold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                A future where Africa is recognized as a global hub for technology innovation and manufacturing, creating prosperity and opportunity for all Africans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
