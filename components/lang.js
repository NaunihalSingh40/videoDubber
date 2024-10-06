
"use client";

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import './lang.css';

export default function Language({ show, onClose }) {
    const languages = [
        { code: 'ar', name: 'العربية', flag: '/flags/saudi arabia.png' },
        { code: 'bg', name: 'Български', flag: '/flags/bulgaria.png' },
        { code: 'cs', name: 'Čeština', flag: '/flags/czech.png' },
        { code: 'da', name: 'Dansk', flag: '/flags/danish.png' },
        { code: 'de', name: 'Deutsch', flag: '/flags/german.png' },
        { code: 'el', name: 'Ελληνικά', flag: '/flags/greek.png' },
        { code: 'en', name: 'English', flag: '/flags/uk.png' },
        { code: 'es', name: 'Español', flag: '/flags/spainish.png' },
        { code: 'et', name: 'Eesti', flag: '/flags/estonian.png' },
        { code: 'fi', name: 'Suomi', flag: '/flags/finnish.png' },
        { code: 'fr', name: 'Français', flag: '/flags/french.png' },
        { code: 'he', name: 'עברית', flag: '/flags/hebrew.png' },
        { code: 'hi', name: 'हिंदी', flag: '/flags/india.png' },
        { code: 'hu', name: 'Magyar', flag: '/flags/hungrian.png' },
        { code: 'id', name: 'Indonesia', flag: '/flags/indonesian.png' },
        { code: 'it', name: 'Italiano', flag: '/flags/itlian.png' },
        { code: 'ja', name: '日本語', flag: '/flags/japanese.png' },
        { code: 'ko', name: '한국어', flag: '/flags/korean.png' },
        { code: 'lt', name: 'Lietuvių', flag: '/flags/lithunian.png' },
        { code: 'lv', name: 'Latviešu', flag: '/flags/latvian.png' },
        { code: 'nb', name: 'Bokmål', flag: '/flags/norwagien.png' },
        { code: 'nl', name: 'Nederlands', flag: '/flags/dutch.png' },
        { code: 'pl', name: 'Polski', flag: '/flags/polish.png' },
        { code: 'pt', name: 'Português', flag: '/flags/portugese.png' },
        { code: 'ro', name: 'Română', flag: '/flags/romain.png' },
        { code: 'ru', name: 'Русский', flag: '/flags/russian.png' },
        { code: 'sk', name: 'Slovenčina', flag: '/flags/slovakia.png' },
        { code: 'sl', name: 'Slovenščina', flag: '/flags/slovenia.png' },
        { code: 'sv', name: 'Svenska', flag: '/flags/swedish.png' },
        { code: 'th', name: 'ไทย', flag: '/flags/thai.png' },
        { code: 'tr', name: 'Türkçe', flag: '/flags/turkish.png' },
        { code: 'uk', name: 'Українська', flag: '/flags/ukrainian.png' },
        { code: 'vi', name: 'Tiếng Việt', flag: '/flags/vietnamese.png' },
        { code: 'zh', name: '中文', flag: '/flags/chinese.png' },
      ];

  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    onClose(); // Close the modal after selecting the language
  };

  if (!show) {
    return null; // Do not render if the language selector is not visible
  }

  return (
    <div className="language-overlay">
      <div className="language-modal">
        <button onClick={onClose} className="close-button">X</button>
        <h2>Select Language</h2>
        <div className="language-grid">
          {languages.map((lang) => (
            <div key={lang.code} className="language-item">
              <button onClick={() => handleLanguageChange(lang.code)}>
                <Image src={lang.flag} alt={lang.name} width={50} height={50} />
                <p>{lang.name}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
