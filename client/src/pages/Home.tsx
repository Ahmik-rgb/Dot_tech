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

      {/* Detailed Capabilities Overview */}
      <section className="py-16 sm:py-24 lg:py-32 dark-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-8 glow-text">
              Our <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology manufacturing and development capabilities designed to serve Africa's growing digital economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="card-hover p-6 rounded-xl text-center section-fade" data-testid="capability-hardware-design">
              <div className="icon-container mx-auto">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 7H7v2H5v2h2v2h2v-2h2V9H9V7zm0 6H7v2h2v-2zm4-6v2h2v2h2V9h-2V7h-2zm2 6h-2v2h2v-2z M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Hardware Design</h4>
              <p className="text-gray-400 text-sm">Custom PCB design, embedded systems, and IoT device development</p>
            </div>

            <div className="card-hover p-6 rounded-xl text-center section-fade" data-testid="capability-manufacturing">
              <div className="icon-container mx-auto">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 9V7l-2-2-7 7-5.5-5.5L9 5l-4 4v2h2l4-4 5.5 5.5L22 9zm-8 3l-4-4H2v2h6l4 4 4-4h6v-2h-8z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Assembly & Production</h4>
              <p className="text-gray-400 text-sm">State-of-the-art manufacturing facilities with quality control systems</p>
            </div>

            <div className="card-hover p-6 rounded-xl text-center section-fade" data-testid="capability-software">
              <div className="icon-container mx-auto">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Software Development</h4>
              <p className="text-gray-400 text-sm">Full-stack development, mobile apps, and enterprise software solutions</p>
            </div>

            <div className="card-hover p-6 rounded-xl text-center section-fade" data-testid="capability-testing">
              <div className="icon-container mx-auto">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Quality Assurance</h4>
              <p className="text-gray-400 text-sm">Comprehensive testing protocols ensuring product reliability and performance</p>
            </div>
          </div>

          <div className="card-hover p-8 rounded-xl section-fade" data-testid="technology-focus">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Technology Manufacturing Excellence</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Our advanced manufacturing facilities combine traditional engineering excellence with cutting-edge automation, 
                  enabling us to produce high-quality technology products that compete globally while serving local markets.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-gray-400">ISO 9001:2015 certified manufacturing processes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-gray-400">Advanced surface mount technology (SMT) lines</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-gray-400">Automated optical inspection (AOI) systems</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-gray-400">Clean room environments for sensitive components</span>
                  </div>
                </div>
              </div>
              <div className="stats-card p-8 rounded-xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div data-testid="stat-production-capacity">
                    <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                    <div className="text-gray-400 text-sm">Units/Month<br/>Capacity</div>
                  </div>
                  <div data-testid="stat-defect-rate">
                    <div className="text-3xl font-bold text-primary mb-2">0.01%</div>
                    <div className="text-gray-400 text-sm">Defect<br/>Rate</div>
                  </div>
                  <div data-testid="stat-delivery-time">
                    <div className="text-3xl font-bold text-primary mb-2">48hr</div>
                    <div className="text-gray-400 text-sm">Average<br/>Lead Time</div>
                  </div>
                  <div data-testid="stat-certifications">
                    <div className="text-3xl font-bold text-primary mb-2">8</div>
                    <div className="text-gray-400 text-sm">Quality<br/>Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Statistics and Achievements */}
      <section className="py-16 sm:py-24 accent-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-8 glow-text">
              Driving African <span className="text-gradient">Innovation</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our achievements reflect our commitment to building a thriving technology ecosystem in Africa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="stats-card p-6 rounded-xl text-center section-fade" data-testid="achievement-products">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-400 font-medium">Products Launched</div>
              <div className="text-gray-500 text-sm mt-1">Since 2019</div>
            </div>
            <div className="stats-card p-6 rounded-xl text-center section-fade" data-testid="achievement-countries">
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <div className="text-gray-400 font-medium">Countries Served</div>
              <div className="text-gray-500 text-sm mt-1">Across Africa</div>
            </div>
            <div className="stats-card p-6 rounded-xl text-center section-fade" data-testid="achievement-jobs">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-400 font-medium">Jobs Created</div>
              <div className="text-gray-500 text-sm mt-1">Direct & Indirect</div>
            </div>
            <div className="stats-card p-6 rounded-xl text-center section-fade" data-testid="achievement-investment">
              <div className="text-4xl font-bold text-primary mb-2">$5M</div>
              <div className="text-gray-400 font-medium">R&D Investment</div>
              <div className="text-gray-500 text-sm mt-1">Annual</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover p-8 rounded-xl section-fade" data-testid="achievement-awards">
              <div className="icon-container mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Industry Recognition</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• African Innovation Award 2023</li>
                <li>• Manufacturing Excellence Award 2022</li>
                <li>• Sustainability Leadership Award 2021</li>
              </ul>
            </div>

            <div className="card-hover p-8 rounded-xl section-fade" data-testid="achievement-partnerships">
              <div className="icon-container mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Strategic Partnerships</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• 15+ Global Technology Partners</li>
                <li>• 8 African University Collaborations</li>
                <li>• 20+ Local Supply Chain Partners</li>
              </ul>
            </div>

            <div className="card-hover p-8 rounded-xl section-fade" data-testid="achievement-patents">
              <div className="icon-container mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Intellectual Property</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• 12 Patents Filed</li>
                <li>• 6 Proprietary Technologies</li>
                <li>• 3 Open Source Contributions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories and Testimonials */}
      <section className="py-16 sm:py-24 lg:py-32 dark-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-8 glow-text">
              Real <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stories from our partners, clients, and communities showing the tangible impact of African-made technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="card-hover p-8 rounded-xl section-fade" data-testid="story-agriculture">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-400 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Smart Farming Revolution</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our IoT sensors and monitoring systems helped 500+ small-scale farmers in Kenya increase crop yields by 
                  30% while reducing water usage by 25% through precision agriculture techniques.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full mr-3"></div>
                  <div>
                    <div className="text-white font-medium">Sarah Wanjiku</div>
                    <div className="text-gray-400 text-sm">AgriTech Kenya Director</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-hover p-8 rounded-xl section-fade" data-testid="story-healthcare">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 8H5l-2 9h18l-2-9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Healthcare Access</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our portable diagnostic devices have brought medical testing capabilities to remote areas, 
                  serving 10,000+ patients who previously had no access to basic health screenings.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full mr-3"></div>
                  <div>
                    <div className="text-white font-medium">Dr. Amina Hassan</div>
                    <div className="text-gray-400 text-sm">Rural Health Initiative</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-hover p-8 rounded-xl section-fade" data-testid="testimonials">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">What Our Partners Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center" data-testid="testimonial-government">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                </div>
                <p className="text-gray-300 italic mb-4">
                  "DOT Technology's commitment to local manufacturing has been instrumental in our digital transformation initiatives. 
                  They've proven that Africa can compete globally in technology production."
                </p>
                <div className="text-white font-medium">Minister John Okafor</div>
                <div className="text-gray-400 text-sm">ICT Ministry, Nigeria</div>
              </div>

              <div className="text-center" data-testid="testimonial-corporate">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20,6C20.58,6 21.05,6.2 21.42,6.59C21.8,7 22,7.45 22,8V19C22,19.55 21.8,20 21.42,20.41C21.05,20.8 20.58,21 20,21H4C3.42,21 2.95,20.8 2.58,20.41C2.2,20 2,19.55 2,19V8C2,7.45 2.2,7 2.58,6.59C2.95,6.2 3.42,6 4,6H8V4C8,3.42 8.2,2.95 8.59,2.58C9,2.2 9.45,2 10,2H14C14.55,2 15,2.2 15.41,2.58C15.8,2.95 16,3.42 16,4V6H20M4,8V19H20V8H4M10,4V6H14V4H10Z"/>
                  </svg>
                </div>
                <p className="text-gray-300 italic mb-4">
                  "The quality and reliability of DOT's manufacturing services exceeded our expectations. 
                  Their local presence means faster delivery times and better support for our products."
                </p>
                <div className="text-white font-medium">Rebecca Kimani</div>
                <div className="text-gray-400 text-sm">CTO, EcoVillage Solutions</div>
              </div>

              <div className="text-center" data-testid="testimonial-startup">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
                  </svg>
                </div>
                <p className="text-gray-300 italic mb-4">
                  "As a startup, working with DOT Technology gave us access to world-class manufacturing 
                  without the huge upfront costs. They've been true partners in our growth journey."
                </p>
                <div className="text-white font-medium">David Mutua</div>
                <div className="text-gray-400 text-sm">Founder, SmartMeter Africa</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
