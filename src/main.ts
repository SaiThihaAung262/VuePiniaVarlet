import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./router";
import { pinia } from "./store";
import i18n from "./locales/i18n";

const app = createApp(App);

setupRouter(app);
app.use(pinia);

app.use(i18n);

app.mount("#app");
