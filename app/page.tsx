
import Hero from "@/components/Hero";
import Industrial from "@/components/Industrial";
import WhyRV from "@/components/WhyRv";
import Brands from "@/components/Brands";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>

      <section id="home">
        <Hero />
      </section>

      <section id="products">
        <Industrial />
      </section>

      <WhyRV />
      <Brands />
      <Process />

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </main>
  );
}