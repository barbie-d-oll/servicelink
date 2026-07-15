import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustedCompanies from "@/components/landing/TrustedCompanies";
import About from "@/components/landing/About";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import FeaturedJobs from "@/components/landing/FeaturedJobs";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <About />
      <Features />
      <HowItWorks />
      <FeaturedJobs />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}