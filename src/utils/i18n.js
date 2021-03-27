import i18n from '../data/i18n.json';

export default (() => {
  let lang = navigator.language || navigator.userLanguage;
  lang = lang.toLowerCase();
  lang = i18n[lang] ? lang : lang.split('-')[0];
  return i18n[lang] || i18n.en;
})();
