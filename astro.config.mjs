import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // <--- Esta línea es clave

export default defineConfig({
  integrations: [tailwind()], // <--- Y esta también
});