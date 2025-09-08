import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'he', name: 'עברית', flag: '🇮🇱' }
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className="language-switcher">
      <select 
        value={i18n.language} 
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-[#1f1f1f] border border-[#ffffff33] rounded-lg px-3 py-2 text-white text-sm focus:border-[#ff2332] focus:outline-none"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-[#1f1f1f] text-white">
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};
