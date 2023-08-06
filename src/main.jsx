import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './i18n.jsx';

// ..
AOS.init();
// const translationNl = NetherlandTranslations;
// const translationEn = EnglishTranslations;
// i18n.use(initReactI18next).init({
//   resources: {
//     en: { translation: translationEn },
//     nl: { translation: translationNl },
//   },
//   lng: "en",
//   fallbacking: "en",
//   interpolation: { escapeValue: false },
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback="..loading translations">
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  </Suspense>
)
