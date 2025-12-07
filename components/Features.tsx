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
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast Processing",
    description:
      "Our optimized Java-based engine processes terabytes of data in seconds with distributed computing.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Developer-Friendly API",
    description:
      "RESTful API with comprehensive documentation, SDKs for Java, Python, JavaScript, and more.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Built-in algorithms for NDVI, change detection, land classification, and custom analysis pipelines.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "99.9% SLA, SOC 2 certified, data encryption at rest and in transit, GDPR compliant.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: DollarSign,
    title: "Flexible Pricing",
    description:
      "Pay-as-you-go or monthly subscriptions. Free tier with 1000 API calls/month to get started.",
    gradient: "from-yellow-500 to-orange-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-900/10 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built for developers, trusted by enterprises. Everything you need to
            integrate satellite data.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Glow Effect on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
              />

              <div className="relative z-10">
                <div
                  className={`inline-flex p-3 bg-gradient-to-br ${feature.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
