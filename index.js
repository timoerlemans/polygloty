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

    itemsToTranslate.forEach(item => {
        const resourceString = item.getAttribute("data-translate");
        const language = item.getAttribute("data-lang") || defaultLanguage;

        if (!i18n || !i18n[language] || !i18n[language][resourceString]) {
            item.innerHTML = resourceString;
            return;
        }

        item.innerHTML = i18n[language][resourceString];
    });
});
