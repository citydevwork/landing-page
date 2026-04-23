export function ProductShowcase() {
  return (
    <section id="products" className="w-full py-24 bg-white relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Products</span></h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">Discover our premium services designed to elevate your business operations and provide world-class experiences.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* SMI Building Card */}
          <div className="group rounded-[2rem] overflow-hidden bg-white hover-lift border border-slate-100 shadow-xl shadow-slate-200/50 relative flex flex-col h-full">
            <div className="h-64 sm:h-80 overflow-hidden relative">
              <img src="/hero.webp" alt="SMI Building" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-blue-600 shadow-sm inline-block mb-3">
                  Venue Rental
                </div>
                <h3 className="text-3xl font-bold text-white">SMI Building</h3>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <p className="text-slate-600 mb-8 leading-relaxed font-light text-lg flex-1">
                Premium professional venue spaces designed for corporate events, seminars, and high-level business gatherings. Located strategically with top-notch modern facilities.
              </p>
              <a href="https://wa.me/628112971118" className="inline-flex items-center justify-center w-full py-4 rounded-xl bg-slate-50 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 group-hover:shadow-md">
                Inquire Now <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>

          {/* ERP System Card */}
          <div className="group rounded-[2rem] overflow-hidden bg-white hover-lift border border-slate-100 shadow-xl shadow-slate-200/50 relative flex flex-col h-full">
            <div className="h-64 sm:h-80 overflow-hidden relative bg-slate-900 flex items-center justify-center">
              <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0"></div>
              <img src="/erp.png" alt="ERP System Interface" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 relative z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 z-20">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-indigo-600 shadow-sm inline-block mb-3">
                  Software Development
                </div>
                <h3 className="text-3xl font-bold text-white">Custom ERP Systems</h3>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <p className="text-slate-600 mb-8 leading-relaxed font-light text-lg flex-1">
                Tailored Enterprise Resource Planning solutions, perfectly engineered for complex operational needs like our custom deployment for Sekolah Musik Indonesia.
              </p>
              <a href="https://wa.me/628112971118" className="inline-flex items-center justify-center w-full py-4 rounded-xl bg-slate-50 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 group-hover:shadow-md">
                Learn More <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
