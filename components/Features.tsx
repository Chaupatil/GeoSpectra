"use client";

import {
  Satellite,
  Zap,
  Code,
  BarChart3,
  Shield,
  DollarSign,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Satellite,
    title: "Real-Time Satellite Data",
    description:
      "Access up-to-date satellite imagery from multiple sources including Sentinel, Landsat, and Google Earth Engine.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Processing",
    description:
      "Our optimized Java-based engine processes terabytes of data in seconds with distributed computing.",
  },
  {
    icon: Code,
    title: "Developer-Friendly API",
    description:
      "RESTful API with comprehensive documentation, SDKs for Java, Python, JavaScript, and more.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Built-in algorithms for NDVI, change detection, land classification, and custom analysis pipelines.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "99.9% SLA, SOC 2 certified, data encryption at rest and in transit, GDPR compliant.",
  },
  {
    icon: DollarSign,
    title: "Flexible Pricing",
    description:
      "Pay-as-you-go or monthly subscriptions. Free tier with 1000 API calls/month to get started.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for developers, trusted by enterprises. Everything you need to
            integrate satellite data.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-slate-50 rounded-2xl hover:bg-cyan-50 hover:shadow-xl transition-all duration-300"
            >
              <feature.icon className="h-12 w-12 text-cyan-500 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
