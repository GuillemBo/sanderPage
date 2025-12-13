import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-guitarist');

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-5 gap-0">
          <div className="md:col-span-2 relative min-h-[400px] md:min-h-0">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div className="md:col-span-3 p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6">
              About Alex Rivera
            </h1>
            <div className="space-y-6 text-lg text-foreground/80 font-body">
              <p>
                Alex Rivera is a versatile guitarist, composer, and music educator with a deep-rooted passion for the expressive power of the six-string. With over two decades of experience, he has carved out a unique voice that seamlessly blends the soulful improvisation of <strong className="text-primary/90">jazz</strong>, the raw energy of <strong className="text-primary/90">rock</strong>, and the heartfelt storytelling of the <strong className="text-primary/90">blues</strong>.
              </p>
              <p>
                His musical journey began at a young age, inspired by the icons of guitar. This initial spark led him to formal studies at the Berklee College of Music, where he honed his technical skills and deepened his understanding of music theory and composition. Throughout his career, Alex has performed at renowned venues and festivals, sharing the stage with a diverse array of artists.
              </p>
              <p>
                Beyond performance, Alex is a dedicated teacher, committed to nurturing the next generation of musicians. His teaching philosophy emphasizes not just technical proficiency but also musicality, creativity, and finding one's own unique style. He offers private lessons, workshops, and online courses covering topics from fretboard harmony to advanced improvisation techniques.
              </p>
              <p>
                In recent years, Alex has also ventured into video production, creating high-quality performance videos, tutorials, and gear demonstrations for his growing online audience. This multimedia approach allows him to share his passion and knowledge with a global community of music lovers.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
