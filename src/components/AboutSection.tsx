import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Lightbulb, UserRound, Zap } from "lucide-react";

const highlights = [
  {
    icon: Palette,
    title: "Visual Design",
    description: "Creating stunning visuals that captivate and engage users",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: UserRound,
    title: "User-Centric Design",
    description: "Creating clear, intuitive experiences for real user needs",
  },
  {
    icon: Zap,
    title: "Prototyping",
    description: "Bringing ideas to life with interactive prototypes",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as const },
    },
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
              whileHover={{ scale: 1.05 }}
            >
              About Me
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Designing with <span className="gradient-text">purpose</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              UI/UX and graphic designer focused on mobile-first, user-centered digital products.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                I create end-to-end user flows for onboarding, dashboards, booking, payments,
                and transaction experiences. My work focuses on making complex journeys simple
                and easy to navigate.
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                I combine wireframing, visual design, and interactive Figma prototyping to
                bring product ideas to life. I value clean layouts, consistent components,
                accessibility, and smooth navigation.
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                I am fluent in English, Hindi, and Marathi, and trained in UI/UX design.
              </motion.p>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-6 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {[
                  { value: "2", label: "Product Domains" },
                  { value: "Figma", label: "Primary Tool" },
                  { value: "3", label: "Languages" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.span
                      className="block text-4xl font-bold gradient-text"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                    >
                      {stat.value}
                    </motion.span>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Highlight Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5, type: "spring" }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    boxShadow: "0 20px 40px hsl(var(--primary) / 0.15)" 
                  }}
                  className="glass-card p-6 rounded-2xl cursor-pointer group"
                >
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
