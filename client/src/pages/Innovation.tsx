import { useEffect } from "react";
import LazyImage from "../components/LazyImage";

const Innovation = () => {
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
              Innovation <span className="text-gradient">Lab</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of African technology through cutting-edge research and development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="section-fade">
              <LazyImage
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="African researchers in technology laboratory"
                className="rounded-xl w-full h-auto muted-color"
                data-testid="img-tech-laboratory"
              />
            </div>
            <div className="flex flex-col justify-center section-fade">
              <h2 className="text-2xl font-semibold text-white mb-6">Research & Development</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our R&D team focuses on developing technologies that address Africa's unique challenges while building capabilities for global competitiveness.
              </p>
              <div className="space-y-4">
                <div className="flex items-start" data-testid="feature-ai-ml">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">AI & Machine Learning</h4>
                    <p className="text-gray-400 text-sm">Developing AI solutions for agricultural optimization, healthcare, and education.</p>
                  </div>
                </div>
                <div className="flex items-start" data-testid="feature-iot-ecosystems">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">IoT Ecosystems</h4>
                    <p className="text-gray-400 text-sm">Creating connected device networks for smart cities and rural development.</p>
                  </div>
                </div>
                <div className="flex items-start" data-testid="feature-renewable-energy">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Renewable Energy Tech</h4>
                    <p className="text-gray-400 text-sm">Developing sustainable energy solutions for off-grid communities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Innovation Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-hover p-8 rounded-xl section-fade" data-testid="card-smart-city">
              <h3 className="text-xl font-semibold text-white mb-4">Smart City Initiative</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Developing integrated technology solutions for sustainable urban development across African cities.
              </p>
              <LazyImage
                src="https://pixabay.com/get/geee23603353508524d47c2ee8e4105cfae3c21e5588a0a7fb8b8ccc571bfdaec3dd3dc7d208850e102050d9219dbca61ef28396898a5b2f8370035d66899622a_1280.jpg"
                alt="Modern African city skyline"
                className="rounded-lg w-full h-48 object-cover muted-color"
                data-testid="img-smart-city"
              />
            </div>

            <div className="card-hover p-8 rounded-xl section-fade" data-testid="card-healthcare-innovation">
              <h3 className="text-xl font-semibold text-white mb-4">Healthcare Innovation</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Leveraging technology to improve healthcare access and quality in remote and underserved areas.
              </p>
              <LazyImage
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                alt="Healthcare technology in Africa"
                className="rounded-lg w-full h-48 object-cover muted-color"
                data-testid="img-healthcare-tech"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
