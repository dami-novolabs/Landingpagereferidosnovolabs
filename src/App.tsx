import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { ReferralBenefitsSection } from "./components/ReferralBenefitsSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { LeaderboardSection } from "./components/LeaderboardSection";
import { OfferSection } from "./components/OfferSection";
import { TrustpilotSection } from "./components/TrustpilotSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#111111', color: '#FFFFFF' }}>
      <Navigation />
      <Hero />
      <ProblemSection />
      <ReferralBenefitsSection />
      <HowItWorksSection />
      <LeaderboardSection />
      <OfferSection />
      <TrustpilotSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}