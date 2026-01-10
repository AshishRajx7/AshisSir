import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fundedProjects, researchAreas } from "@/lib/data";
import { CircleDot } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="container mx-auto max-w-7xl animate-fade-in px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
          Research &amp; Projects
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Advancing technology through innovative research and impactful projects.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary">
          Core Research Areas
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {researchAreas.map((area) => (
            <Card key={area.id} className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <area.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline mt-4 text-xl">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{area.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary">
          Funded Research Projects
        </h2>
        <div className="space-y-8">
          {fundedProjects.map((project, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <CardTitle className="font-headline text-2xl">
                    {project.title}
                  </CardTitle>
                  <Badge
                    variant={
                      project.status === "Ongoing" ? "default" : "secondary"
                    }
                    className="flex items-center gap-2"
                  >
                    <CircleDot className="h-3 w-3" />
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="pt-2">
                  <span className="font-semibold">Role:</span> {project.role} |{" "}
                  <span className="font-semibold">Funding:</span>{" "}
                  {project.fundingAgency}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  <span className="font-semibold">Duration:</span>{" "}
                  {project.duration}
                </p>
                <p className="mt-2 text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Key Outcomes:
                  </span>{" "}
                  {project.outcomes}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
