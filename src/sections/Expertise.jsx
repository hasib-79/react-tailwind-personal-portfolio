import { Code2, Lightbulb, Rocket, Zap } from "lucide-react"

const Expertise = () => {
  const strengths = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building complete web applications from responsive React interfaces to Node.js and Express APIs backed by MongoDB.",
      animatePing: true
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Breaking down real-world problems into practical solutions and turning ideas into functional applications.",
      animatePing: false
    },
    {
      icon: Zap,
      title: "Real-Time Applications",
      description:
        "Building interactive experiences with real-time communication, application state management, and dynamic updates.",
      animatePing: false
    },
    {
      icon: Rocket,
      title: "Continuous Growth",
      description:
        "Continuously learning new technologies and improving through hands-on development and real-world projects.",
      animatePing: false
    },
  ]

  return (
    <section id="expertise" className="py-32 relative overflow-hidden">
      <div
        className="top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What I Bring
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Turning ideas into
            <span className="font-serif italic font-normal text-white">
              {" "}
              reliable web applications.
            </span>
          </h2>

          <p
            className="mt-6 text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            I focus on building practical, user-focused applications while continuously improving my skills through hands-on development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {strengths.map((item, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {item.animatePing && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                  <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                    <div
                      className={`flex ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"
                        } justify-start`}
                    >
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                    {/* <p className="text-muted-foreground">{exp.company}</p> */}
                    <p className="text-muted-foreground text-sm mt-4">{item.description}</p>
                    {/* <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise