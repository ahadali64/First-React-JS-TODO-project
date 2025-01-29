"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const categories = [
  { name: "Technology", icon: "💻" },
  { name: "Travel", icon: "✈️" },
  { name: "Food", icon: "🍔" },
  { name: "Lifestyle", icon: "🌿" },
  { name: "Fashion", icon: "👗" },
  { name: "Health", icon: "💪" },
  { name: "Business", icon: "💼" },
  { name: "Science", icon: "🔬" },
];

export function CategorySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start",  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <PageWrapper>
      <section className="py-12 bg-background">
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Explore Categories
          </h2>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_250px] min-w-0 mr-4 md:mr-6"
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                      <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                        <div className="text-4xl mb-4">{category.icon}</div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Explore {category.name.toLowerCase()} articles
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background shadow-md"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background shadow-md"
              onClick={scrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
