import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { teachingInfo } from "@/lib/data";
import { Quote, BookOpen, FlaskConical } from "lucide-react";

export default function TeachingPage() {
  return (
    <div className="container mx-auto max-w-5xl animate-fade-in px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
          Teaching &amp; Mentorship
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Fostering the next generation of engineers and innovators.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary">
          Teaching Philosophy
        </h2>
        <Card className="bg-secondary/50">
          <CardContent className="p-8">
            <Quote className="h-8 w-8 text-accent-foreground" />
            <blockquote className="mt-4 border-l-4 border-primary pl-6 text-xl italic text-foreground/90">
              {teachingInfo.philosophy}
            </blockquote>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary">
          Courses Taught
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                Undergraduate Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {teachingInfo.undergraduateCourses.map((course) => (
                  <li key={course.code} className="flex items-center">
                    <span className="mr-4 font-semibold text-primary">
                      {course.code}
                    </span>
                    <span className="text-muted-foreground">{course.title}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                Postgraduate Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {teachingInfo.postgraduateCourses.map((course) => (
                  <li key={course.code} className="flex items-center">
                    <span className="mr-4 font-semibold text-primary">
                      {course.code}
                    </span>
                    <span className="text-muted-foreground">{course.title}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary">
          Contributions
        </h2>
        <div className="space-y-8">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <BookOpen className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">
                Curriculum Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {teachingInfo.curriculumContributions}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <FlaskConical className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">
                Lab Innovations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {teachingInfo.labInnovations}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
