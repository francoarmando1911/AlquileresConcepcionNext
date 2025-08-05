// page.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection"; 

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HomeSection />
      </main>
      <Footer />
    </div>
  );
}
