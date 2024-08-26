import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";
import starlightThemeRapide from 'starlight-theme-rapide'


import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://knowledgewiki.jackkershaw.net",
  integrations: [starlight({
    plugins: [starlightThemeRapide()],
    title: "My Knowledge Wiki",
    social: {
      github: "https://github.com/jones58/personal-knowledge-wiki"
    },
    sidebar: [{
      label: "Reference",
      autogenerate: {
        directory: "reference"
      }
    }]
  }), sitemap()]
});
