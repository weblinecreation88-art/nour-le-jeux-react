import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import CreatorLetterSection from './CreatorLetterSection';
import { GameplayVideoSection } from './GameplayVideoSection';
import InteractiveCombatDemo from './InteractiveCombatDemo';
import GameplayMechanics from './GameplayMechanics';
import CharactersSection from './CharactersSection';
import ChaptersRoadmap from './ChaptersRoadmap';
import BookOfWisdom from './BookOfWisdom';
import VisualGallery from './VisualGallery';
import PricingSection from './PricingSection';
import FaqSection from './FaqSection';
import TestimonialsSection from './TestimonialsSection';
import MobileStickyBar from './MobileStickyBar';
import Footer from './Footer';
import GameViewerModal from './GameViewerModal';
import { TesterFeedbackForm } from './TesterFeedbackForm';
import MirageArabesqueDivider from './MirageArabesqueDivider';
import { MessageSquare, Play, Sparkles, Download } from 'lucide-react';
import { APK_DOWNLOAD_URL } from '../../data/gameData';
import { trackPlayGameClick, trackApkDownloadClick } from '../../utils/analytics';
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
    <div className="min-h-screen bg-[#0a080e] text-[#f5efe6] font-sans selection:bg-[#d4af37]/30 selection:text-[#ffd700]">
      
      {/* 1. Top Unified Navigation (AC Mirage Inspired Gilded Border) */}
      <Navbar onOpenGame={handleOpenGame} />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <HeroSection 
          onOpenGame={handleOpenGame} 
          onScrollToDemo={handleScrollToDemo} 
          onScrollToVideo={handleScrollToVideo}
        />

        {/* Arabesque Gilded Divider */}
        <MirageArabesqueDivider className="my-8 sm:my-14" />

        {/* 3. Le Mot du Concepteur — Genèse d'un Père & Développeur */}
        <CreatorLetterSection onOpenGame={handleOpenGame} />

        {/* Arabesque Gilded Divider */}
        <MirageArabesqueDivider className="my-8 sm:my-14" />

        {/* 4. Gameplay Video Showcase (Extrait In-Game) */}
        <GameplayVideoSection onOpenGame={handleOpenGame} />

        {/* Arabesque Gilded Divider */}
        <MirageArabesqueDivider className="my-8 sm:my-14" />

        {/* 4. Interactive Waswâs Combat Simulator */}
        <InteractiveCombatDemo onOpenGame={handleOpenGame} />

        {/* Arabesque Gilded Divider */}
        <MirageArabesqueDivider className="my-8 sm:my-14" />

        {/* 5. Unique Gameplay Mechanics (Ponts de Nour, Waswâs, etc.) */}
        <GameplayMechanics />

        {/* Arabesque Gilded Divider */}
        <MirageArabesqueDivider className="my-8 sm:my-14" />

        {/* 6. Characters Showcase (Othmân, Noura, Waswâs, Sage) */}
        <CharactersSection />

        {/* Arabesque Gilded Divider */}
        <MirageArabesqueDivider className="my-8 sm:my-14" />

        {/* 7. The 5 Chapters Roadmap */}
        <ChaptersRoadmap onOpenGame={handleOpenGame} />

        {/* Arabesque Gilded Divider */}
        <MirageArabesqueDivider className="my-8 sm:my-14" />

        {/* 8. The Book of Wisdom (Le Livre du Savoir - Codex de Bagdad) */}
        <BookOfWisdom />

        {/* Arabesque Gilded Divider */}
        <MirageArabesqueDivider className="my-8 sm:my-14" />

        {/* 9. Visual Art & Panoramas Gallery */}
        <VisualGallery />

        {/* Arabesque Gilded Divider */}
        <MirageArabesqueDivider className="my-8 sm:my-14" />

        {/* 10. Pricing & Founder Offers (Soutien & Déblocage Chapitres 2 & 3) */}
        <PricingSection />

        {/* Arabesque Gilded Divider */}
        <MirageArabesqueDivider className="my-8 sm:my-14" />

        {/* 11. Social Proof & Player Testimonials (CRO Trust Booster) */}
        <TestimonialsSection />

        {/* Arabesque Gilded Divider */}
        <MirageArabesqueDivider className="my-8 sm:my-14" />

        {/* 12. FAQ Section */}
        <FaqSection />

        {/* Arabesque Gilded Divider */}
        <MirageArabesqueDivider className="my-10 sm:my-16" />

        {/* 13. High-Impact Pre-Footer Closing Call To Action */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#150f1b] via-[#100b16] to-[#0a080e] border-t border-[#d4af37]/30 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-[#e5c158]/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-7">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b1510] border border-[#d4af37]/50 text-[#ffd700] text-xs font-cinzel font-bold tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <Sparkles className="w-4 h-4 text-[#ffd700]" />
              {t.preFooter.badge}
            </span>
            
            <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-[#fbf6ec] tracking-wide">
              {t.preFooter.title}
            </h2>
            
            <p className="text-[#d8c29d] text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              {t.preFooter.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  trackPlayGameClick('pre_footer_cta');
                  handleOpenGame();
                }}
                className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-gradient-to-r from-[#e5c158] via-[#ffd700] to-[#c59b27] text-stone-950 font-cinzel font-black text-base sm:text-lg tracking-wider shadow-[0_0_35px_rgba(229,193,88,0.5)] hover:shadow-[0_0_55px_rgba(229,193,88,0.85)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-3 ring-2 ring-[#ffd700]/70"
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-stone-950" />
                <span>{t.preFooter.playGame}</span>
              </button>

              <a
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackApkDownloadClick('pre_footer')}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#13221b] hover:bg-[#1b3227] border border-emerald-400/60 text-emerald-200 font-cinzel font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>{t.preFooter.downloadApk}</span>
              </a>
            </div>

            {/* Reassuring micro-copy */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#d8c29d]/80 pt-2 font-cinzel">
              <span>✧ {t.preFooter.feature1}</span>
              <span>✧ {t.preFooter.feature2}</span>
              <span>✧ {t.preFooter.feature3}</span>
            </div>
          </div>
        </section>

        {/* 14. Beta Tester Feedback Form Section */}
        <section id="tester-questionnaire" className="py-20 bg-[#0c0912] relative border-t border-[#d4af37]/25">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1510] border border-[#d4af37]/40 text-[#f5efe6] text-xs font-cinzel font-semibold tracking-wider">
                <MessageSquare className="w-3.5 h-3.5 text-[#e5c158]" />
                {t.tester.badge}
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#fbf6ec]">
                {t.tester.title}
              </h2>
              <p className="text-[#d8c29d] text-sm sm:text-base max-w-xl mx-auto font-sans">
                {t.tester.subtitle}
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-b from-[#18131e] via-[#120f18] to-[#0c0a10] border-2 border-[#d4af37]/35 p-4 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.7)] gilded-relic-frame">
              <TesterFeedbackForm onBackToGame={handleOpenGame} />
            </div>
          </div>
        </section>
      </main>

      {/* 15. Footer */}
      <Footer onOpenGame={handleOpenGame} />

      {/* 16. Mobile Sticky Floating CTA Bar */}
      <MobileStickyBar onOpenGame={handleOpenGame} />

      {/* 17. Live Playable Game Modal (Fallback or Standalone preview) */}
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
