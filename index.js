const parseToJson = (data) => {
    try {
        return JSON.parse(data);
    } catch (error) {
        console.error(error);
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

        if (!i18n[language]) {
            item.innerHTML = resourceString;
        }

        item.innerHTML = i18n[language][resourceString] || resourceString;
    });
});
