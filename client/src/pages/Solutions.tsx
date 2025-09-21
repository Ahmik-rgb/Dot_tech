import { useEffect } from "react";
import LazyImage from "../components/LazyImage";
import iotImage from "../../..//iot.jpg";
import PageTransition from "@/components/PageTransition";

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
    <PageTransition>
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

      {/* Detailed Service Descriptions */}
      <section className="py-16 sm:py-24 accent-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-8 glow-text">
              Service <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology services from concept to deployment, designed specifically for African markets
            </p>
          </div>

          <div className="space-y-16">
            {/* IoT Solutions Detail */}
            <div className="card-hover p-8 rounded-xl section-fade" data-testid="service-iot-detail">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="icon-container mr-4">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">IoT & Sensor Solutions</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Custom IoT devices and sensor networks designed for African environmental conditions, 
                    from agricultural monitoring to smart city infrastructure.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="stats-card p-4 rounded-lg text-center" data-testid="iot-deployments">
                      <div className="text-2xl font-bold text-primary mb-1">15K+</div>
                      <div className="text-gray-400 text-sm">Devices Deployed</div>
                    </div>
                    <div className="stats-card p-4 rounded-lg text-center" data-testid="iot-uptime">
                      <div className="text-2xl font-bold text-primary mb-1">99.7%</div>
                      <div className="text-gray-400 text-sm">Network Uptime</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Environmental monitoring (temperature, humidity, air quality)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Agricultural sensors (soil moisture, pH, nutrients)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Industrial monitoring (machinery health, energy usage)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <LazyImage
                    src={iotImage}
                    alt="IoT sensor network deployment in African farm"
                    className="rounded-xl w-full h-auto muted-color"
                    data-testid="img-iot-deployment"
                  />
                </div>
              </div>
            </div>

            {/* Healthcare Technology Detail */}
            <div className="card-hover p-8 rounded-xl section-fade" data-testid="service-healthcare-detail">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <LazyImage
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Healthcare technology in African clinic"
                    className="rounded-xl w-full h-auto muted-color"
                    data-testid="img-healthcare-tech"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="icon-container mr-4">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 8H5l-2 9h18l-2-9z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Healthcare Technology</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Portable diagnostic devices and telemedicine platforms bringing advanced healthcare 
                    capabilities to underserved communities across Africa.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="stats-card p-4 rounded-lg text-center" data-testid="healthcare-patients">
                      <div className="text-2xl font-bold text-primary mb-1">25K+</div>
                      <div className="text-gray-400 text-sm">Patients Served</div>
                    </div>
                    <div className="stats-card p-4 rounded-lg text-center" data-testid="healthcare-clinics">
                      <div className="text-2xl font-bold text-primary mb-1">150+</div>
                      <div className="text-gray-400 text-sm">Partner Clinics</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Portable ECG and vital signs monitors</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Point-of-care diagnostic devices</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">Telemedicine platform with mobile connectivity</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Specifications */}
      <section className="py-16 sm:py-24 lg:py-32 dark-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-8 glow-text">
              Technical <span className="text-gradient">Specifications</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Advanced technical capabilities and specifications that power our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card-hover p-8 rounded-xl section-fade" data-testid="spec-hardware">
              <h3 className="text-xl font-semibold text-white mb-6">Hardware Capabilities</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-white font-medium mb-1">Processing Power</h4>
                  <p className="text-gray-400 text-sm">ARM Cortex-A series, RISC-V, custom ASIC designs</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-white font-medium mb-1">Connectivity</h4>
                  <p className="text-gray-400 text-sm">4G/5G, WiFi 6, LoRaWAN, Satellite, Mesh networking</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-white font-medium mb-1">Environmental Ratings</h4>
                  <p className="text-gray-400 text-sm">IP65/67, -20°C to +70°C, dust/moisture resistant</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-white font-medium mb-1">Power Management</h4>
                  <p className="text-gray-400 text-sm">Solar integration, ultra-low power modes, 5+ year battery life</p>
                </div>
              </div>
            </div>

            <div className="card-hover p-8 rounded-xl section-fade" data-testid="spec-software">
              <h3 className="text-xl font-semibold text-white mb-6">Software Stack</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-white font-medium mb-1">Operating Systems</h4>
                  <p className="text-gray-400 text-sm">Linux-based, real-time OS, custom firmware</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-white font-medium mb-1">Analytics Platform</h4>
                  <p className="text-gray-400 text-sm">Machine learning, predictive analytics, edge computing</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-white font-medium mb-1">Security</h4>
                  <p className="text-gray-400 text-sm">End-to-end encryption, secure boot, hardware security modules</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-white font-medium mb-1">Integration</h4>
                  <p className="text-gray-400 text-sm">RESTful APIs, MQTT, GraphQL, cloud-native architecture</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-hover p-8 rounded-xl section-fade" data-testid="manufacturing-specs">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Manufacturing Standards</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="icon-container mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">ISO 9001:2015</h4>
                <p className="text-gray-400 text-sm">Quality management systems certification</p>
              </div>
              <div className="text-center">
                <div className="icon-container mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">IEC 61508</h4>
                <p className="text-gray-400 text-sm">Functional safety compliance for critical systems</p>
              </div>
              <div className="text-center">
                <div className="icon-container mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">RoHS Compliant</h4>
                <p className="text-gray-400 text-sm">Restriction of hazardous substances compliance</p>
              </div>
              <div className="text-center">
                <div className="icon-container mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.66C6.16 17.42 8.68 11.49 17 10V8z"/>
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">WEEE Directive</h4>
                <p className="text-gray-400 text-sm">Waste electrical and electronic equipment directive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies and Success Stories */}
      <section className="py-16 sm:py-24 accent-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-8 glow-text">
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real-world implementations demonstrating the impact of our technology solutions across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="card-hover p-8 rounded-xl section-fade" data-testid="case-study-agriculture">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Smart Farm Initiative - Kenya</h3>
                  <p className="text-primary text-sm">AgriTech Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Deployed 500+ IoT sensors across 200 farms in Central Kenya, providing real-time soil and weather monitoring. 
                Farmers saw 35% increase in yields and 40% reduction in water usage within the first year.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">+35%</div>
                  <div className="text-gray-400 text-xs">Yield Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">-40%</div>
                  <div className="text-gray-400 text-xs">Water Usage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">200</div>
                  <div className="text-gray-400 text-xs">Farms</div>
                </div>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-gray-400 text-sm">
                "The real-time data has completely transformed how we make farming decisions. We now know exactly when and how much to irrigate."
              </blockquote>
              <div className="mt-4 text-right text-gray-500 text-xs">- James Mwangi, Farmer Cooperative Leader</div>
            </div>

            <div className="card-hover p-8 rounded-xl section-fade" data-testid="case-study-healthcare">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 8H5l-2 9h18l-2-9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Rural Health Network - Ghana</h3>
                  <p className="text-primary text-sm">Digital Health Initiative</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Implemented portable diagnostic devices and telemedicine platform across 50 rural clinics, 
                enabling remote consultation with specialists and reducing patient travel by 60%.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">8K+</div>
                  <div className="text-gray-400 text-xs">Consultations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">-60%</div>
                  <div className="text-gray-400 text-xs">Travel Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50</div>
                  <div className="text-gray-400 text-xs">Clinics</div>
                </div>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-gray-400 text-sm">
                "Our patients can now access specialist care without traveling hundreds of kilometers to the city."
              </blockquote>
              <div className="mt-4 text-right text-gray-500 text-xs">- Dr. Akosua Mensah, Regional Health Director</div>
            </div>
          </div>

          <div className="card-hover p-8 rounded-xl section-fade" data-testid="case-study-smart-city">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Smart City Pilot - Lagos</h3>
                    <p className="text-primary text-sm">Urban Technology Initiative</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Deployed comprehensive IoT infrastructure for traffic management, air quality monitoring, and waste management 
                  across three districts in Lagos. Reduced traffic congestion by 25% and improved air quality monitoring coverage by 300%.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-gray-400 text-sm">300+ traffic sensors for intelligent routing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-gray-400 text-sm">50 air quality monitoring stations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-gray-400 text-sm">Smart waste bin sensors with fill-level detection</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="stats-card p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">-25%</div>
                  <div className="text-gray-400 text-xs">Traffic Congestion</div>
                </div>
                <div className="stats-card p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">+300%</div>
                  <div className="text-gray-400 text-xs">Monitoring Coverage</div>
                </div>
                <div className="stats-card p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-gray-400 text-xs">System Uptime</div>
                </div>
                <div className="stats-card p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-gray-400 text-xs">Districts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-16 sm:py-24 lg:py-32 dark-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-8 glow-text">
              Industry <span className="text-gradient">Applications</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our technology solutions serve diverse industries across Africa, addressing unique challenges and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-hover p-8 rounded-xl text-center section-fade" data-testid="industry-agriculture">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Agriculture</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Precision farming solutions improving crop yields, reducing resource waste, and enabling data-driven farming decisions.
              </p>
              <div className="space-y-2 text-xs text-gray-500">
                <div>• Soil monitoring systems</div>
                <div>• Weather station networks</div>
                <div>• Livestock tracking</div>
                <div>• Crop disease detection</div>
              </div>
            </div>

            <div className="card-hover p-8 rounded-xl text-center section-fade" data-testid="industry-healthcare">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 8H5l-2 9h18l-2-9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Healthcare</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Portable diagnostics and telemedicine platforms extending healthcare access to remote and underserved communities.
              </p>
              <div className="space-y-2 text-xs text-gray-500">
                <div>• Point-of-care diagnostics</div>
                <div>• Remote patient monitoring</div>
                <div>• Telemedicine platforms</div>
                <div>• Medical device connectivity</div>
              </div>
            </div>

            <div className="card-hover p-8 rounded-xl text-center section-fade" data-testid="industry-energy">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Energy</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Smart grid solutions and renewable energy management systems optimizing power distribution and consumption.
              </p>
              <div className="space-y-2 text-xs text-gray-500">
                <div>• Smart meter networks</div>
                <div>• Solar system monitoring</div>
                <div>• Grid management systems</div>
                <div>• Energy efficiency tracking</div>
              </div>
            </div>

            <div className="card-hover p-8 rounded-xl text-center section-fade" data-testid="industry-manufacturing">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 9V7l-2-2-7 7-5.5-5.5L9 5l-4 4v2h2l4-4 5.5 5.5L22 9zm-8 3l-4-4H2v2h6l4 4 4-4h6v-2h-8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Manufacturing</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Industrial IoT solutions enabling predictive maintenance, quality control, and operational efficiency improvements.
              </p>
              <div className="space-y-2 text-xs text-gray-500">
                <div>• Machine health monitoring</div>
                <div>• Production line optimization</div>
                <div>• Quality control systems</div>
                <div>• Supply chain tracking</div>
              </div>
            </div>

            <div className="card-hover p-8 rounded-xl text-center section-fade" data-testid="industry-smart-cities">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Smart Cities</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Urban technology infrastructure improving traffic flow, environmental monitoring, and citizen services.
              </p>
              <div className="space-y-2 text-xs text-gray-500">
                <div>• Traffic management systems</div>
                <div>• Air quality monitoring</div>
                <div>• Smart waste management</div>
                <div>• Public safety networks</div>
              </div>
            </div>

            <div className="card-hover p-8 rounded-xl text-center section-fade" data-testid="industry-education">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Educational technology solutions bringing digital learning resources to schools across Africa.
              </p>
              <div className="space-y-2 text-xs text-gray-500">
                <div>• Digital classroom systems</div>
                <div>• Remote learning platforms</div>
                <div>• Educational content delivery</div>
                <div>• Student progress tracking</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Solutions;
