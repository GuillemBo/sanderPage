import MediaGallery from '@/components/gallery/media-gallery';

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-sans font-bold text-primary">
          Galería
        </h1>
        {/* <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          
        </p> */}
      </div>
      <MediaGallery />
    </div>
  );
}
