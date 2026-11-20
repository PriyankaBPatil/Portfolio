import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skills = [
  { name: "UI/Visual Design", level: 92, color: "from-primary to-coral-300" },
  { name: "Interaction Design", level: 90, color: "from-secondary to-lavender-300" },
  { name: "Prototyping", level: 94, color: "from-accent to-primary" },
  { name: "Responsive Design", level: 88, color: "from-coral-400 to-secondary" },
  { name: "Wireframing", level: 90, color: "from-lavender-400 to-accent" },
  { name: "Video Editing", level: 78, color: "from-primary to-secondary" },
  { name: "Digital Marketing", level: 86, color: "from-secondary to-primary" },
  { name: "Meta Ads", level: 84, color: "from-primary to-accent" },
  { name: "Google Ads", level: 82, color: "from-accent to-secondary" },
  { name: "Print & Marketing Design", level: 90, color: "from-coral-400 to-lavender-300" },
  { name: "AI Video Creation", level: 88, color: "from-secondary to-accent" },
];

const tools = [
  { name: "Figma", icon: "🎨", description: "UI design & prototyping" },
  { name: "Photoshop", icon: "🖼️", description: "Image editing & graphics" },
  { name: "Illustrator", icon: "✏️", description: "Vector & brand graphics" },
  { name: "Canva", icon: "✨", description: "Presentation & social graphics" },
  { name: "HTML & CSS", icon: "</>", description: "Responsive web fundamentals" },
  { name: "JavaScript", icon: "JS", description: "Interactive web experiences" },
  { name: "React", icon: "⚛", description: "Component-based interfaces" },
  { name: "Video Editing", icon: "🎬", description: "Visual storytelling" },
  { name: "Meta Ads", icon: "∞", description: "Campaign setup & creatives" },
  { name: "Google Ads", icon: "G", description: "Search campaign creatives" },
  { name: "Social Posts", icon: "📱", description: "Engaging digital campaigns" },
  { name: "Brochures", icon: "📖", description: "Informative brand materials" },
  { name: "Flyers", icon: "📣", description: "Promotional print designs" },
  { name: "Visiting Cards", icon: "🪪", description: "Professional brand cards" },
  { name: "AI Video Creator", icon: "🎥", description: "AI-generated video content" },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <section id="skills" className="py-32 relative overflow-hidden gradient-bg" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground font-semibold text-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Skills & Tools
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text">expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A blend of design skills and industry-leading tools
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Skills with Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8">Core Skills</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <motion.span
                    className="text-muted-foreground font-semibold"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 + index * 0.2 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8">Tools I Use</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.08, type: "spring" }}
                  onHoverStart={() => setHoveredTool(tool.name)}
                  onHoverEnd={() => setHoveredTool(null)}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 15px 30px hsl(var(--primary) / 0.15)"
                  }}
                  className="glass-card p-5 rounded-2xl cursor-pointer relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="relative z-10">
                    <motion.span
                      className="text-3xl block mb-2"
                      animate={hoveredTool === tool.name ? { 
                        rotate: [0, -10, 10, -10, 0],
                        scale: [1, 1.2, 1]
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {tool.icon}
                    </motion.span>
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      {tool.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {tool.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
