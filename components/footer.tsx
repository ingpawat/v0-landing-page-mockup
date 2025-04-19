import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-[#1B202A] text-[#F5F2F1]/90 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">StayEase</h3>
            <p className="mb-4 text-[#F5F2F1]/70">
              Discover the perfect accommodation for your next adventure. We offer a curated selection of hotels,
              resorts, and vacation rentals worldwide.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#F5F2F1]/70 hover:text-[#D9A77D]">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#F5F2F1]/70 hover:text-[#D9A77D]">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#F5F2F1]/70 hover:text-[#D9A77D]">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#F5F2F1]/70 hover:text-[#D9A77D]">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#F5F2F1]/70 hover:text-[#D9A77D]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#F5F2F1]/70 hover:text-[#D9A77D]">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#F5F2F1]/70 hover:text-[#D9A77D]">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#F5F2F1]/70 hover:text-[#D9A77D]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#F5F2F1]/70 hover:text-[#D9A77D]">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-[#D9A77D]" />
                <span className="text-[#F5F2F1]/70">123 Booking Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#D9A77D]" />
                <span className="text-[#F5F2F1]/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#D9A77D]" />
                <span className="text-[#F5F2F1]/70">info@stayease.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
            <p className="mb-4 text-[#F5F2F1]/70">Subscribe to our newsletter for exclusive deals and travel tips.</p>
            <div className="flex flex-col space-y-2">
              <Input
                placeholder="Your email address"
                className="bg-[#2A303C] border-[#5A6172] text-white placeholder:text-[#F5F2F1]/50"
              />
              <Button className="bg-[#A83240] hover:bg-[#A83240]/90 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#5A6172]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#F5F2F1]/70 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} StayEase. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-[#F5F2F1]/70 hover:text-[#D9A77D] text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-[#F5F2F1]/70 hover:text-[#D9A77D] text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-[#F5F2F1]/70 hover:text-[#D9A77D] text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
