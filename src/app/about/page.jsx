import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { professorData } from "@/lib/data";
import { Quote } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl animate-fade-in px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
          About Dr. {professorData.name.split(" ").pop()}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A journey through academia, research, and mentorship.
        </p>
      </header>

      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              Academic Biography
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg text-foreground/80">
            {professorData.biography.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary">
          Career Timeline
        </h2>
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:md:mx-auto before:md:w-0.5">
          {professorData.careerTimeline.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center md:justify-center"
            >
              <div
                className={`flex w-full items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } md:justify-between`}
              >
                <div className="hidden w-2/5 md:block"></div>
                <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                  <span className="font-bold">{item.year.split(" - ")[0]}</span>
                </div>
                <Card className="w-full md:w-2/5">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.institution}</CardDescription>
                    <p className="text-sm text-muted-foreground">
                      {item.year}
                    </p>
                  </CardHeader>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Research Interests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {professorData.researchInterests.map((interest) => (
                <Badge key={interest} variant="secondary" className="px-3 py-1 text-sm">
                  {interest}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary">
          Academic Philosophy
        </h2>
        <Card className="bg-secondary/50">
          <CardContent className="p-8">
            <Quote className="h-8 w-8 text-accent-foreground" />
            <blockquote className="mt-4 border-l-4 border-primary pl-6 text-xl italic text-foreground/90">
              {professorData.academicPhilosophy}
            </blockquote>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
