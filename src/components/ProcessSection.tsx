import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BriefcaseBusiness, Smartphone, Landmark, GraduationCap } from "lucide-react";

const processSteps = [
  {
    icon: BriefcaseBusiness,
    title: "Figma Designer",
    description: "Bugbattlers Technology Pvt. Ltd. • Nov 2025",
    color: "bg-coral-100 text-primary",
  },
  {
    icon: Smartphone,
    title: "Fintech Mobile Application",
    description: "Designed loan management, KYC, onboarding, dashboards, EMI calculation, and payment experiences.",
    color: "bg-lavender-100 text-secondary",
  },
  {
    icon: Landmark,
    title: "Home Services Mobile Application",
    description: "Designed service selection, booking, scheduling, payments, provider details, and order tracking.",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    icon: GraduationCap,
    title: "Education & Certification",
    description: "BA, RTM Nagpur University • Higher Secondary, Sarsawti Shishu Vidhya Mandir • UI/UX Design course.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative gradient-bg overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
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
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Experience
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practical product design experience and a strong foundation in UI/UX.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Connecting Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full hidden lg:block">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </div>

          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                className={`relative lg:flex lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px hsl(var(--primary) / 0.15)"
                  }}
                  className={`glass-card p-6 rounded-2xl lg:w-[45%] ${
                    index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
                  }`}
                >
                  <motion.div
                    className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring" }}
                  >
                    <step.icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>

                {/* Center Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
                  className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-primary items-center justify-center z-10 shadow-glow"
                >
                  <span className="text-lg font-bold text-primary">{index + 1}</span>
                </motion.div>

                {/* Mobile Step Number */}
                <div className="lg:hidden absolute -left-2 top-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-glow">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
