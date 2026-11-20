import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-card py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Priyanka
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="relative text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
              whileHover={{ y: -2 }}
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-glow transition-all duration-300"
          >
            Let's Talk
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-xl glass-card"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden glass-card mx-4 mt-2 rounded-2xl"
      >
        <div className="p-6 flex flex-col gap-4">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.05 * index }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-center"
          >
            Let's Talk
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};
