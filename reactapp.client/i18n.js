import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../reactapp.client/src/locales/en/translation.json';
import pl from '../reactapp.client/src/locales/pl/translation.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en
        },
            pl: {
        translation: pl
        }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;