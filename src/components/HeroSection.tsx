export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 z-10"></div>
        <img src="/hero.webp" alt="Hero" className="w-full h-full object-cover hero-image-zoom opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 text-left text-white mt-16">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm mb-6 border border-blue-500/30 backdrop-blur-sm animate-float">
            PT Sinergi Mandiricipta Indonesia
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Empowering Business <br className="hidden md:block" /> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Premium Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 font-light leading-relaxed">
            Experience excellence with our top-tier venue rentals at SMI Building and bespoke ERP software development tailored for your growth.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a href="#products" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2">
              Explore Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold rounded-full transition-all hover:scale-105 active:scale-95">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70 animate-bounce">
        <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
}
