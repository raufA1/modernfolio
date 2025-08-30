export const siteConfig = {
  name: "Your Name",
  title: "Frontend Developer",
  description: "Building amazing web experiences",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  
  nav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" }
  ],
  
  social: {
    github: "",
    linkedin: "",
    twitter: "",
    email: ""
  },
  
  features: {
    darkMode: true,
    animations: true,
    downloadCV: true
  }
};