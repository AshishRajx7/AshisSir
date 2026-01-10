import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { educationHistory } from "@/lib/data";
import { GraduationCap, Award } from "lucide-react";

export default function EducationPage() {
  return (
    <div className="container mx-auto max-w-5xl animate-fade-in px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
          Education &amp; Qualifications
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A foundation of academic excellence.
        </p>
      </header>

      <div className="space-y-8">
        {educationHistory.map((edu, index) => (
          <Card key={index} className="transition-shadow hover:shadow-lg">
            <CardHeader className="grid grid-cols-[auto,1fr] items-start gap-4 space-y-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <CardTitle className="font-headline text-2xl">
                  {edu.degree}
                </CardTitle>
                <CardDescription className="text-md">
                  {edu.institution} &middot; {edu.year}
                </CardDescription>
                <p className="text-sm text-muted-foreground">{edu.specialization}</p>
              </div>
            </CardHeader>
            {edu.achievements.length > 0 && (
              <>
                <CardContent>
                  <h3 className="mb-2 font-semibold">Achievements &amp; Honors:</h3>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    {edu.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start">
                        <Award className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-accent-foreground" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
