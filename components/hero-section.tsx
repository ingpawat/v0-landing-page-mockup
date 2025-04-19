import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <Image
        src="/placeholder.svg?height=600&width=1600"
        alt="Luxury hotel view"
        width={1600}
        height={600}
        className="object-cover w-full h-full"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B202A]/70 to-transparent">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Find Your Perfect Stay</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Discover handpicked hotels with exclusive deals and personalized recommendations.
            </p>
            <Button className="bg-[#A83240] hover:bg-[#A83240]/90 text-white text-lg px-8 py-6">Explore Now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
