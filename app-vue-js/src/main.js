import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/styles.css";

const app = createApp(App);

app.use(OpenLayersMap /* options */);
app.use(createPinia());
app.use(router);

app.mount("#app");
