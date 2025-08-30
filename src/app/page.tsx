import { siteConfig } from '@/config/site'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {siteConfig.title}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              {siteConfig.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                View My Work
              </button>
              <button className="px-8 py-4 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick About */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building Digital Experiences
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm passionate about creating modern, responsive web applications that solve real-world problems. 
              With expertise in React, Next.js, and TypeScript, I bring ideas to life through clean code and thoughtful design.
            </p>
            <button className="text-primary hover:text-primary/80 font-medium">
              Learn more about me →
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Here are some of my recent works
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Project Card Placeholders */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                <p className="text-muted-foreground mb-4">
                  A brief description of this amazing project and what it does.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'TypeScript', 'Tailwind'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground text-sm rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="text-sm text-primary hover:text-primary/80">
                    View Project
                  </button>
                  <button className="text-sm text-primary hover:text-primary/80">
                    GitHub
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always interested in new opportunities and exciting projects.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}