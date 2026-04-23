import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logosinergi.svg" alt="Sinergi Logo" className={`h-10 w-auto transition-all ${!isScrolled ? 'brightness-0 invert' : ''}`} />
        </div>
        <div className={`hidden md:flex items-center gap-8 font-medium ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
          <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="#products" className="hover:text-blue-500 transition-colors">Products & Services</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        </div>
        <div className={`md:hidden ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
