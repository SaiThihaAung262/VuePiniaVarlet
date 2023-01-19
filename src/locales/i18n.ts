import {createI18n} from "vue-i18n";
import messages from "./getLang";

const lang = localStorage.getItem("lang") || "en";
const i18n = createI18n({
    legacy: false,
    locale: lang,
    fallbackLocale: "en",
    messages: {
        en: {...messages.en},
        cn: {...messages.cn},
    },
});
// Locals(i18n.global.fallbackLocale.value);
let changedLang;

export function changeLang(changesLan: "en" | "cn") {
    i18n.global.locale.value = changesLan;
    changedLang = changesLan;
}

export default i18n;