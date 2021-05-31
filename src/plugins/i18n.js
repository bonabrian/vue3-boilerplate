import { createI18n } from 'vue-i18n';

const loadMessages = () => {
  const locales = require.context('@locale', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });

  return messages;
};

export default createI18n({
  // legacy: true,
  locale: process.env.VUE_APP_LOCALE || 'id',
  fallbackLocale: process.env.VUE_APP_FALLBACK_LOCALE || 'id',
  messages: loadMessages()
});
