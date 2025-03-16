import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Quiz',
    short_name: 'Quiz',
    description: 'Quiz App',
    start_url: '/',
    display: 'standalone',
    background_color: '#1F002B',
    theme_color: '#1F002B',
    icons: [
      {
        src: '/royalObsession.png',
        sizes: '100x100',
        type: 'image/png',
      },
    ],
  };
}
