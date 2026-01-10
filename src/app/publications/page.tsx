"use client";

import { useState, useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { publications } from "@/lib/data";
import type { Publication } from "@/lib/types";
import { Search, BookCopy, FileText, Library } from "lucide-react";

type PublicationCategory = "Journal Papers" | "Conference Papers" | "Books/Chapters";

const publicationCategories: PublicationCategory[] = [
  "Journal Papers",
  "Conference Papers",
  "Books/Chapters",
];

const categoryIcons = {
  "Journal Papers": FileText,
  "Conference Papers": Library,
  "Books/Chapters": BookCopy,
};

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPublications = useMemo(() => {
    if (!searchTerm) return publications;
    return publications.filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.venue.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const groupedPublications = (category: PublicationCategory) => {
    return filteredPublications
      .filter((p) => p.category === category)
      .reduce((acc, p) => {
        (acc[p.year] = acc[p.year] || []).push(p);
        return acc;
      }, {} as Record<number, Publication[]>);
  };

  return (
    <div className="container mx-auto max-w-7xl animate-fade-in px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            Publications
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of my contributions to the field.
          </p>
        </div>
        <div className="relative mx-auto mt-8 max-w-2xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search publications by title, author, or venue..."
            className="w-full pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <Tabs defaultValue="Journal Papers">
        <TabsList className="grid w-full grid-cols-3">
          {publicationCategories.map((cat) => (
            <TabsTrigger key={cat} value={cat}>
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>
        {publicationCategories.map((category) => {
          const pubsByYear = groupedPublications(category);
          const years = Object.keys(pubsByYear).map(Number).sort((a, b) => b - a);
          const CategoryIcon = categoryIcons[category];

          return (
            <TabsContent key={category} value={category}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                    <CategoryIcon className="h-6 w-6 text-primary" />
                    {category}
                  </CardTitle>
                   <CardDescription>
                    Showing {Object.values(pubsByYear).flat().length} publications.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {years.length > 0 ? (
                    years.map((year) => (
                      <div key={year} className="mb-8 last:mb-0">
                        <h3 className="mb-4 font-headline text-xl font-semibold text-primary">
                          {year}
                        </h3>
                        <Accordion type="single" collapsible className="w-full">
                          {pubsByYear[year].map((pub, index) => (
                            <AccordionItem
                              key={`${year}-${index}`}
                              value={`item-${index}`}
                            >
                              <AccordionTrigger>
                                <div className="text-left">
                                  <p className="font-semibold">{pub.title}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {pub.authors} - <em>{pub.venue}</em>
                                  </p>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="space-y-3">
                                <p className="text-sm">{pub.abstract}</p>
                                <div className="flex items-center justify-between text-sm">
                                  <p>
                                    <span className="font-semibold">
                                      Citations:
                                    </span>{" "}
                                    {pub.citationCount}
                                  </p>
                                  {pub.doi !== "N/A" && (
                                    <a
                                      href={`https://doi.org/${pub.doi}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="font-medium text-primary hover:underline"
                                    >
                                      View on DOI
                                    </a>
                                  )}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-muted-foreground">
                      No publications found for "{searchTerm}".
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
