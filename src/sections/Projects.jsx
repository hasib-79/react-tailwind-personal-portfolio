import { Github } from "iconoir-react"
import { ArrowUpRight } from "lucide-react"
import AnimatedBorderButton from '../components/AnimatedBorderButton'

const Projects = () => {
  const projects = [
    {
      title: "Smart Chat",
      description:
        "A real-time group chat application designed to help users find and summarize important conversations in busy group chats.",
      image: "/projects/project1.png",
      tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
      link: "https://smart-chat-app-yfic.onrender.com/",
      github: "https://github.com/hasib-79/smart-chat-app",
    },
    {
      title: "PlayIt",
      description:
        "A full-stack music streaming application inspired by modern music platforms, with album browsing, audio playback, and dynamic music management.",
      image: "/projects/project2.png",
      tags: ["React", "Node.js", "MongoDB", "Cloudinary"],
      link: "https://playit-zjkc.onrender.com/",
      github: "https://github.com/hasib-79/playit-music-player",
    },
    {
      title: "MyBlog",
      description:
        "A full-stack blogging platform where users can create, edit, update, and manage blog posts through a responsive and intuitive interface.",
      image: "/projects/project3.png",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "https://myblog-zwhd.onrender.com/",
      github: "https://github.com/hasib-79/mern-blog-app",
    },
  ]

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-dalay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-dalay-200">
            A collection of web applications I've built to solve real problems, explore modern technologies, and turn ideas into working products.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a href={project.github} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton href="https://github.com/hasib-79?tab=repositories">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  )
}

export default Projects