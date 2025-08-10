"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, Settings, X, Shield, Info, Users } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { 
  getCookieConsent, 
  saveCookieConsent, 
  clearCookieConsent,
  COOKIE_TYPES 
} from "@/lib/cookie-utils";

export default function CookieManager({ isOpen, onClose }) {
  const { t } = useLanguage();
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Загружаем текущие настройки
    const consent = getCookieConsent();
    if (consent) {
      setPreferences({
        necessary: consent[COOKIE_TYPES.NECESSARY] ?? true,
        analytics: consent[COOKIE_TYPES.ANALYTICS] ?? false,
        marketing: consent[COOKIE_TYPES.MARKETING] ?? false
      });
    }
  }, []);

  const handleSave = () => {
    saveCookieConsent({
      [COOKIE_TYPES.NECESSARY]: preferences.necessary,
      [COOKIE_TYPES.ANALYTICS]: preferences.analytics,
      [COOKIE_TYPES.MARKETING]: preferences.marketing
    });
    onClose();
  };

  const handleReset = () => {
    clearCookieConsent();
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Settings className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t("cookieManager.title")}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t("cookieManager.subtitle")}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {t("cookieManager.description")}
          </p>

          {/* Cookie Categories */}
          <div className="space-y-4 mb-6">
            {/* Necessary Cookies */}
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {t("cookie.necessary.title")}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {t("cookie.necessary.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">
                  {t("cookie.always")}
                </span>
                <div className="w-10 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {t("cookie.analytics.title")}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {t("cookie.analytics.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {t("cookie.marketing.title")}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {t("cookie.marketing.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                  className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleSave}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              {t("cookieManager.save")}
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="flex-1"
            >
              {t("cookieManager.reset")}
            </Button>
            <Button
              onClick={onClose}
              variant="ghost"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              {t("cookieManager.cancel")}
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
