import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NextPress: CMS',
    short_name: 'NextPress: CMS',
    description: 'Content management system on NextPress',
    display: 'standalone',
    start_url: '/',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
