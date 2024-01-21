import router from "./router"
import vuetify from "./vuetify"
import pinia from "./pinia"

export function registerPlugins(app) {
  app
    .use(router)
    .use(vuetify)
    .use(pinia)
}