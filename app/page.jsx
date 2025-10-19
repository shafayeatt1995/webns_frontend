import { CTA } from "../components/home/cta";
import { Features } from "../components/home/features";
import { Footer } from "../components/home/footer";
import { Header } from "../components/home/header";
import { Hero } from "../components/home/hero";
import Pricing from "../components/home/pricing";
import { Stats } from "../components/home/stats";
import { Testimonials } from "../components/home/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
