import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProductShowcase } from "./components/ProductShowcase";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <Footer />
    </div>
  );
}

export default App;
