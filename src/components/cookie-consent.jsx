"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function CookieConsent() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 bg-card border border-border shadow-lg rounded-lg p-6 backdrop-blur-sm bg-opacity-95">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
        <div className="flex items-start space-x-3 flex-1">
          <div className="flex-shrink-0 mt-0.5">
            <Cookie className="h-5 w-5 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t("cookie.message")}
          </p>
        </div>
        <div className="flex-shrink-0">
          <Button
            onClick={handleAccept}
            size="sm"
            className="whitespace-nowrap"
          >
            {t("cookie.accept")}
          </Button>
        </div>
      </div>
    </div>
  );
}
