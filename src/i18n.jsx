import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import { default as LanguageDetector } from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import tEn from './locales/en/translation.json';
import tNl from './locales/nl/translation.json';

i18n
    .use(Backend)
    .use(HttpApi)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        lng: 'nl',
        supportedLngs: ['en', 'nl'],
        fallbackLng: 'en',
        detection: {
            // order and from where user language should be detected
            order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie']
        },
        backend: {
            loadPath: '/src/locales/{{lng}}/translation.json',
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: tEn
            },
            nl: {
                translation: tNl
            },
        }
    });

export default i18n;