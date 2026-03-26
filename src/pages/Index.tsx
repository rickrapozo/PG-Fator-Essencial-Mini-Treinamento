import { useState, useEffect } from "react";
import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import EmpathySection from "@/components/EmpathySection";
import MechanismSection from "@/components/MechanismSection";
import SolutionSection from "@/components/SolutionSection";
import OfferSection from "@/components/OfferSection";
import RiskBioSection from "@/components/RiskBioSection";
import FaqSection from "@/components/FaqSection";
import PageFooter from "@/components/PageFooter";

const Index = () => {
  const [showDelayedContent, setShowDelayedContent] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    let timeout: any;
    if (timerStarted && !showDelayedContent) {
      // 3 minutes and 16 seconds = 196 seconds
      timeout = setTimeout(() => {
        setShowDelayedContent(true);
      }, 196000);
    }
    return () => clearTimeout(timeout);
  }, [timerStarted, showDelayedContent]);

  const handleVideoStart = () => {
    setTimerStarted(true);
  };

  return (
    <>
      <StickyHeader />
      <HeroSection onVideoStart={handleVideoStart} showOffer={showDelayedContent} />
      
      {showDelayedContent && (
        <div className="animate-in fade-in duration-1000">
          <EmpathySection />
          <MechanismSection />
          <SolutionSection />
          <OfferSection />
          <RiskBioSection />
          <FaqSection />
        </div>
      )}
      <PageFooter />
    </>
  );
};

export default Index;
