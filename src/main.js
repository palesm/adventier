import "bootstrap/dist/css/bootstrap.css";
import { createApp, h } from "vue";
import store from "./store/index.js";
import router from "./routes/index.js";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp({
  render: () => h(App),
});
library.add(faMagnifyingGlass);
library.add(faPhone);

app.use(store);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
