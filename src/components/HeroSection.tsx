import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Next-Gen IoT Platform</span>
            </motion.div>

            <h1 className="section-title mb-6">
              <span className="block">Transform Your</span>
              <span className="gradient-text">Smart Infrastructure</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Harness the power of intelligent connectivity. Monitor, analyze, and control 
              your entire IoT ecosystem from a single unified platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-neon text-primary-foreground inline-flex items-center justify-center gap-2 group"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline-neon inline-flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </motion.a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              {[
                { value: "500K+", label: "Devices Connected" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "50ms", label: "Avg. Latency" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Device Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative animate-float">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl rounded-full" />
              
              {/* Dashboard Preview */}
              <div className="relative glass-card p-4 rounded-3xl">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-muted to-card overflow-hidden">
                  {/* Mock Dashboard UI */}
                  <div className="p-6 h-full flex flex-col">
                    {/* Top bar */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                          <div className="w-4 h-4 rounded bg-primary" />
                        </div>
                        <div className="h-2 w-24 bg-muted-foreground/20 rounded" />
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-destructive/60" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                        <div className="w-3 h-3 rounded-full bg-green-500/60" />
                      </div>
                    </div>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="glass-card p-3 rounded-xl">
                          <div className="h-2 w-12 bg-primary/40 rounded mb-2" />
                          <div className="h-6 w-16 bg-muted-foreground/20 rounded" />
                        </div>
                      ))}
                    </div>
                    
                    {/* Chart Area */}
                    <div className="flex-1 glass-card rounded-xl p-4">
                      <div className="h-full flex items-end gap-2">
                        {[40, 70, 50, 80, 60, 90, 45, 75].map((height, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                            className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t opacity-80"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass-card p-4 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">All Systems</div>
                    <div className="text-xs text-green-400">Online</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-6 glass-card p-4 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Data Sync</div>
                    <div className="text-xs text-primary">Real-time</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
