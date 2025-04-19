import Image from "next/image"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Hotel {
  id: number
  name: string
  location: string
  price: number
  rating: number
  image: string
  discount?: number
}

export function FeaturedHotels() {
  const hotels: Hotel[] = [
    {
      id: 1,
      name: "Grand Plaza Hotel",
      location: "New York City",
      price: 299,
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
      discount: 15,
    },
    {
      id: 2,
      name: "Oceanview Resort",
      location: "Miami Beach",
      price: 349,
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      name: "Mountain Retreat",
      location: "Aspen",
      price: 279,
      rating: 4.7,
      image: "/placeholder.svg?height=300&width=400",
      discount: 10,
    },
    {
      id: 4,
      name: "Urban Boutique Hotel",
      location: "San Francisco",
      price: 259,
      rating: 4.6,
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-[#1B202A] mb-2">Featured Hotels</h2>
        <p className="text-[#5A6172]">Handpicked accommodations for your perfect getaway</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <Image
                src={hotel.image || "/placeholder.svg"}
                alt={hotel.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              {hotel.discount && <Badge className="absolute top-3 right-3 bg-[#A83240]">{hotel.discount}% OFF</Badge>}
            </div>

            <div className="p-4">
              <h3 className="font-bold text-lg text-[#1B202A]">{hotel.name}</h3>
              <p className="text-[#5A6172] mb-2">{hotel.location}</p>

              <div className="flex items-center mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(hotel.rating) ? "text-[#D9A77D] fill-[#D9A77D]" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-[#5A6172]">{hotel.rating}</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-[#1B202A]">${hotel.price}</span>
                  <span className="text-[#5A6172] text-sm"> / night</span>
                </div>
                <Button
                  variant="outline"
                  className="border-[#A83240] text-[#A83240] hover:bg-[#A83240] hover:text-white"
                >
                  View
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button className="bg-transparent hover:bg-transparent text-[#A83240] border-2 border-[#A83240] hover:bg-[#A83240]/10 px-8">
          View All Hotels
        </Button>
      </div>
    </section>
  )
}
