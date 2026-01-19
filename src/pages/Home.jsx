import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronRight, ArrowRight,
  CheckCircle, Users, Target, BarChart,
  Phone, Mail, MapPin, Clock, Facebook,
  Twitter, Linkedin, Instagram, ExternalLink,
  Sparkles, Shield, Rocket, Globe, Zap
} from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Visionary goals received. We will connect soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#services' },
    { name: 'Roadmap', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Business Alchemy',
      description: 'Mining raw potential into market leadership through strategic transmutation.',
      features: ['ALC_99', 'GROWTH_CAT'],
      accentColor: 'text-primary-500',
      span: 'lg:col-span-2 lg:row-span-2',
      tag: 'CORE_01'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Digital Frontier',
      description: 'Precision engineering for the complex digital landscape.',
      features: ['AI_SYNC', 'CLOUD_SC'],
      accentColor: 'text-emerald-500',
      span: 'lg:col-span-2',
      tag: 'TECH_02'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Legacy Protocol',
      description: 'Securing wisdom while embracing futures.',
      features: ['RISK_01', 'SECURE_L'],
      accentColor: 'text-indigo-500',
      span: 'lg:col-span-1',
      tag: 'SEC_03'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Sync',
      description: 'Seamless integration across borders.',
      features: ['BORDERLESS', 'SYNC_X'],
      accentColor: 'text-accent-gold',
      span: 'lg:col-span-1',
      tag: 'SYNC_04'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Velocity Scale',
      description: 'Extreme acceleration paradigms.',
      features: ['VELO_MAX', 'HYPER_S'],
      accentColor: 'text-purple-500',
      span: 'lg:col-span-2',
      tag: 'MAX_05'
    }
  ];

  const processSteps = [
    { number: '01', title: 'Deep Discovery', description: 'Mining the unique insights that define your enterprise.' },
    { number: '02', title: 'Macro Analysis', description: 'Simulating competitive pressure and market vectors.' },
    { number: '03', title: 'Blueprint', description: 'Architecting sustainable dominance through precision.' },
  ];

  return (
    <div className="bg-slate-900 min-h-screen font-sans selection:bg-primary-500 selection:text-white">
      {/* Dynamic Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
        <div className={`max-w-[95%] mx-auto flex justify-between items-center px-10 transition-all`}>
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 bg-white rounded-xl flex items-center justify-center p-1.5 group-hover:rotate-[360deg] transition-transform duration-1000">
              <img src="/logo.svg" alt="StrategicConsult" className="w-full h-full" />
              <div className="absolute inset-0 bg-primary-600 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">
              STRATEGIC<span className="text-primary-500">.</span>CO
            </span>
          </a>

          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-slate-400 hover:text-white transition-all font-black text-[10px] uppercase tracking-[0.4em] relative group">
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-primary-600 hover:text-white transition-all shadow-2xl">
              Launch Protocol
            </button>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 glass rounded-[2.5rem] p-8 space-y-6 animate-in fade-in slide-in-from-top-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-2xl font-black text-slate-900 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button className="w-full bg-primary-600 text-white py-6 rounded-[2rem] font-black text-xl">
            Get Started
          </button>
        </div>
      )}

      {/* Full-Bleed Hero (Refined) */}
      <section id="home" className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="The Boardroom"
            className="w-full h-full object-cover scale-105 opacity-40 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-transparent to-slate-900/90"></div>
        </div>

        <div className="max-w-[90%] mx-auto relative z-10 w-full">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-4 px-5 py-1.5 rounded-full border border-white/10 glass-dark text-primary-400 text-[9px] font-black uppercase tracking-[0.5em]">
              <Zap className="w-3.5 h-3.5 fill-current" /> Future_Industrial_01
            </div>

            <h1 className="text-[9vw] font-black text-white leading-[0.85] tracking-tighter uppercase max-w-6xl">
              Beyond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-emerald-400 to-primary-600 bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">Consulting.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-bold leading-relaxed tracking-tight opacity-80">
              We architect the dominance protocols used by the world's most aggressive institutional leaders.
            </p>

            <div className="flex flex-wrap gap-6 pt-8">
              <button className="group bg-primary-600 text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-tighter hover:bg-primary-700 transition-all flex items-center gap-4 shadow-2xl hover:-translate-y-1">
                Initiate Now <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="glass-dark border border-white/5 text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-tighter hover:bg-white/10 transition-all">
                The Ledger
              </button>
            </div>
          </div>
        </div>

        {/* Floating Numbers Decorative */}
        <div className="absolute bottom-10 right-10 text-[10rem] font-black text-white/[0.02] select-none leading-none rotate-90">
          2026
        </div>
      </section>

      {/* Industrial Strategic Solutions (Clean Grid) */}
      <section id="services" className="py-40 bg-slate-900 relative">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="mb-32">
            <div className="text-primary-500 font-black tracking-[0.8em] uppercase text-[10px] mb-6">Service_Stack_V4</div>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
              Strategic <span className="text-slate-700">Solutions.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${service.span} bg-slate-900 p-12 hover:bg-slate-800/50 transition-all duration-500 group flex flex-col justify-between min-h-[400px] border border-white/5 relative overflow-hidden`}
              >
                {/* Decorative background label */}
                <div className="absolute -right-4 top-10 text-8xl font-black text-white/[0.02] uppercase tracking-tighter select-none rotate-90 pointer-events-none">
                  {service.tag}
                </div>

                <div className="space-y-10 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center ${service.accentColor} shadow-inner group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{service.title}</h3>
                    <p className="text-slate-400 font-bold leading-relaxed max-w-sm">{service.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex gap-2">
                    {service.features.map((f, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 rounded-md text-[9px] font-black uppercase text-slate-500 tracking-widest">{f}</span>
                    ))}
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-primary-600 group-hover:border-primary-600 transition-all">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Roadmap */}
      <section id="process" className="py-40 bg-slate-950 px-4 relative overflow-hidden">
        <div className="aurora-glow absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-10">
              <h2 className="text-6xl font-black text-white uppercase tracking-tighter leading-none">
                THE EXECUTION <br /> <span className="text-emerald-400">BLUEPRINT.</span>
              </h2>
              <p className="text-xl text-slate-400 font-bold leading-relaxed">
                Proprietary algorithmic frameworks designed for infinite operational scalability.
              </p>
              <div className="flex gap-8">
                <div className="space-y-1">
                  <div className="text-3xl font-black text-white tracking-tighter uppercase">5Ms</div>
                  <div className="text-primary-500 font-bold uppercase tracking-widest text-[9px]">Processing Speed</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-black text-white tracking-tighter uppercase">0.0</div>
                  <div className="text-primary-500 font-bold uppercase tracking-widest text-[9px]">Error Tolerance</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {processSteps.map((step, i) => (
                <div key={i} className="group glass-dark p-10 rounded-3xl border-white/5 hover:border-primary-600/50 transition-all flex items-start gap-10 cursor-default">
                  <div className="text-4xl font-black text-primary-600/20 group-hover:text-primary-600 transition-colors">{step.number}</div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-black text-white uppercase tracking-tighter">{step.title}</h3>
                    <p className="text-slate-400 font-bold text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section (Refined) */}
      <section id="contact" className="py-40 bg-slate-900 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <div className="w-20 h-1.5 bg-primary-600 mb-10"></div>
            <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none uppercase">Get in <br /> <span className="text-slate-700">Touch.</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <p className="text-2xl text-slate-400 font-bold leading-relaxed max-w-md">
                Ready to architect your dominance? Connect with our elite team today.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Direct Uplink</div>
                    <div className="text-xl font-black text-white uppercase group-hover:text-primary-500 transition-colors">X@STRATEGIC.CO</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-16 rounded-[3rem] shadow-massive relative">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Identity</label>
                    <input
                      type="text"
                      placeholder="NAME"
                      className="w-full bg-slate-50 border-b border-slate-200 py-4 text-sm font-black text-slate-900 focus:outline-none focus:border-primary-600 transition-all placeholder:text-slate-300"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Communication</label>
                    <input
                      type="email"
                      placeholder="EMAIL"
                      className="w-full bg-slate-50 border-b border-slate-200 py-4 text-sm font-black text-slate-900 focus:outline-none focus:border-primary-600 transition-all placeholder:text-slate-300"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Objective</label>
                  <textarea
                    rows="2"
                    placeholder="DEFINE THE TARGET"
                    className="w-full bg-slate-50 border-b border-slate-200 py-4 text-sm font-black text-slate-900 focus:outline-none focus:border-primary-600 transition-all placeholder:text-slate-300 resize-none"
                    required
                  ></textarea>
                </div>
                <button className="w-full bg-slate-900 text-white py-8 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-primary-600 transition-all flex items-center justify-center gap-4 group">
                  INITIATE <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 px-10 border-t border-white/5 bg-slate-900">
        <div className="max-w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-black text-white tracking-widest">STRATEGIC<span className="text-primary-600">.</span>CO</span>
          </div>
          <div className="text-[9px] font-black text-slate-500 uppercase tracking-[0.5em]">
            PROTOS_2026 // EDITION_04
          </div>
          <div className="flex gap-8">
            {['Terms', 'Cipher', 'Network'].map(l => (
              <a key={l} href="#" className="text-[9px] font-black text-slate-500 hover:text-white uppercase tracking-widest transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;