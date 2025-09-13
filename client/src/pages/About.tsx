import { useEffect } from "react";
import LazyImage from "../components/LazyImage";
import PageTransition from "@/components/PageTransition";

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
    <PageTransition>
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
              <LazyImage
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
              <p className="text-gray-300 leading-relaxed mb-6">
                To accelerate Africa's technological independence by building world-class manufacturing capabilities and fostering innovation that serves both local and global markets.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-400 text-sm">Develop local manufacturing expertise and infrastructure</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-400 text-sm">Create sustainable employment opportunities for African engineers and technicians</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-400 text-sm">Bridge the technology gap between global markets and African needs</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-400 text-sm">Foster innovation through research and development partnerships</p>
                </div>
              </div>
            </div>
            <div className="card-hover p-8 rounded-xl section-fade" data-testid="card-vision">
              <h3 className="text-2xl font-semibold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                A future where Africa is recognized as a global hub for technology innovation and manufacturing, creating prosperity and opportunity for all Africans.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-400 text-sm">Transform Africa into a net technology exporter by 2030</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-400 text-sm">Establish 10+ manufacturing hubs across the continent</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-400 text-sm">Create 50,000 direct and indirect jobs in the tech sector</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-400 text-sm">Lead Africa's transition to Industry 4.0 manufacturing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="py-16 sm:py-24 lg:py-32 dark-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-8 glow-text">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From a vision to reality - the story of how DOT Technology became Africa's leading technology manufacturer
            </p>
          </div>

          <div className="relative" data-testid="company-timeline">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary opacity-30"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-center md:justify-between section-fade">
                <div className="flex items-center md:w-5/12">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-bold">2019</span>
                  </div>
                  <div className="ml-6 md:ml-0 md:mr-6 md:text-right">
                    <h4 className="text-lg font-semibold text-white mb-2">Foundation</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      DOT Technology founded in Lagos, Nigeria with a vision to revolutionize African technology manufacturing.
                      Initial seed funding of $1M raised from African Development Bank.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-2/12">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div className="hidden md:block w-5/12"></div>
              </div>

              <div className="relative flex items-center md:justify-between md:flex-row-reverse section-fade">
                <div className="flex items-center md:w-5/12">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-bold">2020</span>
                  </div>
                  <div className="ml-6 md:ml-6 md:mr-0">
                    <h4 className="text-lg font-semibold text-white mb-2">First Manufacturing Line</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Established our first manufacturing facility in Abuja. Launched IoT sensor production line serving
                      agricultural monitoring systems across West Africa.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-2/12">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div className="hidden md:block w-5/12"></div>
              </div>

              <div className="relative flex items-center md:justify-between section-fade">
                <div className="flex items-center md:w-5/12">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-bold">2021</span>
                  </div>
                  <div className="ml-6 md:ml-0 md:mr-6 md:text-right">
                    <h4 className="text-lg font-semibold text-white mb-2">Pan-African Expansion</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Opened operations in Kenya and Ghana. Secured partnerships with 5 major African telecom providers.
                      Won the African Tech Innovation Award.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-2/12">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div className="hidden md:block w-5/12"></div>
              </div>

              <div className="relative flex items-center md:justify-between md:flex-row-reverse section-fade">
                <div className="flex items-center md:w-5/12">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-bold">2022</span>
                  </div>
                  <div className="ml-6 md:ml-6 md:mr-0">
                    <h4 className="text-lg font-semibold text-white mb-2">Global Recognition</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Achieved ISO 9001:2015 certification. Secured $10M Series A funding. 
                      Launched healthcare device manufacturing division serving 8 African countries.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-2/12">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div className="hidden md:block w-5/12"></div>
              </div>

              <div className="relative flex items-center md:justify-between section-fade">
                <div className="flex items-center md:w-5/12">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-bold">2023</span>
                  </div>
                  <div className="ml-6 md:ml-0 md:mr-6 md:text-right">
                    <h4 className="text-lg font-semibold text-white mb-2">R&D Center Launch</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Opened cutting-edge R&D facility in Cape Town. Established university partnerships across 8 countries.
                      Launched open-source hardware initiative for African developers.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-2/12">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div className="hidden md:block w-5/12"></div>
              </div>

              <div className="relative flex items-center md:justify-between md:flex-row-reverse section-fade">
                <div className="flex items-center md:w-5/12">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-bold text-sm">2024+</span>
                  </div>
                  <div className="ml-6 md:ml-6 md:mr-0">
                    <h4 className="text-lg font-semibold text-white mb-2">Future Expansion</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Planning advanced semiconductor fabrication facility. Target: 15 manufacturing locations across Africa 
                      and entry into global export markets by 2025.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-2/12">
                  <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
                <div className="hidden md:block w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 sm:py-24 accent-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-8 glow-text">
              Leadership <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Visionary leaders driving Africa's technological transformation through expertise, innovation, and commitment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="card-hover p-8 rounded-xl text-center section-fade" data-testid="leader-ceo">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">AO</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Adaora Okafor</h4>
              <p className="text-primary text-sm mb-4">CEO & Founder</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Former Microsoft Africa lead with 15 years in tech. MIT alum passionate about African innovation.
              </p>
              <div className="flex justify-center space-x-3">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-400">in</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-400">@</span>
                </div>
              </div>
            </div>

            <div className="card-hover p-8 rounded-xl text-center section-fade" data-testid="leader-cto">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">KM</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Kwame Mensah</h4>
              <p className="text-primary text-sm mb-4">CTO</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Hardware engineering expert with 12 years at Intel. Specialized in IoT and embedded systems development.
              </p>
              <div className="flex justify-center space-x-3">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-400">in</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-400">@</span>
                </div>
              </div>
            </div>

            <div className="card-hover p-8 rounded-xl text-center section-fade" data-testid="leader-coo">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">FN</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Fatima Nakamura</h4>
              <p className="text-primary text-sm mb-4">COO</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Operations strategist with Toyota and Samsung experience. Expert in lean manufacturing and quality systems.
              </p>
              <div className="flex justify-center space-x-3">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-400">in</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-400">@</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-hover p-8 rounded-xl section-fade" data-testid="advisory-board">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Advisory Board</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gray-600 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium mb-1">Prof. Sarah Kimani</h4>
                  <p className="text-primary text-sm mb-2">University of Nairobi, Engineering</p>
                  <p className="text-gray-400 text-sm">20+ years in African technology policy and development</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gray-600 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium mb-1">Marcus Johnson</h4>
                  <p className="text-primary text-sm mb-2">Former General Electric VP</p>
                  <p className="text-gray-400 text-sm">Global manufacturing and supply chain expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values and Culture */}
      <section className="py-16 sm:py-24 lg:py-32 dark-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-8 glow-text">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The principles that guide our work and shape our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="card-hover p-8 rounded-xl text-center section-fade" data-testid="value-excellence">
              <div className="icon-container mx-auto">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We strive for the highest standards in everything we do, from product quality to customer service.
              </p>
            </div>

            <div className="card-hover p-8 rounded-xl text-center section-fade" data-testid="value-innovation">
              <div className="icon-container mx-auto">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We embrace creativity and cutting-edge thinking to develop solutions that meet Africa's unique needs.
              </p>
            </div>

            <div className="card-hover p-8 rounded-xl text-center section-fade" data-testid="value-sustainability">
              <div className="icon-container mx-auto">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.66C6.16 17.42 8.68 11.49 17 10V8z M16.5 3c.28 0 .5.22.5.5V6c0 .28-.22.5-.5.5S16 6.28 16 6V3.5c0-.28.22-.5.5-.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Sustainability</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We build for the future, ensuring our processes and products contribute to a sustainable tomorrow.
              </p>
            </div>

            <div className="card-hover p-8 rounded-xl text-center section-fade" data-testid="value-community">
              <div className="icon-container mx-auto">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v-3c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v3h3v4c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Community</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We believe in the power of collaboration and building strong relationships with our communities.
              </p>
            </div>
          </div>

          <div className="card-hover p-8 rounded-xl section-fade" data-testid="company-culture">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Our Culture</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  At DOT Technology, we've created an environment where African talent thrives. Our culture celebrates 
                  diversity, encourages innovation, and recognizes that our people are our greatest asset.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Inclusive Environment</h4>
                      <p className="text-gray-400 text-sm">We welcome diverse perspectives and backgrounds, believing that diversity drives innovation.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Continuous Learning</h4>
                      <p className="text-gray-400 text-sm">We invest in our people through ongoing training, conferences, and skill development programs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Work-Life Balance</h4>
                      <p className="text-gray-400 text-sm">We support flexible working arrangements and prioritize employee wellbeing.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Social Impact</h4>
                      <p className="text-gray-400 text-sm">Every team member contributes to community projects and educational initiatives.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="stats-card p-6 rounded-xl text-center" data-testid="culture-retention">
                  <div className="text-3xl font-bold text-primary mb-2">94%</div>
                  <div className="text-gray-400 text-sm">Employee<br/>Retention</div>
                </div>
                <div className="stats-card p-6 rounded-xl text-center" data-testid="culture-satisfaction">
                  <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
                  <div className="text-gray-400 text-sm">Culture<br/>Rating</div>
                </div>
                <div className="stats-card p-6 rounded-xl text-center" data-testid="culture-diversity">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-gray-400 text-sm">Countries<br/>Represented</div>
                </div>
                <div className="stats-card p-6 rounded-xl text-center" data-testid="culture-training">
                  <div className="text-3xl font-bold text-primary mb-2">40+</div>
                  <div className="text-gray-400 text-sm">Training Hours<br/>per Employee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
