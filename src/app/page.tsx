import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import About from "@/components/sections/About";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Products />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
