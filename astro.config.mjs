import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import path from "path";
import Icons from "unplugin-icons/vite";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: 'https://NaeNaeBaby-ETH.github.io',
  base: '/NaeNaeKittyGuardians',
  vite: {
    resolve: {
      alias: [{
        find: "src",
        replacement: path.join(__dirname, "src")
      }]
    },
    plugins: [Icons({
      compiler: "jsx"
    })]
  },
  integrations: [react(), tailwind()]
});