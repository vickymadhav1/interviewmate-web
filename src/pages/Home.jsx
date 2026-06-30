import Navbar from "../components/Navbar";
import Hero from "../components/hero/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import Download from "../components/Download";
import Footer from "../components/Footer";
import Comparison from "../components/Comparison";
import DesktopShowcase from "../components/DesktopShowcase";

export default function Home() {
  return (
    <main className="bg-[#070B16] text-white">
      <Navbar />
      <Hero />
      <Comparison />
      <Features />
      <HowItWorks />
      <DesktopShowcase />
      <FAQ />
      <Download />
      <Footer />
    </main>
  );
}