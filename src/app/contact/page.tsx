import ContactForm from '@/components/contact/contact-form';
import { SOCIAL_LINKS } from '@/lib/data';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Have a question, a project proposal, or just want to talk about music? I'd love to hear from you.
          </p>
          <ContactForm />
        </div>
        <div className="bg-card p-8 rounded-lg">
          <h2 className="text-3xl font-headline font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <a href="mailto:contact@alexrivera.music" className="text-lg hover:text-primary transition-colors">
                contact@alexrivera.music
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <span className="text-lg text-muted-foreground">(555) 123-4567</span>
            </div>
          </div>
          <h2 className="text-3xl font-headline font-bold mt-12 mb-6">Follow Me</h2>
          <div className="flex items-center space-x-6">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`Visit my ${social.name} profile`}
              >
                <social.icon className="h-8 w-8" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
