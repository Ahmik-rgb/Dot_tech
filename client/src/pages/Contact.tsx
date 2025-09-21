import { useEffect, useState } from "react";
import LazyImage from "../components/LazyImage";
import PageTransition from "@/components/PageTransition";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form data to Web3forms
    (async () => {
      setIsSubmitting(true);
      setSubmitError('');
      try {
        const payload = {
          access_key: '3e89f0c6-e942-42dd-ac45-8e004bda41de',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          // optional: redirect: 'https://yourdomain.com/thank-you'
        };

        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const data = await res.json();
        if (res.ok && data.success) {
          setSubmitSuccess(true);
          setFormData({ name: '', email: '', company: '', subject: '', message: '' });
        } else {
          setSubmitError(data.message || 'Failed to send message.');
        }
      } catch (err) {
        setSubmitError('An error occurred while sending your message.');
      } finally {
        setIsSubmitting(false);
      }
    })();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  return (
    <PageTransition>
      <section className="min-h-screen pt-16 sm:pt-20 dark-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center mb-16 section-fade">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light text-white mb-8 glow-text">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to be part of Africa's technological transformation? Let's start a conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-hover p-8 rounded-xl section-fade" data-testid="contact-form">
              <h2 className="text-2xl font-semibold text-white mb-6">Send us a message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Hidden access key for Web3forms */}
                <input type="hidden" name="access_key" value="3e89f0c6-e942-42dd-ac45-8e004bda41de" />
                {submitSuccess && (
                  <div className="p-3 bg-green-800 text-green-200 rounded">Your message has been sent. Thank you!</div>
                )}
                {submitError && (
                  <div className="p-3 bg-red-800 text-red-200 rounded">{submitError}</div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent" 
                    placeholder="Your full name"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent" 
                    placeholder="your.email@example.com"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent" 
                    placeholder="Your company name"
                    data-testid="input-company"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <div className="relative">
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#07122b] border border-[#2aa0ff] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#2aa0ff] focus:border-transparent appearance-none pr-10"
                      data-testid="select-subject"
                      style={{backgroundImage: 'none'}}
                    >
                      <option value="">Select a subject</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="careers">Career Opportunities</option>
                      <option value="solutions">Technology Solutions</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                    {/* Custom arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="w-4 h-4 text-[#7fd1ff]" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent" 
                    placeholder="Tell us about your project or inquiry..."
                    data-testid="textarea-message"
                  />
                </div>
                <button 
                  type="submit" 
                  className="tech-button text-white px-6 py-3 font-normal text-sm tracking-wide w-full rounded-lg"
                  data-testid="button-send-message"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 section-fade">
              <div className="card-hover p-8 rounded-xl" data-testid="contact-info">
                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start" data-testid="contact-address">
                    <svg className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-gray-400">Kadco Building #2<br/>Room 305, Ethio China Friendship Road<br/>Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                  <div className="flex items-start" data-testid="contact-phone">
                    <svg className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-400">+251114707071</p>
                    </div>
                  </div>
                  <div className="flex items-start" data-testid="contact-email">
                    <svg className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400">info@dot-techafrica.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-hover p-8 rounded-xl" data-testid="office-hours">
                <h3 className="text-xl font-semibold text-white mb-6">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div>

              <LazyImage
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
                alt="Modern African office building"
                className="rounded-xl w-full h-48 object-cover muted-color"
                data-testid="img-office-building"
              />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
