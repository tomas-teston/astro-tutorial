import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Astro alumno | Blog',
    description: 'Mi viaje de aprendizaje de Astro',
    site: 'https://astro-tutorial-tomy.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-ES</language>`,
  });
}