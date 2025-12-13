import type { LucideIcon } from 'lucide-react';
import { Youtube, Instagram, Twitter, Music } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export const SOCIAL_LINKS: { name: string; icon: LucideIcon; url: string }[] = [
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
  { name: 'X', icon: Twitter, url: 'https://x.com' },
  { name: 'Bandcamp', icon: Music, url: 'https://bandcamp.com' },
];

export const GALLERY_VIDEOS = [
  {
    id: 'vid1',
    title: 'Live at The Jazz Cellar',
    description: 'A full set performance from our recent show.',
    imageId: 'gallery-video-1',
    videoUrl: 'https://www.youtube.com'
  },
  {
    id: 'vid2',
    title: 'Blues Improvisation',
    description: 'An improvised solo over a classic blues progression.',
    imageId: 'gallery-video-2',
    videoUrl: 'https://www.youtube.com'
  },
  {
    id: 'vid3',
    title: 'Acoustic Rock Ballad',
    description: 'An original composition for acoustic guitar.',
    imageId: 'gallery-video-3',
    videoUrl: 'https://www.youtube.com'
  },
  {
    id: 'vid4',
    title: 'Studio Session: "Gold Tone"',
    description: 'Behind the scenes recording my new single.',
    imageId: 'gallery-video-4',
    videoUrl: 'https://www.youtube.com'
  },
];

export const GALLERY_AUDIO = [
  {
    id: 'aud1',
    title: 'Midnight Blues',
    description: 'A slow, moody blues track.',
    imageId: 'gallery-audio-1',
  },
  {
    id: 'aud2',
    title: 'Jazz Fusion Explorations',
    description: 'An experimental piece blending jazz and rock elements.',
    imageId: 'gallery-audio-2',
  },
  {
    id: 'aud3',
    title: 'Golden Hour',
    description: 'An upbeat, fingerstyle rock instrumental.',
    imageId: 'gallery-audio-3',
  },
  {
    id: 'aud4',
    title: 'Lesson: The Mixolydian Mode',
    description: 'A short audio lesson on a key concept for improvisation.',
    imageId: 'gallery-audio-4',
  },
];
