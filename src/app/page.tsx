import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GALLERY_VIDEOS } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-guitarist');
  const recentWork = GALLERY_VIDEOS.slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center p-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-light text-shadow-lg">
            Alesander Peña
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-body text-primary">
            Guitarrista | Compositor | Videógrafo
          </p>
          {/* <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Contáctame</Link>
          </Button> */}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-sans font-light text-center mb-12 text-primary">
            My Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentWork.map((item) => {
              const image = PlaceHolderImages.find(img => img.id === item.imageId);
              return (
                <Link href="/gallery" key={item.id}>
                  <Card className="overflow-hidden h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                    <CardContent className="p-0">
                      {image && (
                        <div className="aspect-video relative">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-sans font-semibold">{item.title}</h3>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary text-lg">
              <Link href="/gallery">
                View Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
