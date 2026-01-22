import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Radio, Cloud, LayoutDashboard, User } from "lucide-react";

const steps = [
  {
    icon: Cpu,
    title: "Device",
    description: "Smart sensors collect data",
  },
  {
    icon: Radio,
    title: "Gateway",
    description: "Secure data transmission",
  },
  {
    icon: Cloud,
    title: "Cloud",
    description: "Processing & storage",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    description: "Visualization & control",
  },
  {
    icon: User,
    title: "User",
    description: "Actionable insights",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">How It Works</span>
          <h2 className="section-title mt-4">
            Seamless <span className="gradient-text">Data Flow</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From sensor to insight in milliseconds. Our platform ensures your data flows 
            securely and efficiently through every stage.
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="h-full bg-gradient-to-r from-primary via-secondary to-primary origin-left"
            />
            
            {/* Animated data pulse */}
            <motion.div
              initial={{ x: "-10%", opacity: 0 }}
              animate={isInView ? { x: "110%", opacity: [0, 1, 1, 0] } : {}}
              transition={{ duration: 3, delay: 1, repeat: Infinity, repeatDelay: 1 }}
              className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary blur-md"
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 rounded-2xl glass-card flex items-center justify-center mb-6 relative z-10 group"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon className="w-10 h-10 text-primary" />
                  
                  {/* Pulse ring */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="absolute inset-0 rounded-2xl border-2 border-primary/30"
                  />
                </motion.div>

                {/* Step Number */}
                <div className="absolute top-0 right-1/4 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {index + 1}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Data Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 glass-card rounded-2xl p-8"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "< 50ms", label: "End-to-end latency" },
              { value: "256-bit", label: "AES encryption" },
              { value: "10M+", label: "Messages per second" },
              { value: "99.99%", label: "Data delivery rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
