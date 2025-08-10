"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { useLanguage } from "@/components/language-provider";
import { Shield, Cookie, Eye, Lock, Users, Database } from "lucide-react";

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow py-20 lg:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("privacy.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("privacy.subtitle")}
          </p>
        </div>

        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              {t("privacy.introduction.title")}
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {t("privacy.introduction.content")}
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-semibold text-foreground">
                {t("privacy.collection.title")}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">
                  {t("privacy.collection.personal.title")}
                </h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• {t("privacy.collection.personal.name")}</li>
                  <li>• {t("privacy.collection.personal.email")}</li>
                  <li>• {t("privacy.collection.personal.company")}</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">
                  {t("privacy.collection.automatic.title")}
                </h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• {t("privacy.collection.automatic.ip")}</li>
                  <li>• {t("privacy.collection.automatic.browser")}</li>
                  <li>• {t("privacy.collection.automatic.device")}</li>
                  <li>• {t("privacy.collection.automatic.usage")}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookie Policy */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <Cookie className="h-6 w-6 text-green-600 dark:text-green-400" />
              <h2 className="text-2xl font-semibold text-foreground">
                {t("privacy.cookies.title")}
              </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground flex items-center">
                  <Shield className="h-4 w-4 text-green-600 dark:text-green-400 mr-2" />
                  {t("privacy.cookies.necessary.title")}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {t("privacy.cookies.necessary.description")}
                </p>
                <div className="text-xs text-muted-foreground">
                  <strong>{t("privacy.cookies.necessary.examples")}:</strong> session management, security tokens
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground flex items-center">
                  <Eye className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                  {t("privacy.cookies.analytics.title")}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {t("privacy.cookies.analytics.description")}
                </p>
                <div className="text-xs text-muted-foreground">
                  <strong>{t("privacy.cookies.analytics.examples")}:</strong> Google Analytics, page views, user behavior
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground flex items-center">
                  <Users className="h-4 w-4 text-purple-600 dark:text-purple-400 mr-2" />
                  {t("privacy.cookies.marketing.title")}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {t("privacy.cookies.marketing.description")}
                </p>
                <div className="text-xs text-muted-foreground">
                  <strong>{t("privacy.cookies.marketing.examples")}:</strong> advertising preferences, retargeting
                </div>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <Lock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <h2 className="text-2xl font-semibold text-foreground">
                {t("privacy.usage.title")}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground">{t("privacy.usage.service")}</h4>
                    <p className="text-sm text-muted-foreground">{t("privacy.usage.service.desc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground">{t("privacy.usage.communication")}</h4>
                    <p className="text-sm text-muted-foreground">{t("privacy.usage.communication.desc")}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground">{t("privacy.usage.improvement")}</h4>
                    <p className="text-sm text-muted-foreground">{t("privacy.usage.improvement.desc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground">{t("privacy.usage.security")}</h4>
                    <p className="text-sm text-muted-foreground">{t("privacy.usage.security.desc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              {t("privacy.protection.title")}
            </h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">{t("privacy.protection.measures.title")}</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• {t("privacy.protection.measures.encryption")}</li>
                    <li>• {t("privacy.protection.measures.access")}</li>
                    <li>• {t("privacy.protection.measures.backup")}</li>
                    <li>• {t("privacy.protection.measures.training")}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">{t("privacy.protection.retention.title")}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {t("privacy.protection.retention.description")}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <strong>{t("privacy.protection.retention.period")}:</strong> 2 {t("privacy.protection.retention.years")}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              {t("privacy.rights.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">{t("privacy.rights.access.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("privacy.rights.access.description")}</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">{t("privacy.rights.correction.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("privacy.rights.correction.description")}</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">{t("privacy.rights.deletion.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("privacy.rights.deletion.description")}</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">{t("privacy.rights.portability.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("privacy.rights.portability.description")}</p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              {t("privacy.contact.title")}
            </h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground mb-4">
                {t("privacy.contact.description")}
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>{t("privacy.contact.email")}:</strong> info@servicetree.online</p>
                <p><strong>{t("privacy.contact.address")}:</strong> Anakous 31, 14341 Nea Filadelfeia, Greece</p>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              {t("privacy.updates.title")}
            </h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground">
                {t("privacy.updates.description")}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>{t("privacy.updates.lastUpdated")}:</strong> January 2025
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
