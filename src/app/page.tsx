// page.tsx
import AlojamientosSection from "@/components/AlojamientosSection";
import Destinos from "@/components/Destinos";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection"; 

export default function Home() {
  return (
    <div>
      <Header />
      <AlojamientosSection/>
      <main>
        <Destinos />
        <HomeSection />
      </main>
      <Footer />
    </div>
  );
}
