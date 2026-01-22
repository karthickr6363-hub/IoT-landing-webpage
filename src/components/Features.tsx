import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Activity, 
  Cloud, 
  Bell, 
  Shield, 
  Smartphone, 
  Cpu,
  BarChart3,
  Wifi
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description: "Track device health, performance metrics, and status updates in milliseconds.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Cloud,
    title: "Cloud Dashboard",
    description: "Access your entire IoT ecosystem from anywhere with our intuitive web interface.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Bell,
    title: "AI-Powered Alerts",
    description: "Intelligent notifications predict failures before they impact operations.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "End-to-end encryption with zero-trust architecture protects your data.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Smartphone,
    title: "Remote Control",
    description: "Manage and configure devices remotely with secure mobile access.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Process data at the edge for faster response times and reduced latency.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights with ML-powered analytics and customizable reports.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Wifi,
    title: "Universal Connectivity",
    description: "Support for WiFi, LoRa, Zigbee, and cellular protocols out of the box.",
    color: "from-amber-500 to-orange-500",
  },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Features</span>
          <h2 className="section-title mt-4">
            Intelligent Features for <span className="gradient-text">Smart Operations</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our platform combines cutting-edge technology with intuitive design to deliver 
            a seamless IoT management experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 rounded-2xl group cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-0.5 mb-5`}>
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 rounded-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
