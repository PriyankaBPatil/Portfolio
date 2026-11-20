import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
const projects = [
  {
    id: 1,
    link: "https://www.figma.com/proto/Ju1ApTSYIGz8LowNvYOT75/Untitled?node-id=2315-2698&t=9ZIzTmZ22IZo5FYn-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2315%3A2690&show-proto-sidebar=1",
    title: "Fintech Loan Application",
    category: "Mobile App • Bugbattlers Technology",
    description: "End-to-end loan management and repayment experience covering onboarding, KYC, OTP, EMI calculation, and payments.",
    color: "from-coral-400 to-primary",
    tags: ["Figma", "Onboarding", "KYC", "Payments"]
  },
  {
    id: 2,
    link: "https://www.figma.com/proto/Ju1ApTSYIGz8LowNvYOT75/Untitled?node-id=1518-1300&t=9ZIzTmZ22IZo5FYn-0&scaling=scale-down&content-scaling=fixed&page-id=923%3A1647&starting-point-node-id=1295%3A782",
    title: "Home Services Booking",
    category: "Mobile App • Bugbattlers Technology",
    description: "A mobile-first service booking flow for selection, scheduling, provider details, payment, and order tracking.",
    color: "from-secondary to-lavender-400",
    tags: ["Figma", "Mobile-first", "Booking", "Tracking"],
  },
  {
    id: 3,
    link: "https://www.instagram.com/reel/Dbmd2pWoCjX/?hvrq=MWhyemh3dDc0d3ZucQ==",
    title: "AI Video Creation",
    category: "Creative Video • Instagram Reel",
    description: "AI-assisted video content created for social media, combining motion, visual storytelling, and engaging presentation.",
    color: "from-accent to-primary",
    tags: ["AI Video", "Instagram", "Social Media", "Video Editing"],
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground font-semibold text-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Featured Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of work that showcases my design process and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 30px 60px hsl(var(--primary) / 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Project Image/Preview */}
                <div className={`relative h-64 bg-gradient-to-br ${project.color} overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={hoveredProject === project.id ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Placeholder design elements */}
                    <motion.div
                      className="w-48 h-32 bg-white/20 backdrop-blur-sm rounded-2xl shadow-xl"
                      animate={hoveredProject === project.id ? { 
                        y: -10, 
                        rotate: 3,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                      } : {}}
                      transition={{ type: "spring" }}
                    />
                    <motion.div
                      className="absolute w-40 h-28 bg-white/30 backdrop-blur-sm rounded-2xl shadow-lg"
                      style={{ top: "60%", left: "55%" }}
                      animate={hoveredProject === project.id ? { 
                        y: -5, 
                        rotate: -2,
                        x: 10
                      } : {}}
                      transition={{ type: "spring", delay: 0.05 }}
                    />
                  </motion.div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-foreground/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.a
                      href={project.link}
                      target={project.link.startsWith("http") ? "_blank" : undefined}
                      rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={`Open ${project.title}`}
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      animate={hoveredProject === project.id ? { scale: 1 } : { scale: 0 }}
                      className="w-16 h-16 rounded-full bg-background flex items-center justify-center shadow-xl"
                    >
                      <ArrowUpRight className="w-6 h-6 text-foreground" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <motion.span
                    className="text-sm text-muted-foreground font-medium"
                    animate={hoveredProject === project.id ? { color: "hsl(var(--primary))" } : {}}
                  >
                    {project.category}
                  </motion.span>
                  <h3 className="text-2xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
