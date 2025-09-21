import { useEffect } from "react";
import LazyImage from "../components/LazyImage";
import PageTransition from "@/components/PageTransition";

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
    <PageTransition>
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
                src="/smart.png"
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

      {/* Innovation Methodology */}
      <section className="py-16 sm:py-24 accent-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-8 glow-text">
              Innovation <span className="text-gradient">Methodology</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our structured approach to innovation ensures every solution addresses real African challenges while maintaining global competitiveness
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/50 to-primary/10"></div>
            
            <div className="space-y-16">
              {/* Research Phase */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center section-fade" data-testid="methodology-research">
                <div className="lg:pr-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 z-10 relative">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Research & Discovery</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    We begin by conducting extensive field research across Africa to understand real challenges faced by communities, 
                    businesses, and institutions. This includes stakeholder interviews, market analysis, and technology gap assessments.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Community needs assessment and user interviews</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Market research and competitive analysis</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Technology landscape evaluation</span>
                    </div>
                  </div>
                </div>
                <div className="lg:pl-8">
                  <LazyImage
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Researchers conducting field studies in Africa"
                    className="rounded-xl w-full h-auto muted-color"
                    data-testid="img-research-phase"
                  />
                </div>
              </div>

              {/* Design Phase */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center section-fade" data-testid="methodology-design">
                <div className="order-2 lg:order-1 lg:pr-8">
                  <LazyImage
                    src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Technology design and prototyping process"
                    className="rounded-xl w-full h-auto muted-color"
                    data-testid="img-design-phase"
                  />
                </div>
                <div className="order-1 lg:order-2 lg:pl-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 z-10 relative">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Design & Prototyping</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Our multidisciplinary team transforms research insights into innovative solutions through collaborative design thinking, 
                    rapid prototyping, and iterative development processes.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Design thinking workshops and ideation sessions</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Rapid prototyping and proof-of-concept development</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">User experience design and interface development</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Development Phase */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center section-fade" data-testid="methodology-development">
                <div className="lg:pr-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 z-10 relative">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Development & Testing</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    We build robust, scalable solutions using agile development methodologies, with continuous testing and validation 
                    in real African environments to ensure reliability and effectiveness.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Agile software development and hardware fabrication</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Environmental and stress testing for African conditions</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Beta testing with real users and communities</span>
                    </div>
                  </div>
                </div>
                <div className="lg:pl-8">
                  <LazyImage
                    src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Development and testing lab environment"
                    className="rounded-xl w-full h-auto muted-color"
                    data-testid="img-development-phase"
                  />
                </div>
              </div>

              {/* Deployment Phase */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center section-fade" data-testid="methodology-deployment">
                <div className="order-2 lg:order-1 lg:pr-8">
                  <LazyImage
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Technology deployment and support in African communities"
                    className="rounded-xl w-full h-auto muted-color"
                    data-testid="img-deployment-phase"
                  />
                </div>
                <div className="order-1 lg:order-2 lg:pl-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 z-10 relative">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Deployment & Support</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    We ensure successful adoption through comprehensive training, ongoing support, and continuous improvement 
                    based on user feedback and performance data.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Phased rollout and implementation strategy</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">User training and capacity building programs</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Continuous monitoring and iterative improvements</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patents and Achievements */}
      <section className="py-16 sm:py-24 lg:py-32 dark-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-8 glow-text">
              Patents & <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our commitment to innovation has resulted in breakthrough technologies and recognition across the African tech ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center section-fade">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2" data-testid="patent-count">15+</h3>
              <p className="text-gray-300 mb-4">Patent Applications</p>
              <p className="text-gray-400 text-sm">Filed across IoT, AI, and manufacturing technologies</p>
            </div>

            <div className="text-center section-fade">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2" data-testid="award-count">8</h3>
              <p className="text-gray-300 mb-4">Innovation Awards</p>
              <p className="text-gray-400 text-sm">Recognition from African and international tech organizations</p>
            </div>

            <div className="text-center section-fade">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2" data-testid="collaboration-count">25+</h3>
              <p className="text-gray-300 mb-4">Research Collaborations</p>
              <p className="text-gray-400 text-sm">With universities and research institutions across Africa</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-hover p-8 rounded-xl section-fade" data-testid="patent-highlights">
              <h3 className="text-xl font-semibold text-white mb-6">Patent Highlights</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-white font-medium mb-2">Adaptive IoT Network Protocol</h4>
                  <p className="text-gray-400 text-sm mb-2">Patent Application: AF2024/001287</p>
                  <p className="text-gray-400 text-sm">Self-healing mesh network protocol optimized for intermittent connectivity in rural African environments.</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-white font-medium mb-2">Solar-Powered Environmental Sensor Array</h4>
                  <p className="text-gray-400 text-sm mb-2">Patent Application: AF2024/002156</p>
                  <p className="text-gray-400 text-sm">Ultra-low power sensor system with 7+ year battery life and integrated solar charging.</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-white font-medium mb-2">AI-Driven Crop Disease Detection</h4>
                  <p className="text-gray-400 text-sm mb-2">Patent Application: AF2023/003421</p>
                  <p className="text-gray-400 text-sm">Machine learning algorithm trained on African crop varieties and disease patterns.</p>
                </div>
              </div>
            </div>

            <div className="card-hover p-8 rounded-xl section-fade" data-testid="awards-recognition">
              <h3 className="text-xl font-semibold text-white mb-6">Awards & Recognition</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">African Tech Innovation Award 2024</h4>
                    <p className="text-gray-400 text-sm">Best IoT Solution for Agriculture</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Global South Tech Excellence 2023</h4>
                    <p className="text-gray-400 text-sm">Outstanding Hardware Manufacturing</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">UN SDG Technology Prize 2023</h4>
                    <p className="text-gray-400 text-sm">Sustainable Development Impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-16 sm:py-24 accent-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-8 glow-text">
              Technology <span className="text-gradient">Roadmap</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our vision for the future of African technology, with breakthrough innovations planned for the next decade
            </p>
          </div>

          <div className="space-y-12">
            {/* 2025-2026 */}
            <div className="card-hover p-8 rounded-xl section-fade" data-testid="roadmap-2025-2026">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-lg">25-26</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Near-Term Horizon</h3>
                  <p className="text-primary">2025 - 2026</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">Advanced AI Integration</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Edge AI processing chips for IoT devices</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Natural language interfaces in local African languages</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Predictive analytics for agricultural and healthcare applications</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">Manufacturing Scale-Up</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Second manufacturing facility in East Africa</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Automated production lines for high-volume components</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Supply chain optimization and local sourcing initiatives</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2027-2028 */}
            <div className="card-hover p-8 rounded-xl section-fade" data-testid="roadmap-2027-2028">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-lg">27-28</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Mid-Term Vision</h3>
                  <p className="text-primary">2027 - 2028</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">Next-Generation Technologies</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Quantum-resistant security implementations</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Advanced materials research for extreme environments</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Satellite connectivity integration for remote areas</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">Pan-African Expansion</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Regional innovation hubs in 5 African countries</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Cross-border technology transfer programs</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Continental standards development and harmonization</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2029-2030 */}
            <div className="card-hover p-8 rounded-xl section-fade" data-testid="roadmap-2029-2030">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-lg">29-30</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Long-Term Goals</h3>
                  <p className="text-primary">2029 - 2030</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">Breakthrough Innovations</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Neuromorphic computing for ultra-low power AI</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Bio-inspired materials and self-healing electronics</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Holographic and augmented reality interfaces</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">Global Impact</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Technology export leadership in emerging markets</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Leading contributor to global open-source initiatives</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Africa as global hub for sustainable tech innovation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Investment in Innovation */}
          <div className="mt-16 section-fade">
            <div className="card-hover p-8 rounded-xl text-center">
              <h3 className="text-2xl font-semibold text-white mb-6">Investment in Innovation</h3>
              <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                We reinvest 25% of our revenue into R&D activities, ensuring continuous innovation and technological advancement 
                that keeps Africa at the forefront of global technology development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="stats-card p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="rd-investment">$2.5M+</div>
                  <div className="text-gray-400">Annual R&D Investment</div>
                </div>
                <div className="stats-card p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="research-team">45</div>
                  <div className="text-gray-400">Research Team Members</div>
                </div>
                <div className="stats-card p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="active-projects">12</div>
                  <div className="text-gray-400">Active Research Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Innovation;
