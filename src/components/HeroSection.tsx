import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const words = ["UI/UX", "Mobile", "Figma", "Visual"];

export const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const avatarX = useSpring(useTransform(mouseX, [0, window.innerWidth], [-15, 15]), springConfig);
  const avatarY = useSpring(useTransform(mouseY, [0, window.innerHeight], [-15, 15]), springConfig);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl morphing-blob"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl floating-shape-delayed"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-32 right-20 w-4 h-4 bg-primary rounded-full floating-shape"
        style={{ x: avatarX, y: avatarY }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-6 h-6 bg-secondary rounded-lg rotate-45 floating-shape-delayed"
        style={{ x: useTransform(avatarX, (v) => -v * 0.5), y: useTransform(avatarY, (v) => -v * 0.5) }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full floating-shape"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Avatar */}
          <motion.div
            variants={itemVariants}
            style={{ x: avatarX, y: avatarY }}
            className="mb-8 relative inline-block"
          >
            <motion.div
              className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 shadow-glow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-bold gradient-text">
                PP
              </div>
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-2 rounded-full shadow-lg"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={16} />
            </motion.div>
          </motion.div>

          {/* Animated Headline */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-foreground">I'm Priyanka — </span>
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="gradient-text inline-block"
              >
                {words[currentWord]}
              </motion.span>
              <br />
              <span className="text-foreground">Designer</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Designing user-friendly fintech and home-service mobile experiences
            with thoughtful user flows, clear visuals, and Figma prototypes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-glow overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%]"
                animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--muted))" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full glass-card font-semibold text-lg border-2 border-border hover:border-primary transition-colors duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};
