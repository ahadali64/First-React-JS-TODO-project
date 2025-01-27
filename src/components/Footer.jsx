import React from "react"
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Linkedin, Send, ExternalLink } from "lucide-react"
import PageWrapper from "./PageWrapper"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-violet-600 dark:text-violet-400">Creative Blogs</h2>
            <p className="text-sm">
              Empowering voices, connecting ideas, and inspiring minds through the art of blogging. Join our community
              of passionate writers and readers.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://facebook.com" Icon={Facebook} label="Facebook" />
              <SocialIcon href="https://twitter.com" Icon={Twitter} label="Twitter" />
              <SocialIcon href="https://instagram.com" Icon={Instagram} label="Instagram" />
              <SocialIcon href="https://linkedin.com" Icon={Linkedin} label="LinkedIn" />
            </div>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/blogs">Blogs</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
            </ul>
          </div>

     
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <FooterLink href="/category/technology">Technology</FooterLink>
              <FooterLink href="/category/lifestyle">Lifestyle</FooterLink>
              <FooterLink href="/category/travel">Travel</FooterLink>
              <FooterLink href="/category/food">Food & Cooking</FooterLink>
              <FooterLink href="/category/health">Health & Wellness</FooterLink>
              <FooterLink href="/category/finance">Personal Finance</FooterLink>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest blogs and community news.</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <Input type="email" placeholder="Enter your email" className="w-full" />
              <Button type="submit" className="w-full">
                Subscribe
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />


        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">&copy; {currentYear} Creative Blogs. All rights reserved.</p>
          <div className="flex space-x-4 text-sm">
            <Link
              to="/sitemap"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
            >
              Sitemap
            </Link>
            <a
              href="http://trexperiatech.vercel.app/"
              className="flex items-center hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Our Parent Company
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const SocialIcon = ({ href, Icon, label }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="h-6 w-6" />
  </a>
)

const FooterLink = ({ href, children }) => (
  <li>
    <Link to={href} className="text-sm hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200">
      {children}
    </Link>
  </li>
)

export default Footer

