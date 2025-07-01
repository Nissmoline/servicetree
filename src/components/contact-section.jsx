"use client";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/components/language-provider"
import { MapPin, Phone, Mail, Send } from "lucide-react"

export default function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{t("contact.info.title")}</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Address</h4>
                    <p className="text-slate-600">{t("contact.info.address")}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                    <p className="text-slate-600">{t("contact.info.phone")}</p>
                    <p className="text-slate-600">{t("contact.info.phone2")}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600">{t("contact.info.email")}</p>
                    <p className="text-slate-600">{t("contact.info.email2")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900 mb-4">{t("contact.availability.title")}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">{t("contact.availability.mondayFriday")}</span>
                  <span className="text-slate-900">{t("contact.availability.hours")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">{t("contact.availability.responseTime")}</span>
                  <span className="text-slate-900">{t("contact.availability.within24Hours")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">{t("contact.availability.emergencySupport")}</span>
                  <span className="text-slate-900">{t("contact.availability.byAppointment")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{t("contact.form.title")}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  {t("contact.form.name")}
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="John Doe" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  {t("contact.form.email")}
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="john@company.com" />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-slate-700 mb-2">
                  {t("contact.form.company")}
                </label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Your Company" />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2">
                  {t("contact.form.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full"
                  placeholder="Tell us about your project..." />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                <Send className="mr-2 h-5 w-5" />
                {t("contact.form.submit")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
