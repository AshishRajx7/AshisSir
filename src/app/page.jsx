import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { professorData, researchAreas } from "@/lib/data";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const portraitImage = PlaceHolderImages.find(
    (img) => img.id === "professor-portrait"
  );

  return (
    <div className="animate-fade-in">
      <section className="bg-secondary/50 py-20 md:py-32">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              {professorData.name}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              {professorData.title}
            </p>
            <p className="max-w-xl text-lg text-foreground/80">
              {professorData.tagline}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="/research">View Research</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            {portraitImage && (
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary shadow-2xl md:h-80 md:w-80">
                <Image
                  src={portraitImage.imageUrl}
                  alt={`Portrait of ${professorData.name}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  data-ai-hint={portraitImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <Award className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="mt-4">{professorData.highlights.experience}+ Years</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Of Academic &amp; Research Experience</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="mt-4">{professorData.highlights.publications}+ Publications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">In Peer-Reviewed Journals &amp; Conferences</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="mt-4">{professorData.highlights.students}+ Students</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Guided for PhD, Masters, and UG</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
              Featured Research Areas
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Exploring the frontiers of electrical engineering to solve tomorrow's challenges.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {researchAreas.slice(0, 3).map((area) => (
              <Card key={area.id} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <area.icon className="h-10 w-10 text-accent-foreground" />
                    <CardTitle className="font-headline text-xl">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{area.summary}</p>
                  <Link href="/research" className="font-semibold text-primary group-hover:underline">
                    Learn More <ArrowRight className="inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
