/**
 * i18n.js - Internationalization module for bilingual support
 * Handles English/Spanish translation switching
 */

class I18n {
  constructor() {
    this.currentLang = null;
    this.translations = {};
    this.defaultLang = 'en';
    this.supportedLangs = ['en', 'es'];
  }

  /**
   * Initialize the i18n system
   */
  async init() {
    // Load translation files
    await this.loadTranslations();

    // Determine which language to use
    const savedLang = localStorage.getItem('preferred-language');
    const browserLang = this.getBrowserLanguage();
    const initialLang = savedLang || browserLang || this.defaultLang;

    // Set the language
    await this.setLanguage(initialLang);

    // Set up language switcher event listeners
    this.setupLanguageSwitcher();
  }

  /**
   * Load translation JSON files
   */
  async loadTranslations() {
    try {
      const loadLang = async (lang) => {
        const response = await fetch(`/translations/${lang}.json`);
        if (!response.ok) {
          throw new Error(`Failed to load ${lang} translations`);
        }
        return await response.json();
      };

      // Load both language files
      const [en, es] = await Promise.all([
        loadLang('en'),
        loadLang('es')
      ]);

      this.translations = { en, es };
    } catch (error) {
      console.error('Error loading translations:', error);
      // Fallback to English if loading fails
      this.currentLang = 'en';
    }
  }

  /**
   * Get browser's preferred language
   */
  getBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    // Extract language code (e.g., 'es' from 'es-MX')
    const langCode = browserLang.split('-')[0];

    // Return if supported, otherwise default
    return this.supportedLangs.includes(langCode) ? langCode : this.defaultLang;
  }

  /**
   * Set the current language and apply translations
   */
  async setLanguage(lang) {
    // Validate language
    if (!this.supportedLangs.includes(lang)) {
      lang = this.defaultLang;
    }

    this.currentLang = lang;

    // Save preference
    localStorage.setItem('preferred-language', lang);

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Apply translations to the page
    this.applyTranslations();

    // Update meta tags
    this.updateMetaTags();

    // Update active state on language switcher
    this.updateLanguageSwitcher();
  }

  /**
   * Apply translations to all elements with data-i18n attribute
   */
  applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.getTranslation(key);

      if (translation) {
        // Check if element has data-i18n-html attribute for HTML content
        if (element.hasAttribute('data-i18n-html')) {
          element.innerHTML = translation;
        } else {
          element.textContent = translation;
        }
      }
    });
  }

  /**
   * Get a translation by key (supports nested keys with dot notation)
   */
  getTranslation(key) {
    const keys = key.split('.');
    let translation = this.translations[this.currentLang];

    for (const k of keys) {
      if (translation && translation[k] !== undefined) {
        translation = translation[k];
      } else {
        console.warn(`Translation not found for key: ${key}`);
        return null;
      }
    }

    return translation;
  }

  /**
   * Update meta tags with translated content
   */
  updateMetaTags() {
    const meta = this.translations[this.currentLang].meta;

    // Update title
    document.title = meta.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', meta.description);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', meta.twitterTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', meta.description);
    }
  }

  /**
   * Set up event listeners for language switcher buttons
   */
  setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('[data-lang]');

    langButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = button.getAttribute('data-lang');
        this.setLanguage(lang);
      });
    });
  }

  /**
   * Update active state on language switcher buttons
   */
  updateLanguageSwitcher() {
    const langButtons = document.querySelectorAll('[data-lang]');

    langButtons.forEach(button => {
      const buttonLang = button.getAttribute('data-lang');
      if (buttonLang === this.currentLang) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  /**
   * Get current language
   */
  getCurrentLanguage() {
    return this.currentLang;
  }
}

// Initialize i18n when DOM is ready
const i18n = new I18n();

// Wait for DOM to be ready before initializing
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
  i18n.init();
}

// Export for potential use in other scripts
window.i18n = i18n;
