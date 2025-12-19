import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import BusinessSection from '@/components/BusinessSection';
import FutureSection from '@/components/FutureSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-content">
        <HeroSlider />
        <AboutSection />
        <BusinessSection />
        <FutureSection />
      </main>
      <Footer />
    </>
  );
}
