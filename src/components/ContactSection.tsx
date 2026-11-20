import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative gradient-bg overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/4 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Get in Touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's create something <span className="gradient-text">amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
            Let's create something users will love 
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.span>
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 text-center"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Let's talk about your project</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a clear vision or just a rough idea, I'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <motion.a
                href="mailto:priyankababaraopatil1998@gmail.com"
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex min-w-0 items-center gap-4 glass-card p-4 rounded-2xl group cursor-pointer text-left"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-muted-foreground">Email me at</p>
                  <p className="break-all text-sm sm:text-base font-semibold leading-snug group-hover:text-primary transition-colors">
                    priyankababaraopatil1998@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex items-center gap-4 glass-card p-4 rounded-2xl text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Based in</p>
                  <p className="font-semibold">Deccan, Pune, India</p>
                </div>
              </motion.div>

              <motion.a
                href="tel:+918767455876"
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex items-center gap-4 glass-card p-4 rounded-2xl group cursor-pointer text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call me at</p>
                  <p className="font-semibold group-hover:text-primary transition-colors">+91 8767455876</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
