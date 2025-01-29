"use client"

import React, { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ThumbsUp, MessageCircle, TrendingUp } from "lucide-react"
import PageWrapper from "@/components/PageWrapper"


const allTrendingBlogs = Array(3)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    title: `Blog Post ${index + 1}: ${["Short Title", "Medium Length Title Here", "This is a Much Longer Title That May Wrap"][index % 3]}`,
    excerpt:
      "This is a sample excerpt for the blog post. It demonstrates how the card handles varying lengths of content without disrupting the overall layout.",
    author: {
      name: ["Sarah Johnson", "Dr. Michael Chen", "Emma Green"][index % 3],
      avatar: `/placeholder.svg?height=40&width=40&text=A${index + 1}`,
    },
    category: ["Programming", "Technology", "Lifestyle"][index % 3],
    readTime: `${5 + (index % 5)} min read`,
    likes: 100 + index * 50,
    comments: 20 + index * 10,
    image: `https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg`,
  }))

export function TrendingBlogs() {
  const [visibleBlogs, setVisibleBlogs] = useState(6)

  const loadMore = () => {
    setVisibleBlogs((prevVisible) => Math.min(prevVisible + 3, allTrendingBlogs.length))
  }

  return (
    <PageWrapper>
      <section className="py-16 from-background to-secondary/20">
        <div className="">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-foreground flex items-center">
              <TrendingUp className="mr-2 text-primary" />
              Trending Blogs
            </h2>
            <Button >View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTrendingBlogs.slice(0, visibleBlogs).map((blog) => (
              <Card
                key={blog.id}
                className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader className="p-0">
                  <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-60 object-cover" />
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <Badge className="mb-2" variant="secondary">
                      {blog.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{blog.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {blog.readTime}
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {blog.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {blog.comments}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-6 py-3 flex items-center justify-between border-t">
                  <div className="flex items-center">
                    <Avatar className="w-8 h-8 mr-2">
                      <AvatarImage src={blog.author.avatar} />
                      <AvatarFallback>{blog.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{blog.author.name}</span>
                  </div>
                  <Button variant=""  size="sm">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          {visibleBlogs < allTrendingBlogs.length && (
            <div className="mt-10 text-center">
              <Button onClick={loadMore} variant="outline">
                Load More
              </Button>
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  )
}

