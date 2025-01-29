"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Users,
  Heart,
  UserPlus,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Toast } from "@/components/ui/toast";
import PageWrapper from "@/components/PageWrapper";
const authors = [
  {
    id: 1,
    name: "J.K. Rowling",
    avatar: "/placeholder.svg?height=200&width=200&text=JKR",
    bio: "British author best known for the Harry Potter fantasy series.",
    topBooks: [
      "Harry Potter and the Philosopher's Stone",
      "Harry Potter and the Deathly Hallows",
    ],
    followers: "5M+",
    articles: 150,
  },
  {
    id: 2,
    name: "Stephen King",
    avatar: "/placeholder.svg?height=200&width=200&text=SK",
    bio: "American author of horror, supernatural fiction, suspense, and fantasy novels.",
    topBooks: ["The Shining", "It"],
    followers: "4.5M+",
    articles: 200,
  },
  {
    id: 3,
    name: "Agatha Christie",
    avatar: "/placeholder.svg?height=200&width=200&text=AC",
    bio: "English writer known for her 66 detective novels and 14 short story collections.",
    topBooks: ["Murder on the Orient Express", "And Then There Were None"],
    followers: "3M+",
    articles: 100,
  },
  {
    id: 4,
    name: "George Orwell",
    avatar: "/placeholder.svg?height=200&width=200&text=GO",
    bio: "English novelist and essayist, best known for the allegorical novella Animal Farm and the dystopian novel 1984.",
    topBooks: ["1984", "Animal Farm"],
    followers: "4M+",
    articles: 120,
  },
  // Add more authors as needed
];

const AuthorCard = ({
  author,
  isFavorite,
  isFollowing,
  onFavorite,
  onFollow,
  onViewProfile,
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col h-full">
    <div className="flex items-center mb-4">
      <Avatar className="w-16 h-16 mr-4 border border-white">
        <AvatarImage src={author.avatar} alt={author.name} />
        <AvatarFallback>
          {author.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <h3 className="text-xl font-bold">{author.name}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
      {author.bio}
    </p>
    <div className="mb-4">
      <h4 className="font-semibold mb-2">Top Books:</h4>
      <ul className="list-disc list-inside">
        {author.topBooks.map((book, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-300">
            {book}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex flex-wrap gap-2 mb-4">
      <Badge variant="secondary" className="flex items-center gap-1">
        <Users className="w-4 h-4" />
        {author.followers} Followers
      </Badge>
      <Badge variant="secondary" className="flex items-center gap-1">
        <BookOpen className="w-4 h-4" />
        {author.articles} Articles
      </Badge>
    </div>
    <div className="flex flex-wrap gap-2 mt-auto">
      <Button
        variant={isFavorite ? "default" : "outline"}
        size="sm"
        onClick={() => onFavorite(author.id)}
      >
        <Heart className={`w-4 h-4 mr-2 ${isFavorite ? "fill-current" : ""}`} />
        {isFavorite ? "Favorited" : "Favorite"}
      </Button>
      <Button
        variant={isFollowing ? "default" : "outline"}
        size="sm"
        onClick={() => onFollow(author.id)}
      >
        <UserPlus className="w-4 h-4 mr-2" />
        {isFollowing ? "Following" : "Follow"}
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onViewProfile(author.id)}
      >
        <User className="w-4 h-4 mr-2" />
        View Profile
      </Button>
    </div>
  </div>
);

const FamousAuthors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [following, setFollowing] = useState([]);

  const nextAuthors = () => {
    setCurrentIndex((prev) => (prev + 1 >= authors.length ? 0 : prev + 2));
  };

  const prevAuthors = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? authors.length - 2 : prev - 2));
  };

  const toggleFavorite = (authorId) => {
    setFavorites((prev) =>
      prev.includes(authorId)
        ? prev.filter((id) => id !== authorId)
        : [...prev, authorId]
    );
    Toast({
      title: favorites.includes(authorId)
        ? "Removed from favorites"
        : "Added to favorites",
      description: `You have ${
        favorites.includes(authorId) ? "removed" : "added"
      } ${authors.find((a) => a.id === authorId)?.name} ${
        favorites.includes(authorId) ? "from" : "to"
      } your favorites.`,
    });
  };

  const toggleFollow = (authorId) => {
    setFollowing((prev) =>
      prev.includes(authorId)
        ? prev.filter((id) => id !== authorId)
        : [...prev, authorId]
    );
    toast({
      title: following.includes(authorId) ? "Unfollowed" : "Followed",
      description: `You have ${
        following.includes(authorId) ? "unfollowed" : "followed"
      } ${authors.find((a) => a.id === authorId)?.name}.`,
    });
  };

  const viewProfile = (authorId) => {
    toast({
      title: "View Profile",
      description: `Viewing profile of ${
        authors.find((a) => a.id === authorId)?.name
      }.`,
    });
  };

  return (
    <PageWrapper>
      <section className="py-16 w-full  from-purple-50 to-indigo-50 dark:from-purple-900 dark:to-indigo-900">
        <div className="">
          <h2 className="text-3xl font-bold text-center mb-12">
            Famous Authors
          </h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.2 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {[currentIndex, currentIndex + 1].map((index) => {
                  const author = authors[index % authors.length];
                  return (
                    <AuthorCard
                      key={author.id}
                      author={author}
                      isFavorite={favorites.includes(author.id)}
                      isFollowing={following.includes(author.id)}
                      onFavorite={toggleFavorite}
                      onFollow={toggleFollow}
                      onViewProfile={viewProfile}
                    />
                  );
                })}
              </motion.div>
            </AnimatePresence>
            <Button
            
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
              onClick={prevAuthors}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
          
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
              onClick={nextAuthors}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default FamousAuthors;
