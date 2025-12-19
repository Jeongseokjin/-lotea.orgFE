import Header from '@/components/Header';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import ResearchSection from '@/components/about/ResearchSection';
import NetworkingSection from '@/components/about/NetworkingSection';
import ProgramSection from '@/components/about/ProgramSection';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <AboutHeroSection />
        <ResearchSection />
        <NetworkingSection />
        <ProgramSection />
      </main>
      <Footer />
    </>
  );
}
