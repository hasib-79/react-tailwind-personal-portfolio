import {
  ChevronLeft,
  ChevronRight,
  MessageSquareText,
  Music2,
  FilePenLine,
  Blocks,
} from "lucide-react"
import { useState } from "react";

const Highlights = () => {
  const [activeIdx, setactiveIdx] = useState(0);

  const next = () => {
    setactiveIdx((prev) => (prev + 1) % problems.length);
  }

  const previous = () => {
    setactiveIdx((prev) => (prev - 1 + problems.length) % problems.length);
  }

  const problems = [
    {
      number: "01",
      icon: MessageSquareText,
      category: "Communication",
      title: "Important messages shouldn't get buried in busy group chats.",
      description:
        "Group conversations can move quickly, making it difficult to find messages from people who actually matter. I explored this problem by building Smart Chat with important-user filtering and real-time messaging.",
      project: "Smart Chat",
    },
    {
      number: "02",
      icon: Music2,
      category: "Content & Media",
      title: "A growing music library should be easy to explore and manage.",
      description:
        "As music collections grow, browsing albums, finding tracks, and keeping content organized becomes increasingly important. PlayIt explores this through a full-stack music streaming experience.",
      project: "PlayIt",
    },
    {
      number: "03",
      icon: FilePenLine,
      category: "Content Management",
      title: "Publishing content shouldn't require wrestling with a complicated interface.",
      description:
        "Creating and maintaining content involves more than displaying text. MyBlog explores a straightforward workflow for creating, editing, updating, and managing posts from a single application.",
      project: "MyBlog",
    },
    {
      number: "04",
      icon: Blocks,
      category: "Full-Stack Products",
      title: "An idea is only useful when it can become something people can actually use.",
      description:
        "I enjoy taking an idea beyond a frontend concept and connecting the interface, backend, database, authentication, and application logic into a working product.",
      project: "My Approach",
    },
  ];

  return (
    <section id="highlights" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-200 h-200 bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
        px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            PROBLEMS WORTH SOLVING
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground leading-12 md:leading-16"
          >
            Turning everyday problems{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              into useful software.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Problem Card */}
            <div
              key={problems[activeIdx].number}
              className="glass rounded-3xl p-8 md:p-12 glow-border animate-fade-in animation-delay-200"
            >
              {/* Top Row */}
              <div className="flex items-start justify-between gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    {(() => {
                      const Icon = problems[activeIdx].icon;
                      return <Icon className="w-6 h-6 text-primary" />;
                    })()}
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
                      {problems[activeIdx].category}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Problem worth solving
                    </p>
                  </div>
                </div>

                <span className="text-4xl md:text-5xl font-bold text-primary/10 leading-none">
                  {problems[activeIdx].number}
                </span>
              </div>

              {/* Problem */}
              <div className="max-w-3xl">
                <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
                  {problems[activeIdx].title}
                </h3>

                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {problems[activeIdx].description}
                </p>
              </div>

              {/* Project */}
              <div className="mt-10 pt-6 border-t border-border/60 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Explored through
                </span>

                <span className="px-4 py-2 rounded-full bg-surface border border-border/60 text-sm font-medium text-primary">
                  {problems[activeIdx].project}
                </span>
              </div>
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              onClick={previous}
              aria-label="Previous problem"
              className="w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {problems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setactiveIdx(idx)}
                  aria-label={`Go to problem ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === activeIdx
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next problem"
              className="w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Highlights