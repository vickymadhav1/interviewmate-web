import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import Download from "../components/Download";
import Footer from "../components/Footer";
import Comparison from "../components/Comparison";
import DesktopShowcase from "../components/DesktopShowcase";
import DownloadGuideModal from "../components/download/DownloadGuideModal";

export default function Home() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const openDownloadGuide = (platform) => {
    setSelectedPlatform(platform);
  };

  const closeDownloadGuide = () => {
    setSelectedPlatform(null);
  };

  return (
    <main className="bg-[#070B16] text-white">
      <Navbar />
      <Hero onDownloadClick={openDownloadGuide} />
      <Comparison />
      <Features />
      <HowItWorks />
      <DesktopShowcase />
      <FAQ />
      <Download onDownloadClick={openDownloadGuide} />
      <Footer />
      <DownloadGuideModal
        platform={selectedPlatform}
        isOpen={Boolean(selectedPlatform)}
        onClose={closeDownloadGuide}
      />
    </main>
  );
}
