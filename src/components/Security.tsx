import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, Server, FileCheck, CheckCircle } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description: "256-bit AES encryption protects all data in transit and at rest.",
  },
  {
    icon: Lock,
    title: "Zero-Trust Architecture",
    description: "Every request is verified, regardless of source or destination.",
  },
  {
    icon: Server,
    title: "Secure Cloud Infrastructure",
    description: "SOC 2 Type II certified data centers with 99.99% uptime SLA.",
  },
  {
    icon: FileCheck,
    title: "Compliance Ready",
    description: "GDPR, HIPAA, and ISO 27001 compliant out of the box.",
  },
];

const certifications = [
  "SOC 2 Type II",
  "ISO 27001",
  "GDPR",
  "HIPAA",
  "PCI DSS",
];

const Security = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Security</span>
            <h2 className="section-title mt-4 mb-6">
              Enterprise-Grade <span className="gradient-text">Security</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Your data security is our top priority. We employ industry-leading 
              security practices to ensure your IoT infrastructure remains protected 
              against evolving threats.
            </p>

            <div className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <p className="text-sm text-muted-foreground mb-4">Trusted certifications:</p>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Central Shield */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-dashed border-primary/30" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-dashed border-secondary/30" />
              </motion.div>

              <div className="aspect-square flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-3xl glass-card flex items-center justify-center animate-pulse-glow"
                >
                  <Shield className="w-16 h-16 md:w-20 md:h-20 text-primary" />
                </motion.div>

                {/* Orbiting Elements */}
                {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    style={{
                      position: "absolute",
                      transform: `rotate(${angle}deg) translateY(-120px) rotate(-${angle}deg)`,
                    }}
                    className="w-10 h-10 rounded-xl glass-card flex items-center justify-center"
                  >
                    <Lock className="w-5 h-5 text-primary/70" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Security;
