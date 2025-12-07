"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  type Bubble = {
    width: number;
    height: number;
    left: string;
    top: string;
    duration: number;
    delay: number;
  };
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  // Generate random bubble data on the client only
  useEffect(() => {
    const data = Array.from({ length: 50 }, () => ({
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setBubbles(data);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((bubble, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: bubble.width,
              height: bubble.height,
              left: bubble.left,
              top: bubble.top,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Satellite Data,
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Simplified
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Access and process Earth observation data through our powerful API.
            Integrate satellite imagery into your applications in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition flex items-center gap-2">
              Get Started Free
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full text-lg font-semibold transition flex items-center gap-2">
              <Play size={20} />
              Watch Demo
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-gray-400">
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm">Active Users</div>
            </div>
            <div className="h-12 w-px bg-gray-600" />
            <div>
              <div className="text-3xl font-bold text-white">50M+</div>
              <div className="text-sm">API Calls/Month</div>
            </div>
            <div className="h-12 w-px bg-gray-600" />
            <div>
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-sm">Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
