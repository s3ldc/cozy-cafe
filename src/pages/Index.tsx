import Header from "@/components/cafe/Header";
import HeroSection from "@/components/cafe/HeroSection";
import WhyUsSection from "@/components/cafe/WhyUsSection";
import MenuSection from "@/components/cafe/MenuSection";
import GallerySection from "@/components/cafe/GallerySection";
import TestimonialsSection from "@/components/cafe/TestimonialsSection";
import LocationSection from "@/components/cafe/LocationSection";
import CTASection from "@/components/cafe/CTASection";
import Footer from "@/components/cafe/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyUsSection />
      <MenuSection />
      <GallerySection />
      <TestimonialsSection />
      <LocationSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;