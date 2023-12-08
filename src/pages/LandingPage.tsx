import CallToAction from "../components/CallToAction";
import GalleryForEvent from "../components/GalleryForEvent";
import Hero from "../components/Hero";
import ServiceList from "../components/ServiceList";
import TemplateSection from "../components/TemplateSection";
import Testimonials from "../components/Testimonials";
import { useAuth } from "../hooks/useAuth";

const LandingPage = () => {
  const { user } = useAuth();
  console.log("USER in LANDING PAGE -> ", user);
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
