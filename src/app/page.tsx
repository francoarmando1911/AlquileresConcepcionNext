// page.tsx
import AlojamientosSection from "@/components/AlojamientosSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FeaturedProperties from "@/components/HomeSection";
import HomeSection from "@/components/HomeSection"; 

export default function Home() {
  return (
    <div>
      <Header />
      <AlojamientosSection/>
      <main>
        <HomeSection />
      </main>
      <Footer />
    </div>
  );
}
