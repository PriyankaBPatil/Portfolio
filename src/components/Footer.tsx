import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const socialLinks = [
  { name: "Email", href: "mailto:priyankababaraopatil1998@gmail.com" },
  { name: "Phone", href: "tel:+918767455876" },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.a
            href="#"
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Priyanka.
          </motion.a>

          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3, color: "hsl(var(--primary))" }}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <motion.p
            className="flex items-center gap-2 text-muted-foreground text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Designed with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </motion.span>
            by Priyanka
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
