import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import TrustedCompanies from "../components/landing/TrustedCompanies";
import About from "../components/landing/About";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import FeaturedJobs from "../components/landing/FeaturedJobs";
import WhyCompanies from "../components/landing/WhyCompanies";

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
      <WhyCompanies />
    </>
  );
}