// page.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection"; 
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider/>
      <main>
        <HomeSection />
      </main>
      <Footer />
    </div>
  );
}
