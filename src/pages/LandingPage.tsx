import CallToAction from "../components/CallToAction";
import GalleryForEvent from "../components/GalleryForEvent";
import Hero from "../components/Hero";
import ServiceList from "../components/ServiceList";
import TemplateSection from "../components/TemplateSection";
import Testimonials from "../components/Testimonials";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <TemplateSection />
      <GalleryForEvent />
      <ServiceList />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default LandingPage;
