'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GALLERY_AUDIO, GALLERY_VIDEOS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PlayCircle, Music2 } from 'lucide-react';

export default function MediaGallery() {
  return (
    <Tabs defaultValue="videos" className="w-full">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
        <TabsTrigger value="videos">Videos</TabsTrigger>
        <TabsTrigger value="audio">Audio</TabsTrigger>
      </TabsList>
      <TabsContent value="videos">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {GALLERY_VIDEOS.map((item) => {
            const image = PlaceHolderImages.find(img => img.id === item.imageId);
            return (
              <Link href={item.videoUrl} key={item.id} target="_blank" rel="noopener noreferrer">
                <Card className="group overflow-hidden h-full flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50">
                  <CardHeader className="p-0 relative">
                    <div className="aspect-video">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <PlayCircle className="h-16 w-16 text-white/80" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter className="p-4 flex-grow flex flex-col items-start">
                    <h3 className="text-lg font-headline font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </div>
      </TabsContent>
      <TabsContent value="audio">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {GALLERY_AUDIO.map((item) => {
            const image = PlaceHolderImages.find(img => img.id === item.imageId);
            return (
              <Card key={item.id} className="group overflow-hidden h-full flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 cursor-pointer">
                <CardHeader className="p-0 relative">
                  <div className="aspect-video">
                    {image && (
                       <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Music2 className="h-16 w-16 text-white/80" />
                    </div>
                  </div>
                </CardHeader>
                <CardFooter className="p-4 flex-grow flex flex-col items-start">
                  <h3 className="text-lg font-headline font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </TabsContent>
    </Tabs>
  );
}
