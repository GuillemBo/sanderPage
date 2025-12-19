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
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-primary mb-6">
              Alesander Peña
            </h1>
            <div className="space-y-6 text-lg text-foreground/80 font-body">
              <p>
               Alesander Peña, o Sander, es un destacado guitarrista y compositor nacido en 1997 en Castro-Urdiales, Cantabria. Comenzó su camino musical a los 8 años en su pintoresco pueblo natal, tocando en grupos locales y experimentando con grabaciones. A los 18 años, su formación en L'AULA lo introdujo al mundo del jazz.
              </p>
              <p>
                A los 22 años, continuó su formación en el Centro Superior de Música Liceu con una beca de la Fundación Ferrer-Salat, guiado por mentores como Jaume Llombart y Dani Pérez. Desarrolló su talento en escenarios icónicos de Barcelona como Jamboree, Gran Teatro del Liceu y La Pedrera, así como en otros lugares de España, Italia, Alemania o Brasil. También vivió en Rio de Janeiro tras acabar la carrera, donde se sumergió de lleno en la música y cultura brasileña.
              </p>
              <p>
                En la actualidad, Sander avanza en su carrera musical como docente, así como preparando futuros proyectos y centrándose en los ya existentes. Además, participa en varios grupos y colabora en actuaciones y grabaciones de destacados músicos de Barcelona y del norte de España, así como con algunos artistas internacionales.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
