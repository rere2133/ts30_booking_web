import router from "@/router"
import vuetify from "./vuetify"

export function registerPlugins(app) {
  app
    .use(router)
    .use(vuetify)
}