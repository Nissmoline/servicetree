"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { useLanguage } from "@/components/language-provider";

export default function ImpressumPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow py-20 lg:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">
          {t("impressum.title")}
        </h1>

        <div className="space-y-8 text-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("impressum.companyInfo.title")}</h2>
            <p>
              {t("impressum.companyInfo.name")}
            </p>
            <p>
              {t("impressum.companyInfo.address")}
            </p>
            <p>
              {t("impressum.companyInfo.taxId")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("impressum.contact.title")}</h2>
            <p>
              {t("impressum.contact.phone")}
            </p>
            <p>
              {t("impressum.contact.email")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("impressum.disclaimer.title")}</h2>
            <p>
              {t("impressum.disclaimer.content")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("impressum.dataProtection.title")}</h2>
            <p>
              {t("impressum.dataProtection.content")}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
