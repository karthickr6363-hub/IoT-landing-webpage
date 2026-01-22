import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Zap, Clock, LineChart, Shield, Cloud } from "lucide-react";

const problems = [
  { icon: AlertTriangle, text: "Manual monitoring leads to costly downtime" },
  { icon: Clock, text: "Delayed response to critical system failures" },
  { icon: LineChart, text: "No visibility into device performance metrics" },
];

const solutions = [
  { icon: Zap, text: "Real-time automated monitoring & alerts" },
  { icon: Shield, text: "Predictive maintenance prevents failures" },
  { icon: Cloud, text: "Cloud dashboard with complete visibility" },
];

const ProblemSolution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why NexusIoT</span>
          <h2 className="section-title mt-4">
            From Chaos to <span className="gradient-text">Control</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-destructive/80 mb-8">The Problem</h3>
            {problems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-5 rounded-xl flex items-center gap-4 border-l-4 border-destructive/50"
              >
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-destructive/70" />
                </div>
                <p className="text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary mb-8">The Solution</h3>
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card p-5 rounded-xl flex items-center gap-4 border-l-4 border-primary/50 group hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Connecting line animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-destructive/50 via-muted to-primary/50"
        />
      </div>
    </section>
  );
};

export default ProblemSolution;
