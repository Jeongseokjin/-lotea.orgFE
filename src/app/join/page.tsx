import Header from '@/components/Header';
import JoinHeroSection from '@/components/JoinHeroSection';
import MembershipSection from '@/components/MembershipSection';
import ContactSection from '@/components/ContactSection';
import OnlineInquirySection from '@/components/OnlineInquirySection';
import Footer from '@/components/Footer';

export default function JoinPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <JoinHeroSection />
        <MembershipSection />
        <ContactSection />
        <OnlineInquirySection />
      </main>
      <Footer />
    </>
  );
}
