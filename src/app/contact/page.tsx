"use client";

import { useState } from "react";
import Image from "next/image";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { professorData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  MapPin,
  Mail,
  Phone,
  Copy,
  Check,
  Linkedin,
} from "lucide-react";
import {
  GoogleScholarIcon,
  OrcidIcon,
  ResearchGateIcon,
} from "@/components/icons";

export default function ContactPage() {
  const [copiedText, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();
  const mapImage = PlaceHolderImages.find((img) => img.id === "contact-map");

  const handleCopy = (text: string) => {
    copy(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
        toast({
          title: "Copied to clipboard!",
          description: "The email address has been copied.",
        });
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Copy failed",
          description: "Could not copy the text.",
        });
      });
  };

  return (
    <div className="container mx-auto max-w-7xl animate-fade-in px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          For academic inquiries, collaborations, and student supervision.
        </p>
      </header>
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h2 className="font-headline text-2xl font-semibold text-primary">
              Contact Information
            </h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-4 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-muted-foreground">
                  {professorData.contact.address}
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-4 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  {professorData.contact.email}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 h-7 w-7"
                  onClick={() => handleCopy(professorData.contact.email)}
                >
                  {isCopied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  <span className="sr-only">Copy email</span>
                </Button>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  {professorData.contact.phone} (Office)
                </span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-headline text-2xl font-semibold text-primary">
              Academic Profiles
            </h2>
            <div className="mt-4 flex items-center gap-6">
              <a href={professorData.contact.profiles.googleScholar} target="_blank" rel="noreferrer noopener" className="text-muted-foreground hover:text-primary"><GoogleScholarIcon className="h-6 w-6" /><span className="sr-only">Google Scholar</span></a>
              <a href={professorData.contact.profiles.researchGate} target="_blank" rel="noreferrer noopener" className="text-muted-foreground hover:text-primary"><ResearchGateIcon className="h-6 w-6" /><span className="sr-only">ResearchGate</span></a>
              <a href={professorData.contact.profiles.orcid} target="_blank" rel="noreferrer noopener" className="text-muted-foreground hover:text-primary"><OrcidIcon className="h-6 w-6" /><span className="sr-only">ORCID</span></a>
              <a href={professorData.contact.profiles.linkedin} target="_blank" rel="noreferrer noopener" className="text-muted-foreground hover:text-primary"><Linkedin className="h-6 w-6" /><span className="sr-only">LinkedIn</span></a>
            </div>
          </div>
          {mapImage && (
             <div className="aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={mapImage.imageUrl}
                  alt="Map placeholder"
                  width={800}
                  height={450}
                  className="h-full w-full object-cover"
                  data-ai-hint={mapImage.imageHint}
                />
              </div>
          )}
        </div>
        <div className="space-y-8">
           <h2 className="font-headline text-2xl font-semibold text-primary">
              Contact Form
            </h2>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" rows={5} />
              <Button type="submit" disabled>Send Message (Placeholder)</Button>
            </form>
        </div>
      </div>
    </div>
  );
}
