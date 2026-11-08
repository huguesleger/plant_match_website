import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Leaves from "@/components/Leaves";
import Levels from "@/components/Levels";
import DownloadCTA from "@/components/DownloadCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <HowItWorks />
        <Features />
        <Leaves />
        <Levels />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
