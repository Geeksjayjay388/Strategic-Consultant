import React, { useState } from 'react';
import {
  Menu, X, ChevronRight, ArrowRight,
  CheckCircle, Users, Target, BarChart,
  Phone, Mail, MapPin, Clock, Facebook,
  Twitter, Linkedin, Instagram, ExternalLink
} from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Business Strategy',
      description: 'Develop comprehensive strategies for sustainable growth and competitive advantage using data-driven insights.',
      features: ['Market Analysis', 'Growth Planning', 'Competitive Strategy']
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Digital Transformation',
      description: 'Guide your business through technological change and digital innovation to stay ahead in the modern market.',
      features: ['Tech Integration', 'Process Automation', 'Digital Marketing']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Leadership Development',
      description: 'Empower your leadership team with effective management strategies and executive coaching programs.',
      features: ['Executive Coaching', 'Team Building', 'Performance Management']
    },
  ];

  const processSteps = [
    { number: '01', title: 'Discovery', description: 'Understanding your business needs and unique challenges' },
    { number: '02', title: 'Analysis', description: 'Deep dive into operational data and market research' },
    { number: '03', title: 'Strategy', description: 'Developing tailored solutions and long-term roadmaps' },
    { number: '04', title: 'Implementation', description: 'Executing the plan with measurable milestones and KPIs' },
    { number: '05', title: 'Optimization', description: 'Continuous improvement and real-time performance tracking' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'Their strategic guidance helped us increase revenue by 40% in one year. Truly professional partnership.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      content: 'The digital transformation roadmap was exactly what our company needed. Seamless and effective.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Startup Founder',
      content: 'Expert advice that transformed our business approach. Highly recommended for any serious founder!',
      rating: 5
    },
  ];

  const stats = [
    { value: '200+', label: 'Projects Completed' },
    { value: '15+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '40+', label: 'Industries Served' },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-primary-100 selection:text-primary-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="glass rounded-2xl shadow-xl border border-white/40">
            <div className="flex justify-between items-center h-16 px-6">
              <div className="flex items-center">
                <a href="#home" className="flex items-center space-x-3 group">
                  <img src="/logo.svg" alt="StrategicConsult Logo" className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-xl font-extrabold tracking-tight text-slate-900">
                    Strategic<span className="text-primary-600">Consult</span>
                  </span>
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-600 hover:text-primary-600 transition-colors font-semibold text-sm tracking-wide"
                  >
                    {item.name}
                  </a>
                ))}
                <button className="bg-primary-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-primary-700 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary-600/20">
                  Get Started
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden text-slate-900"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-2 glass rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="p-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-3 px-4 text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-xl font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="p-2 border-t border-slate-100 mt-2">
                  <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="Modern Corporate Office"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 md:bg-gradient-to-r md:from-white md:via-white/90 md:to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100/50 border border-primary-200 text-primary-700 text-xs font-bold uppercase tracking-widest animate-pulse">
              <span className="w-2 h-2 rounded-full bg-primary-600"></span>
              Trusted by Fortune 500 Companies
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Scale Your <br />
              <span className="text-primary-600">Visionary</span> Ideas
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              We provide world-class strategic consulting that bridges the gap between ambitious goals and measurable market success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary-600/30">
                Start Consultation <ArrowRight className="w-5 h-5" />
              </button>
              <button className="glass text-slate-800 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-lg border-white/50">
                Our Services
              </button>
            </div>

            <div className="pt-8 flex items-center gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-md">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Client" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-bold text-slate-900">Loved by 2k+ companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Strategic Solutions for <br className="hidden md:block" /> Modern Enterprises
            </h2>
            <div className="w-24 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200.50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8 font-bold">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">{service.description}</p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 px-6 border-2 border-primary-600 text-primary-600 rounded-2xl font-bold hover:bg-primary-600 hover:text-white transition-all">
                  Service Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4 text-left">The Roadmap</div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                How We Deliver Excellence
              </h2>
            </div>
            <p className="text-slate-600 max-w-sm font-medium">
              We've refined our methodology over a decade to ensure every project exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100 z-0"></div>
            {processSteps.map((step, index) => (
              <div key={index} className="relative z-10 group">
                <div className="w-20 h-20 bg-white border-4 border-slate-50 rounded-3xl flex items-center justify-center text-2xl font-black text-primary-600 mx-auto mb-8 shadow-xl group-hover:bg-primary-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{step.title}</h3>
                <p className="text-slate-500 text-sm font-medium text-center leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-primary-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-800/20 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Client Success Stories
            </h2>
            <p className="text-primary-200 max-w-2xl mx-auto font-medium text-lg">
              Partnering with visionaries to build the future of industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/20 transition-all">
                <div className="flex items-center mb-6 gap-1 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white text-lg font-medium italic mb-8 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-500">
                    <img src={`https://i.pravatar.cc/150?u=${testimonial.name}`} alt={testimonial.name} />
                  </div>
                  <div>
                    <div className="font-bold text-white uppercase tracking-wider text-sm">{testimonial.name}</div>
                    <div className="text-primary-400 text-xs font-bold">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="grid md:grid-cols-2 gap-16 relative z-10">
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                    Ready to Start Your <span className="text-primary-600">Growth</span> Journey?
                  </h2>
                  <p className="text-slate-600 text-lg font-medium">
                    Schedule a confidential strategy session with our senior consultants today.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-lg group-hover:bg-primary-600 group-hover:text-white transition-all">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-1">Call Us</h3>
                      <p className="text-slate-600 font-bold">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-lg group-hover:bg-primary-600 group-hover:text-white transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-1">Email Us</h3>
                      <p className="text-slate-600 font-bold">strategy@strategicconsult.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-lg group-hover:bg-primary-600 group-hover:text-white transition-all">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-1">Visit Us</h3>
                      <p className="text-slate-600 font-bold">123 Business Ave, Suite 100, NY</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-primary-600 focus:ring-4 focus:ring-primary-100 outline-none transition-all font-medium"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-primary-600 focus:ring-4 focus:ring-primary-100 outline-none transition-all font-medium"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-primary-600 focus:ring-4 focus:ring-primary-100 outline-none transition-all font-medium resize-none"
                      placeholder="How can we help you scale?"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-primary-700 hover:scale-[1.02] transition-all shadow-xl shadow-primary-600/20"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-emerald-500 to-primary-600"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="flex items-center space-x-3">
                <img src="/logo.svg" alt="StrategicConsult Logo" className="w-10 h-10" />
                <span className="text-3xl font-extrabold tracking-tighter">Strategic<span className="text-primary-500">Consult</span></span>
              </div>
              <p className="text-slate-400 text-lg max-w-md leading-relaxed font-medium">
                Transforming the architectural landscape of modern business through relentless innovation and strategic precision.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-primary-600 hover:-translate-y-1 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-lg font-bold tracking-widest uppercase text-primary-500">Company</h3>
              <ul className="space-y-4 font-medium">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-600 scale-0 group-hover:scale-100 transition-transform"></div>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-lg font-bold tracking-widest uppercase text-emerald-500">Legal</h3>
              <ul className="space-y-4 font-medium text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-500 font-bold text-sm tracking-widest uppercase">
              &copy; {new Date().getFullYear()} STRATEGICCONSULT. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-8 text-xs font-black text-slate-600 tracking-widest uppercase">
              <a href="#" className="hover:text-primary-500 transition-colors">Sitemap</a>
              <a href="#" className="hover:text-primary-500 transition-colors">Accessibility</a>
              <a href="#" className="hover:text-primary-500 transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;