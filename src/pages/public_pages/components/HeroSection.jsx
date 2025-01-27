'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Search, Sparkles, TrendingUp, Users } from 'lucide-react'

const Hero= () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('discover')
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    })
    setIsVisible(true)
  }, [controls])

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    // Implement search functionality here
  }

  const backgroundVariants = {
    initial: { scale: 1 },
    animate: { scale: 1.05, transition: { duration: 10, repeat: Infinity, repeatType: 'reverse' } }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-violet-600 to-indigo-600 text-white">
      <motion.div
        className="absolute inset-0 z-0"
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
      >
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 h-full py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-center"
        >
          <motion.h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Unleash Your Creativity
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Join our community of passionate writers and readers. Discover inspiring stories, share your ideas, and
            connect with like-minded individuals.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="discover">Discover</TabsTrigger>
              <TabsTrigger value="create">Create</TabsTrigger>
              <TabsTrigger value="connect">Connect</TabsTrigger>
            </TabsList>
            <TabsContent value="discover" className="text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Explore New Ideas</h2>
              <p className="mb-6">Dive into a world of captivating stories and groundbreaking thoughts.</p>
              <form onSubmit={handleSearch} className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Search for blogs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-grow text-black"
                />
                <Button type="submit">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="create" className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Share Your Voice</h2>
              <p className="mb-6">Start your blogging journey and let your ideas flourish.</p>
              <Button size="lg">
                Start Writing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </TabsContent>
            <TabsContent value="connect" className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Join the Community</h2>
              <p className="mb-6">Connect with fellow writers and readers who share your passions.</p>
              <Button variant="secondary" size="lg">
                Explore Community
              </Button>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3"
          variants={contentVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {[
            { title: "1M+", description: "Active Readers" },
            { title: "100K+", description: "Published Articles" },
            { title: "50K+", description: "Expert Writers" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={contentVariants}
              transition={{ delay: 0.8 + index * 0.2 }}
            >
              <h3 className="text-4xl font-bold">{stat.title}</h3>
              <p className="mt-2 text-xl">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

      
      </div>

      
    </section>
  )
}

export default Hero
