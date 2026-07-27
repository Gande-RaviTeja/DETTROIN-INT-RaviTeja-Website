import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WelcomeAbout from './components/WelcomeAbout';
import Pillars from './components/Pillars';
import HighlightBanners from './components/HighlightBanners';
import AcademicsSection from './components/AcademicsSection';
import CampusLifeSection from './components/CampusLifeSection';
import InfrastructureSection from './components/InfrastructureSection';
import NewsEventsSection from './components/NewsEventsSection';
import AdmissionsBanner from './components/AdmissionsBanner';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import EnquiryModal from './components/EnquiryModal';
import AuthModal from './components/AuthModal';
import VirtualTourModal from './components/VirtualTourModal';
import JourneyModal from './components/JourneyModal';
import AchievementsModal from './components/AchievementsModal';
import DetailModal from './components/DetailModal';

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [virtualTourModalOpen, setVirtualTourModalOpen] = useState(false);
  const [journeyModalOpen, setJourneyModalOpen] = useState(false);
  const [achievementsModalOpen, setAchievementsModalOpen] = useState(false);

  const [detailModalState, setDetailModalState] = useState({
    isOpen: false,
    type: 'academics',
    data: null,
  });

  const openDetailModal = (type, data = null) => {
    setDetailModalState({ isOpen: true, type, data });
  };

  const closeDetailModal = () => {
    setDetailModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] font-sans antialiased overflow-x-hidden">
      <Navbar onOpenLogin={() => setAuthModalOpen(true)} />

      <Hero
        onOpenEnquire={() => setEnquiryModalOpen(true)}
        onDiscoverClick={() => openDetailModal('about')}
      />

      <Stats />

      <WelcomeAbout onExploreMore={() => openDetailModal('about')} />

      <Pillars onSelectPillar={(pillar) => openDetailModal('academics')} />

      <HighlightBanners
        onOpenJourney={() => setJourneyModalOpen(true)}
        onOpenAchievements={() => setAchievementsModalOpen(true)}
      />

      <AcademicsSection onKnowMore={() => openDetailModal('academics')} />

      <CampusLifeSection onExploreLife={() => openDetailModal('campus-life')} />

      <InfrastructureSection onExploreInfrastructure={() => openDetailModal('infrastructure')} />

      <NewsEventsSection
        onSelectNews={(newsItem) => openDetailModal('news', newsItem)}
        onViewAllNews={() => openDetailModal('news')}
      />

      <AdmissionsBanner onOpenEnquire={() => setEnquiryModalOpen(true)} />

      <GallerySection />

      <TestimonialsSection />

      <ContactSection />

      <Footer />

      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

      <VirtualTourModal
        isOpen={virtualTourModalOpen}
        onClose={() => setVirtualTourModalOpen(false)}
      />

      <JourneyModal
        isOpen={journeyModalOpen}
        onClose={() => setJourneyModalOpen(false)}
      />

      <AchievementsModal
        isOpen={achievementsModalOpen}
        onClose={() => setAchievementsModalOpen(false)}
      />

      <DetailModal
        isOpen={detailModalState.isOpen}
        type={detailModalState.type}
        data={detailModalState.data}
        onClose={closeDetailModal}
        onOpenEnquire={() => {
          closeDetailModal();
          setEnquiryModalOpen(true);
        }}
      />
    </div>
  );
}
