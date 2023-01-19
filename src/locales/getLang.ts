import {set} from "lodash-es";

const modules = import.meta.globEager("./language/**/*.ts");

function getLanguages(langs: any, prefix = "language") {
    let obj = {
        cn: {},
        en: {},
    };
    Object.keys(langs).forEach((key) => {
        const mod = langs[key].default;
        let k = key
            .replace(`./${prefix}/`, "")
            .replace(/^\.\//, "")
            .replace("/index", "");
        const lastIndex = k.lastIndexOf(".");
        k = k.substring(0, lastIndex);
        const keyList = k.split("/");
        const lang = keyList.pop()!;
        // if (keyList.length == 0) {
        //   obj[lang] = { ...mod };
        // }
        // @ts-ignore
        if (obj[lang]) {
            // @ts-ignore
            obj[lang][keyList[0]] = {...mod};
        }
        // if (keyList.length == 2) {
        //   obj[lang][keyList[0]][keyList[1]] = { ...mod };
        // }
    });
    return obj;
}

const language = getLanguages(modules);

export default language;
