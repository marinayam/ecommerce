import HeroSection from "@/components/home/HeroSection";
import NewArrivalsSection from "@/components/home/NewArrivalsSection";
import RecommendedSection from "@/components/home/RecommendedSection";
import CategoryList from "@/components/home/CategoryList";
import StorySection from "@/components/home/StorySection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-beige-light font-sans">
      <main>
        <HeroSection />
        <NewArrivalsSection />
        <RecommendedSection />
        <CategoryList />
        <StorySection />
      </main>
      <Footer />
    </div>
  );
}
