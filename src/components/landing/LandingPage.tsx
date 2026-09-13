import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import { GameplayVideoSection } from './GameplayVideoSection';
import InteractiveCombatDemo from './InteractiveCombatDemo';
import GameplayMechanics from './GameplayMechanics';
import CharactersSection from './CharactersSection';
import ChaptersRoadmap from './ChaptersRoadmap';
import BookOfWisdom from './BookOfWisdom';
import VisualGallery from './VisualGallery';
import PricingSection from './PricingSection';
import FaqSection from './FaqSection';
import Footer from './Footer';
import GameViewerModal from './GameViewerModal';
import { TesterFeedbackForm } from './TesterFeedbackForm';
import { MessageSquare } from 'lucide-react';
import { LanguageProvider, useLanguage } from '../../context/LanguageContext';

interface LandingPageProps {
  onLaunchGame: () => void;
}

const LandingPageContent: React.FC<LandingPageProps> = ({ onLaunchGame }) => {
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);
  const { t } = useLanguage();

  // Directly launch the immersive browser RPG game
  const handleOpenGame = () => {
    onLaunchGame();
  };

  const handleScrollToDemo = () => {
    const el = document.getElementById('demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToVideo = () => {
    const el = document.getElementById('gameplay-video');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0a10] text-[#f5efe6] font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 1. Top Unified Navigation */}
      <Navbar onOpenGame={handleOpenGame} />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <HeroSection 
          onOpenGame={handleOpenGame} 
          onScrollToDemo={handleScrollToDemo} 
          onScrollToVideo={handleScrollToVideo}
        />

        {/* 3. Gameplay Video Showcase (Extrait In-Game) */}
        <GameplayVideoSection onOpenGame={handleOpenGame} />

        {/* 4. Interactive Waswâs Combat Simulator */}
        <InteractiveCombatDemo onOpenGame={handleOpenGame} />

        {/* 4. Unique Gameplay Mechanics (Ponts de Nour, Waswâs, etc.) */}
        <GameplayMechanics />

        {/* 5. Characters Showcase (Othmân, Noura, Waswâs, Sage) */}
        <CharactersSection />

        {/* 6. The 5 Chapters Roadmap */}
        <ChaptersRoadmap onOpenGame={handleOpenGame} />

        {/* 7. The Book of Wisdom (Le Livre du Savoir - Coran & Sunnah) */}
        <BookOfWisdom />

        {/* 8. Visual Art & Panoramas Gallery */}
        <VisualGallery />

        {/* 9. Pricing & Founder Offers (Soutien & Déblocage Chapitres 2 & 3) */}
        <PricingSection />

        {/* 10. FAQ Section */}
        <FaqSection />

        {/* 11. Beta Tester Feedback Form Section */}
        <section id="tester-questionnaire" className="py-20 bg-[#0c0a14] relative border-t border-amber-500/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-semibold">
                <MessageSquare className="w-3.5 h-3.5" />
                {t.tester.badge}
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-amber-100">
                {t.tester.title}
              </h2>
              <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto">
                {t.tester.subtitle}
              </p>
            </div>

            <div className="rounded-2xl bg-[#12101c] border border-amber-500/20 p-4 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
              <TesterFeedbackForm onBackToGame={handleOpenGame} />
            </div>
          </div>
        </section>
      </main>

      {/* 12. Footer & Pre-Footer CTA */}
      <Footer onOpenGame={handleOpenGame} />

      {/* 13. Live Playable Game Modal (Fallback or Standalone preview) */}
      <GameViewerModal
        isOpen={isGameModalOpen}
        onClose={() => setIsGameModalOpen(false)}
      />

    </div>
  );
};

export const LandingPage: React.FC<LandingPageProps> = (props) => {
  return (
    <LanguageProvider>
      <LandingPageContent {...props} />
    </LanguageProvider>
  );
};

