import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import purgeCss from "vite-plugin-purgecss";

export default defineConfig({
  plugins: [
    handlebars({
      context: {
        titulo: "Mi Portafolio",
      },
    }),
    purgeCss(),
  ],
});
