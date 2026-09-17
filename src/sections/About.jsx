import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description:
        "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to bring ideas to life.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Staying ahead with the latest technologies and best practices.",
    },
  ]

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building ideas into
              <span className="font-serif italic font-normal text-white">
                {" "}
                real-world web experiences.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animate-daly-200">
              <p>
                I'm a passionate full-stack web developer who enjoys turning ideas into
                functional, user-friendly web applications. I started my journey by
                learning how the web works and gradually grew into building complete
                applications from frontend to backend.
              </p>
              <p>
                I work primarily with React, Node.js, Express, and MongoDB, with a strong
                focus on creating clean interfaces, reliable functionality, and
                responsive user experiences. I enjoy taking a problem, breaking it down,
                and turning it into something people can actually use.
              </p>
              <p>
                I'm constantly learning, experimenting with new technologies, and
                improving through hands-on projects. I'm now looking forward to bringing
                my skills into a professional environment where I can contribute,
                collaborate, and continue growing as a developer.
              </p>
            </div>

            <div className="glass rounded-4xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I believe the best way to grow as a developer is to keep building,
                keep learning, and turn every challenge into an opportunity to improve."
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About