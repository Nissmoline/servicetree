"use client"

import { useLanguage } from "@/components/language-provider"
import { Phone, PhoneCall, Clock, BarChart3 } from "lucide-react"

export default function AboutSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Phone,
      title: t("about.services.inbound"),
      description: t("about.services.inbound.desc"),
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: PhoneCall,
      title: t("about.services.outbound"),
      description: t("about.services.outbound.desc"),
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Clock,
      title: t("about.services.consulting"),
      description: t("about.services.consulting.desc"),
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: BarChart3,
      title: t("about.services.training"),
      description: t("about.services.training.desc"),
      color: "bg-orange-100 text-orange-600",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">{t("about.title")}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t("about.subtitle")}</p>
        </div>

        {/* Mission Statement */}
        <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">{t("about.mission.title")}</h3>
            <p className="text-lg text-slate-700 leading-relaxed">{t("about.mission.text")}</p>
          </div>
        </div>

        {/* Services Grid */}
        <div id="services" className="mb-16">
          <h3
            className="text-2xl lg:text-3xl font-bold text-slate-900 text-center mb-12">
            {t("about.services.title")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div
                    className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{t("about.features.freshPerspective.title")}</h4>
                <p className="text-slate-600">{t("about.features.freshPerspective.desc")}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{t("about.features.personalAttention.title")}</h4>
                <p className="text-slate-600">{t("about.features.personalAttention.desc")}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{t("about.features.agileFlexible.title")}</h4>
                <p className="text-slate-600">{t("about.features.agileFlexible.desc")}</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-sm text-slate-600">{t("about.stats.teamMembers")}</div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2025</div>
              <div className="text-slate-600 mb-6">{t("about.stats.yearStarted")}</div>
              <div className="text-4xl font-bold text-blue-600 mb-2">∞</div>
              <div className="text-slate-600">{t("about.stats.growthPotential")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
