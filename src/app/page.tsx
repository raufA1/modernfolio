import { siteConfig } from '@/config/site'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-950 dark:via-gray-900 dark:to-secondary-950">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              {siteConfig.title}
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              {siteConfig.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
                View My Work
              </button>
              <button className="px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
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
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I'm passionate about creating modern, responsive web applications that solve real-world problems. 
              With expertise in React, Next.js, and TypeScript, I bring ideas to life through clean code and thoughtful design.
            </p>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              Learn more about me →
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Here are some of my recent works
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Project Card Placeholders */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A brief description of this amazing project and what it does.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'TypeScript', 'Tailwind'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="text-sm text-primary-600 hover:text-primary-700">
                    View Project
                  </button>
                  <button className="text-sm text-primary-600 hover:text-primary-700">
                    GitHub
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
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
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I'm always interested in new opportunities and exciting projects.
            </p>
            <button className="px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}