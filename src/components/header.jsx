"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { handleScroll } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "el", name: "Ελληνικά", flag: "🇬🇷" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <header className="bg-[hsl(200,92%,10%)] shadow-lg border-b border-gray-800 sticky top-0 z-50 transform transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 mt-6">
            <Link href="/">
              <Image src="/newLogo.svg" alt="Service Tree Logo" width={84} height={22} priority />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/#home"
              className="group relative text-white hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out rounded-md hover:bg-white/10"
              onClick={(e) => handleScroll(e, '/#home')}
            >
              {t("nav.home")}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </Link>
            <Link
              href="/#about"
              className="group relative text-white hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out rounded-md hover:bg-white/10"
              onClick={(e) => handleScroll(e, '/#about')}
            >
              {t("nav.about")}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </Link>
            <Link
              href="/#services"
              className="group relative text-white hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out rounded-md hover:bg-white/10"
              onClick={(e) => handleScroll(e, '/#services')}
            >
              {t("nav.services")}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </Link>
            <Link
              href="/#contact"
              className="group relative text-white hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out rounded-md hover:bg-white/10"
              onClick={(e) => handleScroll(e, '/#contact')}
            >
              {t("nav.contact")}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </Link>
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2 bg-transparent text-white border-white/50 hover:bg-white/10 hover:text-white"
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{currentLanguage?.flag}</span>
                  <span className="hidden sm:inline">{currentLanguage?.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end"
                className="bg-[hsl(200,92%,10%)] border-gray-700 text-white shadow-lg"
              >
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex items-center space-x-2 hover:bg-white/10 ${
                      language === lang.code ? "bg-white/20" : ""
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Sidebar */}
        <div
          className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "bg-black/50 backdrop-blur-sm" : "pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)} // Close when clicking outside
        >
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-[var(--header-footer-bg)]/75 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside sidebar
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-white hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </Button>
            <nav className="flex flex-col space-y-6 text-center mt-20">
              <Link
                href="/#home"
                className="group relative text-white hover:text-white px-3 py-2 text-2xl font-bold transition-all duration-300 ease-in-out rounded-md hover:bg-white/10"
                onClick={(e) => handleScroll(e, '/#home')}
              >
                {t("nav.home")}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </Link>
              <Link
                href="/#about"
                className="group relative text-white hover:text-white px-3 py-2 text-2xl font-bold transition-all duration-300 ease-in-out rounded-md hover:bg-white/10"
                onClick={(e) => handleScroll(e, '/#about')}
              >
                {t("nav.about")}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </Link>
              <Link
                href="/#services"
                className="group relative text-white hover:text-white px-3 py-2 text-2xl font-bold transition-all duration-300 ease-in-out rounded-md hover:bg-white/10"
                onClick={(e) => handleScroll(e, '/#services')}
              >
                {t("nav.services")}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </Link>
              <Link
                href="/#contact"
                className="group relative text-white hover:text-white px-3 py-2 text-2xl font-bold transition-all duration-300 ease-in-out rounded-md hover:bg-white/10"
                onClick={(e) => handleScroll(e, '/#contact')}
              >
                {t("nav.contact")}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
