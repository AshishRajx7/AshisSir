import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { studentData } from "@/lib/data";
import { Users, User, GraduationCap, Star } from "lucide-react";

export default function StudentsPage() {
  return (
    <div className="container mx-auto max-w-5xl animate-fade-in px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
          Student Supervision
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Guiding the research and careers of bright minds.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary">
          Mentorship Impact
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <Users className="mx-auto h-12 w-12 text-primary" />
              <CardTitle className="mt-4 text-4xl font-bold">
                {studentData.stats.phd}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Ph.D. Students Supervised</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <User className="mx-auto h-12 w-12 text-primary" />
              <CardTitle className="mt-4 text-4xl font-bold">
                {studentData.stats.masters}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Master's Students Guided
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <GraduationCap className="mx-auto h-12 w-12 text-primary" />
              <CardTitle className="mt-4 text-4xl font-bold">
                {studentData.stats.undergrad}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Undergraduate Projects Advised
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary">
          Current Research Scholars
        </h2>
        <div className="space-y-4">
          {studentData.currentScholars.map((scholar, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{scholar.name}</CardTitle>
                <CardDescription>
                  <span className="font-semibold">Research Topic:</span>{" "}
                  {scholar.topic}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary">
          Notable Alumni
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {studentData.notableAlumni.map((alumnus, index) => (
            <Card key={index} className="flex items-center p-6">
              <Star className="mr-4 h-8 w-8 flex-shrink-0 text-yellow-500" />
              <div>
                <CardTitle>{alumnus.name}</CardTitle>
                <CardDescription>{alumnus.achievement}</CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
