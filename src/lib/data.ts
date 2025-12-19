import type { LucideIcon } from 'lucide-react';
import { Youtube, Instagram, Twitter, Music } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Biografía' },
  { href: '/gallery', label: 'Galería' },
  { href: '/contact', label: 'Contacto' },
];

export const SOCIAL_LINKS: { name: string; icon: LucideIcon; url: string }[] = [
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@interesander' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/interesander' },
  { name: 'Spotify', icon: Music, url: 'https://open.spotify.com/intl-es/artist/1D3kOqOYJbBGDlfMuLMcfw' },
];

export const GALLERY_VIDEOS = [
  {
    id: 'vid1',
    title: 'Blue Heaven',
    description: 'Album Teaser',
    imageId: 'gallery-video-1',
    videoUrl: 'https://youtu.be/vKlZANh800w?si=hIlXdz-nlu905FyP'
  },
  {
    id: 'vid2',
    title: 'Sol',
    description: 'Maite Ruiz de Erentxun',
    imageId: 'gallery-video-2',
    videoUrl: 'https://youtu.be/oL42Gv0ibWg?si=nCuf5MmZeGgCkUuL'
  },
  {
    id: 'vid3',
    title: 'Silencio',
    description: 'Alesander Peña & Sara Lilu',
    imageId: 'gallery-video-3',
    videoUrl: 'https://youtu.be/GIpe5IMbNxg?si=QhiJzuOR_QCtjnvV'
  },
  // {
  //   id: 'vid4',
  //   title: 'Studio Session: "Gold Tone"',
  //   description: 'Behind the scenes recording my new single.',
  //   imageId: 'gallery-video-4',
  //   videoUrl: 'https://www.youtube.com'
  // },
];

export const GALLERY_AUDIO = [
  {
    id: 'aud1',
    title: 'Spotify',
    description: 'Alesander Peña',
    imageId: 'gallery-audio-1',
    audioUrl: 'https://open.spotify.com/intl-es/artist/1D3kOqOYJbBGDlfMuLMcfw'
  },
  // {
  //   id: 'aud2',
  //   title: 'Jazz Fusion Explorations',
  //   description: 'An experimental piece blending jazz and rock elements.',
  //   imageId: 'gallery-audio-2',
  // },
  // {
  //   id: 'aud3',
  //   title: 'Golden Hour',
  //   description: 'An upbeat, fingerstyle rock instrumental.',
  //   imageId: 'gallery-audio-3',
  // },
  // {
  //   id: 'aud4',
  //   title: 'Lesson: The Mixolydian Mode',
  //   description: 'A short audio lesson on a key concept for improvisation.',
  //   imageId: 'gallery-audio-4',
  // },
];
