"use client"

import { useLanguage } from "@/components/language-provider"
import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const { t } = useLanguage()

  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(href.indexOf('#') + 1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[hsl(200,92%,10%)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Service Tree Consulting</h3>
            <p className="text-slate-300 mb-6 max-w-md">
              A fresh new consulting firm specializing in customer service excellence. Our team of 5 dedicated
              professionals is ready to help your business grow with personalized attention and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">{t("contact.info.phone")}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">{t("contact.info.phone2")}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#home"
                  className="text-slate-300 hover:text-white transition-colors"
                  onClick={(e) => handleScroll(e, '/#home')}
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-slate-300 hover:text-white transition-colors"
                  onClick={(e) => handleScroll(e, '/#about')}
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-slate-300 hover:text-white transition-colors"
                  onClick={(e) => handleScroll(e, '/#services')}
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-slate-300 hover:text-white transition-colors"
                  onClick={(e) => handleScroll(e, '/#contact')}
                >
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-slate-300 hover:text-white transition-colors">
                  {t("impressum.title")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-slate-400" />
                <span className="text-sm text-slate-300">{t("contact.info.address")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-300">{t("contact.info.email")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
