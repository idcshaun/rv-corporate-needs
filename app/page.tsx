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
    <main className="min-h-screen overflow-x-hidden">
      {/* =====================================================
          HOME
      ====================================================== */}

      <section id="home">
        <Hero />
      </section>

      {/* =====================================================
          PRODUCTS
      ====================================================== */}

      <section id="products">
        <Industrial />
      </section>

      {/* =====================================================
          WHY RV
      ====================================================== */}

      <section id="why-rv">
        <WhyRV />
      </section>

      {/* =====================================================
          BRANDS
      ====================================================== */}

      <section id="brands">
        <Brands />
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section id="process">
        <Process />
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section id="about">
        <About />
      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section id="contact">
        <Contact />
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />
    </main>
  );
}