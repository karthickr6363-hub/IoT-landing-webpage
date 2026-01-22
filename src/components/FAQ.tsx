import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can I get started with NexusIoT?",
    answer: "You can start connecting devices within minutes. Our onboarding wizard guides you through setup, and most customers have their first devices online within an hour. We also offer white-glove onboarding for enterprise customers.",
  },
  {
    question: "What protocols and devices are supported?",
    answer: "NexusIoT supports a wide range of protocols including MQTT, HTTP/REST, CoAP, WebSocket, LoRaWAN, and Zigbee. We have pre-built integrations for thousands of popular IoT devices and sensors, plus an SDK for custom hardware.",
  },
  {
    question: "Is my data secure on NexusIoT?",
    answer: "Absolutely. We use 256-bit AES encryption for all data in transit and at rest, implement zero-trust security architecture, and maintain SOC 2 Type II, ISO 27001, GDPR, and HIPAA compliance. Your data is stored in geographically distributed, redundant data centers.",
  },
  {
    question: "Can I integrate NexusIoT with my existing systems?",
    answer: "Yes! NexusIoT offers RESTful APIs, webhooks, and native integrations with popular platforms like AWS, Azure, Google Cloud, Salesforce, SAP, and many more. Our professional services team can also build custom integrations.",
  },
  {
    question: "What happens if I exceed my device limit?",
    answer: "We'll notify you when you're approaching your limit and offer seamless upgrade options. You won't experience any service interruption - we'll work with you to find the right plan as your needs grow.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! All paid plans come with a 14-day free trial with full access to features. No credit card required to start. We also offer an extended trial for enterprise customers with custom evaluation requirements.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">FAQ</span>
          <h2 className="section-title mt-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full glass-card p-5 rounded-xl flex items-center justify-between text-left group"
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-primary shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 py-4 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
