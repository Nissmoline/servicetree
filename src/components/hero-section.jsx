"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { ArrowRight, Users, TrendingUp } from "lucide-react"

import { handleScroll } from "@/lib/utils"

export default function HeroSection() {
  const { t } = useLanguage()



  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">{t("hero.title")}</h1>
              <p className="text-xl lg:text-2xl text-blue-600 font-semibold">{t("hero.tagline")}</p>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">{t("hero.description")}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                onClick={(e) => handleScroll(e, '/#contact')}
              >
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">5</div>
                <div className="text-sm text-slate-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-600">Dedication</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">2025</div>
                <div className="text-sm text-slate-600">Founded</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700">Service Tree</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm text-slate-600">Team Members</span>
                    <span className="font-semibold text-slate-900">5</span>
                  </div>
                  {/* <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm text-slate-600">Projects Started</span>
                    <span className="font-semibold text-slate-900">2</span>
                  </div> */}
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-slate-600">Client Satisfaction</span>
                    <span className="font-semibold text-green-700">100%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

