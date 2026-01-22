import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechFlow Industries",
    avatar: "SC",
    content: "NexusIoT transformed our manufacturing operations. We reduced downtime by 40% and gained complete visibility into our production line.",
    metrics: "40% less downtime",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "VP Operations, GreenField Agriculture",
    avatar: "MR",
    content: "The precision farming capabilities are remarkable. Our water usage decreased by 35% while crop yields increased significantly.",
    metrics: "35% water savings",
    rating: 5,
  },
  {
    name: "Dr. Emily Watson",
    role: "Director of Innovation, HealthPlus",
    avatar: "EW",
    content: "Patient monitoring has never been easier. The real-time alerts and data accuracy have improved our response times dramatically.",
    metrics: "60% faster response",
    rating: 5,
  },
];

const companyLogos = [
  "TechFlow",
  "GreenField",
  "HealthPlus",
  "SmartBuild",
  "LogiTrack",
  "EnergySmart",
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="section-title mt-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-6 rounded-2xl relative group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>

              {/* Metrics Badge */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-sm font-semibold text-primary">{testimonial.metrics}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">Powering innovation at leading companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {companyLogos.map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-pointer font-display"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
