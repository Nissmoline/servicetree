/**
 * Cookie utilities for managing user consent and preferences
 */

// Cookie consent types
export const COOKIE_TYPES = {
  NECESSARY: 'necessary',
  ANALYTICS: 'analytics',
  MARKETING: 'marketing'
};

// Default cookie preferences
export const DEFAULT_PREFERENCES = {
  [COOKIE_TYPES.NECESSARY]: true,
  [COOKIE_TYPES.ANALYTICS]: false,
  [COOKIE_TYPES.MARKETING]: false
};

/**
 * Get current cookie consent preferences
 * @returns {Object} Cookie preferences object
 */
export function getCookieConsent() {
  if (typeof window === 'undefined') {
    return DEFAULT_PREFERENCES;
  }

  try {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      return null; // No consent given yet
    }

    const parsed = JSON.parse(consent);
    return {
      [COOKIE_TYPES.NECESSARY]: parsed.necessary ?? true,
      [COOKIE_TYPES.ANALYTICS]: parsed.analytics ?? false,
      [COOKIE_TYPES.MARKETING]: parsed.marketing ?? false,
      timestamp: parsed.timestamp
    };
  } catch (error) {
    console.error('Error parsing cookie consent:', error);
    return null;
  }
}

/**
 * Check if user has given consent for a specific cookie type
 * @param {string} cookieType - Type of cookie to check
 * @returns {boolean} Whether consent is given
 */
export function hasCookieConsent(cookieType) {
  const consent = getCookieConsent();
  if (!consent) {
    return false;
  }

  // Necessary cookies are always allowed
  if (cookieType === COOKIE_TYPES.NECESSARY) {
    return true;
  }

  return consent[cookieType] === true;
}

/**
 * Save cookie consent preferences
 * @param {Object} preferences - Cookie preferences object
 */
export function saveCookieConsent(preferences) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const consent = {
      ...preferences,
      timestamp: Date.now()
    };
    localStorage.setItem('cookie_consent', JSON.stringify(consent));
  } catch (error) {
    console.error('Error saving cookie consent:', error);
  }
}

/**
 * Clear cookie consent
 */
export function clearCookieConsent() {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.removeItem('cookie_consent');
  } catch (error) {
    console.error('Error clearing cookie consent:', error);
  }
}

/**
 * Check if consent banner should be shown
 * @returns {boolean} Whether to show the consent banner
 */
export function shouldShowConsentBanner() {
  if (typeof window === 'undefined') {
    return false;
  }

  const consent = getCookieConsent();
  if (consent) {
    return false; // User has already given consent
  }

  // Check if we've shown the banner recently
  const lastShown = localStorage.getItem('cookie_last_shown');
  if (lastShown) {
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000; // 24 hours
    if (now - parseInt(lastShown) < oneDay) {
      return false; // Don't show again within 24 hours
    }
  }

  return true;
}

/**
 * Mark consent banner as shown
 */
export function markConsentBannerShown() {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem('cookie_last_shown', Date.now().toString());
  } catch (error) {
    console.error('Error marking consent banner as shown:', error);
  }
}

/**
 * Get consent banner display delay (in milliseconds)
 * @returns {number} Delay in milliseconds
 */
export function getConsentBannerDelay() {
  // Show banner after 2 seconds for less aggressive behavior
  return 2000;
}

/**
 * Check if analytics cookies are allowed
 * @returns {boolean} Whether analytics cookies are allowed
 */
export function isAnalyticsAllowed() {
  return hasCookieConsent(COOKIE_TYPES.ANALYTICS);
}

/**
 * Check if marketing cookies are allowed
 * @returns {boolean} Whether marketing cookies are allowed
 */
export function isMarketingAllowed() {
  return hasCookieConsent(COOKIE_TYPES.MARKETING);
}

/**
 * Get consent timestamp
 * @returns {number|null} Timestamp when consent was given
 */
export function getConsentTimestamp() {
  const consent = getCookieConsent();
  return consent?.timestamp || null;
}

/**
 * Check if consent is recent (within last 30 days)
 * @returns {boolean} Whether consent is recent
 */
export function isConsentRecent() {
  const timestamp = getConsentTimestamp();
  if (!timestamp) {
    return false;
  }

  const thirtyDays = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
  return (Date.now() - timestamp) < thirtyDays;
}
