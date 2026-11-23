import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import SharpestWorkSection from "./sections/SharpestWorkSection";
import BusinessConsultingSection from "./sections/BusinessConsultingSection";
import RecruitmentSection from "./sections/RecruitmentSection";
import ReferencesSection from "./sections/ReferencesSection";
import EditorialValuesSection from "./sections/EditorialValuesSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

export default function HomePageSections() {
  return (
    <>
      <Header />
      <HeroSection />
      <RecruitmentSection />
      <BusinessConsultingSection />
      <SharpestWorkSection />
      <ReferencesSection />
      <EditorialValuesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
