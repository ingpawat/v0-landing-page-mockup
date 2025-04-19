import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Review {
  id: number
  name: string
  avatar: string
  rating: number
  comment: string
  location: string
}

export function Reviews() {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      comment:
        "Absolutely amazing experience! The hotel exceeded all our expectations. The staff was incredibly attentive and the amenities were top-notch.",
      location: "Grand Plaza Hotel, New York",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4,
      comment:
        "Beautiful location with stunning views. The room was spacious and comfortable. Would definitely recommend to friends and family.",
      location: "Oceanview Resort, Miami",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      comment:
        "Perfect getaway spot! The mountain views were breathtaking and the service was impeccable. Can't wait to visit again.",
      location: "Mountain Retreat, Aspen",
    },
  ]

  return (
    <section className="bg-[#1B202A] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">What Our Guests Say</h2>
          <p className="text-[#F5F2F1]/80">Hear from travelers who have experienced our service</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-[#F5F2F1] border-none">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-[#1B202A]">{review.name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < review.rating ? "text-[#D9A77D] fill-[#D9A77D]" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-[#D9A77D]/30" />
                  <p className="text-[#5A6172] mb-4 pl-4">{review.comment}</p>
                </div>

                <p className="text-sm text-[#A83240]">{review.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
