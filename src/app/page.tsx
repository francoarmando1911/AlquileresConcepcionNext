import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FeaturedProperties from "@/components/FeaturedProperties";


export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <FeaturedProperties/>
      </main>
      <Footer />
    </div>
  );
}