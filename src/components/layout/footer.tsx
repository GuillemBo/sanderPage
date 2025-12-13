import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/data';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Six-String Showcase. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {SOCIAL_LINKS.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <Link href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
