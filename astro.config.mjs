import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://FrancoOkinggton1.github.io',
  base: '/Experts.adss', // El nombre exacto de tu repositorio
  integrations: [tailwind()],
});