import React from "react";
import Hero from "./components/HeroSection";
import { CategorySection } from "./components/CategorySection";
import { TrendingBlogs } from "./components/TrendingBlogs";
import FamousAuthors from "./components/Authors";

function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <TrendingBlogs/>
      <FamousAuthors/>
    </>
  );
}

export default Home;
