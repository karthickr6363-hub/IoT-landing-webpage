import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Home, 
  Factory, 
  Heart, 
  Leaf, 
  Truck,
  Building2,
  Zap,
  ShoppingCart
} from "lucide-react";

const industries = [
  {
    icon: Home,
    title: "Smart Home",
    description: "Transform living spaces with intelligent automation, energy management, and security systems.",
    stats: "40% energy savings",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Optimize production lines with predictive maintenance and real-time quality control.",
    stats: "35% less downtime",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Enable remote patient monitoring, asset tracking, and environmental controls.",
    stats: "24/7 monitoring",
  },
  {
    icon: Leaf,
    title: "Agriculture",
    description: "Precision farming with soil sensors, weather monitoring, and irrigation automation.",
    stats: "30% water savings",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Track shipments, optimize routes, and monitor cold chain with real-time visibility.",
    stats: "25% faster delivery",
  },
  {
    icon: Building2,
    title: "Smart Buildings",
    description: "Intelligent HVAC, lighting, and occupancy management for commercial spaces.",
    stats: "50% energy reduction",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description: "Smart grid management, consumption monitoring, and renewable integration.",
    stats: "Real-time analytics",
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    description: "Inventory tracking, customer analytics, and automated checkout solutions.",
    stats: "20% inventory accuracy",
  },
];

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} id="industries" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Industries</span>
          <h2 className="section-title mt-4">
            Powering <span className="gradient-text">Every Sector</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our versatile platform adapts to the unique needs of diverse industries, 
            delivering measurable results across all applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="glass-card rounded-2xl p-6 cursor-pointer group relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
                className="absolute inset-0 bg-gradient-to-br from-primary to-secondary"
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>

                {/* Description - shows on hover */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: hoveredIndex === index ? "auto" : 0,
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-muted-foreground mb-3">
                    {industry.description}
                  </p>
                </motion.div>

                {/* Stats Badge */}
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-xs font-medium text-primary">{industry.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
