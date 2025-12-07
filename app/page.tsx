import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ApiDemo from "@/components/ApiDemo";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ApiDemo />
      <Pricing />
      <CTASection />
      <Footer />
    </main>
  );
}
