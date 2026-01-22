import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small projects and prototypes",
    price: { monthly: 49, annual: 39 },
    features: [
      "Up to 100 devices",
      "Basic monitoring",
      "Email alerts",
      "7-day data retention",
      "Community support",
      "API access",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For growing businesses with advanced needs",
    price: { monthly: 149, annual: 119 },
    features: [
      "Up to 1,000 devices",
      "Advanced analytics",
      "SMS & email alerts",
      "30-day data retention",
      "Priority support",
      "Custom dashboards",
      "Edge computing",
      "SSO integration",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    price: { monthly: null, annual: null },
    features: [
      "Unlimited devices",
      "AI-powered insights",
      "Custom integrations",
      "Unlimited data retention",
      "24/7 dedicated support",
      "On-premise deployment",
      "Custom SLAs",
      "Compliance packages",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section ref={ref} id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Pricing</span>
          <h2 className="section-title mt-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our core features 
            with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 rounded-full bg-muted transition-colors"
            >
              <motion.div
                animate={{ x: isAnnual ? 28 : 4 }}
                className="absolute top-1 w-5 h-5 rounded-full bg-primary"
              />
            </button>
            <span className={`text-sm ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
              Annual <span className="text-primary">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl p-6 ${
                plan.highlighted
                  ? "glass-card border-2 border-primary/50"
                  : "glass-card"
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-semibold">
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {plan.price.monthly ? (
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-muted-foreground mb-1">/month</span>
                  </div>
                ) : (
                  <div className="text-4xl font-bold">Custom</div>
                )}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.highlighted
                    ? "btn-neon text-primary-foreground"
                    : "btn-outline-neon"
                }`}
              >
                {plan.price.monthly ? "Start Free Trial" : "Contact Sales"}
              </motion.button>

              {/* Features */}
              <div className="mt-6 pt-6 border-t border-border">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
