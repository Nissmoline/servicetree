"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X, Settings, Shield, Info } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { 
  shouldShowConsentBanner, 
  markConsentBannerShown, 
  getConsentBannerDelay,
  saveCookieConsent,
  COOKIE_TYPES
} from "@/lib/cookie-utils";

export default function CookieConsent() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Проверяем, нужно ли показать баннер согласия
    if (shouldShowConsentBanner()) {
      // Небольшая задержка для менее агрессивного появления
      const timer = setTimeout(() => {
        setIsVisible(true);
        markConsentBannerShown();
      }, getConsentBannerDelay());

      return () => clearTimeout(timer);
    }
  }, []);

  // Управление скроллингом body
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('cookie-consent-open');
    } else {
      document.body.classList.remove('cookie-consent-open');
    }

    return () => {
      document.body.classList.remove('cookie-consent-open');
    };
  }, [isVisible]);

  const handleAcceptAll = () => {
    saveCookieConsent({
      [COOKIE_TYPES.NECESSARY]: true,
      [COOKIE_TYPES.ANALYTICS]: true,
      [COOKIE_TYPES.MARKETING]: true
    });
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    saveCookieConsent({
      [COOKIE_TYPES.NECESSARY]: preferences.necessary,
      [COOKIE_TYPES.ANALYTICS]: preferences.analytics,
      [COOKIE_TYPES.MARKETING]: preferences.marketing
    });
    setIsVisible(false);
  };

  const handleReject = () => {
    saveCookieConsent({
      [COOKIE_TYPES.NECESSARY]: true,
      [COOKIE_TYPES.ANALYTICS]: false,
      [COOKIE_TYPES.MARKETING]: false
    });
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/20 backdrop-blur-sm cookie-consent-mobile">
      <div className="w-full max-w-2xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="flex items-center space-x-3 min-w-0 flex-1">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
              <Cookie className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white truncate">
                {t("cookie.title")}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                {t("cookie.subtitle")}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 flex-shrink-0 ml-2"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto cookie-content">
          <div className="p-4 sm:p-6">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {t("cookie.description")}
            </p>

            {/* Cookie Categories */}
            <div className="space-y-3 sm:space-y-4 mb-6">
              {/* Necessary Cookies */}
              <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-3 min-w-0 flex-1">
                  <Shield className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                      {t("cookie.necessary.title")}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {t("cookie.necessary.description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-shrink-0 ml-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400 mr-2 hidden sm:inline">
                    {t("cookie.always")}
                  </span>
                  <div className="w-8 h-5 sm:w-10 sm:h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-3 min-w-0 flex-1">
                  <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                      {t("cookie.analytics.title")}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {t("cookie.analytics.description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-shrink-0 ml-2">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-3 min-w-0 flex-1">
                  <Settings className="h-4 w-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                      {t("cookie.marketing.title")}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {t("cookie.marketing.description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-shrink-0 ml-2">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                    className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Action Buttons */}
        <div className="p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleAcceptAll}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base py-2 sm:py-3"
            >
              {t("cookie.acceptAll")}
            </Button>
            <Button
              onClick={handleAcceptSelected}
              variant="outline"
              className="flex-1 text-sm sm:text-base py-2 sm:py-3"
            >
              {t("cookie.acceptSelected")}
            </Button>
            <Button
              onClick={handleReject}
              variant="ghost"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm sm:text-base py-2 sm:py-3"
            >
              {t("cookie.reject")}
            </Button>
          </div>

          {/* Privacy Policy Link */}
          <div className="mt-4 text-center">
            <a
              href="/privacy"
              className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
            >
              {t("cookie.privacyPolicy")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
