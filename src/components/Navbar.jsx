import  React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"



const NavBar = ({ toggleSidebar, toggleTheme, isDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-violet-600 dark:text-violet-400">Creative Blogs</h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/blogs">Blogs</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
              <NavLink to="/about">About Us</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Button variant="ghost" className="mr-2">
                Login
              </Button>
              <Button variant="outline" className="mr-2">
                Register
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <MobileMenu toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
  >
    {children}
  </Link>
)

const MobileMenu = ({
  toggleSidebar,
  toggleTheme,
  isDarkMode,
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuItem asChild>
        <Link to="/" className="w-full">
          Home
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link to="/blogs" className="w-full">
          Blogs
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link to="/contact" className="w-full">
          Contact Us
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link to="/about" className="w-full">
          About Us
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Button variant="ghost" className="w-full justify-start">
          Login
        </Button>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Button variant="ghost" className="w-full justify-start">
          Register
        </Button>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Button variant="ghost" className="w-full justify-start" onClick={toggleTheme}>
          {isDarkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
)

export default NavBar

