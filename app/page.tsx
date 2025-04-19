import { SearchBar } from "@/components/search-bar"
import { FeaturedHotels } from "@/components/featured-hotels"
import { Reviews } from "@/components/reviews"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F2F1]">
      <Header />
      <main>
        <HeroSection />
        <SearchBar />
        <FeaturedHotels />
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}
