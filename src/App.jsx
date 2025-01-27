import React, { useState, useContext, useEffect } from "react";
import { Button } from "./components/ui/button";
import { useRoutes } from "./routes";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { ThemeContext, ThemeProvider } from "./components/theme/ThemeContext";
import Sidebar from "./components/SideBar";


function App() {
  const routes = useRoutes();
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          {routes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`bg-[url(/public/images/dd.jpg)] min-h-screen flex flex-col ${theme}`}>
      {/* <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}

      <Navbar toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} />

      <div className="content-container flex-1">{children}</div>

      <Footer />
    </div>
  );
};

export default App;
