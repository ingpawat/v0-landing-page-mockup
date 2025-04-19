"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F2F1] shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-[#A83240] font-bold text-2xl">StayEase</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-[#5A6172] hover:text-[#1B202A] font-medium">
            Destinations
          </Link>
          <Link href="#" className="text-[#5A6172] hover:text-[#1B202A] font-medium">
            Hotels
          </Link>
          <Link href="#" className="text-[#5A6172] hover:text-[#1B202A] font-medium">
            Deals
          </Link>
          <Link href="#" className="text-[#5A6172] hover:text-[#1B202A] font-medium">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-[#5A6172] text-[#5A6172]">
            Sign In
          </Button>
          <Button className="bg-[#A83240] hover:bg-[#A83240]/90 text-white">Register</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F5F2F1] border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#" className="text-[#5A6172] hover:text-[#1B202A] font-medium py-2">
              Destinations
            </Link>
            <Link href="#" className="text-[#5A6172] hover:text-[#1B202A] font-medium py-2">
              Hotels
            </Link>
            <Link href="#" className="text-[#5A6172] hover:text-[#1B202A] font-medium py-2">
              Deals
            </Link>
            <Link href="#" className="text-[#5A6172] hover:text-[#1B202A] font-medium py-2">
              About
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="border-[#5A6172] text-[#5A6172] w-full">
                Sign In
              </Button>
              <Button className="bg-[#A83240] hover:bg-[#A83240]/90 text-white w-full">Register</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
