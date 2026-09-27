import Hero from '../components/Hero';
// import TrustStrip from '../components/TrustStrip';
import Mission from '../components/Mission';
import CollaboratorsMarquee from '../components/CollaboratorsMarquee';
import ServicesGrid from '../components/ServicesGrid';
import TrainingSection from '../components/TrainingSection';
import ConsultBar from '../components/ConsultBar';
import ResearchSection from '../components/ResearchSection';
// import WhyHgrtc from '../components/WhyHgrtc';
import ExpertsSection from '../components/ExpertsSection';
import EventsSection from '../components/EventsSection';
import BlogSection from '../components/BlogSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCta from '../components/FinalCta';
import GallerySection from '../components/GallerySection';

function Home() {
  return (
    <>
      <Hero />
      {/* <TrustStrip /> */}
      <Mission />
      <CollaboratorsMarquee />
      <ServicesGrid />
      <TrainingSection />
      <ConsultBar />
      <ResearchSection />
      {/* <WhyHgrtc /> */}
      <ExpertsSection />
      <EventsSection />
      <BlogSection />
      <GallerySection />
      <TestimonialsSection />
      <FinalCta />
    </>
  );
}

export default Home;