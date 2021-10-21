const parseToJson = (data) => {
    try {
        return JSON.parse(data);
    } catch (error) {
        return {};
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const itemsToTranslate = document.querySelectorAll("[data-translate]");
    const translationSource = document.querySelector('script#translations');

    if (!translationSource) {
        return;
    }

    const rawTranslations = translationSource.innerHTML;
    const i18n = parseToJson(rawTranslations);
    const defaultLanguage = i18n["defaultLanguage"] || 'en';

    const translateItem = (item, resourceString, language) => {
        if (!i18n || !i18n[language] || !i18n[language][resourceString]) {
            if (i18n[defaultLanguage] && i18n[defaultLanguage][resourceString]) {
                return i18n[defaultLanguage][resourceString];
            }

            if (item.innerHTML) {
                return item.innerHTML;
            }

            return  resourceString;
        }

        return i18n[language][resourceString];
    }

    itemsToTranslate.forEach(item => {
        const resourceString = item.getAttribute("data-translate");
        const language = item.getAttribute("data-lang") || defaultLanguage;

        item.innerHTML = translateItem(item, resourceString, language);
        item.removeAttribute('data-translate');
        item.removeAttribute('data-lang');
    });
});
